import React, { useState } from 'react';
import SplashScreen from './app/screens/SplashScreen';
import Providers from './app/navigators';

const App = () => {
  const [splashFinished, setSplashFinished] = useState(false);

  const handleSplashFinish = () => {
    setSplashFinished(true);
  };

  console.log('PepperSpray is executed by Soham.');
  
  return (
    <>
      <SplashScreen onFinish={handleSplashFinish} />
      {splashFinished && <Providers />}
    </>
  );
};

export default App;
