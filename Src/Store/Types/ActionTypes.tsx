// Action.Payload Types

export interface AuthActionType<T> {
    type: string;
    payload?: T;
}
