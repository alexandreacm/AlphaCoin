import React, { memo } from 'react';

import Icon from 'react-native-vector-icons/Feather';

import StatusBarColor from '@/components/StatusBarColor';
import colors from '@/theme/colors';

import imgLogo from '@/assets/images/logo_header.gif';

import {
  StyledContainer,
  StyledSafeArea,
  StyledImage,
  StyledContainerIcon,
  StyledContainerImage,
  StyledTouchableOpacityBack,
  StyledContainerText,
  StyledLoginText
} from './styles';

const Header = ({
  showBackButton,
  onBackPress,
  slim,
  backgroundColor,
  backButtonColor,
  isFocused,
  userName
}) => {
  return (
    <>
      <StyledSafeArea backgroundColor={backgroundColor} />
      {isFocused && <StatusBarColor backgroundColor={backgroundColor} />}
      <StyledContainer backgroundColor={backgroundColor} slim={slim}>
        {showBackButton ? (
          <>
            <StyledTouchableOpacityBack
              onPress={onBackPress}
              backButtonColor={backButtonColor}
            >
              <Icon name='arrow-left' size={24} color={colors.WHITE} />
            </StyledTouchableOpacityBack>
            <StyledContainerImage>
              <StyledImage source={imgLogo} />
            </StyledContainerImage>
            <StyledContainerText>
              <StyledLoginText>WellCome [{userName}]</StyledLoginText>
            </StyledContainerText>
          </>
        ) : (
          <>
            <StyledContainerImage>
              <StyledImage source={imgLogo} />
            </StyledContainerImage>
            <StyledContainerText>
              <StyledLoginText>WellCome [{userName}]</StyledLoginText>
            </StyledContainerText>
          </>
        )}
      </StyledContainer>
    </>
  );
};

export default memo(Header);
