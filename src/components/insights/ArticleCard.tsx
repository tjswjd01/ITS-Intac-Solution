import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { formatDate, insightCategoryLabel, type Article } from "@/content/insights";

/** Cover image, or a quiet tinted panel when the article has none. */
export function ArticleCover({ article, className }: { article: Article; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-[#E8EBED] ${className ?? ""}`}>
      {article.coverImage ? (
        <Image
          src={article.coverImage}
          alt={article.coverAlt}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
      ) : (
        <div aria-hidden className="absolute inset-0 flex items-end p-5">
          <div className="w-full space-y-2">
            <span className="block h-2 w-2/3 rounded-full bg-white/80" />
            <span className="block h-2 w-1/2 rounded-full bg-white/60" />
          </div>
        </div>
      )}
    </div>
  );
}

export function ArticleMeta({ article }: { article: Article }) {
  const parts = [
    article.publishedAt ? formatDate(article.publishedAt) : null,
    article.readMinutes ? `${article.readMinutes} min read` : null,
  ].filter(Boolean);

  return (
    <p className="flex flex-wrap items-center gap-2 text-[13.5px] text-its-slate-ink">
      {article.sample ? (
        <span className="rounded-full border border-dashed border-[#B4BDC8] px-2.5 py-0.5 text-[12px] font-medium">
          Sample
        </span>
      ) : null}
      {parts.length > 0 ? <span>{parts.join(" · ")}</span> : null}
    </p>
  );
}

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-its-line bg-white transition-colors hover:border-[#C9CFD8]">
      <ArticleCover article={article} className="aspect-[16/9]" />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-its-mint-ink">
          {insightCategoryLabel(article.category)}
        </p>
        <h3 className="mt-3 text-[18px] font-semibold leading-[1.3] tracking-[-0.02em] text-its-navy">
          <Link
            href={`/insights/${article.slug}`}
            className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:rounded-2xl focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-its-navy"
          >
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 text-[14.5px] leading-[1.6] text-its-slate-ink">{article.excerpt}</p>
        <div className="mt-auto flex items-center justify-between pt-5">
          <ArticleMeta article={article} />
          <ArrowRight
            className="h-4 w-4 text-its-navy transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
            aria-hidden
          />
        </div>
      </div>
    </article>
  );
}
