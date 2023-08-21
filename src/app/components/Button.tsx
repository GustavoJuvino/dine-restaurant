import React, { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'>;

interface ButtonComponentProps extends ButtonProps {
  submit?: boolean
  dark?: boolean
}

function Button({ ...props }: ButtonComponentProps) {
  return (
    <button
      data-dark={props.dark}
      type={props.submit ? 'submit' : 'button'}
      className="
        mt-10
        h-16
        w-[245px]
        border-[1px]
        border-white
        text-lg
        uppercase
        duration-300
        hover:border-none
        hover:bg-white
        hover:text-black
        data-[dark=true]:border-none
        data-[dark=true]:bg-cod-gray
        data-[dark=true]:hover:border-cod-gray
        data-[dark=true]:hover:bg-white
      "
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}

Button.defaultProps = {
  submit: 'false',
  dark: 'false',
};

export default Button;
