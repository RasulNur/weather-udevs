import type { IconWrapperProps } from "../types/props.types";

export default function IconWrapper({ currentWeather }: IconWrapperProps) {
    return (
        <div className="icon-wrapper">
            {currentWeather?.weather[0].icon ? (
                <img
                    src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}.png`}
                    className="icon"
                    alt=""
                />
            ) : (
                <div className="icon skeleton"></div>
            )}

            <h5 className="title">
                {currentWeather?.weather[0].description[0] ? (
                    `${currentWeather?.weather[0].description[0].toUpperCase()}${currentWeather?.weather[0].description.slice(
                        1,
                    )}`
                ) : (
                    <span className="text-skeleton">text</span>
                )}
            </h5>
        </div>
    );
}
