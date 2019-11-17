import {createStore, combineReducers} from 'redux';
 
import {reducer as notifications} from 'react-notification-system-redux';

// Notification store 형성용

export function configureStore(initialState = {}) {
  return createStore(
    combineReducers({
      notifications
    }),
    initialState
  );
}