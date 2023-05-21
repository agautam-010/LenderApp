import React from 'react';
import {FlatList as NativeFlatList} from 'react-native';
import NoRecordFound from './NoRecordFound';
import {Wrap} from './Container';

interface FlatListExtraTypes {
  noDataMsg?: string;
  noDataTitle?: string;
  onRetry?: () => void;
}

type FlatListTypes = NativeFlatList['props'] & FlatListExtraTypes;

const FlatList = ({...rest}: FlatListTypes) => {
  const onRetryPress = () => rest?.onRetry && rest.onRetry();
  const retryBtn = rest?.onRetry ? {buttonLabel: 'Reload'} : {};
  return (
    <NativeFlatList
      {...rest}
      keyExtractor={(item, index) =>
        item?.id ? item.id.toString() : `item_${index}`
      }
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        <Wrap>
          <NoRecordFound
            title={rest?.noDataTitle || 'No data found'}
            description={
              rest?.noDataMsg || 'No data found for requested resource.'
            }
            onPress={onRetryPress}
            {...retryBtn}
          />
        </Wrap>
      }
    />
  );
};

export {FlatList};
