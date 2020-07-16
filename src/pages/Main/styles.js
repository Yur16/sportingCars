import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.ScrollView`
  flex: 1;
  background: #000;
`;
export const Select = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
  margin: ${Constants.statusBarHeight + 10}px 0 15px 15px;
`;
export const Car = styled.View`
  width: 100%;
  height: 200px;
`;
export const CarImage = styled.Image`
  flex: 1;
  opacity: 0.8;
`;
export const CarName = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  
  position: absolute;
  bottom: 15px;
  left: 20px;
`;