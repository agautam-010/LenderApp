import React, {useEffect, useState} from 'react';
import {
  Container,
  Wrap,
  Input,
  Button,
  OrSeperator,
  RadioBox,
} from 'src/common';
import {API} from 'src/lib';
import {BUTTON_TYPES} from 'lib/enums';
import {
  formInitialValues,
  isFormValid,
  tnxnTypeArray,
  tnxnMediumArray,
  formatDate,
} from './helper';
import {useAppProvider} from 'src/contexts/AppContext';
import {SPINNER_TYPE} from 'lib/constants';
import {TransactionProps} from 'lib/types';
import {useTransactions} from 'src/contexts/Ledger';

const LendAndBorrow = ({route}: any) => {
  const {setTransaction} = useTransactions();
  const [state, setState] = useState<TransactionProps>(
    route.params?.transaction ? route.params?.transaction : formInitialValues,
  );
  const {authData, setSpinner} = useAppProvider();
  const [valid, setValid] = useState<string>(BUTTON_TYPES.DISABLED);

  const addTransaction = async () => {
    setSpinner({status: true, type: SPINNER_TYPE.SUBMITTING});
    const res = await API('/transaction', {
      method: 'POST',
      body: {
        ...state,
        personId: authData?.id,
        dateTime: formatDate(new Date()),
      },
    });
    if (res.success) {
      setState(formInitialValues);
      setTransaction(res.data as TransactionProps, state.id);
    }
    setSpinner({status: false});
  };

  useEffect(() => {
    isFormValid(state)
      ? setValid(BUTTON_TYPES.PRIMARY)
      : setValid(BUTTON_TYPES.DISABLED);
  }, [state]);

  return (
    <Container scroll>
      <Wrap autoMargin={false}>
        {/* <Input
          label="Select Person"
          onChange={personId => setState({...state, personId})}
          value={state.personId}
          placeholder="selected person"
          
        />
        <OrSeperator /> */}
        <Input
          label="Name"
          onChange={name => setState({...state, name})}
          value={state.name}
          placeholder="Person Name"
        />
        <Input
          label="Amount"
          onChange={amount => setState({...state, amount: parseInt(amount)})}
          value={state.amount ? state.amount.toString() : ''}
          placeholder="Amount in rupees"
          keyboardType="decimal-pad"
        />
        <Input
          label="Notes"
          onChange={note => setState({...state, note})}
          value={state.note}
          placeholder="Note can contain maxium 300 words"
          multiline
        />
        <RadioBox
          data={tnxnTypeArray}
          onSelection={tnsxType => setState({...state, tnsxType})}
          style={{alignItems: 'center'}}
          selected={state.tnsxType}
        />
        <Input
          label="Transaction No"
          onChange={tnsxNo => setState({...state, tnsxNo})}
          value={state.tnsxNo}
          placeholder="Transaction number from the app used to recieve or send"
        />
        <RadioBox
          data={tnxnMediumArray}
          onSelection={id => setState({...state, tnsxMedium: id})}
          style={{width: 90, alignItems: 'center', marginTop: 20}}
          textStyle={{fontSize: 12}}
          selected={state.tnsxMedium}
        />
        <Wrap style={{marginBottom: 20}}>
          <Button
            title="Save"
            onPress={addTransaction}
            type={valid !== BUTTON_TYPES.DISABLED ? 'primary' : 'disabled'}
          />
        </Wrap>
      </Wrap>
    </Container>
  );
};

export default LendAndBorrow;
