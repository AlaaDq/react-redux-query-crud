import { Provider } from 'react-redux';
import { store } from '../redux/store';

export const StoreProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
