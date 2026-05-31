import Header from "@/components/Header";
import CategoryPlaceholder from "@/components/services/detail/CategoryPlaceholder";

export default function WorkforceSolutionsPage() {
  return (
    <main className="page-shell">
      <Header />

      <CategoryPlaceholder
        eyebrow="Workforce Solutions"
        title="Workforce Solutions"
        description="Scalable workforce programs for warehouse, refurbishment, quality assurance, and operational environments."
      />
    </main>
  );
}
