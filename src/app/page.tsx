import React from 'react';
import MainContainer from './components/MainContainer';
import Characteristics from './components/Characteristics';
import Rectangle from './components/Rectangle';

export default function Home() {
  return (
    <main>
      <MainContainer />
      <Rectangle className="left-0 mt-[100px] rounded-tr-[100px] md:mt-[250px]" />
      <Rectangle className="right-0 mt-[1091px] rounded-tl-[100px]" />
      <Characteristics />
    </main>
  );
}
