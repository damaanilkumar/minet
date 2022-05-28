import React from 'react';
import {render, screen } from '@testing-library/react';
import Icon from './Icon';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';

test('it should render passed icon', () => {
  render(
  <Icon icon={<CreditCardIcon data-testid='card-id'/>}/>);
  const iconElement = screen.getByTestId('card-id');;
  expect(iconElement).toBeInTheDocument();
});
test('it should render delivery passed icon', () => {
  render(
  <Icon icon={<LocalShippingOutlinedIcon data-testid='card-id'/>}/>);
  const iconElement = screen.getByTestId('card-id');;
  expect(iconElement).toBeInTheDocument();
});
test('it should render expanded passed icon', () => {
  render(
  <Icon icon={<ExpandMoreIcon data-testid='card-id'/>}/>);
  const iconElement = screen.getByTestId('card-id');;
  expect(iconElement).toBeInTheDocument();
});
test('it should render edit passed icon', () => {
  render(
  <Icon icon={<ModeEditIcon data-testid='card-id'/>}/>);
  const iconElement = screen.getByTestId('card-id');;
  expect(iconElement).toBeInTheDocument();
});
test('it should render pie Chart passed icon', () => {
  render(
  <Icon icon={<DonutLargeIcon data-testid='card-id'/>}/>);
  const iconElement = screen.getByTestId('card-id');;
  expect(iconElement).toBeInTheDocument();
});