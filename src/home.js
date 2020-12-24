// home
import Todolist from './TodoList';
import Game from './components/Game';
import Clock from './components/bili'
function Home() {
  return (
    <div className="home">
      <Todolist></Todolist>
      <Game></Game>
      <Clock ></Clock>
    </div>
  )
}
export default Home