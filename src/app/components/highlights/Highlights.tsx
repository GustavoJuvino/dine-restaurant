import React from 'react';
import Image from 'next/image';
import { PatternDivide } from '../../../../public/assets/svgs';

function Highlights() {
  return (
    <section className="flex h-[761px] w-full items-center justify-center bg-cod-gray">
      <section className="flex h-auto w-[1110px] justify-between text-white">
        <div className="w-[445px]">
          <PatternDivide />
          <h2 className="mb-[27px] mt-[55px] text-5xl">A few highlights from our menu</h2>
          <p className="text-body-2">
            We cater for all dietary requirements, but here’s a
            glimpse at some of our diner’s favourites. Our menu is
            revamped every season.
          </p>
        </div>

        <div className="relative flex h-fit gap-x-[30px]">
          <div className="flex">
            <Image
              width={256}
              height={192}
              alt="highlight-image"
              src="/assets/homepage/salmon-desktop-tablet@2x.jpg"
              className="h-[96px] w-[160px] object-cover"
            />
            <span className="mt-[18px] h-[1px] w-[32px] bg-beaver" />
          </div>

          <div>
            <h3 className="text-xl">Seared Salmon Fillet</h3>
            <p className="mt-[6px] text-base">
              Our locally sourced salmon served
              <br />
              with a refreshing buckwheat summer salad.
            </p>
          </div>

          <hr className="absolute bottom-[-24px] h-[1px] w-full bg-white opacity-[15%]" />
        </div>
      </section>
    </section>
  );
}

export default Highlights;
