import { useDebounce } from "use-debounce";
import { useGetCitiesQuery } from "../store/api";
import { useState } from "react";
import type { SearchProps } from "../types/props.types";
import { skipToken } from "@reduxjs/toolkit/query";
import CityBtn from "./CityBtn";
import { uzbCities } from "../constants/uzbCities";

export default function Search({ setCoords }: SearchProps) {
    const [keyword, setKeyword] = useState<string>("");
    const [keywordDebounce] = useDebounce(keyword, 1000);
    const { data: cities, isLoading: isCitiesLoading } = useGetCitiesQuery(
        keywordDebounce.length > 2 ? keywordDebounce : skipToken,
    );

    return (
        <div className="info-wrapper">
            <input
                type="text"
                className="search-input"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Искать"
            />

            <div className="cities">
                {!isCitiesLoading
                    ? cities && cities.length > 0 && keyword.length > 2
                        ? cities.map(({ lat, lon, local_names, name }) => {
                              return (
                                  <CityBtn
                                      setCoords={setCoords}
                                      key={lat + lon}
                                      lat={lat}
                                      lng={lon}
                                      name={local_names && local_names["ru"] ? local_names["ru"] : name}
                                  />
                              );
                          })
                        : uzbCities.map(({ coords, id, name }) => {
                              return (
                                  <CityBtn
                                      setCoords={setCoords}
                                      key={id}
                                      lat={coords.lat}
                                      lng={coords.lng}
                                      name={name}
                                  />
                              );
                          })
                    : Array(4)
                          .fill("")
                          .map((_, id) => (
                              <div key={id} className="city skeleton">
                                  <div className="text"></div>
                              </div>
                          ))}
            </div>
        </div>
    );
}
