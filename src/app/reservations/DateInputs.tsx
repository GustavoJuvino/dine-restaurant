'use client';

import React, { useEffect, useState } from 'react';
import { Form } from '../components/form';

interface DateInputsProps {
  errors: (string | undefined)[]
}

function DateInputs({ errors } : DateInputsProps) {
  const [currentMonth, setCurrentMonth] = useState<number>();
  const [currentDay, setCurrentDay] = useState<number>();
  const [currentYear, setCurrentYear] = useState<number>();

  const [minMonth, setMinMoth] = useState<number>();
  const [minDay, setMinDay] = useState<number>();
  const [maxDay, setMaxDay] = useState<number>();
  const filteredErrors = errors.filter((e) => e !== undefined);

  useEffect(() => {
    setCurrentMonth(new Date().getMonth() + 1);
    const today = String(new Date().getDate()).padStart(2);
    setCurrentDay(+today);
    setCurrentYear(new Date().getFullYear());
  }, []);

  const getMaxDay = (month: number) => {
    const today = new Date();
    const lastDayOfMonth = String(new Date(today.getFullYear(), (month - 1) + 1, 0));
    const result = lastDayOfMonth.replace(/\D/g, '');
    setMaxDay(+result.substring(0, 2));
  };

  function checkYearValue(year: number) {
    if (currentYear && year > currentYear) {
      setMinMoth(1);
    } else setMinMoth(currentMonth);
  }

  function checkMonthValue(month: number) {
    getMaxDay(month);

    if (currentMonth && month > currentMonth) {
      setMinDay(1);
    } else setMinDay(currentDay);
  }

  return (
    <section className="justify-between sm:flex">
      <div>
        <h4 className={`text-body-2 max-sm:mb-2 ${filteredErrors.length ? 'text-red-700' : 'text-black'}`}>
          Pick a date
        </h4>
        {filteredErrors.length ? (
          <Form.Error className="pl-0">This field is incomplete</Form.Error>
        ) : ''}

      </div>

      <div className="flex max-mobile:gap-x-2 mobile:w-[289px] mobile:justify-between">
        <Form.Input
          onChange={(e) => checkMonthValue(+e.currentTarget.value)}
          type="number"
          placeholder="MM"
          min={minMonth}
          max={12}
          name="month"
          error={errors[0]}
          className="h-[43px] w-10 pl-4 mobile:w-20"
        />
        <Form.Input
          type="number"
          placeholder="DD"
          min={minDay}
          max={maxDay}
          name="day"
          error={errors[1]}
          className="h-[43px] w-10 pl-4 mobile:w-20"
        />
        <Form.Input
          onChange={(e) => checkYearValue(+e.currentTarget.value)}
          type="number"
          placeholder="YYYY"
          min={2023}
          name="year"
          error={errors[2]}
          className="h-[43px] w-11 pl-4 mobile:w-20"
        />
      </div>

    </section>
  );
}

export default DateInputs;
