interface UserProfileCardProps{
    username: string;
}



export default function UserProfileCard({username}: UserProfileCardProps){
    return ( 
        <div className="p-4 rounded-lg shadow-md mb-6 flex items-center" style={{ backgroundColor: '#FACA73'}}>
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            <div className="ml-4">
                <h2 className="text-black text-xl font-bold">{username}</h2>
            </div>
        </div>
    )
}