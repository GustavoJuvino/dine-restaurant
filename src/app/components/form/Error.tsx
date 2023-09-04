import React, { ComponentProps } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const error = tv({
  base: `
        pl-4
        pt-3
        text-[12px]
        font-medium
        text-[#B54949]
    `,
});

  type FieldProps = ComponentProps<'span'> & VariantProps<typeof error>;

export function Error({ className, ...props }: FieldProps) {
  return (
    <span {...props} className={error({ className })} />
  );
}
