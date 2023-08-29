import React from 'react'
import { Logo } from "../../../public/assets/svgs"

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center h-[440px] sm:h-[328px] md:h-60 bg-cod-gray">
        <section className="w-full max-xl:px-6 xl:w-[1110px] h-auto flex max-sm:flex-col max-sm:items-center md:items-center gap-x-[10%] xl:gap-x-[192px]">
            <Logo className="max-md:sm:mt-4" />
            <div className="text-white max-sm:text-center max-md:gap-y-8 flex max-md:flex-col md:gap-x-[80px] xl:gap-x-[192px] md:items-end text-sm tracking-[2px] leading-7">
                <ul className="uppercase whitespace-pre-line">
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
  )
}

export default Footer