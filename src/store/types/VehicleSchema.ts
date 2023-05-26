import {Vehicle} from "../../entities/Vehicle/model/types/vehicle";

type SortOrder = 'asc' | 'desc';

export interface VehicleSchema {
    isLoading?: boolean;
    error?: string;
    vehicles?: Vehicle[];
}
