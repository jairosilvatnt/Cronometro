import LapList from "./LapList"
import TimeControls from "./TimeControls"
import TimeDisplay from "./TimeDisplay"

function Time() {
  return (
    <div className="flex flex-col place-items-center min-h-[50vh] w-[400px] bg-slate-400 p-5 font-sans rounded-xl">
      <TimeDisplay />
      <TimeControls />
      <LapList />
    </div>
  )
}

export default Time
