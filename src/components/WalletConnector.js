import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

const WalletConnector = () => {
    return (
        <div className="flex justify-center mt-6">
            <WalletMultiButton className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:bg-blue-700 hover:scale-105 active:scale-95" />
        </div>
    );
};

export default WalletConnector;