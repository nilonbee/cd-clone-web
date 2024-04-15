import React, { ReactElement } from "react";

export const HatIcon = (): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
    fill="none"
    viewBox={`0 0 39 30`}
  >
    <path
      stroke="url(#paint0_linear_1036_314)"
      strokeLinejoin="round"
      strokeWidth="3.333"
      d="M2.167 9.5l17.518-7 17.518 7-17.518 7-17.518-7z"
    ></path>
    <path
      stroke="url(#paint1_linear_1036_314)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.333"
      d="M37.203 9.592v7.685m-27.073-4.09v10.369s4.008 3.944 9.555 3.944c5.548 0 9.556-3.944 9.556-3.944V13.187"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_1036_314"
        x1="1.903"
        x2="37.203"
        y1="9.486"
        y2="9.486"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1C37C1"></stop>
        <stop offset="0.49" stopColor="#2F79BD"></stop>
        <stop offset="1" stopColor="#089EA2"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_1036_314"
        x1="9.926"
        x2="37.203"
        y1="18.528"
        y2="18.528"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1C37C1"></stop>
        <stop offset="0.49" stopColor="#2F79BD"></stop>
        <stop offset="1" stopColor="#089EA2"></stop>
      </linearGradient>
    </defs>
  </svg>
);
