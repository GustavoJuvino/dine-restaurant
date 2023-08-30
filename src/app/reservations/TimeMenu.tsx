import React from 'react';
import { Arrow, Check } from '../../../public/assets/svgs';

function TimeMenu() {
  return (
    <div
      className="
        relative
        flex
        h-[43px]
        w-[97px]
        items-center
        gap-x-[15px]
        border-b-[1px]
        border-[#8E8E8E]
        pb-[14px]
        pl-4
        text-body-2
        uppercase
      "
    >
      <h4>AM</h4>
      <Arrow className="cursor-pointer" />

      <ul
        className="
          absolute
          left-0
          top-[3.2rem]
          z-50
          hidden
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
          <Check className="absolute right-[2.375rem]" />
          <h4 className="cursor-pointer">AM</h4>
        </li>
        <li className="relative flex items-center">
          <h4 className="cursor-pointer">PM</h4>
        </li>
      </ul>
    </div>
  );
}

export default TimeMenu;
