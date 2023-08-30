import React from 'react';
import { Logo } from '../../../public/assets/svgs';

function Footer() {
  return (
    <footer className="
        flex
        h-[440px]
        w-full
        items-center
        justify-center
        bg-cod-gray
        sm:h-[328px]
        md:h-60
        "
    >
      <section className="
        flex
        h-auto
        w-full
        gap-x-[10%]
        max-xl:px-6
        max-sm:flex-col
        max-sm:items-center
        md:items-center
        xl:w-[1110px]
        xl:gap-x-[192px]
        "
      >
        <Logo className="max-md:sm:mt-4" />
        <div className="
            flex
            text-sm
            leading-7
            tracking-[2px]
            text-white
            max-md:flex-col
            max-md:gap-y-8
            max-sm:text-center
            md:items-end
            md:gap-x-[80px]
            xl:gap-x-[192px]
            "
        >
          <ul className="whitespace-pre-line uppercase">
            <li>
              {`
                Marthwaite, Sedbergh
                Cumbria
                +00 44 123 4567
              `}
            </li>

          </ul>

          <ul>
            <li>
              <h2>OPEN TIMES</h2>
              <p>MON - FRI: 09:00 AM - 10:00 PM</p>
              <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
