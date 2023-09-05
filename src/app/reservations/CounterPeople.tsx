'use client';

import React from 'react';
import { Minus, Plus } from '../../../public/assets/svgs';
import { useGlobalContext } from '../context/store';

function CounterPeople() {
  const { people, setPeople } = useGlobalContext();

  return (
    <div
      className="
        mt-9
        flex
        h-[41px]
        w-full
        items-center
        justify-between
        border-b-[1px]
        border-[#8E8E8E]
        px-8
        pb-4
      "
    >
      <Minus
        className="cursor-pointer"
        onClick={() => setPeople(people > 1 ? people - 1 : 1)}
      />
      <h3 id="display_count" className="text-body-2 font-bold max-mobile:text-base">
        {people > 1 ? `${people} people` : `${people} person`}
      </h3>
      <Plus
        className="cursor-pointer"
        onClick={() => setPeople(people + 1)}
      />
    </div>
  );
}

export default CounterPeople;
