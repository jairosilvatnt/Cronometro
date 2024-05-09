/* eslint-disable */
function LapList({laps}) {
  return (
    <div className="gap-3">
      <h3 className="font-semibold mt-2 flex justify-center">Voltas:</h3>
      <ul className="gap-3 m-2 font-bold px-3  mb-2">
        {laps.map((lap, index) => (
          <li key={index} className="border-current rounded-lg gap-1 mt-1 w-full px-2 bg-green-200">Volta
          {index + 1}: {lap}</li>
        ))}
      </ul>
    </div>
  )
}

export default LapList
