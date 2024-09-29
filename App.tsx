import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TelaInicial } from './src/components/TelaInicial/TelaInicial';
import { Formulario } from './src/components/formulario/formulario';

export default function App() {
  return (
    <>
      <TelaInicial />
      {/* <Formulario /> */}
      <StatusBar style="auto" />
    </>
  );
}

