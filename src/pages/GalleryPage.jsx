import PageLayout from "../components/PageLayout";
import Gallery from "../components/Gallery";

export default function GalleryPage() {
  return (
    <PageLayout
      badge="Moments & Memories"
      title="Our Gallery"
      subtitle="Beautiful moments captured from 500+ events — weddings, corporate gatherings, birthday parties and more across Telangana"
    >
      <Gallery />
    </PageLayout>
  );
}
