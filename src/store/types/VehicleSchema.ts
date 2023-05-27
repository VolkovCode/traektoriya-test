import {Vehicle} from "../../entities/Vehicle/model/types/vehicle";

export interface VehicleSchema {
    isLoading?: boolean;
    error?: string;
    vehicles: Vehicle[];
}
