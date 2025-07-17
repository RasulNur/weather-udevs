import type { WeatherMainType } from "../types/types";

export const gradients: Record<WeatherMainType, string> = {
    clear: "linear-gradient(to bottom, #fff 0%, #87cefa 40%)",
    clouds: "linear-gradient(to bottom, #66a6ff, #0575e6)",
    rain: "linear-gradient(to bottom, #0575e6, #021b79)",
    thunderstorm: "linear-gradient(to bottom, #485563, #29323c)",
    snow: "linear-gradient(to bottom, #83a4d4, #b6fbff)",
    mist: "linear-gradient(to bottom, #818181, #485563)",
    default: "linear-gradient(to bottom, #1e3c72, #2a5298)",
};
