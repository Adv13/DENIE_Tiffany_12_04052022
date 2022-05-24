/**
 * @jest-environment jsdom
 */

import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import ButtonLogin from './ButtonLogin';
import { createMemoryHistory } from 'history';

const { render } = require("@testing-library/react");
const { createMemoryHistory } = require("history");
const React = require("react");
const { Router } = require("react-router-dom");

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

it("works", () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}></Router>
  );
});




describe('ButtonLogin', () => {
  test('should pass', () => {
    const history = createMemoryHistory({ initialEntries: ['/home'] });
    const { getByText } = render(
      <Router history={history}>
        <ButtonLogin />
      </Router>
    );
    expect(history.location.pathname).toBe('/home');
    fireEvent.click(getByText('Iniciar sesión'));
    expect(history.location.pathname).toBe('/login');
  });
});