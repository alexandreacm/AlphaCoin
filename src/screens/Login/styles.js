import styled from 'styled-components/native';

import useFontFamily from '@/hooks/useFontFamily';
import { handlePixels } from '@/helpers/functions/utils';

import colors from '@/theme/colors';
import Icon from 'react-native-vector-icons/Feather';

const StyledContainer = styled.View`
  flex: 1;
  background-color: ${colors.BG};
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const StyledContainerImage = styled.View`
  width: 60px;
  height: 60px;
  background-color: ${colors.PRIMARY};
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const StyledButtonLogin = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  background: ${colors.PRIMARY};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const StyledViewAreaInput = styled.View`
  width: 100%;
  height: 50px;
  background: ${colors.BG};
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-width: 1px;
  border-color: ${colors.BLACK};
  margin-top: 50px;
  margin-bottom: 15px;
`;

const StyledLabel = styled.Text`
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  font-size: ${({ fontSize }) => handlePixels(fontSize)};
  font-family: ${({ fontWeight }) => useFontFamily(fontWeight)};
  line-height: ${({ lineHeight }) =>
    lineHeight ? handlePixels(lineHeight) : 0};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? handlePixels(marginBottom) : 0};
`;

const StyledTextButtonLogin = styled.Text`
  color: ${colors.WHITE};
  text-align: center;
  font-size: 18px;
  font-family: ${useFontFamily(700)};
`;

const StyledIcon = styled(Icon)`
  margin-left: 10px;
`;

const StyledIconUser = styled.View`
  width: 12%;
  height: 50px;
  justify-content: center;
  align-items: flex-start;
`;
const StyledInput = styled.View`
  width: 88%;
  height: 50px;
`;

export {
  StyledContainer,
  StyledLabel,
  StyledContainerImage,
  StyledImage,
  StyledViewAreaInput,
  StyledIcon,
  StyledButtonLogin,
  StyledTextButtonLogin,
  StyledIconUser,
  StyledInput
};
