import React, {useEffect} from 'react';
import {
  Container,
  Typography,
  Card,
  Row,
  FlatList,
  TochableWrap,
  Button,
  VectorIcon,
} from 'src/common';
import {colors} from 'src/lib';
import {isCreditTnsx, getAmount} from '../Ledger/helper';
import styles from '../Ledger/style';
import {navigate} from 'navigators/utils';
import {ROUTES} from 'src/navigators';
import {useTransactions} from 'src/contexts/Ledger';
import {normalize} from 'lib/functions';
import GlobalStyle from 'lib/globalStyle';

const Ledger = () => {
  const {transactions, count, getTransactions} = useTransactions();

  useEffect(() => {
    !count && getTransactions();
  }, []);

  return (
    <Container>
      <Card
        style={{...styles.itemCard, height: normalize(500, 'height')}}
        autoMargin={false}>
        <FlatList
          data={transactions}
          renderItem={({item, index}) => {
            return (
              <TochableWrap
                onPress={() =>
                  navigate(ROUTES.LEND_AND_BORROW, {transaction: item})
                }
                style={{marginTop: index ? 40 : 0}}>
                <Row autoMargin={false}>
                  <Typography text={item.name} fw="bold" size={16} />
                  <Typography
                    text={getAmount(item?.amount || 0)}
                    fw="700"
                    size={16}
                    color={
                      isCreditTnsx(item.tnsxType) ? colors.green : colors.red
                    }
                  />
                </Row>
                <Row style={styles.listItemBottom}>
                  <Typography
                    text={item.dateTime}
                    fw="bold"
                    color={colors.grey}
                    style={{width: 120}}
                  />
                  <Typography text={item.tnsxNo} fw="700" color={colors.grey} />
                </Row>
              </TochableWrap>
            );
          }}
          onRetry={getTransactions}
        />
      </Card>
      <Button
        onPress={() => navigate(ROUTES.LEND_AND_BORROW)}
        style={GlobalStyle.globalStyle.addNewBtn}>
        <VectorIcon iconPack="Feather" name="plus" />
      </Button>
    </Container>
  );
};

export default Ledger;
