import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './ticketsSlice';
import  createTicketReducer from './createTicketSlice';

export const store = configureStore({
    reducer: {
        ticketsReducer,
        createTicketReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
