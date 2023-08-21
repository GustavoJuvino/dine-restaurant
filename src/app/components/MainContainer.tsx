import React from 'react';
import { Logo } from '../../../public/assets/svgs';
import Button from './Button';
import Image from "next/image";
import MainBackground from "public/assets/homepage/hero-bg-desktop@2x.jpg"

function MainContainer() {
  return (
    <section className="h-[820px] w-full bg-cod-gray lg:px-[165px] px-20 pt-16 text-white relative">
      <Logo className="z-50" />
    
      <section className="w-full flex max-lg:flex-col justify-between">
        <div className="mt-[153px] z-50">
          <h1 className="text-7xl opacity-80">
            Exquisite dining
            <br />
            since 1989
          </h1>
          <p className="w-[445px] text-body-2 opacity-80">
            Experience our seasonal menu in beautiful country surroundings.
            Eat the freshest produce from the comfort of our farmhouse.
          </p>
          <Button buttonType="button"> book a table </Button>
        </div>


        <Image 
          width={570}
          height={260}
          alt="bg-main-image"
          src={MainBackground}
          className="
            absolute
            w-[570px]
            h-full
            object-cover
            object-right
            top-0
            lg:right-0
            right-[-16rem]
            z-30
            max-md:hidden
          "
          placeholder="blur"
          priority={true}
        />

      </section>
    </section>
  );
}

export default MainContainer;
