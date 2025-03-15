interface CategoriesCardProps {
    categories: { name: string; icon: string }[];
    onSelectCategory: (category: string | null) => void;
  }
  
  export default function RewardCategoriesCard({ categories, onSelectCategory }: CategoriesCardProps) {
    return (
      <div className="bg-[#F9C15B] p-4 rounded-lg shadow-md flex justify-around mb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            className="flex flex-col items-center"
            onClick={() => onSelectCategory(category.name)}
          >
            <img src={category.icon} alt={category.name} className="w-12 h-12 mb-2" />
            <span className="text-black text-sm font-medium">{category.name}</span>
          </button>
        ))}
        <button className="flex flex-col items-center"
                onClick={() => onSelectCategory(null)}>
          <img src="/view-all-icon.png" alt="View All" className="w-12 h-12 mb-2" />
          <span className="text-black text-sm font-medium">View All</span>
        </button>
      </div>
    );
  }