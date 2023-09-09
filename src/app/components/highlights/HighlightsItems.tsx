import Image from 'next/image';
import React from 'react';

interface HighlightsItemsProps {
  name: string;
  description: string;
  src: string;
}

function HighlightsItems({
  name, description, src,
}: HighlightsItemsProps) {
  return (
    <div className="
          flex
          h-fit
          gap-x-[30px]
          max-sm:flex-col
          max-sm:items-center
          max-sm:text-center
      "
    >
      <div className="flex">
        <Image
          width={256}
          height={192}
          alt="highlight-image"
          src={`/assets/homepage/${src}-desktop-tablet@2x.jpg`}
          className="h-[96px] w-[160px] object-cover max-sm:hidden"
        />

        <Image
          width={654}
          height={490}
          alt="highlight-responsive-image"
          src={`/assets/homepage/${src}-mobile@2x.jpg`}
          className="h-[245px] w-[327px] object-cover sm:hidden"
        />
        <span className="mt-[18px] h-[1px] w-[32px] bg-beaver max-sm:hidden" />
      </div>

      <div className="max-sm:mt-9">
        <h3 className="text-xl">
          {name}
        </h3>
        <div className=" mt-[6px] text-base mobile:whitespace-pre-line">
          {description}
        </div>
      </div>
    </div>
  );
}

export default HighlightsItems;
