// Action.Payload Types

export interface AuthActionType<T> {
    type: string;
    payload?: T;
}

export interface FeedActionType<T> {
    type: string;
    payload?: T;
}
