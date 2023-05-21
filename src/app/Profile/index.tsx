import React from 'react';
import {
  Container,
  Wrap,
  Button,
  Card,
  Avtar,
  VectorIcon,
  OrSeperator,
} from 'src/common';
import {colors} from 'src/lib';
import {images} from 'lib/images';
import styles from './styles';
import {useAppProvider} from 'lib/hooks';
import {getRow} from './helper';
import {navigate} from 'navigators/utils';
import {ROUTES} from 'src/navigators';

export default function Profile() {
  const {authData, signOut} = useAppProvider();

  return (
    <Container scroll>
      <Card style={styles.card}>
        <Avtar
          imageUri={images.womenProfile}
          size={100}
          containerStyle={{position: 'absolute', top: -50}}
        />
        <Wrap
          style={{
            paddingHorizontal: 20,
            marginTop: 50,
            marginBottom: 50,
          }}>
          {getRow(
            authData?.fullName,
            <VectorIcon name="user" color={colors.white} />,
          )}
          {getRow(
            authData?.email,
            <VectorIcon name="mail" color={colors.white} />,
          )}
          {getRow(
            authData?.gender,
            <VectorIcon
              name="male-female"
              color={colors.white}
              iconPack="Foundation"
            />,
          )}
        </Wrap>
      </Card>
      <OrSeperator title="more" />
      <Wrap style={styles.btnWrap}>
        <Button
          title="Update Profile"
          onPress={() => navigate(ROUTES.UpdateProfile)}
        />
        <Button
          title="Change Password"
          onPress={() => navigate(ROUTES.ChangePassword)}
          style={styles.button}
        />
        <Button
          title="Themes"
          onPress={() => navigate(ROUTES.Themes)}
          style={styles.button}
        />
        <Button title="Logout" onPress={signOut} style={styles.button} />
      </Wrap>
    </Container>
  );
}
