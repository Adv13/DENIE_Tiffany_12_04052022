/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event'
import {App, LocationDisplay} from './app'

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




///////////////////////////////////////////////////////////////////

// test('When I click on Profil 12, I expect this profile to be loaded.', async () => {
//   const history = createMemoryHistory()
//   render(
//     <Router location={history.location} navigator={history}>
//       <App />
//     </Router>,
//   )
//   const user = userEvent.setup()
//   // verify page content for expected route
//   // often you'd use a data-testid or role query, but this is also possible
//   expect(screen.getByText(/Go to user/i)).toBeInTheDocument()

//   await user.click(screen.getByText(/Profil 12/i))

//   // check that the content changed to the new page
//   expect(screen.getByText(/Bonjour Karl/i)).toBeInTheDocument()
// })

// test('When I click on Profil 18, I expect this profile to be loaded.', async () => {
//   const history = createMemoryHistory()
//   render(
//     <Router location={history.location} navigator={history}>
//       <App />
//     </Router>,
//   )
//   const user = userEvent.setup()
//   // verify page content for expected route
//   // often you'd use a data-testid or role query, but this is also possible
//   expect(screen.getByText(/Go to user/i)).toBeInTheDocument()

//   await user.click(screen.getByText(/Profil 18/i))

//   // check that the content changed to the new page
//   expect(screen.getByText(/Bonjour Cecilia/i)).toBeInTheDocument()
// })

// test('Landing on a bad page', () => {
//   const history = createMemoryHistory()
//   history.push('/some/bad/route')
//   render(
//     <Router location={history.location} navigator={history}>
//       <App />
//     </Router>,
//   )

//   expect(screen.getByText(/404/i)).toBeInTheDocument()
// })

// test('Rendering a component that uses useLocation', () => {
//   const history = createMemoryHistory()
//   const route = '/dashboard/18'
//   history.push(route)
//   render(
//     <Router location={history.location} navigator={history}>
//       <LocationDisplay />
//     </Router>,
//   )

//   expect(screen.getByTestId('location-display')).toHaveTextContent(route)
// })