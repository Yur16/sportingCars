import React from 'react';
import { Text, View } from 'react-native';

import { Container, Specifications, Title, Content, Label, Value, Skills, CarVideo } from './styles';

export default function Specs(){

  const v = 9.1;

  return(
    <Container>
      <CarVideo
        source={{ uri: 'https://live.staticflickr.com/video/41331881900/5d808122cb/1080p.mp4?s=eyJpIjo0MTMzMTg4MTkwMCwiZSI6MTU5NTQ2MTI1MywicyI6ImJjMTE4NjNjN2NkMDFkMWQ2OTBiMzE1OGI4OTA1YzQ1ZDJiYjE2YjgiLCJ2IjoxfQ' }}
        rate={1.0}
        isMuted
        resizeMode="cover"
        shouldPlay
        isLooping
      />
      <Specifications>
      <Title>Desempenho</Title>
      <View>
        <Label>Velocidade</Label>
        <Content style={{flexDirection: 'row', alignItems: 'center'}}>
          <Skills>
            <Value velocity={v*10} />
          </Skills>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>9,1</Text>
        </Content>
      </View>
      <View>
        <Label>Controle</Label>
        <Content style={{flexDirection: 'row', alignItems: 'center'}}>
          <Skills>
            <Value velocity={v*10} />
          </Skills>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>9,1</Text>
        </Content>
      </View>
      <View>
        <Label>Aceleração</Label>
        <Content style={{flexDirection: 'row', alignItems: 'center'}}>
          <Skills>
            <Value velocity={v*10} />
          </Skills>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>9,1</Text>
        </Content>
      </View>
      <View>
        <Label>Arrancada</Label>
        <Content style={{flexDirection: 'row', alignItems: 'center'}}>
          <Skills>
            <Value velocity={v*10} />
          </Skills>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>9,1</Text>
        </Content>
      </View>
      <View>
        <Label>Frenagem</Label>
        <Content style={{flexDirection: 'row', alignItems: 'center'}}>
          <Skills>
            <Value velocity={v*10} />
          </Skills>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>9,1</Text>
        </Content>
      </View>

      </Specifications>
    </Container>
  );
}