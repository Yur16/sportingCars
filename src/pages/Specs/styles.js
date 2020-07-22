import styled from 'styled-components/native';
import { Video } from 'expo-av';

export const Container = styled.View`
  flex: 1;
  background: #000;
`;
export const Specifications = styled.ScrollView`
	padding: 15px;
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
`;
export const CarVideo = styled(Video)`
  width: 100%;
  height: 200px;
`;
export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Label = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  margin-top: 7px;
`;
export const Skills = styled.View`
  width: 300px;
  height: 12px;
  border-radius: 6px;

  background: rgba(255, 255, 255, 0.5);
  margin-right: 10px;
`;
export const Value = styled.View`
  background: #d61e1e;
  width: ${props => props.velocity}%;
  height: 12px;
  border-radius: 6px;
`;