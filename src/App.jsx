import "./App.css";
import DetailTemperature from "./components/DetailTemperature";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import LocationTime from "./components/LocationTime";
import TopButtons from "./components/TopButtons";

function App() {
  return (
    <div className=" rounded-lg max-w-screen-md mx-auto mt-4 py-5 px-32 bg-gradient-to-br from-sky-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons></TopButtons>
      <Inputs></Inputs>

      <LocationTime></LocationTime>
      <DetailTemperature></DetailTemperature>

      <Forecast title="hourly forecast"></Forecast>
      <Forecast title="Daily forecast"></Forecast>
    </div>
  );
}

export default App;
