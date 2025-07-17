export type WeatherDataType = {
    // base?: string;
    clouds: { all: number };
    // cod?: number;
    // coord?: object;
    // dt?: number;
    id: number;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    name: string;
    // sys?: object;
    // timezone?: number;
    // visibility?: number;
    weather: {
        id: 500;
        description: "light rain";
        icon: "10n";
        main: WeatherMainType;
    }[];
    wind: { deg: number; speed: number };
    rain: {
        "1h": number;
    };
};

export type UserDataType = {
    city: string;
    ip: string;
    latitude: string;
    longitude: string;
};

export type WeatherMainType = "clear" | "clouds" | "rain" | "thunderstorm" | "snow" | "mist" | "default";

export type CityType = {
    country: string;
    lat: number;
    local_names: Record<string, string>;
    lon: number;
    name: string;
    state: string;
};

export type CoordsType = { lat: number; lng: number };
