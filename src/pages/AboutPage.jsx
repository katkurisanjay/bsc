import PageLayout from "../components/PageLayout";
import About from "../components/About";

export default function AboutPage() {
  return (
    <PageLayout
      badge="Our Story"
      title="About Us"
      subtitle="A legacy of authentic flavors, passionate chefs, and unforgettable celebrations across Telangana"
    >
      <About />
    </PageLayout>
  );
}
