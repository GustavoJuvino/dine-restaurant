'use client';

import React, { useMemo } from 'react';
import { z } from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { Form } from '../components/form';
import TimeMenu from './TimeMenu';
import Button from '../components/Button';
import CounterPeople from './CounterPeople';
import DateInputs from './DateInputs';
import { useGlobalContext } from '../context/store';
import 'react-toastify/dist/ReactToastify.css';

const ReservationsFormSchema = z.object({
  name: z.string().nonempty('This field is required'),
  email: z.string()
    .nonempty('This field is required')
    .email('Email format is invalid'),
  hour: z.string()
    .nonempty('This field is incomplete'),
  minute: z.string()
    .nonempty('This field is incomplete'),
  month: z.string()
    .nonempty('Month is required'),
  day: z.string()
    .nonempty('Day is required'),
  year: z.string()
    .nonempty('Year is required'),
  people: z.number().optional(),
});

type ReservationsForm = z.infer<typeof ReservationsFormSchema>;

function ReservationForm() {
  const { period, people } = useGlobalContext();
  const createReservationForm = useForm<ReservationsForm>({
    resolver: zodResolver(ReservationsFormSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = createReservationForm;

  const dateErrors = [
    errors.month?.message,
    errors.day?.message,
    errors.year?.message,
  ];

  useMemo(() => {
    if (Object.keys(errors).length > 0) toast.error('Something went wrong :(');
  }, [errors]);

  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'tween', duration: 0.35 }}
      className="
        flex
        h-auto
        w-full
        flex-col
        bg-white
        p-4
        shadow-3xl
        small-mobile:p-8
        sm:p-12
      "
    >
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="dark"
      />
      <FormProvider {...createReservationForm}>
        <form
          id="reservation_form"
          onSubmit={handleSubmit((data) => {
            if (data) {
              // eslint-disable-next-line no-param-reassign
              data.people = people;
              toast.success('Reservation made successfully !');
              // console.log(data); -- If you want to see the reservation data, discomment this.
            }
          })}
          className="flex flex-col gap-y-[34px]"
        >
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

          <DateInputs errors={dateErrors} />

          <Form.Field className="max-sm:flex-col max-sm:items-start">
            <div>
              <h4 className={`text-body-2 max-sm:mb-2 ${errors.hour ? 'text-red-700' : 'text-black'}`}>
                Pick a hour
              </h4>
              <Form.Error className="pl-0">{errors.hour?.message}</Form.Error>
              {!errors.hour && (
                <Form.Error className="pl-0">{errors.minute?.message}</Form.Error>
              )}
            </div>

            <div className="flex max-mobile:gap-x-2 mobile:w-[289px] mobile:justify-between">
              <Form.Input
                type="number"
                placeholder="09"
                name="hour"
                min={period === 'am' ? 9 : 1}
                max={12}
                error={errors.hour?.message}
                className="h-[43px] w-10 pl-0 mobile:w-20"
              />
              <Form.Input
                type="number"
                placeholder="00"
                name="minute"
                max={59}
                error={errors.minute?.message}
                className="h-[43px] w-10 pl-0 mobile:w-20"
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
    </motion.section>

  );
}

export default ReservationForm;
