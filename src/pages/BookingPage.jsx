import PageLayout from "../components/PageLayout";
import BookingForm from "../components/BookingForm";

export default function BookingPage() {
  return (
    <PageLayout
      badge="Reserve Your Date"
      title="Book Now"
      subtitle="Ready to host an unforgettable event? Fill out the details below and we will get back to you with a customized plan."
    >
      <BookingForm />
    </PageLayout>
  );
}
