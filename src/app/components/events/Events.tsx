'use client';

import React, { useEffect } from 'react';
import useToggleList from '@/app/hooks/useToggleList';
import EventTexts from './EventTexts';
import EventImage from './EventImage';

const eventsContainers = ['family gathering', 'special events', 'social events'];

function Events() {
  const { toggleEffect } = useToggleList();

  useEffect(() => {
    toggleEffect(0, 'ul#eventsItems > div', 'underline-effect');
  }, [toggleEffect]);

  return (
    <section className="
        mt-20
        flex
        h-auto
        w-full
        items-center
        justify-center
        sm:mt-[82px]
        md:mt-[122px]
      "
    >
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
        <EventImage src="family-gathering" />

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
          <EventTexts
            title="Family Gathering"
            description={`
              We love catering for entire families. So please bring
              everyone along for a special meal with your loved
              ones. We’ll provide a memorable experience for all.
            `}
          />

          <ul
            id="eventsItems"
            className="
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
            {eventsContainers.map((item, index) => (
              <div
                role="button"
                key={item}
                tabIndex={0}
                onClick={() => {
                  toggleEffect(index, 'ul#eventsItems > div', 'underline-effect');
                }}
                onKeyDown={() => {
                  toggleEffect(index, 'ul#eventsItems > div', 'underline-effect');
                }}
                className={`
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
                `}
              >
                <hr className="
                    left-[-7.8rem]
                    z-10
                    hidden
                    h-[1px]
                    w-[48px]
                    border-beaver
                    md:absolute
                    md:w-[95px]
                  "
                />
                {item}
              </div>
            ))}
          </ul>
        </section>

      </section>

    </section>
  );
}

export default Events;
