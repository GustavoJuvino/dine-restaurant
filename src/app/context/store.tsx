'use client';

import React, {
  Dispatch, SetStateAction, createContext, useContext, useState,
} from 'react';

interface ContextProps {
  period: string
  setPeriod: Dispatch<SetStateAction<string>>

  people: number
  setPeople: Dispatch<SetStateAction<number>>
}

const GlobalContext = createContext<ContextProps>({
  period: '',
  setPeriod: (): string => '',

  people: 0,
  setPeople: (): number => 0,
});

export function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [period, setPeriod] = useState('am');
  const [people, setPeople] = useState(4);

  return (
    <GlobalContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        period,
        setPeriod,
        people,
        setPeople,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
