import {
  GET_CLIENT_CONTRACT_DETAILS_REQUEST,
  GET_CLIENT_CONTRACT_DETAILS_SUCCESS,
  GET_CLIENT_CONTRACT_DETAILS_FAIL,
  GET_CLIENT_CONTRACTS_REQUEST,
  GET_CLIENT_CONTRACTS_SUCCESS,
  GET_CLIENT_CONTRACTS_FAIL
} from './client.constants';

import { contractsService } from 'services';

export function getClientContractDetailsAction(contractId) {
  return async dispatch => {
    dispatch({ type: GET_CLIENT_CONTRACT_DETAILS_REQUEST, payload: null });

    const { success, payload } = /*await contractsService.getContractDetails(contractId);*/ {}

    if (!success) {
      return dispatch({ type: GET_CLIENT_CONTRACT_DETAILS_FAIL, payload: null });
    }

    dispatch({ type: GET_CLIENT_CONTRACT_DETAILS_SUCCESS, payload: payload });
  };
}

export function getClientContractsAction(clientId) {
  return async dispatch => {
    dispatch({ type: GET_CLIENT_CONTRACTS_REQUEST, payload: null });

    const { success, payload } = await contractsService.getContracts({ clientId });

    if (!success) {
      return dispatch({ type: GET_CLIENT_CONTRACTS_FAIL, payload: null });
    }

    dispatch({ type: GET_CLIENT_CONTRACTS_SUCCESS, payload: payload });
  };
}