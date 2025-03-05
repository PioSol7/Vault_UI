import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { depositToVault } from '../services/solana';

const Deposit = () => {
    const { publicKey, sendTransaction } = useWallet();
    const [amount, setAmount] = useState(0);

    const handleDeposit = async () => {
        if (!publicKey) {
            alert('Connect wallet first');
            return;
        }

        try {
            const signature = await depositToVault(publicKey, amount);
            console.log('Deposit successful. Signature:', signature);
        } catch (error) {
            console.error('Deposit failed:', error);
        }
    };

    return (
        <div className="flex flex-col items-center p-6 mt-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Deposit to Vault</h2>
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="px-4 py-2 mb-4 border rounded-lg w-64"
            />
            <button
                onClick={handleDeposit}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg transition-transform transform hover:bg-blue-700 hover:scale-105 active:scale-95"
            >
                Deposit
            </button>
        </div>
    );
};

export default Deposit;