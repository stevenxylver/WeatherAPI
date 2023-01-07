import "./current-weather.css"
import {icon} from "../../img/icon.png"

const CurrentWeather = () => {
    return (
        <div className="weather">
        <div className="top">
            <p className="city">Belgrade</p>
            <p className="weather-description">Sunny</p>
        </div>
        <img alt="weather" className=" weather-icon" src={icon} />
        </div>
    );
}
export default CurrentWeather;