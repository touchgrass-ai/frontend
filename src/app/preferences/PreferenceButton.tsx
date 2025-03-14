import React, {useState} from "react";

interface PreferenceButtonProps{ 
    label: string;
}

const PreferenceButton: React.FC<PreferenceButtonProps> = ({label}) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <button className={`px-6 py-3 rounded-md shadow-md font-medium text-black hover:bg-gray-300
                            ${isActive ? "bg-gray-300" : "bg-white"}`} onClick={handleClick}>
            {label}
        </button>
    );
};

export default PreferenceButton;