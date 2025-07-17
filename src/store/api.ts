import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CityType, UserDataType, WeatherDataType } from "../types/types";

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const IP_API_KEY = import.meta.env.VITE_IP_API_KEY;

export const api = createApi({
    reducerPath: "api",
    tagTypes: ["Weather", "User Data"],

    baseQuery: fetchBaseQuery({}),
    refetchOnMountOrArgChange: true,

    endpoints: (builder) => ({
        getUserData: builder.query<UserDataType, void>({
            query: () =>
                `https://api.ipgeolocation.io/ipgeo?apiKey=${IP_API_KEY}&fields=geo&excludes=ip,country_code2,country_code3,country_name,district,state_code,state_prov,zipcode`,
        }),
        getWeather: builder.query<WeatherDataType, { lat: string; lng: string }>({
            query: ({ lat, lng }) =>
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric&lang=ru`,
        }),
        getWeatherByCity: builder.query<WeatherDataType, string>({
            query: (keyword) =>
                // `http://api.openweathermap.org/geo/1.0/direct?q=${keyword}&limit=5&appid=${WEATHER_API_KEY}`,
                `https://api.openweathermap.org/data/2.5/weather?q=${keyword}&appid=${WEATHER_API_KEY}&units=metric&lang=ru`,
        }),
        getCities: builder.query<CityType[], string>({
            query: (keyword) =>
                `http://api.openweathermap.org/geo/1.0/direct?q=${keyword}&limit=8&appid=${WEATHER_API_KEY}&lang=ru`,
        }),
    }),
});
export const { useGetUserDataQuery, useGetWeatherQuery, useGetWeatherByCityQuery, useGetCitiesQuery } = api;
