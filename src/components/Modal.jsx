import axios from "axios";
import React, { useEffect, useState } from "react";
import { detailOptions } from "../constants";
import formatDate from "../utils/formatDate";
import { useDispatch } from "react-redux";
import { setPath } from "../redux/slices/flightSlice";
import checkValidation from "../utils/checkValidation";

const Modal = ({ detailId, close }) => {
  const [d, setDetail] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setDetail(null);

    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        detailOptions
      )
      .then((res) => {
        setDetail(res.data);
        dispatch(setPath(res.data.trail));
      });
  }, [detailId]);

  return (
    <div className="detail-outer">
      <div className="detail-inner">
        <div onClick={close} className="close-wrapper">
          <button>X</button>
        </div>

        {!d ? (
          <div className="loader">
            <div className="spinner">
              <div className="spinner1"></div>
            </div>
          </div>
        ) : (
          <>
            <h2>{checkValidation(d.aircraft.model?.text)}</h2>
            <h2>{checkValidation(d.aircraft.model?.code)}</h2>

            <p>
              <span>TAIL CODE: </span>
              <span>{d.aircraft?.registration}</span>
            </p>

            <img
              src={
                d.aircraft.images?.large
                  ? d.aircraft.images?.large[0].src
                  : d.aircraft.images.thumbnails[0]
              }
              alt=""
            />

            <p>
              <span>COMPANY: </span>
              <span>{d.airline?.short ? d.airline?.short : "Unknown"}</span>
            </p>

            <p>
              <span>DEPARTURE: </span>
              <a href={d.airport?.origin?.website} target="_blank">
                {checkValidation(d.airport.origin?.name)}
              </a>
            </p>

            <p>
              <span>ARRIVAL: </span>
              <a href={d.airport?.origin?.website} target="_blank">
                {checkValidation(d.airport.destination?.name)}
              </a>
            </p>

            <p>
              <span>Departure Time: </span>
              <span>
                {d.time.scheduled.departure > 0
                  ? formatDate(d.time.scheduled.departure)
                  : "Unknown"}
              </span>
            </p>
            <p>
              <span>Arrival Time: </span>
              <span>
                {d.time.scheduled.arrival > 0
                  ? formatDate(d.time.scheduled.arrival)
                  : "Unknown"}
              </span>
            </p>

            <p className={d.status.icon}>
              <span>{d.status.text}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
