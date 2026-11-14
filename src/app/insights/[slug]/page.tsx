import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import Header from "@/components/Header";
import { ArticleCover, ArticleMeta } from "@/components/insights/ArticleCard";
import { Eyebrow, textLinkClassName } from "@/components/site/primitives";
import { articles, getArticle, insightCategoryLabel } from "@/content/insights";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: { type: "article", title: article.title, description: article.excerpt },
    robots: article.sample ? { index: false, follow: false } : undefined,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <main className="page-shell bg-white">
      <Header />

      <article className="pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="layout-container">
          <div className="mx-auto max-w-[760px]">
            <Link href="/insights" className={`${textLinkClassName} no-underline`}>
              <ArrowLeft className="h-4 w-4" aria-hidden />
              All Insights
            </Link>

            <Eyebrow className="mt-8">{insightCategoryLabel(article.category)}</Eyebrow>
            <h1 className="mt-4 text-[clamp(1.9rem,3.8vw,2.9rem)] font-semibold leading-[1.12] tracking-[-0.035em] text-its-navy">
              {article.title}
            </h1>
            <p className="mt-4 text-[18px] leading-[1.65] text-its-slate-ink">{article.excerpt}</p>
            <div className="mt-5">
              <ArticleMeta article={article} />
            </div>

            <ArticleCover article={article} className="mt-8 aspect-[16/9] rounded-[20px]" />

            <div className="mt-10 space-y-6 text-[17px] leading-[1.8] text-[#333F50]">
              {article.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {article.tags.length > 0 ? (
              <ul className="mt-10 flex flex-wrap gap-2" aria-label="Topics">
                {article.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-[#E8EBED] px-3 py-1 text-[13px] font-medium text-its-navy"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}

            {article.sources.length > 0 ? (
              <div className="mt-10 border-t border-its-line pt-8">
                <h2 className="text-[1.1rem] font-semibold text-its-navy">Sources</h2>
                <ul className="mt-3 space-y-2 text-[15px]">
                  {article.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} className={textLinkClassName} rel="noopener noreferrer" target="_blank">
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </article>
    </main>
  );
}
