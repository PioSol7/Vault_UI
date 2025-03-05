import axios from 'axios';

const API_URL = 'https://u2z22mrtsz.eu-west-2.awsapprunner.com/signals/';

export const getTradingSignal = async (strategyId) => {
    try {
        const response = await axios.get(`${API_URL}${strategyId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching trading signal:', error);
        throw error;
    }
};
