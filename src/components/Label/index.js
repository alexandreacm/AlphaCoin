import React, { memo } from 'react';
import styled from 'styled-components/native';

import { handlePixels } from '@/helpers/functions/utils';
import useFontFamily from '@/hooks/useFontFamily';

const Label = ({
  numberOfLines,
  width,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  color,
  fontWeight,
  fontSize,
  textAlign,
  textDecoration,
  children,
  textTransform,
  lineHeight,
  onPress,
  hidden
}) => (
  <StyledContainer hidden={hidden}>
    <StyledLabel
      onPress={onPress}
      textTransform={textTransform}
      numberOfLines={numberOfLines}
      width={width}
      hidden={hidden}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginRight={marginRight}
      marginLeft={marginLeft}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingRight={paddingRight}
      paddingLeft={paddingLeft}
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
      textAlign={textAlign}
      textDecoration={textDecoration}
      lineHeight={lineHeight}
    >
      {children}
    </StyledLabel>
  </StyledContainer>
);

export const StyledLabel = styled.Text`
  width: ${({ width }) => handlePixels(width)};
  margin-top: ${({ marginTop }) => handlePixels(marginTop)};
  margin-bottom: ${({ marginBottom }) => handlePixels(marginBottom)};
  margin-left: ${({ marginLeft }) => handlePixels(marginLeft)};
  margin-right: ${({ marginRight }) => handlePixels(marginRight)};
  padding-top: ${({ paddingTop }) => handlePixels(paddingTop)};
  padding-bottom: ${({ paddingBottom }) => handlePixels(paddingBottom)};
  padding-left: ${({ paddingLeft }) => handlePixels(paddingLeft)};
  padding-right: ${({ paddingRight }) => handlePixels(paddingRight)};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  text-decoration: ${({ textDecoration }) => textDecoration};
  text-transform: ${({ textTransform }) => textTransform};
  font-size: ${({ fontSize }) => handlePixels(fontSize)};
  font-family: ${({ fontWeight }) => useFontFamily(fontWeight)};
  line-height: ${({ lineHeight }) => handlePixels(lineHeight)};
`;

export const StyledContainer = styled.View`
  border-radius: ${({ hidden }) => (hidden ? 30 : 0)}px;
  background-color: ${({ hidden, theme: { colors } }) =>
    hidden ? colors.LABEL_HIDDEN : 'transparent'};
`;

export default memo(Label);
