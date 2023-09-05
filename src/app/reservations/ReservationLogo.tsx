'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Logo } from '../../../public/assets/svgs';

function ReservationLogo() {
  const router = useRouter();

  return (
    <Logo
      onClick={() => router.push('/')}
      className="relative mb-[70px] mt-16 cursor-pointer max-sm:hidden lg:mb-[153px]"
    />
  );
}

export default ReservationLogo;
