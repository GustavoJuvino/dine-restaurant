'use client';

import React from 'react';
import { Form } from '../components/form';

function Date() {
  // const [currentMonth, setCurrentMonth] = useState<number | string>();
  // const [currentDay, setCurrentDay] = useState<number | string>();

  // function checkCurrentMonth(value: number) {
  //   if (value > 12) setCurrentMonth(12);
  //   else if (value < 10) setCurrentMonth(`0${value}`);
  //   else if (value > 9) setCurrentMonth(`${value}`);
  //   else setCurrentMonth(value);
  // }

  // function formatDay(day: number, maxDay: number) {
  //   if (day > maxDay) setCurrentDay(maxDay);
  //   else if (day < 10) setCurrentDay(`0${day}`);
  //   else if (day > 9) setCurrentDay(`${day}`);
  //   else setCurrentDay(day);
  // }

  // function checkCurrentDay(value: number) {
  //   if (
  //     currentMonth === '01' && value > 31
  //     // || currentMonth === '03'
  //     // || currentMonth === '05'
  //     // || currentMonth === '07'
  //     // || currentMonth === '08'
  //     // || currentMonth === '10'
  //     // || currentMonth === '12' && value < 31
  //   ) console.log('Invalid Date');

  //   if (
  //     currentMonth === '04'
  //     || currentMonth === '06'
  //     || currentMonth === '09'
  //     || currentMonth === '11'
  //   ) formatDay(value, 30);

  //   if (currentMonth === '02') formatDay(value, 28);
  // }

  return (
    <section className="justify-between sm:flex">
      <h4 className="text-body-2 max-sm:mb-2">
        Pick a date
      </h4>

      <div className="flex max-mobile:gap-x-2 mobile:w-[289px] mobile:justify-between">
        <Form.Input
          type="number"
          placeholder="MM"
          min={1}
          max={12}
          className="h-[43px] w-10 pl-4 mobile:w-20"
        />
        <Form.Input
          type="number"
          placeholder="DD"
          min={1}
          max={31}
          className="h-[43px] w-10 pl-4 mobile:w-20"
        />
        <Form.Input
          type="number"
          placeholder="YYYY"
          min={2023}
          className="h-[43px] w-11 pl-4 mobile:w-20"
        />
      </div>

    </section>
  );
}

export default Date;
