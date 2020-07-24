import styled from 'styled-components/native';
import { Video } from 'expo-av';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;
export const CarVideo = styled(Video)`
  width: 100%;
  height: 200px;
`;
export const CarsList = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {padding: 20},
  showsHorizontalScrollIndicator: false,
})`
  position: absolute;
  bottom: 0;
`;
export const Car = styled.TouchableHighlight`
  width: 270px;
  height: 150px;
  margin-left: 6px;
  margin-right: 6px;
`;
export const CarImage = styled.Image`
  flex: 1;
  border-radius: 12px;
`;
export const CarName = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  
  position: absolute;
  bottom: 15px;
  left: 20px;
`;