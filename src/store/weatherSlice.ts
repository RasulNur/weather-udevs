import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CoordsType } from "../types/types";

export interface WeatherSliceState {
    localCoords: CoordsType | undefined;
}

const initialState: WeatherSliceState = {
    localCoords: undefined,
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setLocalCoords: (state, action: PayloadAction<CoordsType>) => {
            state.localCoords = action.payload;
        },
    },
});

export const { setLocalCoords } = weatherSlice.actions;

export default weatherSlice.reducer;
