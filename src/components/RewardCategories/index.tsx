interface CategoriesCardProps{
    categories: {name: string, icon: string}[];
}

export default function RewardCategoriesCard({categories}: CategoriesCardProps){
    return (
        <div className="bg-[#F9C15B] p-4 rounded-lg shadow-md flex justify-around mb-6">
            {categories.map((category, index) => (
                <div key={index} className="flex flex-col items-center">
                    <img src={category.icon} alt={category.name} className="w-12 h-12 mb-2"/>
                    <span className="text-black text-sm font-medium">{category.name}</span>
                </div>
            ))}
        </div>
    )
}