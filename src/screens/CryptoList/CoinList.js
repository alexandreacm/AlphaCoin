import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Lottie from 'lottie-react-native';
import Loading from '@/components/Loading';

import {
  StyledLabel as Label,
  StyledEmptyList,
  StyledEmptyListView,
  StyledEmptyListText,
  StyledImage,
  StyledFlatList,
  StyledViewRenderItem,
  StyledRenderItemLeft,
  StyledRenderItemText,
  StyledRenderItemRight,
  StyledRenderItemTextRight
} from './styles';

import { convertToNumber, rateImages } from '@/helpers/functions/utils';
import colors from '@/theme/colors';

import empty from '@/assets/animations/empty-list';
import icDefault from '@/assets/icons/default.png';

const CoinList = ({ data, isLoading }) => {
  const { navigate } = useNavigation();

  const renderEmptyList = () => {
    if (isLoading && !data.length) return;

    return (
      <>
        <StyledEmptyList>
          <Lottie source={empty} loop autoPlay resizeMode='contain' />
          <StyledEmptyListView>
            <StyledEmptyListText>There is no data!</StyledEmptyListText>
          </StyledEmptyListView>
        </StyledEmptyList>
      </>
    );
  };

  function handleNavigate(id) {
    navigate('Chart', { id });
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        handleNavigate(item?.id);
      }}
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: colors.WHITE
      }}
    >
      <StyledRenderItemLeft>
        <StyledImage
          source={rateImages[item?.symbol.toUpperCase()] || icDefault}
        />

        <StyledRenderItemText>
          <Label
            textAlign='center'
            lineHeight={20}
            fontWeight={400}
            fontSize={12}
            color={colors.WHITE}
          >
            Rank: {item?.rank}
          </Label>
          <Label
            textAlign='center'
            lineHeight={20}
            fontWeight={700}
            fontSize={14}
            color={colors.WHITE}
          >
            {item?.symbol}
          </Label>
        </StyledRenderItemText>
      </StyledRenderItemLeft>

      <StyledRenderItemRight>
        <StyledRenderItemTextRight>
          <Label
            textAlign='center'
            fontWeight={700}
            lineHeight={20}
            fontSize={14}
            color={colors.WHITE}
          >
            $
            {convertToNumber(item?.price_usd)
              .toFixed(2)
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
          </Label>
          <Label
            textAlign='center'
            fontWeight={400}
            lineHeight={20}
            fontSize={12}
            color={colors.WHITE}
          >
            {item?.name}
          </Label>
        </StyledRenderItemTextRight>
      </StyledRenderItemRight>
    </TouchableOpacity>
  );

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <StyledFlatList
          data={data}
          ListEmptyComponent={renderEmptyList}
          renderItem={renderItem}
        />
      )}
    </>
  );
};

export default memo(CoinList);
