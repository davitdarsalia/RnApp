// Action.Payload Types

export interface UserAction<T> {
    type: string;
    payload?: T;
}
