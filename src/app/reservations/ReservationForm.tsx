'use client';

import React from 'react';
import { z } from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '../components/form';
import TimeMenu from './TimeMenu';
import Date from './Date';
import Button from '../components/Button';
import CounterPeople from './CounterPeople';

const ReservationsFormSchema = z.object({
  name: z.string().nonempty({
    message: 'This field is required',
  }),
  email: z.string().nonempty({
    message: 'Email is required',
  }),
});

type ReservationsForm = z.infer<typeof ReservationsFormSchema>;

function ReservationForm() {
  const createReservationForm = useForm<ReservationsForm>({
    resolver: zodResolver(ReservationsFormSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = createReservationForm;

  return (
    <section className="flex h-auto w-full flex-col bg-white p-4 shadow-3xl small-mobile:p-8 sm:p-12">
      <FormProvider {...createReservationForm}>
        <form onSubmit={handleSubmit((data) => console.log(data))} className="flex flex-col gap-y-[34px]">
          <Form.Field>
            <Form.Input
              type="text"
              name="name"
              error={errors.name?.message}
              placeholder="Name"
            />
          </Form.Field>

          <Form.Field>
            <Form.Input
              type="email"
              name="email"
              error={errors.email?.message}
              placeholder="Email"
            />
          </Form.Field>

          <Date />

          <Form.Field className="max-sm:flex-col max-sm:items-start">
            <h4 className="text-body-2 max-sm:mb-2">
              Pick a time
            </h4>
            <div className="flex max-mobile:gap-x-2 mobile:w-[289px] mobile:justify-between">
              {/* <Form.Input
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
            /> */}

              <TimeMenu />
            </div>

          </Form.Field>

          <CounterPeople />

          <Button submit="true" buttonStyle="dark" className="mt-8 w-full">
            Make a reservation
          </Button>

        </form>
      </FormProvider>
    </section>

  );
}

export default ReservationForm;
