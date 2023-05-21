import React, {useState} from 'react';
import {Container, Button, Input, KeyboardAvoidWrap} from 'src/common';
import {useAppProvider} from 'src/contexts/AppContext';
import Network, {METHODS} from 'src/network';
import {showToastMessage} from 'src/lib/CommonFunctions';
import {navigate} from 'navigators/utils';
import {resetFormInitialValues, validateResetForm} from './helper';
import {TOAST_TYPES} from 'lib/enums';
import Styles from './styles';
import {ROUTES} from 'src/navigators';
import I18n from 'src/lib/transaltions';

export default function ResetPassword(props: any) {
  const {setSpinner} = useAppProvider();
  const [state, setState] = useState(resetFormInitialValues);
  const e_token = props?.route?.params?.data?.email_token;

  const resetPasswordApi = async () => {
    if (!validateResetForm(state)) return;

    state.e_token = e_token;
    setSpinner(true);
    const res = await Network('/changePasswordByToken', METHODS.POST, state);
    if (res.success == true) {
      setSpinner(false);
      showToastMessage(res?.message);
      navigate(ROUTES.Root);
    } else {
      setSpinner(false);
      showToastMessage(res.message, TOAST_TYPES.ERROR);
    }
  };

  return (
    <KeyboardAvoidWrap>
      <Container scroll scrollViewStyle={Styles.scrollView} footer={false}>
        <Input
          label={I18n.t('reset_password.OTP')}
          value={state.token}
          onChange={token => setState({...state, token})}
          placeholder={I18n.t('reset_password.OTP_PLACEHOLDER')}
          keyboardType={'numeric'}
          labelStyles={{fontWeight: 'bold'}}
        />
        <Input
          label={I18n.t('reset_password.NEW_PASSOWRD')}
          value={state.password}
          onChange={password => setState({...state, password})}
          placeholder={I18n.t('reset_password.NEW_PASSOWRD_PLACEHOLDER')}
          secureTextEntry={true}
          keyboardType={'default'}
          labelStyles={{fontWeight: 'bold'}}
        />
        <Input
          label={I18n.t('reset_password.CONFIRM_PASSOWRD')}
          labelStyles={{fontWeight: 'bold'}}
          value={state.cpassword}
          onChange={cpassword => setState({...state, cpassword})}
          placeholder={I18n.t('reset_password.CONFIRM_PASSOWRD_PLACEHOLDER')}
          secureTextEntry={true}
          keyboardType={'default'}
        />
        <Button
          title={I18n.t('reset_password.RESET_BUTTON')}
          style={{marginVertical: 10}}
          onPress={resetPasswordApi}
        />
      </Container>
    </KeyboardAvoidWrap>
  );
}
