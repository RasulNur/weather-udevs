import { useEffect, useState } from "react";
import { useGetWeatherQuery } from "../store/api";
import type { CoordsType, WeatherMainType } from "../types/types";
import Search from "./Search";
import Details from "./Details";
import Content from "./Content";
import { gradients } from "../constants/gradients";
import type { WeatherProps } from "../types/props.types";
import { setLocalCoords } from "../store/weatherSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

export default function Weather({ userData }: WeatherProps) {
    const dispatch = useAppDispatch();
    const { localCoords } = useAppSelector((state) => state.weather);
    const [coords, setCoords] = useState<CoordsType>({
        lat: localCoords ? localCoords.lat : Number(userData.latitude),
        lng: localCoords ? localCoords.lng : Number(userData.longitude),
    });
    console.log({ userData });

    const { data: currentWeather } = useGetWeatherQuery({
        lat: String(coords.lat),
        lng: String(coords.lng),
    });

    useEffect(() => {
        dispatch(setLocalCoords(coords));
    }, [coords]);

    return (
        <main
            style={{
                background: gradients[(currentWeather?.weather[0].main.toLowerCase() as WeatherMainType) || "default"],
            }}>
            <div className="wrapper">
                <Content currentWeather={currentWeather} setCoords={setCoords} userData={userData} />

                <div className="sidebar">
                    <Search setCoords={setCoords} />

                    <Details currentWeather={currentWeather} />
                </div>
            </div>
        </main>
    );
}
