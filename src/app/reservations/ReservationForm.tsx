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
  name: z.string().nonempty('This field is required'),
  email: z.string()
    .nonempty('This field is required')
    .email('Email format is invalid'),
  hourAM: z.string()
    .nonempty('This field is incomplete')
    .min(9, 'The minimum time is from 9 am')
    .max(12, 'The maximum time is untill 11 am'),
  hourPM: z.string()
    .nonempty('This field is incomplete'),

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
          <Form.Field className="flex flex-col items-start">
            <Form.Input
              type="text"
              name="name"
              error={errors.name?.message}
              placeholder="Name"
            />
            {errors.name?.message && (
              <Form.Error>{errors.name.message}</Form.Error>
            )}
          </Form.Field>

          <Form.Field className="flex flex-col items-start">
            <Form.Input
              type="email"
              name="email"
              error={errors.email?.message}
              placeholder="Email"
            />
            {errors.email?.message && (
              <Form.Error>{errors.email.message}</Form.Error>
            )}
          </Form.Field>

          <Date />

          <Form.Field className="max-sm:flex-col max-sm:items-start">
            <div>
              <h4 className={`text-body-2 max-sm:mb-2 ${errors.hourPM ? 'text-red-500' : 'text-black'}`}>
                Pick a time
              </h4>
              {errors.hourPM && (
                <Form.Error className="pl-0">
                  {errors.hourPM.message}
                </Form.Error>
              )}
            </div>

            <div className="flex max-mobile:gap-x-2 mobile:w-[289px] mobile:justify-between">
              <Form.Input
                type="number"
                placeholder="09"
                name="hourPM"
                error={errors.hourPM?.message}
                className="h-[43px] w-10 pl-0 mobile:w-20"
                min={9}
                max={12}
              />
              <Form.Input
                type="number"
                placeholder="00"
                className="h-[43px] w-10 pl-0 mobile:w-20"
                max={59}
                name="minute"
              />

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
