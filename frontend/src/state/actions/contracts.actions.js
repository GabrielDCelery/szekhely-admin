import {
  GET_CONTRACTS_REQUEST,
  GET_CONTRACTS_SUCCESS,
  GET_CONTRACTS_FAIL
} from '../constants';
import { clients as clientsService } from 'services';

export function getContracts() {
  return async dispatch => {
    dispatch({ type: GET_CONTRACTS_REQUEST, payload: null });

    const _result = await clientsService.getQuickClientList();

    if (!_result.success) {
      return dispatch({ type: GET_CONTRACTS_FAIL, payload: null });
    }

    dispatch({ type: GET_CONTRACTS_SUCCESS, payload: _result.payload });
  };
}