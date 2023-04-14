import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BaseState } from './types';
import { Ticket } from '../../data/models/Ticket';
import { API } from '../api';

const SLICE_NAME = 'tickets';

interface TicketsState extends BaseState {
    tickets: Ticket[];
}

const initialState: TicketsState = {
    tickets: [],
    status: 'idle',
    error: null,
};

export const getAllTickets = createAsyncThunk(`${SLICE_NAME}/getAllTickets`, async () => {
    const { data } = await API.get<{ data: Ticket[] }>('/tickets');
    return data;
});

export const ticketsSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        // add extra reducers if necessary
    },
    extraReducers(builder) {
        builder
            .addCase(getAllTickets.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllTickets.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? null;
            })
            .addCase(getAllTickets.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = null;
                state.tickets = action.payload.data;
            });
    },
});

// // Action creators are generated for each case reducer function
// export const { fn } = ticketsSlice.actions;

export default ticketsSlice.reducer;
