import React from 'react';

import { Container, Select, Car, CarImage, CarName } from './styles';

export default function Main() {
  return (
    <Container>
      <Select>Selecione um carro</Select>

      <Car>
        <CarImage source={{ 
          uri: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/1-porsche-cayman-gt4-2019-fd-hero-front.jpg?itok=PzqJhpFx', 
        }} />
        <CarName>Porsche Cayman GT4</CarName>
      </Car>
      <Car>
        <CarImage source={{ 
          uri: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/1-porsche-cayman-gt4-2019-fd-hero-front.jpg?itok=PzqJhpFx', 
        }} />
        <CarName>Porsche Cayman GT4</CarName>
      </Car>
      <Car>
        <CarImage source={{ 
          uri: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/1-porsche-cayman-gt4-2019-fd-hero-front.jpg?itok=PzqJhpFx', 
        }} />
        <CarName>Porsche Cayman GT4</CarName>
      </Car>
      <Car>
        <CarImage source={{ 
          uri: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/1-porsche-cayman-gt4-2019-fd-hero-front.jpg?itok=PzqJhpFx', 
        }} />
        <CarName>Porsche Cayman GT4</CarName>
      </Car>
      <Car>
        <CarImage source={{ 
          uri: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/1-porsche-cayman-gt4-2019-fd-hero-front.jpg?itok=PzqJhpFx', 
        }} />
        <CarName>Porsche Cayman GT4</CarName>
      </Car>
      <Car>
        <CarImage source={{ 
          uri: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/1-porsche-cayman-gt4-2019-fd-hero-front.jpg?itok=PzqJhpFx', 
        }} />
        <CarName>Porsche Cayman GT4</CarName>
      </Car>
    </Container>
  );
}
