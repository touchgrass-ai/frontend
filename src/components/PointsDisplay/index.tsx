interface PointsDisplayProps { 
    points: number;
}

export default function PointsDisplay({ points }: PointsDisplayProps) {
    return (
        <div className="bg-[#F50B57] text-white p-3 rounded-lg shadow-md flex items-center">
            <img src="/grass.png" alt="grass icon" className="w-8 h-8 mr-2" />
            <span className="text-2xl font-bold">{points}</span>
        </div>
    );
}