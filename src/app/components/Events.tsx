import Image from 'next/image';
import React from 'react';
import Button from './Button';
import { PatternLines } from '../../../public/assets/svgs';

const eventsContainers = ['family gathering', 'special events', 'social events'];

function Events() {
  return (
    <section className="mt-20 flex h-auto w-full items-center justify-center sm:mt-[82px] md:mt-[122px]">
      <section className="
          z-50
          flex
          w-full
          justify-center
          max-md:flex-col
          max-md:items-center
          max-sm:px-6
          max-md:sm:px-10
          md:justify-between
          md:gap-x-6
          max-xl:md:px-6
          xl:w-[1110px]
        "
      >
        <div className="relative z-20">
          <PatternLines
            className="
              absolute
              left-[-3.6rem]
              top-[-1rem]
              max-sm:hidden
              md:left-[-2.5rem]
              md:top-[-2.5rem]
            "
          />
          <Image
            width={1080}
            height={1200}
            alt="event-image"
            src="/assets/homepage/family-gathering-desktop@2x.jpg"
            className="
              h-[400px]
              w-[326px]
              object-cover
              object-top
              shadow-3xl
              sm:h-[360px]
              sm:w-[573px]
              md:h-[600px]
              md:w-[400px]
              xl:w-[540px]
            "
          />
        </div>

        <section className="
            flex
            flex-col
            justify-center
            max-md:w-full
            max-md:flex-col-reverse
            max-md:items-center
            max-md:text-center
          "
        >
          <div>
            <h2 className="text-[32px] font-bold text-ebony-clay max-md:mt-12 sm:text-5xl">
              Family Gathering
            </h2>
            <p className="text-base max-lg:mt-5 max-lg:sm:w-[340px] lg:whitespace-pre-line">
              {`
                We love catering for entire families. So please bring
                everyone along for a special meal with your loved
                ones. We’ll provide a memorable experience for all.
              `}
            </p>
            <Button buttonStyle="dark" className="max-sm:mt-7 max-md:sm:mt-[60px]">
              Book a table
            </Button>
          </div>

          <ul className="
              relative
              mt-12
              flex
              w-fit
              max-md:justify-between
              max-sm:flex-col
              max-sm:gap-y-4
              sm:mt-[57px]
              sm:w-full
              md:mt-20
              md:w-fit
              md:flex-col
              md:gap-3
            "
          >
            {eventsContainers.map((item) => (
              <li
                key={item}
                className="
                    flex
                    cursor-pointer
                    items-center
                    text-lg
                    uppercase
                    text-[#4C4C4C]
                    opacity-50
                    duration-300
                    hover:opacity-100
                    max-md:flex-col-reverse
                "
              >
                <hr className="
                    left-[-7.8rem]
                    z-10
                    h-[1px]
                    w-[48px]
                    border-beaver
                    md:absolute
                    md:w-[95px]
                  "
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

      </section>

    </section>
  );
}

export default Events;
