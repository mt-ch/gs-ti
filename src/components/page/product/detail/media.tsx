import React, { useState } from "react";
import Image from "next/image";
import { Media } from "@/types/media";
import classNames from "@/utils/useClassNames";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export interface Props {
  media: Media[];
}

export const ProductDetailMedia: React.FC<Props> = ({ media }) => {
  const [imageList, setImageList] = useState(media);
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = (index: number) => {
    const clickedImage = imageList[index];
    const currentFirstImage = imageList[0];

    if (clickedImage !== currentFirstImage) {
      const updatedImageList = [clickedImage, ...imageList.slice(1).filter((image) => image !== clickedImage), currentFirstImage];
      setImageList(updatedImageList);
    }
  };

  return (
    <div className="h-full relative">
      <h2 className="sr-only">Images</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-6 h-full relative overflow-hidden">
        {imageList.map((image, index) => (
          <div
            key={image.id}
            className={classNames(index === 0 ? "col-span-4" : "hidden lg:block cursor-pointer", "aspect-[1692/2018] relative bg-gray-200")}
            onClick={() => changeImage(index)}
          >
            <Image src={image.src} alt={image.alt as string} fill className="gs-img -lazyloaded" loading="lazy" />
          </div>
        ))}
      </div>
      {/* Mobile controls */}
      <div className="container absolute inset-x-0 bottom-8 flex w-full justify-between items-center lg:hidden">
        <button type="button" className="flex items-center justify-center p-2 bg-black/70 rounded-full text-white" aria-label="Previous image">
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button type="button" className="flex items-center justify-center p-2 bg-black/70 rounded-full text-white" aria-label="Next image">
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ProductDetailMedia;
