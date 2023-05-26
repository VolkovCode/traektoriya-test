import { StateSchema } from '../../../../store/StateSchema';

export const getVehiclesData = (state: StateSchema) => state.vehicles?.vehicles;
export const getPostsSortParams = (state: StateSchema) => state.vehicles?.sortParams;
