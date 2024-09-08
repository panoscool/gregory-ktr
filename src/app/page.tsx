import { getAlbumCoverById } from "@/lib/album";
import Image from "next/image";

export default function HomePage() {
  const album = getAlbumCoverById("album-1");

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center">
        <Image
          src={album?.src ?? ""}
          alt={album?.alt ?? ""}
          loading="lazy"
          style={{
            width: "30%",
            height: "auto",
          }}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
