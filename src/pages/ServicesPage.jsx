import PageLayout from "../components/PageLayout";
import Services from "../components/Services";

export default function ServicesPage() {
  return (
    <PageLayout
      badge="What We Offer"
      title="Our Services"
      subtitle="Premium vegetarian catering for every occasion — weddings, corporate events, birthdays, and intimate gatherings across all of Telangana"
    >
      <Services />
    </PageLayout>
  );
}
