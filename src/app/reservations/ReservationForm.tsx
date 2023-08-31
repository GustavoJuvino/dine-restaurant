'use client';

import React, { useState } from 'react';
import { Form } from '../components/form';
import TimeMenu from './TimeMenu';

function ReservationForm() {
  const [currentValue, setCurrentValue] = useState<number | string>(0);

  function checkCurrentValue(value: number) {
    if (value > 12) setCurrentValue(12);
    else if (value < 10) setCurrentValue(`0${value}`);
    else if (value > 9) setCurrentValue(`${value}`);
    else setCurrentValue(value);
  }

  return (
    <section className="flex flex-col gap-y-[34px]">
      <Form.Field>
        <Form.Input
          type="text"
          placeholder="Name"
        />
      </Form.Field>

      <Form.Field>
        <Form.Input
          type="email"
          placeholder="Email"
        />
      </Form.Field>

      <Form.Field>
        <h4 className="text-body-2">
          Pick a date
        </h4>
        <Form.Input
          type="number"
          placeholder="MM"
          min={1}
          max={12}
          className="h-[43px] w-20"
          onChange={(event) => checkCurrentValue(Number(event.target.value))}
          value={currentValue === 0 ? 'MM' : currentValue}
        />
        {/* <Form.Input
          type="month"
          placeholder="MM"
          className="h-[43px] w-20"
        /> */}
        <Form.Input
          type="number"
          placeholder="DD"
          className="h-[43px] w-20"
        />
        <Form.Input
          type="number"
          placeholder="YYYY"
          className="h-[43px] w-20"
        />
      </Form.Field>

      <Form.Field>
        <h4 className="text-body-2">
          Pick a time
        </h4>
        <Form.Input
          type="number"
          placeholder="09"
          className="h-[43px] w-20"
        />
        <Form.Input
          type="number"
          placeholder="00"
          className="h-[43px] w-20"
        />

        <TimeMenu />
      </Form.Field>

    </section>

  );
}

export default ReservationForm;
