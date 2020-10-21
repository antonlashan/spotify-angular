import { Injectable } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { AddHistory } from './history.actions';
import { History } from './history.model';

export class HistoryStateModel {
  history: History[];
}

@State<HistoryStateModel>({
  name: 'history',
  defaults: {
    history: [],
  },
})
@Injectable()
export class HistoryState {
  constructor() {}

  @Selector()
  static getHistories(state: HistoryStateModel) {
    return state.history;
  }

  @Action(AddHistory)
  addHistory(
    { setState, getState, dispatch }: StateContext<HistoryStateModel>,
    { payload }: AddHistory
  ) {
    const state = getState();
    const histArr = state.history.filter((h) => h.id !== payload.id);
    histArr.unshift(payload);

    setState({
      ...state,
      history: histArr,
    });

    dispatch(new Navigate(['/artists', payload.id]));
  }
}
