import styled from 'styled-components/native';

import useFontFamily from '@/hooks/useFontFamily';
import { handlePixels } from '@/helpers/functions/utils';

import colors from '@/theme/colors';
import spacings from '@/theme/spacings';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

const StyledContainer = styled.View`
  flex: 1;
  background-color: ${colors.WHITE};
`;

const StyledHeader = styled.View`
  width: 100%;
  height: 65px;
  flex-direction: row;
  background: ${({ color }) => color};
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 16px 8px;
`;

const StyledButtonFilter = styled.TouchableOpacity`
  width: 20%;
  height: 40px;
  background: ${colors.SUCCESS};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-left: 10px;
`;

const StyledViewAreaInput = styled.View`
  width: 80%;
  height: 40px;
  background: ${colors.WHITE};
  border-radius: 8px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const StyledIcon = styled(IconMaterial)`
  width: 10%;
  margin-left: 10px;
`;

const StyledActivityIndicator = styled.ActivityIndicator`
  margin-top: 32px;
  margin-bottom: 32px;
`;

const StyledLabelText = styled.Text`
  font-size: 14px;
  color: ${colors.WHITE};
  font-family: ${({ fontWeight }) => useFontFamily(fontWeight)};
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

const StyledContainerRender = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-bottom: 1px;
  border-bottom-color: ${colors.WHITE};
`;

const StyledContainerLeft = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

const StyledEmptyListContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.Image`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;

const StyledEmptyList = styled.View`
  width: 100%;
  height: 300px;
  justify-content: center;
  align-items: center;
`;

const StyledEmptyListView = styled.View`
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
`;

const StyledEmptyListText = styled.Text`
  font-size: 16px;
  color: ${colors.WHITE};
  font-family: ${useFontFamily(500)};
`;

const StyledFlatList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingVertical: spacings.EXTRA_SMALL
  }
})`
  background-color: ${colors.PRIMARY};
`;

const StyledViewRenderItem = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-bottom-color: ${colors.WHITE};
`;

const StyledRenderItemLeft = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

const StyledRenderItemRight = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`;

const StyledRenderItemText = styled.View`
  width: 80px;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledRenderItemTextRight = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;

const StyledNoInternetView = styled.View`
  width: 100%;
  height: 40px;
  background-color: ${colors.DANGER};
  justify-content: center;
  align-items: center;
  opacity: 0.7;
`;

const StyledNoInternetText = styled.Text`
  font-size: 14px;
  color: ${colors.WHITE};
  font-family: ${useFontFamily(500)};
`;

export {
  StyledContainer,
  StyledHeader,
  StyledButtonFilter,
  StyledIcon,
  StyledViewAreaInput,
  StyledActivityIndicator,
  StyledLabelText,
  StyledLabel,
  StyledContainerRender,
  StyledContainerLeft,
  StyledEmptyListContainer,
  StyledImage,
  StyledEmptyList,
  StyledEmptyListView,
  StyledEmptyListText,
  StyledFlatList,
  StyledViewRenderItem,
  StyledRenderItemLeft,
  StyledRenderItemText,
  StyledRenderItemTextRight,
  StyledRenderItemRight,
  StyledNoInternetView,
  StyledNoInternetText
};
