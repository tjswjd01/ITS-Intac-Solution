/**
 * Email delivery for the contact form. Server only: this file reads the mail
 * password from the server environment and must never be imported by a
 * "use client" file.
 *
 * Mail goes out through the company's own mail server (InMotion Hosting) over
 * SMTP, signed in as an existing mailbox. Settings come from environment
 * variables set in the hosting dashboard, never from the code:
 *
 *   SMTP_HOST           mail server name, for example mail.intacsolution.com
 *   SMTP_PORT           465 (default, SSL) or 587
 *   SMTP_USER           the mailbox that sends, for example a website@ address
 *   SMTP_PASS           that mailbox's password
 *   CONTACT_FROM_EMAIL  optional "From" address; defaults to SMTP_USER
 *
 * Until the first four are set, nothing is sent and the form says so.
 */
import nodemailer from "nodemailer";

import type { OutgoingEmail } from "./submission";

type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
};

function readConfig(): SmtpConfig | null {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;

  const port = Number(process.env.SMTP_PORT?.trim() || 465);
  if (!Number.isInteger(port) || port <= 0 || port > 65535) return null;

  const from = process.env.CONTACT_FROM_EMAIL?.trim() || user;
  if (!from.includes("@")) return null;

  return { host, port, user, pass, from };
}

/** True when the mail settings are present, so the form can deliver. */
export function isDeliveryConfigured(): boolean {
  return readConfig() !== null;
}

export class DeliveryNotConfiguredError extends Error {
  constructor() {
    super("Email delivery is not configured");
    this.name = "DeliveryNotConfiguredError";
  }
}

/**
 * Sends one email. Resolves only when the mail server has accepted the
 * message for the recipient; throws otherwise.
 */
export async function deliver(email: OutgoingEmail): Promise<void> {
  const config = readConfig();
  if (!config) throw new DeliveryNotConfiguredError();

  const transport = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: { user: config.user, pass: config.pass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
    disableFileAccess: true,
    disableUrlAccess: true,
  });

  try {
    const info = await transport.sendMail({
      from: { name: "ITS Website", address: config.from },
      to: email.to,
      replyTo: email.replyTo,
      subject: email.subject,
      text: email.text,
    });

    if (info.rejected.length > 0 || info.accepted.length === 0) {
      throw new Error("Recipient was not accepted by the mail server");
    }
  } finally {
    transport.close();
  }
}
