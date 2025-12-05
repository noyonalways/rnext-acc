import { images } from "@/data/images";
import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold my-6">Image Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {images.map(({ id, src, name }) => (
          <Link key={id} href={`/gallery/${id}`}>
            <Image
              width={200}
              height={200}
              alt={name}
              src={src}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
