import type { CityBtnProps } from "../types/props.types";

export default function CityBtn({ lat, lng, name, setCoords }: CityBtnProps) {
    return (
        <button
            type="button"
            className="city"
            onClick={() => {
                setCoords({ lat: lat, lng: lng });
            }}>
            {name}
        </button>
    );
}
