/* eslint-disable */

function TimeControls({ reset, timeOn, onStart, onStop, onLap }) {
  return (
    <div className="flex gap-2">
      {/* Criar uma funcionalidade tipo POMODORO. onde eu escolheria um tempo para estudar, e um tempo para descanço, esta modalidade dever ter uma certa quantidade de siclos, ex: cada siclo POMODORO, tera 4 ou 5, tempos programados */}
      {!timeOn && <button 
      onClick={onStart} 
      className="border-none px-3 text-lg rounded bg-green-200 font-bold hover:bg-green-400">
        Iniciar
      </button>}
      {timeOn && <button 
      onClick={onStop} 
      className="border-none px-3 text-lg rounded bg-green-200 font-bold hover:bg-green-400">
        Parar
      </button>}
      {timeOn && <button 
      onClick={onLap} 
      className="border-none px-3 text-lg rounded bg-green-200 font-bold hover:bg-green-400">
        Voltar
      </button>}

      <button 
      onClick={reset}
      className="border-none px-3 text-lg rounded bg-green-200 hover:bg-green-400 font-bold">
        Zerar
      </button>
    </div>
  )
}

export default TimeControls
