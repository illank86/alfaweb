import React from 'react';
import { Provider } from 'mobx-react';

import store from './store/store';
import Home from './components/home';

const stores = { store }

export default () => (
<Provider {...stores}>
  <Home />
</Provider>
);