import React from "react";

import classes from './LoadingSceen.module.css'

export const LoadingScreen = () => {
  return (
    <div className={classes.body}>
      <div className={classes.svg_wrapper}>
        <svg
          className="moon-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 111.77 111.77"
        >
          <circle
            cx="55.89"
            cy="55.89"
            r="55.64"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth=".5"
            strokeDasharray="4"
          />
          <circle cx="55.89" cy="55.89" r="43.65" fill="#B53471" />
          <path
            d="M73 91.22a52.22 52.22 0 0 1-51.1-62.71 43.64 43.64 0 0 0 60.8 61.8 52.45 52.45 0 0 1-9.7.91z"
            fill="#610833"
            fillRule="evenodd"
          />
          <circle cx="49.01" cy="38.35" r="6.88" fill="#66153c" />
          <path
            d="M45.79 32.82a10.1 10.1 0 0 1 9.78 7.61 6.87 6.87 0 0 0-10.7-7.56c.3-.03.6-.05.92-.05z"
            fill="#4a0a29"
            fillRule="evenodd"
          />
          <circle cx="74.07" cy="31.47" r="2.02" fill="#66153c" />
          <path
            d="M73.12 29.85A3 3 0 0 1 76 32.08a2 2 0 0 0-3.14-2.22h.27z"
            fill="#4a0a29"
            fillRule="evenodd"
          />
          <circle cx="80.11" cy="77.6" r="2.02" fill="#66153c" />
          <path
            d="M79.16 76A3 3 0 0 1 82 78.21 2 2 0 0 0 78.89 76h.27z"
            fill="#4a0a29"
            fillRule="evenodd"
          />
          <circle cx="54.47" cy="17.54" r="1.17" fill="#66153c" />
          <path
            d="M53.92 16.6a1.72 1.72 0 0 1 1.66 1.3 1.17 1.17 0 0 0-1.82-1.29h.16z"
            fill="#4a0a29"
            fillRule="evenodd"
          />
          <circle cx="33.27" cy="88.97" r="1.17" fill="#66153c" />
          <path
            d="M32.72 88a1.72 1.72 0 0 1 1.66 1.3 1.17 1.17 0 0 0-1.81-1.3h.16z"
            fill="#4a0a29"
            fillRule="evenodd"
          />
          <circle cx="25.28" cy="36.79" r="1.77" fill="#66153c" />
          <path
            d="M24.46 35.37a2.6 2.6 0 0 1 2.51 2 1.77 1.77 0 0 0-2.75-1.95h.24z"
            fill="#4a0a29"
            fillRule="evenodd"
          />
          <circle cx="82.51" cy="51.39" r="3.84" fill="#66153c" />
          <path
            d="M80.71 48.3a5.63 5.63 0 0 1 5.46 4.25 3.84 3.84 0 0 0-6-4.22z"
            fill="#4a0a29"
            fillRule="evenodd"
          />
          <circle cx="54.47" cy="64.73" r="3.75" fill="#66153c" />
          <path
            d="M52.71 61.71A5.5 5.5 0 0 1 58 65.86a3.74 3.74 0 0 0-5.83-4.12z"
            fill="#4a0a29"
            fillRule="evenodd"
          />
          <circle cx="26.57" cy="75.59" r="2.99" fill="#66153c" />
          <path
            d="M25.17 73.18a4.39 4.39 0 0 1 4.25 3.31 3 3 0 0 0-4.65-3.29z"
            fill="#4a0a29"
            fillRule="evenodd"
          />
          {/*  <circle cx="28.31" cy="7.63" r="3.03" fill="#44daf9"/> */}
        </svg>
        <svg
          className={classes.moon_satelite}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 111.8 111.8"
        >
          <circle fill="#ffffff" cx="28.3" cy="7.6" r="3" />
        </svg>
      </div>
    </div>
  );
};
