interface RewardsCardProps {
  description: string;
  points: number;
  icon: string;
  category: string;
  onClaim: (points: number) => void;
}

export default function RewardsCard({ description, points, icon, category, onClaim }: RewardsCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center mb-4">
      <img src={icon} alt="Reward Icon" className="w-12 h-12 mr-4" />
      <div>
        <h4 className="text-black text-lg font-bold">{description}</h4>
        <div className="flex items-center">
          <img src="/grass.png" alt="Grass Icon" className="w-4 h-4 mr-1" />
          <span className="text-black text-lg font-bold">{points}</span>
        </div>
      </div>
      <button 
        className="ml-auto bg-[#FF3F3F] text-white px-4 py-2 rounded-lg hover:bg-[#FF6262]"
        onClick={() => onClaim(points)}
      >
        Claim
      </button>
    </div>
  );
}