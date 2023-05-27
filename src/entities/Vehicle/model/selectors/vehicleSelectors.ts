import { StateSchema } from '../../../../store/StateSchema';

export const getVehiclesData = (state: StateSchema) => state.vehicles?.vehicles;
