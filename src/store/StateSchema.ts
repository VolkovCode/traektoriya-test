import { AxiosInstance } from 'axios';
import { VehicleSchema } from './types/VehicleSchema';

export interface StateSchema {
    vehicles?: VehicleSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
