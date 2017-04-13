import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const TabNames = {
  DASHBOARD: 'DASHBOARD',
  SUBSCRIPTIONS: 'SUBSCRIPTIONS',
  ACCOUNT: 'ACCOUNT'
};

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  changeTab: ['tabName'],
  resetHome: null
});

export const HomeTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  currentTab: TabNames.DASHBOARD
});

/* ------------- Reducers ------------- */

export const changeTab = (state, data) =>
  state.merge({ currentTab: data.tabName });

export const resetHome = (state) =>
  state.merge(INITIAL_STATE);

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_TAB]: changeTab,
  [Types.RESET_HOME]: resetHome
});
