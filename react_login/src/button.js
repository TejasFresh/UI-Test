import React from "react";

export const PurpButton = ({text}) => {
    return (
        <button className="bg-purple-500 text-white w-full h-9">
            <span>{text}</span>
        </button>
    );
};

export const IcoButton = ({text,icon}) => {
    return (
        <button className="flex items-center justify-center bg-white text-black w-full h-full py-2 px-4">
            {icon && <span className="text-lg mr-2">{icon}</span>}
            <span>{text}</span>
        </button>
    );
};