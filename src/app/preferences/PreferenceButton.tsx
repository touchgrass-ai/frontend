import React, {useState} from "react";

interface PreferenceButtonProps{ 
    label: string;
    onSelect: (label: string) => void;
    onDeselect: (label: string) => void;
}

const PreferenceButton = ({label, onSelect, onDeselect}: PreferenceButtonProps) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        if(selected){
            onDeselect(label);
        } else {
            onSelect(label);
        }
        setSelected(!selected)
    };

    return (
        <button className={`px-6 py-3 rounded-md shadow-md font-medium text-black hover:bg-gray-300
                            ${selected ? "bg-gray-300" : "bg-white"}`} onClick={handleClick}>
            {label}
        </button>
    );
};

export default PreferenceButton;