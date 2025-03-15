interface CategoriesCardProps {
    categories: { name: string; icon: string }[];
    onSelectCategory: (category: string) => void;
  }
  
  export default function RewardCategoriesCard({ categories, onSelectCategory }: CategoriesCardProps) {
    return (
      <div className="bg-[#F9C15B] p-4 rounded-lg shadow-md flex justify-start mb-6 space-x-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className="flex flex-col items-center bg-white p-2 rounded-lg shadow hover:bg-[#FFF482] active:bg-[#FFF482] focus:bg-[#FFF482] transition "
            onClick={() => onSelectCategory(category.name)}
          >
            <img src={category.icon} alt={category.name} className="w-12 h-12 mb-2" />
            <span className="text-black text-sm font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    );
  }