import React, { ReactElement } from "react";

type Props = {
  color?: string;
};

export const TimeIcon = ({ color = "#000" }: Props): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 22 22"
  >
    <path
      fill={color}
      fillOpacity="0.6"
      d="M11 20.167A9.166 9.166 0 011.833 11 9.166 9.166 0 0111 1.833 9.166 9.166 0 0120.167 11 9.166 9.166 0 0111 20.167zm0-1.834a7.333 7.333 0 100-14.666 7.333 7.333 0 000 14.666zM11.917 11h3.666v1.833h-5.5V6.417h1.834V11z"
    ></path>
  </svg>
);
