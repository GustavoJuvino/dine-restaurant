import React from 'react';
import Image from 'next/image';
import {
  MobileLogo, PatternLines,
} from '../../../public/assets/svgs';
import Rectangle from '../components/Rectangle';
import ReservationForm from './ReservationForm';
import ReservationLogo from './ReservationLogo';
import MainTexts from './MainTexts';

function Reservations() {
  return (
    <main className="max-sm:mb-[534px] max-lg:sm:mb-[435px]">
      <section className="relative flex h-[600px] w-full justify-center">
        <section className="
            relative
            z-50
            flex
            h-auto
            w-full
            flex-col
            max-sm:mx-6
            max-sm:items-center
            max-lg:sm:px-10
            max-xl:lg:px-6
            xl:w-[1110px]
          "
        >
          <ReservationLogo />
          <MobileLogo className="mb-[44px] mt-14 sm:hidden" />

          <section className="
              flex
              w-full
              justify-between
              max-lg:flex-col
              max-lg:items-center
              sm:flex
            "
          >
            <MainTexts />

            <div
              className="
                absolute
                z-40
                h-[585px]
                w-full
                max-sm:top-[28.5rem]
                sm:h-[545px]
                sm:w-[540px]
                max-lg:sm:top-[25.5rem]
                lg:right-0
              "
            >
              <ReservationForm />
              <PatternLines className="absolute bottom-[-2.5rem] left-[-5rem] z-[-10] max-lg:hidden" />
            </div>

          </section>

        </section>
        <Image
          width={2880}
          height={1200}
          alt="booking-image"
          src="/assets/booking/hero-bg-desktop@2x.jpg"
          className="absolute top-0 z-0 h-full w-full object-cover object-center sm:object-left"
        />
      </section>

      <Rectangle className="relative w-[993px] rounded-br-[100px] max-lg:hidden" />
    </main>
  );
}

export default Reservations;
