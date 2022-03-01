import { SET_ERROR } from "../actions/types";

export const logActions = store => next => actionInfo => {
  console.log(`dispatching...`,actionInfo );
  next(actionInfo);
};
export const reportError = store => next => actionInfo => {
  const {action} = actionInfo;
  if( action?.type === SET_ERROR) {
    console.error(`error...`,action.payload );
  }
  next(actionInfo);
};