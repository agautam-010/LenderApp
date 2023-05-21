import React, {useEffect, useState} from 'react';
import {
  Container,
  Wrap,
  Input,
  Button,
  Link,
  Typography,
  Row,
  RadioBox,
} from 'src/common';
import {useAppProvider} from 'src/contexts/AppContext';
import {SPINNER_TYPE, API_METHODS} from 'lib/constants';
import {colors, ENUMS} from 'src/lib';
import {formInitialValues, isSignupFormValid, FormDataTypes} from './helper';
import GlobalStyle from 'lib/globalStyle';
import {navigate} from 'navigators/utils';
import {ROUTES} from 'src/navigators';
import {API, ResponseProps} from 'lib/services';

export default function Registration() {
  const {setSpinner} = useAppProvider();
  const [state, setState] = useState<FormDataTypes>(formInitialValues);
  const [valid, setValid] = useState<string>(ENUMS.BUTTON_TYPES.DISABLED);

  const registerUser = async () => {
    setSpinner({status: true, type: SPINNER_TYPE.SUBMITTING});
    const userInfo = JSON.parse(JSON.stringify(state));
    userInfo.gender = state.gender == 1 ? 'Male' : 'Female';
    const response = await API('/user', {
      method: API_METHODS.POST,
      body: userInfo,
    });
    setSpinner({status: false});
    if (response.success) navigate(ROUTES.LOGIN);
  };

  useEffect(() => {
    isSignupFormValid(state)
      ? setValid(ENUMS.BUTTON_TYPES.PRIMARY)
      : setValid(ENUMS.BUTTON_TYPES.DISABLED);
  }, [state]);

  return (
    <Container
      footer={false}
      scroll
      scrollViewStyle={{flex: 1, ...GlobalStyle.centerItem}}>
      <Wrap autoMargin={false} style={{width: '100%'}}>
        <Input
          label="Full Name"
          onChange={fullName => setState({...state, fullName})}
          value={state.fullName}
          placeholder="Enter full name"
          // labelColor={colors.theme.primary}
        />
        <Input
          label="Email"
          onChange={email => setState({...state, email})}
          value={state.email}
          placeholder="Enter your email"
          // labelColor={colors.theme.primary}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <RadioBox
          data={[
            {name: 'Male', value: 1},
            {name: 'Female', value: 2},
          ]}
          onSelection={gender => setState({...state, gender})}
          style={{width: 80, alignItems: 'center'}}
          selected={state.gender}
        />

        <Input
          label="Password"
          onChange={password => setState({...state, password})}
          value={state.password}
          placeholder="Enter your password"
          // labelColor={colors.theme.primary}
          secureTextEntry
        />

        <Wrap>
          <Button
            title={ROUTES.REGISTRATION}
            onPress={registerUser}
            type={
              valid !== ENUMS.BUTTON_TYPES.DISABLED
                ? ENUMS.BUTTON_TYPES.PRIMARY
                : ENUMS.BUTTON_TYPES.DISABLED
            }
          />
          <Row style={{justifyContent: 'center'}}>
            <Typography
              text={`Already have an account? `}
              // color={colors.white}
            />
            <Link title={ROUTES.Root} onPress={() => navigate(ROUTES.LOGIN)} />
          </Row>
        </Wrap>
      </Wrap>
    </Container>
  );
}
