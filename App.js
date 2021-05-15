// Imports: Dependencies
import React from 'react';
import { Provider } from 'react-redux';

import Counter from './Counter';

import { store } from './Store';


export default function App(){
  return (
    // Redux: Global Store
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
