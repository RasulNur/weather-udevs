import { gradients } from "../constants/gradients";
import type { ContentProps } from "../types/props.types";
import type { WeatherMainType } from "../types/types";
import getFormattedCurrentDate from "../utils/getFormattedCurrentDate";
import IconWrapper from "./IconWrapper";

export default function Content({ currentWeather, setCoords, userData }: ContentProps) {
    return (
        <div className="content-wrapper">
            <button
                type="button"
                className="reset-btn"
                onClick={() => {
                    setCoords({
                        lat: Number(userData.latitude),
                        lng: Number(userData.longitude),
                    });
                }}>
                Погода в моем городе
            </button>
            <div
                className="content-bg"
                style={{
                    background:
                        gradients[(currentWeather?.weather[0].main.toLowerCase() as WeatherMainType) || "default"],
                }}></div>

            <div className="content">
                <div className="content-subwrapper">
                    <div className="temp">{currentWeather?.main.temp ? currentWeather?.main.temp.toFixed(0) : 0}°</div>
                    <div className="icon-wrapper-mobile">
                        <IconWrapper currentWeather={currentWeather} />
                    </div>
                </div>
                <div className="content-subwrapper">
                    <div className="info">
                        <h3 className="city">
                            {currentWeather?.name ? currentWeather?.name : <span className="text-skeleton">text</span>}
                        </h3>
                        <p className="time">{getFormattedCurrentDate(new Date())}</p>
                    </div>
                    <div className="icon-wrapper-desktop">
                        <IconWrapper currentWeather={currentWeather} />
                    </div>
                </div>
            </div>
        </div>
    );
}
