import type { DetailsProps } from "../types/props.types";
import DetailItem from "./DetailItem";

export default function Details({ currentWeather }: DetailsProps) {
    return (
        <div className="info-wrapper">
            <h3 className="title">Детали погоды</h3>

            <ul className="list">
                <DetailItem
                    title="Облачность"
                    value={`${currentWeather && currentWeather.clouds ? currentWeather.clouds.all : 0}%`}
                />

                <DetailItem
                    title="Влажность"
                    value={`${
                        currentWeather && currentWeather.main && currentWeather.main.humidity
                            ? currentWeather.main.humidity
                            : 0
                    }%`}
                />

                <DetailItem
                    title="Ветер"
                    value={`${currentWeather && currentWeather.wind ? currentWeather.wind.speed.toFixed(0) : 0}км/ч`}
                />

                <DetailItem
                    title="Дождь"
                    value={`${currentWeather && currentWeather.rain ? currentWeather.rain["1h"] : 0}мм/ч`}
                />
            </ul>
        </div>
    );
}
