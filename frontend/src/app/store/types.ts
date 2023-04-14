export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface BaseState {
    status: Status;
    error: string | null;
}
