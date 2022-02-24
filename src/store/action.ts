type ActionType = "";

export type Action<ActionType = any> = {
  type: ActionType;
  payload?: any;
};
