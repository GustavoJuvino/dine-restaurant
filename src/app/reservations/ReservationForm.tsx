'use client';

import React from 'react';
import { Form } from '../components/form';
import TimeMenu from './TimeMenu';
import Date from './Date';

function ReservationForm() {
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

      <Date />

      <Form.Field className="max-sm:flex-col max-sm:items-start">
        <h4 className="text-body-2 max-sm:mb-2">
          Pick a time
        </h4>
        <div className="flex max-mobile:gap-x-2 mobile:w-[289px] mobile:justify-between">
          <Form.Input
            type="number"
            placeholder="09"
            className="h-[43px] w-10 pl-0 mobile:w-20"
            min={9}
            max={23}
          />
          <Form.Input
            type="number"
            placeholder="00"
            className="h-[43px] w-10 pl-0 mobile:w-20"
            max={59}
          />

          <TimeMenu />
        </div>

      </Form.Field>

    </section>

  );
}

export default ReservationForm;
