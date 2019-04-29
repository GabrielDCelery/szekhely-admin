import {
  GET_CLIENT_CONTRACT_DETAILS_REQUEST,
  GET_CLIENT_CONTRACT_DETAILS_SUCCESS,
  GET_CLIENT_CONTRACT_DETAILS_FAIL,
  GET_CLIENT_CONTRACTS_REQUEST,
  GET_CLIENT_CONTRACTS_SUCCESS,
  GET_CLIENT_CONTRACTS_FAIL
} from './client.constants';

const initialState = {
  isAjaxRequestInProgress: false,
  hasAjaxRequestFailed: false,
  contractDetails: {},
  contractRecords: [],
  contractDataTableColumnConfigs: [{
    field: 'clientSignatoryName',
    label: 'Client Signatory Name',
    visible: true,
    type: 'string'
  }, {
    field: 'email',
    label: 'Email',
    visible: true,
    type: 'string'
  }, {
    field: 'phone',
    label: 'Phone',
    visible: true,
    type: 'string'
  }, {
    field: 'contractExpiry',
    label: 'Contract expiry',
    visible: true,
    type: 'date'
  }, {
    field: 'status',
    label: 'Status',
    visible: true,
    type: 'string'
  }]
};

export function clientReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_CLIENT_CONTRACT_DETAILS_REQUEST:
    return {
      ...state,
      ...{ isAjaxRequestInProgress: true, hasAjaxRequestFailed: false }
    };

  case GET_CLIENT_CONTRACT_DETAILS_SUCCESS:
    return {
      ...state,
      ...{
        isAjaxRequestInProgress: false,
        hasAjaxRequestFailed: false,
        contractDetails: payload
      }
    };

  case GET_CLIENT_CONTRACT_DETAILS_FAIL:
    return {
      ...state,
      ...{ isAjaxRequestInProgress: false, hasAjaxRequestFailed: true }
    };

    case GET_CLIENT_CONTRACTS_REQUEST:
      return {
        ...state,
        ...{ isAjaxRequestInProgress: true, hasAjaxRequestFailed: false }
      };

    case GET_CLIENT_CONTRACTS_SUCCESS:
      return {
        ...state,
        ...{
          isAjaxRequestInProgress: false,
          hasAjaxRequestFailed: false,
          contractRecords: payload
        }
      };

    case GET_CLIENT_CONTRACTS_FAIL:
      return {
        ...state,
        ...{ isAjaxRequestInProgress: false, hasAjaxRequestFailed: true }
      };

    default:
      return state;
  }
}