import "./current-weather.css"
import iicon from "../../img/icon.png"

const CurrentWeather = () => {
    return (
        <div className="weather">
        <div className="top">
            <div>
            <p className="city">Belgrade</p>
            <p className="weather-description">Sunny</p>
            </div>
            <img alt="weather" className=" weather-icon" style={{width:"100px",
    height: "100%"}} src={iicon} />
        </div>
        <div className="bottom">
            <p className="temperature"></p>18'c"</p>
            <div className="details">
                <div className="parameter-row">
                    <span className="parameter-label">details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels Like</span>
                        <span className="parameter-value">22'c</span>
                    </div>
        </div>
        </div>
    );
}
export default CurrentWeather;