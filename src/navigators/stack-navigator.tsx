import React from 'react';
import {Stack} from '.';
import SplashScreen from 'app/Splash';
import {Login, Registration, ChangePassword, ForgetPassword} from 'app/Auth';

import Home from 'app/Home';
import AddNote from 'app/Home/AddNote';

import Profile from 'app/Profile';
import UpdateProfile from 'app/Profile/UpdateProfile';

import Transactions from 'app/LendAndBorrow';
import LendAndBorrow from 'app/LendAndBorrow/LendAndBorrow';
import Ledger from 'app/Ledger';
import Chart from 'app/Chart';
import Themes from 'app/Theme';

export const Loading = (
  <>
    <Stack.Screen
      name="SplashScreen"
      component={SplashScreen}
      options={{headerShown: false}}
    />
  </>
);

export const Authentication = (
  <>
    <Stack.Screen
      name="Root"
      component={Login}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Registration"
      component={Registration}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ForgetPassword"
      component={ForgetPassword}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ChangePassword"
      component={ChangePassword}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Themes"
      component={Themes}
      options={{headerShown: false}}
    />
  </>
);

export const RootNavigation = (
  <>
    <Stack.Screen name="Root" component={Home} options={{headerShown: false}} />
    <Stack.Screen
      name="AddNote"
      component={AddNote}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Transactions"
      component={Transactions}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="LendAndBorrow"
      component={LendAndBorrow}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Ledger"
      component={Ledger}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Analytics"
      component={Chart}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Themes"
      component={Themes}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ChangePassword"
      component={ChangePassword}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="UpdateProfile"
      component={UpdateProfile}
      options={{headerShown: false}}
    />
  </>
);
