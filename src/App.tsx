import './App.css'
import FakeComponents from './core/store/fake/FakeComponent'
import UsersComponents from './core/store/users/UsersComponent'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FakeComponents />
        <UsersComponents />
      </header>
    </div>
  )
}

export default App
