

function Level({}) {


  const level = 12
  const percentToNextLevel = 25

  return (
    <div className="w-full py-2 flex flex-row text-[#F50B57] space-x-2">
      <div className="flex flex-col text-3xl font-bold self-end">{level}</div>
      <div className="w-full space-y-1">
        <div className="text-xl font-semibold">{percentToNextLevel}%</div>
        <div className="w-[95%] h-2 bg-white rounded-xl">
          <div className="absolute w-[25%] h-2 bg-[#F50B57] rounded-xl"/>
        </div>
      </div>

    </div>
  )

}

export default function ProfileCard({username}: {username: string}){
  
  return ( 
      <div className="flex flex-col justify-start items-start p-4 rounded-lg shadow-md mb-6 bg-[#FACA73]">
          <div className="flex flex-row items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            <div className="ml-4 text-black text-xl font-bold">{username}</div>
          </div>
          <Level />
      </div>
  )
}