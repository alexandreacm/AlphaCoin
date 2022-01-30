import styled from 'styled-components/native';
import useFontFamily from '@/hooks/useFontFamily';
import colors from '@/theme/colors';

const StyledContainer = styled.View`
  width: 100%;
  height: ${({ slim }) => (slim ? 48 : 50)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const StyledSafeArea = styled.SafeAreaView`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const StyledIconContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
`;

const StyledIcon = styled.TouchableOpacity`
  width: 37px;
  height: 37px;
  justify-content: center;
  align-items: center;
  margin-right: 27px;
`;

const StyledEmptyIcon = styled.View`
  width: 37px;
  height: 37px;
`;

const StyledImage = styled.Image`
  width: 30px;
  height: 30px;
`;

const StyledContainerIcon = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledContainerImage = styled.View`
  width: 10%;
  height: 50px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const StyledContainerText = styled.View`
  width: 90%;
  height: 50px;
  justify-content: center;
  align-items: flex-start;
`;

const StyledLoginText = styled.Text`
  color: ${colors.WHITE};
  font-size: 14px;
  text-align: center;
  font-family: ${useFontFamily(500)};
`;

const StyledTouchableOpacityBack = styled.TouchableOpacity`
  margin-right: 40px;
`;

export {
  StyledContainer,
  StyledSafeArea,
  StyledIconContainer,
  StyledIcon,
  StyledEmptyIcon,
  StyledImage,
  StyledContainerIcon,
  StyledContainerImage,
  StyledTouchableOpacityBack,
  StyledLoginText,
  StyledContainerText
};
