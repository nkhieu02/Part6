
import AnecdotesForm from './components/AnecdotesForm'
import Anecdotes from './components/Anecdotes'
import Notification from './components/Notification'

const App = () => {

  return (
    <div>
      <Notification />
      <Anecdotes />
      <AnecdotesForm />
    </div>
  )
}

export default App