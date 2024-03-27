import React from 'react'

export const ScrollUpIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="none"
            viewBox="0 0 80 80"
        >
            <g filter="url(#filter0_d_138_3594)">
                <rect
                    width="60"
                    height="60"
                    x="10"
                    y="10"
                    fill="#065DA8"
                    rx="30"
                ></rect>
                <rect
                    width="55"
                    height="55"
                    x="12.5"
                    y="12.5"
                    stroke="#fff"
                    strokeWidth="5"
                    rx="27.5"
                ></rect>
                <path
                    fill="#fff"
                    d="M50.677 38.6a1.1 1.1 0 01-.778.318 1.115 1.115 0 01-.778-.318L41.1 30.7v21.218c0 .287-.116.563-.322.766a1.108 1.108 0 01-1.556 0 1.075 1.075 0 01-.322-.766V30.699L30.879 38.6a1.11 1.11 0 01-1.557 0 1.076 1.076 0 010-1.533l9.9-9.75A1.1 1.1 0 0140 27a1.115 1.115 0 01.778.318l9.9 9.75a1.083 1.083 0 01.322.766 1.07 1.07 0 01-.323.766z"
                ></path>
            </g>
            <defs>
                <filter
                    id="filter0_d_138_3594"
                    width="80"
                    height="80"
                    x="0"
                    y="0"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_138_3594"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_138_3594"
                        result="shape"
                    ></feBlend>
                </filter>
            </defs>
        </svg>
    )
}
