import PageLayout from "../components/PageLayout";
import Location from "../components/Location";
import FAQ from "../components/FAQ";

export default function ContactPage() {
  return (
    <PageLayout
      badge="Get In Touch"
      title="Contact Us"
      subtitle="Reach out to us for bookings, inquiries, or any special requests. We are here to help make your event a success."
    >
      <Location />
      <FAQ />
    </PageLayout>
  );
}
