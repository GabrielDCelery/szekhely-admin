import {
  GET_CONTRACTS_REQUEST,
  GET_CONTRACTS_SUCCESS,
  GET_CONTRACTS_FAIL
} from '../../constants';

const initialState = {
  isAjaxRequestInProgress: false,
  hasAjaxRequestFailed: false,
  labels: {
    title: 'Contracts',
    numOfRecordsPerPage: 'Rows per page',
    search: 'Search',
    previous: 'Previous',
    next: 'Next'
  },
  columnConfigs: [{
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
    field: 'Email',
    label: 'email',
    visible: true,
    type: 'string'
  }, {
    field: 'Phone',
    label: 'phone',
    visible: true,
    type: 'string'
  }, {
    field: 'contractExpiryTill',
    label: 'Contract expiry till',
    visible: true,
    type: 'date'
  }, {
    field: 'Status',
    label: 'status',
    visible: true,
    type: 'string'
  }, {
    field: 'clientDetails',
    label: 'Client details',
    visible: true,
    type: 'url',
    url: '/client',
    value: _rowData => {
      return {
        clientId: _rowData['id']
      }
    }
  }],
  dataRows: []
};

export default function quickSearch(state = initialState, { type, payload }) {
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
          dataRows: payload
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