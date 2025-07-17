import type { CoordsType, UserDataType, WeatherDataType } from "./types";

export type DetailItemProps = { title: string; value: string };

export type DetailsProps = { currentWeather: WeatherDataType | undefined };

export type SearchProps = { setCoords: React.Dispatch<React.SetStateAction<CoordsType>> };

export type ContentProps = {
    currentWeather: WeatherDataType | undefined;
    setCoords: React.Dispatch<React.SetStateAction<CoordsType>>;
    userData: UserDataType;
};

export type WeatherProps = { userData: UserDataType };

export type IconWrapperProps = { currentWeather: WeatherDataType | undefined };

export type CityBtnProps = {
    lat: number;
    lng: number;
    name: string;
    setCoords: React.Dispatch<React.SetStateAction<CoordsType>>;
};
