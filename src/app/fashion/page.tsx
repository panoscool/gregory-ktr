import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getAlbums } from "@/lib/album";
import Image from "next/image";

export default function WorkPage() {
  const albums = getAlbums();

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-1">
        {albums.map((album) => (
          <CarouselItem key={album.id} className="pl-0 md:basis-1/2 lg:basis-1/3">
            <Image
              src={album.src}
              alt={album.name}
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={500}
              height={300}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-opacity-50 bg-black p-2 rounded-full text-white" />
      <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-opacity-50 bg-black p-2 rounded-full text-white" />
    </Carousel>
  );
}
