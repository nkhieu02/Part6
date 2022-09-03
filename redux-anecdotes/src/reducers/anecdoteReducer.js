const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}
export const voteHandling = (id) => {
  return {
    type: 'VOTE',
    data: {
      id
    }
  }
}
export const newNoteHandling = (newNote) => {
  return {
    type: 'NEW_NOTE',
    data: {
      content: newNote,
      id: getId(),
      votes: 0
    }
  }
}
const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'VOTE': return state.map(x => x.id === action.data.id ? { ...x, votes: x.votes + 1 } : x).sort((a, b) => a.votes - b.votes)
    case 'NEW_NOTE': return state.concat(action.data)
    default: return state
  }
}

export default reducer