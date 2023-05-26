import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '../../../../../store/StateSchema';
import { Vehicle } from "../../types/vehicle";

export const fetchVehicleList = createAsyncThunk<
    Vehicle[],
    void,
    ThunkConfig<string>
    >(
      'Vehicle/fetchVehicleList',
      async (props, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
          const response = await extra.api.get<Vehicle[]>('/vehicles');

          if (!response.data) {
            throw new Error();
          }
          return response.data;
        } catch (e) {
          return rejectWithValue('error');
        }
      },
    );
