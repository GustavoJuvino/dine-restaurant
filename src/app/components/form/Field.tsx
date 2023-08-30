import React, { ComponentProps } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const field = tv({
  base: `
        mt-[34px]
        flex items-center
        justify-between
      `,
});

type FieldProps = ComponentProps<'fieldset'> & VariantProps<typeof field>;

// eslint-disable-next-line import/prefer-default-export
export function Field({ className, ...props }: FieldProps) {
  return (
    <fieldset {...props} className={field({ className })} />
  );
}
