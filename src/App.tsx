import "./styles.css";
import { useGetUserDataQuery } from "./store/api";
import Weather from "./components/Weather";

function App() {
    const { data, isSuccess } = useGetUserDataQuery();

    return <>{isSuccess && <Weather userData={data} />}</>;
}

export default App;
