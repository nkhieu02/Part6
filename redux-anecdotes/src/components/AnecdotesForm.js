import { useDispatch } from "react-redux";
import { newNoteHandling } from "../reducers/anecdoteReducer";


const AnecdotesForm = () => {
    const dispatch = useDispatch()

    const handleOnSubmit = (event) => {
        event.preventDefault()
        const newNote = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(newNoteHandling(newNote))
    }
    return (
        <>
            <h2>create new</h2>
            <form onSubmit={(event) => handleOnSubmit(event)} >
                <input name="anecdote" />
                <button type='submit'>create</button>
            </form>
        </>
    )
}
export default AnecdotesForm