import LapList from "./LapList"
import TimeControls from "./TimeControls"
import TimeDisplay from "./TimeDisplay"

function Time() {
  return (
    <div className="flex justify-center items-center flex-col h-screen w-full">
      <LapList />
      <TimeDisplay />
      <TimeControls />
    </div>
  )
}

export default Time
