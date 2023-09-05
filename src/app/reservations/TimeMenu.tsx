'use client';

import React, { useState } from 'react';
import { Arrow, Check } from '../../../public/assets/svgs';
import { useGlobalContext } from '../context/store';

function TimeMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const { period, setPeriod } = useGlobalContext();

  return (
    <div
      className="
        relative
        flex
        h-[43px]
        w-auto
        items-center
        gap-x-[15px]
        border-b-[1px]
        border-[#8E8E8E]
        pb-[14px]
        text-body-2
        uppercase
        mobile:w-[97px]
        mobile:pl-4
      "
    >
      <h4 className="uppercase">{period}</h4>
      <Arrow
        tabIndex={0}
        className={`cursor-pointer outline-none duration-300 ${openMenu ? 'rotate-180' : 'rotate-0'}`}
        onClick={() => setOpenMenu(!openMenu)}
        onKeyDown={(e: KeyboardEvent) => e.key === 'Enter' && setOpenMenu(!openMenu)}
      />

      {openMenu && (
        <ul
          className="
            absolute
            left-0
            top-[3.2rem]
            z-50
            flex
            h-[103px]
            w-[106px]
            flex-col
            items-center
            gap-y-4
            bg-white
            pt-[18px]
            shadow-2xl
          "
        >
          <li className="relative flex items-center">
            {period === 'am' ? <Check className="absolute mobile:right-[2.375rem]" /> : ''}
            <div
              role="button"
              tabIndex={0}
              onClick={() => setPeriod('am')}
              onKeyDown={(e) => e.key === 'Enter' && setPeriod('am')}
              className="cursor-pointer"
            >
              AM
            </div>
          </li>
          <li className="relative flex items-center">
            {period === 'pm' ? <Check className="absolute mobile:right-[2.375rem]" /> : ''}
            <div
              role="button"
              tabIndex={0}
              onClick={() => setPeriod('pm')}
              onKeyDown={(e) => e.key === 'Enter' && setPeriod('pm')}
              className="cursor-pointer"
            >
              PM
            </div>
          </li>
        </ul>
      )}

    </div>
  );
}

export default TimeMenu;
