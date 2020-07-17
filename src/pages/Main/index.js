import React from 'react';

import { LoadCars } from '../../services/api';

import { Container, Select, Car, CarImage, CarName } from './styles';

export default function Main() {

  const data = LoadCars();

  return (
    <Container>
      <Select>Selecione um carro</Select>
      {data.map(car => (
        <Car key={car.name}>
          <CarImage source={{ uri: car.image }} />
          <CarName>{car.name}</CarName>
        </Car>
      ))}
    </Container>
  );
}
