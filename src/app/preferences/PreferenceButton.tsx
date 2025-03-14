import React from "react";

interface PreferenceButtonProps{ 
    label: string;
}

const PreferenceButton: React.FC<PreferenceButtonProps> = ({label}) => {
    return (
        <button className="bg-white px-6 py-3 rounded-md shadow-md font-medium text-black">
            {label}
        </button>
    );
};

export default PreferenceButton;