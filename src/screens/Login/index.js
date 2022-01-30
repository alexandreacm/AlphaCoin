import React, { useState, useContext } from 'react';
import { TextInput } from 'react-native';

import {
  StyledContainer,
  StyledLabel as Label,
  StyledContainerImage,
  StyledImage,
  StyledViewAreaInput,
  StyledButtonLogin,
  StyledIcon,
  StyledTextButtonLogin,
  StyledIconUser,
  StyledInput
} from './styles';

import colors from '@/theme/colors';
import icLogo from '@/assets/images/logo.jpg';

import { AuthContext } from '@/contexts/AuthProvider';

export default function Login() {
  const [userName, setUserName] = useState();
  const { SignIn } = useContext(AuthContext);

  return (
    <StyledContainer>
      <StyledContainerImage>
        <StyledImage source={icLogo} width={150} height={150} />
      </StyledContainerImage>
      <StyledViewAreaInput>
        <StyledIconUser>
          <StyledIcon name='user' size={20} color={colors.PLACE_HOLDER} />
        </StyledIconUser>
        <StyledInput>
          <TextInput
            value={userName}
            onChangeText={setUserName}
            placeholder='User name...'
            placeholderTextColor={colors.PLACE_HOLDER}
          />
        </StyledInput>
      </StyledViewAreaInput>
      <StyledButtonLogin
        onPress={() => {
          SignIn(userName);
        }}
      >
        <StyledTextButtonLogin>Login</StyledTextButtonLogin>
      </StyledButtonLogin>
    </StyledContainer>
  );
}
