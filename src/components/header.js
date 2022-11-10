import { useState } from "react";
import { Div } from "./divs";
import  Button  from "./button";
import { createContext, useContext } from "react";
import clouds from "../images/clouds.jpg";
import sunnyday from "../images/sunnyday.jpg";
import rainyday from "../images/rainyday.jpg";
import snowyday from "../images/snowyday.jpg";
import { float2 } from "./body";

export const functionFloat = {};
export const fiveDayDataFloat = {};

let weatherMain = "";
function changeTempUnit() {
  functionFloat.FetchAPI()
}

export function Header({ tempValue, locationValue, onChange }) {


  //Creates state(s) to hold weather data
  const [locationDOM, setLocation] = useState(1);
  const [StateDOM, setState] = useState("x");
  const [tempDOM, setTemp] = useState(1);
  const [dateDOM, setDate] = useState(1);
  const [timeDOM, setTime] = useState(1);
  const [background, setBackground] = useState("");

  async function geocodeState(data) {
    let latitude = data.coord.lat;
    const longitude = data.coord.lon;

    let geocodeState = await fetch(
      "https://api.openweathermap.org/geo/1.0/reverse?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&limit=1&appid=bd3dd8d1151b1e784fcf021aa29927c5",
      { mode: "cors" }
    );
    let finalgeocodeState = await geocodeState.json();

    let countryFormat = new Intl.DisplayNames(["en"], { type: "region" }).of(
      finalgeocodeState[0].country
    );

    if (
      finalgeocodeState[0].country === "US" ||
      finalgeocodeState[0].country === "CA" ||
      finalgeocodeState[0].country === "GB"
    ) {
      setState(finalgeocodeState[0].state);
    } else {
      setState(countryFormat);
    }
  }

  //This function is stored in an object to be called in other modules while utilizing the data here
  //Fetches weather API data
  functionFloat.function = async function FetchAPI(city, state) {
    try {
      let result = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "," +
          state +
          "&APPID=bd3dd8d1151b1e784fcf021aa29927c5&units=imperial",
        { mode: "cors" }
      );
      let fiveDayResult = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          city +
          "," +
          state +
          "&APPID=bd3dd8d1151b1e784fcf021aa29927c5&units=imperial",
        { mode: "cors" }
      );
      // let geocodeState = await fetch ('http://api.openweathermap.org/geo/1.0/reverse?lat=' + latitude +'&lon=' + longitude +'&limit={limit}&appid=bd3dd8d1151b1e784fcf021aa29927c5',
      //     {mode: 'cors'});

      let final = await result.json();
      let finalFiveDay = await fiveDayResult.json();
      // let finalgeocodeState = await sixteen.json();

      return (
        processData(final, finalFiveDay),
        geocodeState(final)
      );
    } catch (err) {
      alert(err);
    }
  };

  async function processData(data, fiveDayData) {
    geocodeState(data);
    console.log(data)
    let extForecastDay1Date = new Date(fiveDayData.list[5].dt * 1000);
    let extForecastDay2Date = new Date(fiveDayData.list[13].dt * 1000);
    let extForecastDay3Date = new Date(fiveDayData.list[21].dt * 1000);
    let extForecastDay4Date = new Date(fiveDayData.list[29].dt * 1000);
    let extForecastDay5Date = new Date(fiveDayData.list[37].dt * 1000);
    const options = { weekday: "short" };

    const formattedDay1 =
      new Intl.DateTimeFormat("en-US", options).format(extForecastDay1Date) +
      " | " +
      extForecastDay1Date.getDate();

    const formattedDay2 =
      new Intl.DateTimeFormat("en-US", options).format(extForecastDay2Date) +
      " | " +
      extForecastDay2Date.getDate();

    const formattedDay3 =
      new Intl.DateTimeFormat("en-US", options).format(extForecastDay3Date) +
      " | " +
      extForecastDay3Date.getDate();

    const formattedDay4 =
      new Intl.DateTimeFormat("en-US", options).format(extForecastDay4Date) +
      " | " +
      extForecastDay4Date.getDate();

    const formattedDay5 =
      new Intl.DateTimeFormat("en-US", options).format(extForecastDay5Date) +
      " | " +
      extForecastDay5Date.getDate();

    //Calls the setFiveDayNamesState function housed in the body component to set state
    //for weekday names
    functionFloat.setFiveDayNamesState(
      formattedDay1,
      formattedDay2,
      formattedDay3,
      formattedDay4,
      formattedDay5
    );

    //Calls the functions which process the five day outlook humidity and updates
    //each components state
    functionFloat.processFiveDayHumidity(fiveDayData.list[1].main.humidity);
    functionFloat.processFiveDayHumidityDayTwo(
      fiveDayData.list[9].main.humidity
    );
    functionFloat.processFiveDayHumidityDayThree(
      fiveDayData.list[17].main.humidity
    );
    functionFloat.processFiveDayHumidityDayFour(
      fiveDayData.list[25].main.humidity
    );
    functionFloat.processFiveDayHumidityDayFive(
      fiveDayData.list[33].main.humidity
    );

    //Calls the functions which process the five day outlook highs and updates
    //each components state
    functionFloat.processFiveDayHighsDayOne(fiveDayData.list[3].main.temp);
    functionFloat.processHighTempsDayTwo(fiveDayData.list[11].main.temp_min);
    functionFloat.processHighTempsDayThree(fiveDayData.list[19].main.temp_min);
    functionFloat.processHighTempsDayFour(fiveDayData.list[27].main.temp_min);
    functionFloat.processHighTempsDayFive(fiveDayData.list[35].main.temp_min);

    //Calls the functions which process the five day outlook low and updates
    //each components state
    functionFloat.processFiveDayLowsDayOne(fiveDayData.list[6].main.temp_min);
    functionFloat.processFiveDayLowsDayTwo(fiveDayData.list[14].main.temp_min);
    functionFloat.processFiveDayLowsDayThree(
      fiveDayData.list[22].main.temp_min
    );
    functionFloat.processFiveDayLowsDayFour(fiveDayData.list[30].main.temp_min);
    functionFloat.processFiveDayLowsDayFive(fiveDayData.list[38].main.temp_min);

    //Calls the functions which process the five day outlook forecast descriptions
    //and updates each components state
    functionFloat.processDayOneDescription(fiveDayData.list[1].weather[0].main);
    functionFloat.processDayTwoDescription(
      fiveDayData.list[10].weather[0].main
    );
    functionFloat.processDayThreeDescription(
      fiveDayData.list[19].weather[0].main
    );
    functionFloat.processDayFourDescription(
      fiveDayData.list[1].weather[0].main
    );
    functionFloat.processDayFiveDescription(
      fiveDayData.list[1].weather[0].main
    );

    //Retrieves and convers the API data for date and time and converts/styles it for the data in
    //the header
    let dayname = new Date(data.dt * 1000).toLocaleDateString("en", {
      dateStyle: "long",
    });
    let currentTime = new Date(data.dt * 1000).toLocaleTimeString("en", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    if (data.weather[0].main == "Clouds") {
      weatherMain = clouds;
    } else if (data.weather[0].main == "Clear") {
      weatherMain = sunnyday;
    } else if (data.weather[0].main == "Rain" || "Drizzle" || "Thunderstorm") {
      weatherMain = rainyday;
    } else if (data.weather[0].main == "Snow") {
      weatherMain = snowyday;
    }

    //Sets the state for the main data values
    setLocation(data.name + ", ");
    setTemp(data.main.temp + "º" + " F");
    setDate(dayname);
    setTime(currentTime);
  }

  return (
    <header
      className="header"
      style={{
        backgroundImage: `url('${weatherMain}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
    {/*  <Button onClick={() => {changeTempUnit()
     } } className='searchBtn' text='Search'/>*/}
        <Div className="locationDOM" text={locationDOM} />
        <Div className="locationDOM" text={StateDOM} />
        <Div className="tempDOM" text={tempDOM} />
      </div>
      <div className="tempDOM">
        <Div className="dateDOM" text={dateDOM} />
        <Div className="timeDOM" text={timeDOM} />
      </div>
    </header>
  );
}

export default Header;