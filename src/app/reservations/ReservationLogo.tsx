'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Logo, MobileLogo } from '../../../public/assets/svgs';

function ReservationLogo() {
  const router = useRouter();

  return (
    <div>
      <Logo
        onClick={() => router.push('/')}
        className="relative mb-[70px] mt-16 cursor-pointer max-sm:hidden lg:mb-[153px]"
      />
      <MobileLogo
        onClick={() => router.push('/')}
        className="mb-[44px] mt-14 cursor-pointer sm:hidden"
      />
    </div>
  );
}

export default ReservationLogo;
