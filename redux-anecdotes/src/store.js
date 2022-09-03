import { configureStore } from '@reduxjs/toolkit';
import anecdoteReducer from './reducers/anecdoteReducer'
import notiReducer from './reducers/notiReducer';

const store = () => {
    return (
        configureStore({
            reducer: {
                anecdotes: anecdoteReducer,
                notis: notiReducer
            }
        })
    )
}

export default store