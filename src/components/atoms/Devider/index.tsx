import React from 'react';

type DeviderProps = {
    text: string;
}
export function Devider({ text }: DeviderProps) {
    return (
        <div className="flex items-center w-full my-6">
            <div className="flex-grow h-px bg-grayMedium"></div>
            <div className="mx-4 text-grayMedium">{text}</div>
            <div className="flex-grow h-px bg-grayMedium"></div>
        </div>
    );
};
