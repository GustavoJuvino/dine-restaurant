import React from 'react';
import MainContainer from './components/MainContainer';
import Characteristics from './components/Characteristics';
import Rectangle from './components/Rectangle';

export default function Home() {
  return (
    <main>
      <MainContainer />
      <Rectangle />
      <Characteristics />
    </main>
  );
}
