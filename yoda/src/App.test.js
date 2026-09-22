import { render, screen } from '@testing-library/react';
import App from './App';
import { PeopleContextProvider } from './context/PeopleContext';

beforeEach(() => {
  // UserSelection fetches the people list on mount; keep the test off the network.
  global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve([]) }));
});

test('renders the header and the choose-profile prompt', async () => {
  render(
    <PeopleContextProvider>
      <App />
    </PeopleContextProvider>
  );

  expect(await screen.findByRole('heading', { name: /hello/i })).toBeInTheDocument();
  expect(screen.getByText(/choose profile/i)).toBeInTheDocument();
});
