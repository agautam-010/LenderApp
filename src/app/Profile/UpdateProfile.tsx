import React, {useEffect, useState} from 'react';
import {
  Container,
  Wrap,
  Input,
  Button,
  RadioBox,
  Avtar,
  TouchableRipple,
} from 'src/common';
import {useAppProvider} from 'src/contexts/AppContext';
import {ENUMS} from 'src/lib';
import {isSignupFormValid, FormDataTypes} from '../Auth/helper';
import {GENDERS, getGender} from './helper';
import GlobalStyle from 'lib/globalStyle';
import {ROUTES} from 'src/navigators';
import {API, ResponseProps, SPINNER_TYPE, API_METHODS} from 'lib/services';
import {images} from 'lib/images';

export default function UpdateProfile() {
  const {setSpinner, authData} = useAppProvider();
  const [state, setState] = useState<FormDataTypes>({
    ...authData,
    gender: getGender(authData?.gender),
  });
  const [valid, setValid] = useState<string>(ENUMS.BUTTON_TYPES.DISABLED);

  const registerUser = async () => {
    // setSpinner({status: true, type: SPINNER_TYPE.SUBMITTING});
    // const userInfo = JSON.parse(JSON.stringify(state));
    // userInfo.gender = state.gender == 1 ? 'Male' : 'Female';
    // const response = await API('/user', {
    //   method: API_METHODS.POST,
    //   body: userInfo,
    // });
    // setSpinner({status: false});
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
      <TouchableRipple onPress={() => console.log('Implement image crop lib')}>
        <Avtar imageUri={images.womenProfile} size={100} />
      </TouchableRipple>
      <Wrap autoMargin={false} style={{width: '100%'}}>
        <Input
          label="Full Name"
          onChange={fullName => setState({...state, fullName})}
          value={state.fullName}
          placeholder="Enter full name"
        />
        <Input
          label="Email"
          onChange={email => setState({...state, email})}
          value={state.email}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          editable={false}
        />
        <RadioBox
          data={GENDERS}
          onSelection={gender => setState({...state, gender})}
          style={{width: 100, alignItems: 'center'}}
          selected={state.gender}
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
        </Wrap>
      </Wrap>
    </Container>
  );
}
