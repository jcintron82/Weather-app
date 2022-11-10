import Button from "./button";
import Input from "./inputbox";
import { functionFloat } from "./header";
import "../App.css";
import { useState } from "react";

//Imports for the state holding the humidity for the 5 day outlook
import { FiveDayHumidityDayOne } from "../fiveDayOutlook/HumidityLevels/HumidityDivDayOne";
import { FiveDayHumidityDayTwo } from "../fiveDayOutlook/HumidityLevels/HumidityDivDayTwo";
import { FiveDayHumidityDayThree } from "../fiveDayOutlook/HumidityLevels/HumidityDivDayThree";
import { FiveDayHumidityDayFour } from "../fiveDayOutlook/HumidityLevels/HumidityDivDayFour";
import { FiveDayHumidityDayFive } from "../fiveDayOutlook/HumidityLevels/HumidityDivDayFive";

//Imports for the low temp holding the humidity for the 5 day outlook
import { FiveDayLowsDayOne } from "../fiveDayOutlook/LowTemps/LowTempsDayOne";
import { FiveDayLowsDayTwo } from "../fiveDayOutlook/LowTemps/LowTempsDayTwo";
import { FiveDayLowsDayThree } from "../fiveDayOutlook/LowTemps/LowTempsDayThree";
import { FiveDayLowsDayFour } from "../fiveDayOutlook/LowTemps/LowTempsDayFour";
import { FiveDayLowsDayFive } from "../fiveDayOutlook/LowTemps/LowTempsDayFive";

import { HighTempsDayOne } from "../fiveDayOutlook/HighTemps/HighTempsDayOne";
import { HighTempsDayTwo } from "../fiveDayOutlook/HighTemps/HighTempsDayTwo";
import { HighTempsDayThree } from "../fiveDayOutlook/HighTemps/HighTempsDayThree";
import { HighTempsDayFour } from "../fiveDayOutlook/HighTemps/HighTempsDayFour";
import { HighTempsDayFive } from "../fiveDayOutlook/HighTemps/HighTempsDayFive";

import { DayOneDescription } from "../fiveDayOutlook/Descriptions/DayOneDescription";
import { DayTwoDescription } from "../fiveDayOutlook/Descriptions/FiveDayDescDayTwo";
import { DayThreeDescription } from "../fiveDayOutlook/Descriptions/FiveDayDescDayThree";
import { DayFourDescription } from "../fiveDayOutlook/Descriptions/DayFourDescription";
import { DayFiveDescription } from "../fiveDayOutlook/Descriptions/DayFiveDescription";

function Body(props) {
  //State(s) for the input boxes
  const [input, setCity] = useState("");
  const [text, setState] = useState("");
  const [locationDiv, setLocation] = useState("");

  //States(s) for the 5 day outlook day names
  const [dayOneName, setDayOneName] = useState("");
  const [dayTwoName, setDayTwoName] = useState("");
  const [dayThreeName, setDayThreeName] = useState("");
  const [dayFourName, setDayFourName] = useState("");
  const [dayFiveName, setDayFiveName] = useState("");

  //Function which fetches the API on page load so the data components aren't
  //empty when the user first opens the page.
  // useEffect(() => {
  //         functionFloat.function('Tampa, Florida');
  //         setLocation('Tampa')
  //      });

  functionFloat.setFiveDayNamesState = async function processFiveDayData(
    day1,
    day2,
    day3,
    day4,
    day5
  ) {
    setDayOneName(day1);
    setDayTwoName(day2);
    setDayThreeName(day3);
    setDayFourName(day4);
    setDayFiveName(day5);
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleChangeState = (e) => {
    setState(e.target.value);
  };

  const onClickSearch = (event) => {
    functionFloat.function(text);
    setLocation(text);
  };
  return (
    <body className="body">
      <div className="tabletViewForecastHeader">
        <div className="tempRowDesktop">
          5 Day Forecast
          <div className="locationDiv">{locationDiv}</div>{" "}
        </div>
        <div className="dataDivWrapper">
          <div className="tempRowMobile">
            {" "}
            5 Day Forecast
            <div className="locationDiv">{locationDiv}</div>
          </div>

          <div className="mainDataWrap">
            <h5 className="fiveDayHeaders">{dayOneName}</h5>
            <div className="dataComponentsWrap">
              <HighTempsDayOne className="dataComponents1" />
              <FiveDayLowsDayOne className="dataComponents3" />
              <FiveDayHumidityDayOne className="dataComponents2" />
              <DayOneDescription className="dataComponents4" />
            </div>
          </div>

          <div className="mainDataWrap">
            <h5 className="fiveDayHeaders">{dayTwoName}</h5>
            <div className="dataComponentsWrap">
              <HighTempsDayTwo className="dataComponents1" />
              <FiveDayLowsDayTwo className="dataComponents3" />
              <FiveDayHumidityDayTwo className="dataComponents2" />
              <DayTwoDescription className="dataComponents4" />
            </div>
          </div>

          <div className="mainDataWrap">
            <h5 className="fiveDayHeaders">{dayThreeName}</h5>
            <div className="dataComponentsWrap">
              <HighTempsDayThree className="dataComponents1" />
              <FiveDayLowsDayThree className="dataComponents3" />
              <FiveDayHumidityDayThree className="dataComponents2" />
              <DayThreeDescription className="dataComponents4" />
            </div>
          </div>

          <div className="mainDataWrap">
            <h5 className="fiveDayHeaders">{dayFourName}</h5>
            <div className="dataComponentsWrap">
              <HighTempsDayFour className="dataComponents1" />
              <FiveDayLowsDayFour className="dataComponents3" />
              <FiveDayHumidityDayFour className="dataComponents2" />
              <DayFourDescription className="dataComponents4" />
            </div>
          </div>

          <div className="mainDataWrap">
            <h5 className="fiveDayHeaders">{dayFiveName}</h5>
            <div className="dataComponentsWrap">
              <HighTempsDayFive className="dataComponents1" />
              <FiveDayLowsDayFive className="dataComponents3" />
              <FiveDayHumidityDayFive className="dataComponents2" />
              <DayFiveDescription className="dataComponents4" />
            </div>
          </div>
        </div>
      </div>

      <div className="searchWrap">
        <Button
          onClick={() => {
            onClickSearch();
          }}
          className="searchBtn"
          text="Search"
        />

        <div>
          <label className="labels"> State/Country </label>
          <Input
            className="newLocationSearch"
            type="text"
            onChange={handleChangeCity}
            required="required"
          />{" "}
        </div>

        <div>
          <label className="labels"> City* </label>
          <Input
            className="newLocationSearch"
            type="text"
            onChange={handleChangeState}
          />{" "}
        </div>
      </div>
    </body>
  );
}
export default Body;
