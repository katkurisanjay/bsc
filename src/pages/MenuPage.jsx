import PageLayout from "../components/PageLayout";
import Menu from "../components/Menu";

export default function MenuPage() {
  return (
    <PageLayout
      badge="Our Culinary Spread"
      title="Our Full Menu"
      subtitle="300+ authentic vegetarian dishes across 29 categories — search, filter & explore."
    >
      <div className="py-12">
        <Menu />
      </div>
    </PageLayout>
  );
}
