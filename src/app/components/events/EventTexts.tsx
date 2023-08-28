'use client';

import React from 'react';
import Button from '../Button';

interface EventTextsProps {
  title: string;
  description: string;
}

function EventTexts({ title, description }: EventTextsProps) {
  return (
    <div>
      <h2 className="text-[32px] font-bold text-ebony-clay max-md:mt-12 sm:text-5xl">
        {title}
      </h2>
      <p className="text-base max-lg:mt-5 max-lg:sm:w-[340px] lg:whitespace-pre-line">
        {description}
      </p>
      <Button buttonStyle="dark" className="max-sm:mt-7 max-md:sm:mt-[60px]">
        Book a table
      </Button>
    </div>
  );
}

export default EventTexts;
