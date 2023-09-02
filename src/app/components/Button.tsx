import React, { ComponentProps } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
  base: `
    mt-10
    text-[14px]
    font-bold
    uppercase
    duration-300
    max-mobile:tracking-[1.5px]
    mobile:text-lg
  `,
  variants: {
    buttonStyle: {
      default: 'h-16 w-[145px] border-[1px] border-white hover:bg-white hover:text-black sm:w-[245px]',
      dark: `
        h-16
        w-[245px]
        border-[1px]
        border-cod-gray
        bg-cod-gray
        text-white
        hover:border-cod-gray
        hover:bg-transparent
        hover:text-cod-gray
      `,
    },
  },
  defaultVariants: {
    buttonStyle: 'default',
  },
});

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>;

interface ButtonComponentProps extends ButtonProps {
  // eslint-disable-next-line react/require-default-props
  submit?: string
}

function Button({
  buttonStyle, className, ...props
}: ButtonComponentProps) {
  return (
    <button
      type={props.submit ? 'submit' : 'button'}
      className={button({
        buttonStyle, className,
      })}
      {...props}
    />
  );
}

export default Button;
