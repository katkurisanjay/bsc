import PageLayout from "../components/PageLayout";
import Testimonials from "../components/Testimonials";

export default function TestimonialsPage() {
  return (
    <PageLayout
      badge="Client Stories"
      title="Testimonials"
      subtitle="Hear what our clients have to say about our premium catering services, food quality, and professional staff."
    >
      <Testimonials />
    </PageLayout>
  );
}
