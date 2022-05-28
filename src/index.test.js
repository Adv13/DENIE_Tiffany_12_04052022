import { render } from '@testing-library/react';
import App from './App';

test('First render test', () => {
  render(<App />);
  expect(true).toStrictEqual(true);
});

