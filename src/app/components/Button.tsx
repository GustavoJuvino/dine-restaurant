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
    mobile:w-[245px]
    mobile:text-lg
  `,
  variants: {
    size: {
      default: 'h-16 w-[145px]',
    },
    buttonStyle: {
      default: 'border-[1px] border-white hover:bg-white hover:text-black',
      dark: `
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
    size: 'default',
    buttonStyle: 'default',
  },
});

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>;

interface ButtonComponentProps extends ButtonProps {
  submit?: boolean
}

function Button({
  size, buttonStyle, className, ...props
}: ButtonComponentProps) {
  return (
    <button
      type={props.submit ? 'submit' : 'button'}
      className={button({
        size, buttonStyle, className,
      })}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}

Button.defaultProps = {
  submit: 'false',
};

export default Button;
