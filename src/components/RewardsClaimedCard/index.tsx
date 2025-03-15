export interface RewardsClaimedType {
    id: number;
    description: string;
    points: number;
    icon: string;
    category: string;
    expiryDate: string;
  }

  interface RewardsClaimedCardProps {
    reward: RewardsClaimedType;
  }

export default function RewardsClaimedCard({reward }: RewardsClaimedCardProps) {
return (
    <div className="bg-white p-4 rounded-lg shadow-md">
    <div className="flex items-center">
        <img src={reward.icon} alt={reward.category} className="w-10 h-10 mr-4" />
        <div>
        <h3 className="text-black font-semibold">{reward.description}</h3>
        <p className="text-gray-500">{reward.category}</p>
        <p className="text-gray-500">Expires on: {reward.expiryDate}</p>
        </div>
    </div>
    </div>
);
}