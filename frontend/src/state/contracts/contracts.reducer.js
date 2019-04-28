import {
  GET_CONTRACTS_REQUEST,
  GET_CONTRACTS_SUCCESS,
  GET_CONTRACTS_FAIL
} from './contracts.constants';

const initialState = {
  isAjaxRequestInProgress: false,
  hasAjaxRequestFailed: false,
  records: [],
  dataTableColumnConfigs: [{
    field: 'clientName',
    label: 'Client name',
    visible: true,
    type: 'string'
  }, {
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
    field: 'contractExpiryTill',
    label: 'Contract expiry till',
    visible: true,
    type: 'date'
  }, {
    field: 'status',
    label: 'Status',
    visible: true,
    type: 'string'
  }]
};

export function contractsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_CONTRACTS_REQUEST:
      return {
        ...state,
        ...{ isAjaxRequestInProgress: true, hasAjaxRequestFailed: false }
      };

    case GET_CONTRACTS_SUCCESS:
      return {
        ...state,
        ...{
          isAjaxRequestInProgress: false,
          hasAjaxRequestFailed: false,
          records: payload
        }
      };

    case GET_CONTRACTS_FAIL:
      return {
        ...state,
        ...{ isAjaxRequestInProgress: false, hasAjaxRequestFailed: true }
      };

    default:
      return state;
  }
}