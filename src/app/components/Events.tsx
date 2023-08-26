import Image from 'next/image';
import React from 'react';
import Button from './Button';
import { PatternLines } from '../../../public/assets/svgs';

const eventsContainers = ['family gathering', 'special events', 'social events'];

function Events() {
  return (
    <section className=" mt-[122px] flex h-auto w-full items-center justify-center">
      <section className="z-50 flex w-[1110px] justify-between">
        <div className="relative">
          <PatternLines className="absolute left-[-2.5rem] top-[-2.5rem]" />
          <Image
            width={1080}
            height={1200}
            alt="event-image"
            src="/assets/homepage/family-gathering-desktop@2x.jpg"
            className=" h-[600px] w-[540px]"
          />
        </div>

        <section className="flex flex-col justify-center">
          <div>
            <h2 className="text-5xl text-ebony-clay">Family Gathering</h2>
            <p className="mt-5 w-[445px]">
              {`
                We love catering for entire families. So please bring\n
                everyone along for a special meal with your loved\n
                ones. We’ll provide a memorable experience for all.
            `}
            </p>
            <Button buttonStyle="dark"> Book a table</Button>
          </div>

          <ul className="relative mt-20 flex w-fit flex-col gap-3">
            {eventsContainers.map((item) => (
              <li
                key={item}
                className="
                    flex
                    cursor-pointer
                    items-center
                    text-lg
                    uppercase
                    text-[#4C4C4C]
                    opacity-50
                    duration-300
                    hover:opacity-100
                "
              >
                <hr className="absolute left-[-7.8rem] h-[1px] w-[95px] border-beaver" />
                {item}
              </li>
            ))}
          </ul>
        </section>

      </section>

    </section>
  );
}

export default Events;
