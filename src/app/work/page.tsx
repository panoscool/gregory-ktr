import { MasonryLayout } from "@/components/masonry/masonry-layout";
import { getAlbums } from "@/lib/album";

export default function WorkPage() {
  const albums = getAlbums();

  return (
    <div>
      <MasonryLayout hasLink data={albums} />
    </div>
  );
}
