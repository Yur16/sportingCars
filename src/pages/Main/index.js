import React from 'react';

import { LoadCars } from '../../services/api';

import { Container, CarsList, Car, CarImage, CarVideo } from './styles';

import Performance from '../../components/performance';

export default function Main({ navigation }) {

  const data = LoadCars();
  navigation.setOptions({ title: 'Audi R8' })

  return (
    <Container>
      <CarVideo
        source={{ uri: 'https://live.staticflickr.com/video/41331881900/5d808122cb/1080p.mp4?s=eyJpIjo0MTMzMTg4MTkwMCwiZSI6MTU5NTU1MDk5NiwicyI6IjM0OTNkMTU4NDNkYTM0Yzk3YTlhMzJkMDAxZDZlZjcwMTk5ZTdlOTkiLCJ2IjoxfQ' }}
        rate={1.0}
        isMuted
        resizeMode="cover"
        shouldPlay
        isLooping
      />

      <Performance />

      <CarsList>
        {data.map(car => (
          <Car key={car.name}>
            <CarImage source={{ uri: car.image }} />
          </Car>
        ))}
      </CarsList>
    </Container>
  );
}
