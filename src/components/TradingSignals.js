import React, { useEffect, useState } from 'react';
import { getTradingSignal } from '../services/api';

const TradingSignals = ({ strategyId }) => {
    const [signal, setSignal] = useState(null);

    useEffect(() => {
        const fetchSignal = async () => {
            try {
                const data = await getTradingSignal(strategyId);
                setSignal(data);
            } catch (error) {
                console.error('Error fetching signals:', error);
            }
        };

        fetchSignal();
    }, [strategyId]);

    return (
        <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Trading Signals</h2>
            {signal ? (
                <div>
                    <p><strong>Last Run:</strong> {signal.data.lastRunAt}</p>
                    <p><strong>Next Run:</strong> {signal.data.nextRunAt}</p>
                    <p><strong>Entry Signals:</strong> {JSON.stringify(signal.data.signal.entry)}</p>
                    <p><strong>Exit Signals:</strong> {JSON.stringify(signal.data.signal.exit)}</p>
                </div>
            ) : (
                <p>Loading signals...</p>
            )}
        </div>
    );
};

export default TradingSignals;