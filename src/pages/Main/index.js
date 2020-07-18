import React from 'react';

import { LoadCars } from '../../services/api';

import { Container, Car, CarImage, CarName } from './styles';

export default function Main({ navigation }) {

  const data = LoadCars();

  return (
    <Container>
      {data.map(car => (
        <Car key={car.name} onPress={() => navigation.navigate('Specs')}>
          <CarImage source={{ uri: car.image }} />
          <CarName>{car.name}</CarName>
        </Car>
      ))}
    </Container>
  );
}
