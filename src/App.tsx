import React from 'react';

import './App.css';
import Landing from './modules/landing/Landing';
import BaseLayout from './components/base/layouts/BaseLayout';
import AppProviders from './modules/app/AppProviders';

function App() {
  return (
    <React.Fragment>
      <AppProviders>
        <BaseLayout>
          <Landing />
        </BaseLayout>
      </AppProviders>
    </React.Fragment>
  );
}

export default App;
