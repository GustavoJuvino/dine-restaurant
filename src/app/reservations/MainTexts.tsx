'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

function MainTexts() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'tween', duration: 0.35 }}
      className="text-white max-lg:text-center"
    >
      <h1 className="text-[32px] font-light tracking-[-0.4px] sm:text-7xl">
        Reservations
      </h1>
      <p className="text-base sm:whitespace-pre-line sm:text-body-2">
        {`
          We can’t wait to host you. If you have any special
          requirements please feel free to call on the phone
          number below. We’ll be happy to accommodate you.
    `}
      </p>
      <a href="#reservation_form">
        <Button className="max-sm:w-auto max-sm:px-4 sm:hidden">
          Reserve a place
        </Button>
      </a>
    </motion.div>
  );
}

export default MainTexts;
