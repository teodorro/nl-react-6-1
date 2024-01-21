import React, { useEffect } from "react";
// import {useState} from "react";
import "../css/main.css";
import PropTypes from "prop-types";
import moment from "moment";
import momenttz from "moment-timezone";
import { useState } from "react";

export default function Clocks(props) {
  const items = props.items;
  const removeItem = props.removeItem;
  const [time, setTime] = useState(momenttz.tz("Europe/London"));

  useEffect(() => {
    setInterval(() => {
      // const t = moment();
      const t = momenttz.tz("Europe/London");
      // console.log(momenttz.tz("Europe/London"))
      setTime(t);
    }, 1000);
  });

  return (
    <div className="clocks-list">
      {items.map((item) => (
        <div
          className="item"
          key={item.id}
        >
          <div className="item-clock">
            <div className="clock-face">
              <div
                id="second"
                className="clock-seconds clock-objects"
                style={{
                  transform: `rotate(${getSecondsDegree(
                    time.seconds()
                  )}deg) translateX(22.5px)`,
                }}
              ></div>
              <div
                id="minutes"
                className="clock-minutes clock-objects"
                style={{
                  transform: `rotate(${getMinutesDegree(
                    time.minutes()
                  )}deg) translateX(20px)`,
                }}
              ></div>
              <div
                id="hours"
                className="clock-hours clock-objects"
                // style={{transform: `rotate(${getHoursDegree((parseFloat(time.hours()) + parseFloat(item.timezone)) )}deg) translateX(17.5px)` }}
                style={{
                  transform: `${getHoursTransform(
                    time.hours(),
                    item.timezone
                  )}`,
                }}
              ></div>
              <div className="clock-pimpochka clock-objects"></div>
            </div>
          </div>
          <div>
            {item.name}
          <div>
          </div>
            {`${
              // parseFloat(time.hours()) + parseFloat(item.timezone)
              getHours(parseFloat(time.hours()), parseFloat(item.timezone))
            }:${time.minutes()}`}
          </div>
          <button
            className="item-remove material-icons"
            onClick={() => {
              removeItem(item.id);
            }}
          >
            close
          </button>
        </div>
      ))}
    </div>
  );
}

function getHoursTransform(hours, timezone) {
  return `rotate(${getHoursDegree(
    parseFloat(hours) + parseFloat(timezone)
  )}deg) translateX(17.5px)`;
}

function getHours(hours, timezone) {
  return ((parseFloat(hours) + parseFloat(timezone)) % 24 + 24) % 24;
}

function getHoursDegree(hours) {
  return (360 / 12) * hours - 90;
}
function getMinutesDegree(minutes) {
  return (360 / 60) * minutes - 90;
}
function getSecondsDegree(seconds) {
  return (360 / 60) * seconds - 90;
}

Clocks.propTypes = {
  items: PropTypes.array,
  removeItem: PropTypes.func,
};
