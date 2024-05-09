
function TimeControls() {
  return (
    <div className="flex gap-2">
      {/* Criar uma funcionalidade tipo POMODORO. onde eu escolheria um tempo para estudar, e um tempo para descanço, esta modalidade dever ter uma certa quantidade de siclos, ex: cada siclo POMODORO, tera 4 ou 5, tempos programados */}
      <button className="border-none px-3 text-lg rounded bg-green-200 font-bold hover:bg-green-400">Iniciar</button>
      <button className="border-none px-3 text-lg rounded bg-green-200 hover:bg-green-400 font-bold">Zerar</button>
    </div>
  )
}

export default TimeControls
