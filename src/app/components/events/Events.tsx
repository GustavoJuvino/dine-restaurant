'use client';

import React, { useEffect } from 'react';
import useToggleList from '@/app/hooks/useToggleList';
import { motion } from 'framer-motion';
import EventTexts from './EventTexts';
import EventImage from './EventImage';

const eventsContainers = ['family gathering', 'special events', 'social events'];

const eventsData = [
  {
    src: 'family-gathering',
    title: 'Family Gathering',
    description: `
      We love catering for entire families. So please bring
      everyone along for a special meal with your loved
      ones. We’ll provide a memorable experience for all.
    `,
  },
  {
    src: 'special-events',
    title: 'Special Events',
    description: `
      Whether it’s a romantic dinner or special date you’re
      celebrating with others we’ll look after you. We’ll be
      sure to mark your special date with an unforgettable
      meal.
    `,
  },
  {
    src: 'social-events',
    title: 'Social Events',
    description: `
      Are you looking to have a larger social event? No
      problem! We’re more than happy to cater for big
      parties. We’ll work with you to make your event a hit
      with everyone.
    `,
  },
];

function Events() {
  const { toggleEffect } = useToggleList();

  useEffect(() => {
    toggleEffect(0, 'div#imgsContainer > section', 'img-effect');
    toggleEffect(0, 'div#textContainer > div', 'txt-effect');
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

        <motion.div
          id="imgsContainer"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'tween', delay: 0.3, duration: 0.4 }}
        >
          {eventsData.map((data) => (
            <EventImage key={data.title} src={data.src} />
          ))}
        </motion.div>

        <motion.section
          className="
            flex
            flex-col
            justify-center
            max-md:w-full
            max-md:flex-col-reverse
            max-md:items-center
            max-md:text-center
          "
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'tween', delay: 0.3, duration: 0.4 }}
        >
          <div id="textContainer">
            {eventsData.map((data) => (
              <EventTexts
                title={data.title}
                description={data.description}
              />
            ))}
          </div>

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
                  toggleEffect(index, 'div#imgsContainer > section', 'img-effect');
                  toggleEffect(index, 'div#textContainer > div', 'txt-effect');
                  toggleEffect(index, 'ul#eventsItems > div', 'underline-effect');
                }}
                onKeyDown={() => {
                  toggleEffect(index, 'div#imgsContainer > section', 'img-effect');
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
                    left-[-7rem]
                    z-10
                    hidden
                    h-[1px]
                    w-[48px]
                    border-beaver
                    md:absolute
                    md:w-[95px]
                    xl:left-[-14.5rem]
                  "
                />
                {item}
              </div>
            ))}
          </ul>
        </motion.section>
      </section>
    </section>
  );
}

export default Events;
