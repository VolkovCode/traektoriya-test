import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VehicleSchema } from "../../../../store/types/VehicleSchema";
import { fetchVehicleList } from "../services/fetchVehicleList/fetchVehicleList";
import { Vehicle } from "../types/vehicle";

const initialState: VehicleSchema = {
  isLoading: false,
  error: undefined,
  vehicles: [],
};

const vehicleSlice = createSlice({
  name: 'vehicleSlice',
  initialState,
  reducers: {
    setVehiclesSortParams: (state: VehicleSchema, action: PayloadAction<string>) => {
      const sortName = action.payload.split(' ')[0] // по какому полю сортировка цена / год выпуска
      const order = action.payload.split(' ')[1] // направление сортировки asc / desc
      if (sortName === 'price') {
          if (order === 'desc') {
            state.vehicles = state.vehicles.sort((prevVehicle, nextVehicle) => nextVehicle.price - prevVehicle.price);
          } else {
            state.vehicles = state.vehicles.sort((prevVehicle, nextVehicle) => prevVehicle.price - nextVehicle.price);
          }
      } else if (sortName === 'year') {
        if (order === 'desc') {
          state.vehicles = state.vehicles.sort((prevVehicle, nextVehicle) => nextVehicle.year - prevVehicle.year);
        } else {
          state.vehicles = state.vehicles.sort((prevVehicle, nextVehicle) => prevVehicle.year - nextVehicle.year);
        }
      }
    },
    updateVehicleCard: (state: VehicleSchema, action: PayloadAction<Vehicle>) => {
      state.vehicles = state.vehicles.map((vehicle) => {
            if (vehicle.id === action.payload.id) {
              vehicle = {
                ...vehicle,
                ...action.payload
              }
            }
            return vehicle
          }
      )
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicleList.pending, (state:VehicleSchema) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchVehicleList.fulfilled, (state:VehicleSchema, action: PayloadAction<Vehicle[]>) => {
        state.isLoading = false;
        state.vehicles = action.payload;
      })
      .addCase(fetchVehicleList.rejected, (state:VehicleSchema, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: vehicleActions } = vehicleSlice;
export const { reducer: vehicleReducer } = vehicleSlice;
