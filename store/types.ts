import rootReducer from "./rootReducer";

export type ReduxStoreType = ReturnType<typeof rootReducer>;

export type SagaActionType<T, M = Record<string, any>> = {
  readonly type: string;
  readonly payload: T;
  readonly error: boolean;
  readonly meta?: M;
};
