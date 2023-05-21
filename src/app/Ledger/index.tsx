import React, {useEffect, useRef} from 'react';
import {
  Container,
  Wrap,
  Button,
  Typography,
  Card,
  Row,
  FlatList,
  MonthPicker,
  TochableWrap,
} from 'src/common';
import {colors} from 'src/lib';
import {TNSX_TYPE, getAmount, getSum, isCreditTnsx} from './helper';
import styles from './style';
import {PickerProps} from 'lib/types';
import {useAppProvider} from 'src/contexts/AppContext';
import {navigate} from 'navigators/utils';
import {ROUTES} from 'src/navigators';
import {PickerRefDefVal} from 'lib/constants';
import {useTransactions} from 'src/contexts/Ledger';

const Ledger = () => {
  const pickerRef = useRef<PickerProps>(PickerRefDefVal);
  const {transactions, count, getTransactions} = useTransactions();

  const debitedTnsx = transactions.filter(tnsx =>
    TNSX_TYPE.DEBIT.includes(tnsx.tnsxType),
  );
  const creditededTnsx = transactions.filter(tnsx =>
    TNSX_TYPE.CREDIT.includes(tnsx.tnsxType),
  );

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <Container>
      <Card style={styles.headerCard}>
        <Row autoMargin={false}>
          <Typography
            text={getAmount(getSum(creditededTnsx))}
            fw="bold"
            size={22}
            color={colors.green}
            letterSpacing={false}
          />
          <Typography
            text={getAmount(getSum(debitedTnsx))}
            fw="bold"
            size={22}
            color={colors.red}
            letterSpacing={false}
          />
        </Row>
        <Row style={styles.row}>
          <Typography text="You Will Give" fw="600" />
          <Typography text="You Will Get" fw="600" />
        </Row>
        <Wrap style={styles.btnWrap}>
          <Button
            title="Filter"
            onPress={() => pickerRef?.current.show()}
            style={styles.button}
          />
        </Wrap>
      </Card>
      <Card style={styles.itemCard}>
        <FlatList
          data={transactions}
          renderItem={({item, index}) => {
            const marginBottom = index === count - 1 ? {marginBottom: 250} : {};
            return (
              <TochableWrap
                onPress={() =>
                  navigate(ROUTES.LEND_AND_BORROW, {transaction: item})
                }
                style={{marginTop: index ? 40 : 0, ...marginBottom}}>
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
      <MonthPicker
        customRef={pickerRef}
        onConfirm={data => console.log(data)}
      />
    </Container>
  );
};

export default Ledger;
