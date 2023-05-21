import React from 'react';
import {Typography, Row} from 'src/common';

export const getRow = (
  text: string | undefined | JSX.Element,
  icon: JSX.Element,
) => (
  <Row>
    {icon}
    {typeof text === 'string' ? <Typography text={text} size={20} /> : text}
  </Row>
);

export const GENDERS = [
  {name: 'Male', value: 1},
  {name: 'Female', value: 2},
];

export const getGender = (gender: string | undefined) => {
  const found = GENDERS.find(genderObj => genderObj.name === gender);
  return found ? found.value : 1;
};
