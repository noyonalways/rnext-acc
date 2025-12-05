import Modal from "@/components/Modal";
import { images } from "@/data/images";
import Image from "next/image";

export default async function PhotoPage({ params }) {
  const resolvedParams = await params;
  const photo = images.find((p) => p.id === resolvedParams.id);

  return (
    <Modal>
      <div className="container mx-auto my-10">
        <div className="w-1/2 mx-auto">
          <div>
            <h1 className="text-center text-3xl font-bold my-4">
              {photo.name}
            </h1>
          </div>
          <Image
            alt={photo.name}
            src={photo.src}
            width={500}
            height={500}
            className="w-full object-cover aspect-square "
          />
        </div>
      </div>
    </Modal>
  );
}
