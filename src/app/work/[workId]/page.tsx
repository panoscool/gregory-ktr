import { MasonryLayout } from "@/components/masonry/masonry-layout";
import { getAlbumById } from "@/lib/album";

export default function Page({ params }: { params: { workId: string } }) {
  const photos =
    getAlbumById(params.workId)?.photos.map((item) => ({ ...item, id: params.workId })) ?? [];

  return (
    <div>
      <MasonryLayout hasLink={false} data={photos} />
    </div>
  );
}
