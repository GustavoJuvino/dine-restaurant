'use client';

import React, { ComponentProps } from 'react';
import { useFormContext } from 'react-hook-form';
import { VariantProps, tv } from 'tailwind-variants';

const input = tv({
  base: `
    w-full
    border-b-[1px]
    border-[#8E8E8E]
    pb-[14px]
    pl-4
    text-[20px]
    leading-[30px]
    text-cod-gray
    outline-none
    duration-300
    focus:border-black
  `,
});

type InputStyleProps = ComponentProps<'input'> & VariantProps<typeof input>;

interface InputProps extends InputStyleProps {
  name: string
  error: string | undefined
}

export function Input({
  name, error, className, ...props
}: InputProps) {
  const { register } = useFormContext();

  if (error) console.log(error);

  return (
    <input
      {...props}
      {...register(name !== undefined ? name : ' ')}
      className={input({ className })}
    />
  );
}
