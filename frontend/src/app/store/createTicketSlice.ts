import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BaseState } from './types';
import { Ticket } from '../../data/models/Ticket';
import { API } from '../api';

const SLICE_NAME = 'create-ticket';

interface CreateTicketState extends BaseState {}

const initialState: CreateTicketState = {
    status: 'idle',
    error: null,
};

export const createTicket = createAsyncThunk(`${SLICE_NAME}/create`, async (ticket: Omit<Ticket, "id">) => {
    const { data } = await API.post<{ data: Ticket[] }>('/tickets', { ticket });
    return data;
});

export const createTicketSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        // add extra reducers if necessary
    },
    extraReducers(builder) {
        builder
            .addCase(createTicket.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createTicket.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? null;
            })
            .addCase(createTicket.fulfilled, (state) => {
                state.status = 'succeeded';
                state.error = null;
            });
    },
});


export default createTicketSlice.reducer;