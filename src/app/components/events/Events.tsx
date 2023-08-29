'use client';

import React, { useEffect, useState } from 'react';
import useToggleList from '@/app/hooks/useToggleList';
import EventTexts from './EventTexts';
import EventImage from './EventImage';

const eventsContainers = ['family gathering', 'special events', 'social events'];

const eventsData = [
  {
    src: 'family-gathering',
    title: 'Family Gathering',
    desription: `
      We love catering for entire families. So please bring
      everyone along for a special meal with your loved
      ones. We’ll provide a memorable experience for all.
    `,
  },
  {
    src: 'special-events',
    title: 'Special Events',
    desription: `
      Whether it’s a romantic dinner or special date you’re
      celebrating with others we’ll look after you. We’ll be
      sure to mark your special date with an unforgettable
      meal.
    `,
  },
  {
    src: 'social-events',
    title: 'Social Events',
    desription: `
      Are you looking to have a larger social event? No
      problem! We’re more than happy to cater for big
      parties. We’ll work with you to make your event a hit
      with everyone.
    `,
  }
]

function Events() {
  const [currentIndex, setCurrentIndex] = useState(0)
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
        <EventImage src={eventsData[currentIndex].src} />

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
            title={eventsData[currentIndex].title}
            description={eventsData[currentIndex].desription}
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
                  setCurrentIndex(index)
                  toggleEffect(index, 'ul#eventsItems > div', 'underline-effect');
                }}
                onKeyDown={() => {
                  setCurrentIndex(index)
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
                    left-[-13.5rem]
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
