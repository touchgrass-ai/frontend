interface PointsDisplayProps { 
    points: number;
}

export default function PointsDisplay({ points }: PointsDisplayProps) {
    return (
        <div className="bg-[#FF3F3F] text-white p-4 rounded-lg shadow-md flex items-center">
            <img src="/grass.png" alt="grass icon" className="w-8 h-8 mr-2" />
            <span className="text-2xl font-bold">{points}</span>
        </div>
    );
}