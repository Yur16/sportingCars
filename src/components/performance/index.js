import React from 'react';
import { Text, View, Animated } from 'react-native';

import { Container, Specifications, Title, Content, Label, Value, Skills } from './styles';

export default function Perfomance(){

  const v = 9.1;


  return(
    <Container>
      
      <Specifications>
      <Title>Desempenho</Title>
      <View>
        <Label>Velocidade</Label>
        <Content>
          <Skills>
            <Value velocity={v*10} />
          </Skills>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>9,1</Text>
        </Content>
      </View>
      <View>
        <Label>Controle</Label>
        <Content>
          <Skills>
            <Value velocity={v*10} />
          </Skills>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>9,1</Text>
        </Content>
      </View>
      <View>
        <Label>Aceleração</Label>
        <Content>
          <Skills>
            <Value velocity={v*10} />
          </Skills>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>9,1</Text>
        </Content>
      </View>
      <View>
        <Label>Arrancada</Label>
        <Content>
          <Skills>
            <Value velocity={v*10} />
          </Skills>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>9,1</Text>
        </Content>
      </View>
      <View>
        <Label>Frenagem</Label>
        <Content>
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