import Header from "@/components/Header";
import CategoryPlaceholder from "@/components/services/detail/CategoryPlaceholder";

export default function GlobalBusinessSupportPage() {
  return (
    <main className="page-shell">
      <Header />

      <CategoryPlaceholder
        eyebrow="Global Business Support"
        title="Global Business Support"
        description="Business setup, workforce support, and operational assistance for companies entering and growing in the U.S."
      />
    </main>
  );
}
