import { configureStore } from '@reduxjs/toolkit';
import { ThunkExtraArg } from './StateSchema';
import { api } from '../api/api';
import { vehicleReducer } from "../entities/Vehicle/model/slices/vehicleSlice";

const extraArg: ThunkExtraArg = {
    api,
};

export const store = configureStore({
    reducer: {
        vehicles: vehicleReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: extraArg,
        },
    }),
});

export type AppDispatch = typeof store.dispatch
