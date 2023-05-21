import React, {useEffect, useState} from 'react';
import {
  Container,
  Wrap,
  Input,
  Button,
  Link,
  Typography,
  Row,
} from 'src/common';
import {useAppProvider} from 'src/contexts/AppContext';
import {API_METHODS, SPINNER_TYPE} from 'lib/constants';
import {colors, ENUMS} from 'src/lib';
import {formInitialValues, isLoginFormValid, FormDataTypes} from './helper';
import GlobalStyle from 'lib/globalStyle';
import {navigate} from 'navigators/utils';
import {API} from 'src/lib';
import {AuthData} from 'src/authServices';
import {Toast} from 'lib/functions';

export default function Login() {
  const {signIn, setSpinner} = useAppProvider();
  const [state, setState] = useState<FormDataTypes>(formInitialValues);
  const [valid, setValid] = useState<string>(ENUMS.BUTTON_TYPES.DISABLED);

  const loginApi = async () => {
    setSpinner({status: true, type: SPINNER_TYPE.SUBMITTING});
    const response = await API('/login', {
      method: API_METHODS.POST,
      body: {email: state.email, password: state.password},
    });
    setSpinner({status: false});
    if (response.success) {
      const finalRes: AuthData = JSON.parse(JSON.stringify(response.data));
      signIn(finalRes);
    } else Toast(response?.message, ENUMS.TOAST_TYPES.ERROR);
    console.log(response);
  };

  useEffect(() => {
    isLoginFormValid(state)
      ? setValid(ENUMS.BUTTON_TYPES.PRIMARY)
      : setValid(ENUMS.BUTTON_TYPES.DISABLED);
  }, [state]);

  return (
    <Container
      // header={false}
      footer={false}
      scroll
      scrollViewStyle={{flex: 1, ...GlobalStyle.centerItem}}>
      <Wrap autoMargin={false} style={{width: '100%'}}>
        <Input
          label="Email"
          onChange={email => setState({...state, email})}
          value={state.email}
          placeholder="Email id"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          label="Password"
          onChange={password => setState({...state, password})}
          value={state.password}
          placeholder="Password"
          secureTextEntry
        />
        <Wrap>
          <Button
            title="Login"
            onPress={loginApi}
            type={
              valid !== ENUMS.BUTTON_TYPES.DISABLED
                ? ENUMS.BUTTON_TYPES.PRIMARY
                : ENUMS.BUTTON_TYPES.DISABLED
            }
          />
          <Row style={{justifyContent: 'center'}}>
            <Typography
              text={`Dont't have an account? `}
              // color={colors.white}
            />
            <Link
              title={`Sign Up`}
              // color={colors.black}
              onPress={() => navigate('Registration')}
            />
          </Row>
        </Wrap>
      </Wrap>
    </Container>
  );
}
