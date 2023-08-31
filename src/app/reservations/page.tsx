import React from 'react';
import Image from 'next/image';
import {
  Logo, MobileLogo, PatternLines,
} from '../../../public/assets/svgs';
import Rectangle from '../components/Rectangle';
import Button from '../components/Button';
import CounterPeople from './CounterPeople';
import ReservationForm from './ReservationForm';

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
          <Logo className="relative mb-[70px] mt-16 max-sm:hidden lg:mb-[153px]" />
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
            <div className="text-white max-lg:text-center">
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
              <Button className="max-sm:w-auto max-sm:px-4 sm:hidden"> Reserve a place </Button>
            </div>

            <div className="absolute z-40 h-[585px] w-full max-sm:top-[28.5rem] sm:h-[545px] sm:w-[540px] max-lg:sm:top-[25.5rem] lg:right-0">
              <div className="flex h-auto w-full flex-col bg-white p-4 shadow-3xl small-mobile:p-8 sm:p-12">
                <ReservationForm />
                <CounterPeople />

                <Button buttonStyle="dark" className="mt-8 w-full">
                  Make a reservation
                </Button>
              </div>
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
