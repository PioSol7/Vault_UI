import React from 'react';
import { WalletContextProvider } from './context/WalletContext';
import WalletConnector from './components/WalletConnector';
import Deposit from './components/Deposit';
import TradingSignals from './components/TradingSignals';

function App() {
  return (
    <WalletContextProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <div className="max-w-2xl w-full">
          <WalletConnector />
          <Deposit />
          <TradingSignals strategyId="40d69252-eff0-4caf-920a-ffbbf6de81c7" />
        </div>
      </div>
    </WalletContextProvider>
  );
}

export default App;