import {
  GET_CONTRACTS_REQUEST,
  GET_CONTRACTS_SUCCESS,
  GET_CONTRACTS_FAIL
} from './contracts.constants';
import { contractsService } from 'services';

export function getContractsAction(searchConfig) {
  return async dispatch => {
    dispatch({ type: GET_CONTRACTS_REQUEST, payload: null });

    const { success, payload } = await contractsService.getContracts(searchConfig);

    if (!success) {
      return dispatch({ type: GET_CONTRACTS_FAIL, payload: null });
    }

    dispatch({ type: GET_CONTRACTS_SUCCESS, payload: payload });
  };
}