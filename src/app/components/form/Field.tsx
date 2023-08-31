import React, { ComponentProps } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const field = tv({
  base: `
    flex
    items-center
    justify-between
  `,
});

type FieldProps = ComponentProps<'fieldset'> & VariantProps<typeof field>;

export function Field({ className, ...props }: FieldProps) {
  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <fieldset {...props} className={field({ className })} />
  );
}
