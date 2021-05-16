import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

const reducer = {
  counter: counterReducer,
}

const preloadedState = {
  total: {
    cost: {
      rub: 343073.13,
      usd: 4635.34,
    },
    profit: {
      rub: 35773.62,
      percent: 10.43,
    },
    annualRateOfReturn: 27.54,
    changesPerDay: {
      rub: 728.78,
      percent: 0.23,
    }
  },
  assets: {
  }
}
export const store = configureStore({
  reducer
});
