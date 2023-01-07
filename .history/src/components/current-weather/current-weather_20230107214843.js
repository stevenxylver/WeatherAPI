import "./current-weather.css"
import iicon from "../../img/icon.png"

const CurrentWeather = () => {
    return (
        <div className="weather">
        <div className="top">
            <div>
            <p className="city">Belgrade</p>
            <p className="weather-description">Sunny</p>
            <img alt="weather" className=" weather-icon" style={{width:"100px",
    height: "100%"}} src={iicon} />
    </div>
        </div>
       
        </div>
    );
}
export default CurrentWeather;