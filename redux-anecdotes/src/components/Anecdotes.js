import { useSelector, useDispatch } from 'react-redux'
import { voteHandling } from '../reducers/anecdoteReducer'
import { changeNoti, removeNoti } from '../reducers/notiReducer'

const Anecdotes = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    const vote = (id, content) => {
        dispatch(voteHandling(id))
        dispatch(changeNoti(`You voted for:  ${content}`))
        setTimeout(() => dispatch(removeNoti()), 5000)
    }
    return (
        <>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
                    </div>
                </div>
            )}
        </>

    )
}
export default Anecdotes