import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Routes from './Navigation/RootRouter';
import {store, persistor} from './Store/config';

const App = () => {
   return (
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <Routes />
         </PersistGate>
      </Provider>
   );
};

export default App;
