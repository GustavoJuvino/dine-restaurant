'use client';

import Image from 'next/image';
import React from 'react';
import FarmImage from 'public/assets/homepage/enjoyable-place-desktop@2x.jpg';
import FarmResponsiveImage from 'public/assets/homepage/enjoyable-place-tablet@2x.jpg';
import LocallyImage from 'public/assets/homepage/locally-sourced-desktop@2x.jpg';
import LocallyResponsiveImage from 'public/assets/homepage/locally-sourced-tablet@2x.jpg';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { PatternDivide, PatternLines } from '../../../public/assets/svgs';

function Characteristics() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.4,
        staggerChildren: 0.4,
        staggerDirection: -1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'tween' },
    },
  };

  return (
    <section className="flex h-auto w-full flex-col items-center gap-y-[118px] md:gap-y-32">
      <section
        className="
          relative
          flex
          w-full
          items-center
          justify-center
          max-xl:px-6
          max-md:flex-col
          md:justify-between
          xl:w-[1110px]
        "
      >
        <InView triggerOnce threshold={0.5}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              className="
                items-center
                justify-center
                max-md:flex
              "
              initial={{ opacity: 0, marginLeft: '80px' }}
              animate={inView && { opacity: 1, marginLeft: '0px' }}
              transition={{ delay: 0.4 }}
            >
              <Image
                width={1080}
                height={1440}
                alt="characteristic-image"
                src={FarmImage}
                placeholder="blur"
                priority
                className="
                  absolute
                  top-[-4.5rem]
                  z-50
                  h-[720px]
                  w-[400px]
                  object-cover
                  shadow-3xl
                  max-md:hidden
                  xl:w-[540px]
                "
              />

              <Image
                width={1146}
                height={720}
                alt="characteristic-responsive-image"
                src={FarmResponsiveImage}
                placeholder="blur"
                priority
                className="
                  absolute
                  top-[-8.5rem]
                  h-[400px]
                  w-[327px]
                  object-cover
                  shadow-3xl
                  sm:top-[-8rem]
                  sm:h-[360px]
                  sm:w-[573px]
                  md:hidden
                "
              />
            </motion.div>
          )}
        </InView>

        <motion.div
          className="
            mt-[321px]
            flex
            w-[75%]
            flex-col
            max-md:items-center
            max-md:text-center
            sm:mt-[289px]
            sm:w-[457px]
            md:mt-[177px]
            md:w-[40%]
            lg:w-[445px]
          "
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={item}>
            <PatternDivide />
          </motion.div>

          <motion.h1
            variants={item}
            className="
              mb-[27px]
              mt-[55px]
              text-[32px]
              font-bold
              text-ebony-clay
              sm:text-5xl
            "
          >
            Enjoyable place for all the family
          </motion.h1>
          <motion.p variants={item} className="text-base text-ebony-clay sm:text-body-2">
            Our relaxed surroundings make dining with us a great
            experience for everyone. We can even arrange a tour
            of the farm before your meal.
          </motion.p>
        </motion.div>
      </section>

      <section
        className="
          flex
          w-full
          items-center
          justify-between
          max-xl:px-6
          max-md:flex-col
          md:mt-[12rem]
          md:flex-row-reverse
          xl:w-[1110px]
        "
      >
        <InView triggerOnce threshold={0.4}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              className="relative z-50"
              initial={{ opacity: 0, marginRight: '80px' }}
              animate={inView && { opacity: 1, marginRight: '0px' }}
              transition={{ delay: 0.4 }}
            >
              <Image
                width={1080}
                height={1440}
                alt="characteristic-image"
                src={LocallyImage}
                placeholder="blur"
                priority
                className="
                  relative
                  bottom-[-5rem]
                  z-50
                  h-[720px]
                  w-[400px]
                  max-md:hidden
                  xl:h-[720px]
                  xl:w-[540px]
                "
              />
              <Image
                width={1146}
                height={720}
                alt="characteristic-responsive-image"
                src={LocallyResponsiveImage}
                placeholder="blur"
                priority
                className="
                  h-[400px]
                  w-[327px]
                  object-cover
                  sm:top-[-8rem]
                  sm:h-[360px]
                  sm:w-[573px]
                  md:hidden
                "
              />
              <PatternLines className="
                  absolute
                  right-[-3.5rem]
                  top-[228px]
                  z-[60]
                  md:right-[-5rem]
                  md:top-[282px]
                  xl:right-[-7.5rem]
                "
              />
            </motion.div>
          )}
        </InView>

        <motion.div
          className="
            flex
            w-[75%]
            flex-col
            max-md:mt-14
            max-md:items-center
            max-md:text-center
            sm:w-[457px]
            md:w-[40%]
            lg:w-[445px]
          "
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={item}>
            <PatternDivide />
          </motion.div>
          <motion.h1
            className="
              mb-[27px]
              mt-[55px]
              text-[32px]
              font-bold
              text-ebony-clay
              sm:text-5xl
            "
            variants={item}
          >
            The most locally sourced food
          </motion.h1>
          <motion.p variants={item} className="text-base text-ebony-clay sm:text-body-2">
            All our ingredients come directly from our farm or
            local fishery. So you can be sure that you’re eating
            the freshest, most sustainable food.
          </motion.p>
        </motion.div>
      </section>

    </section>
  );
}

export default Characteristics;
