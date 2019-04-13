import {
  GET_QUICK_CLIENT_LIST_REQUEST,
  GET_QUICK_CLIENT_LIST_SUCCCESS,
  GET_QUICK_CLIENT_LIST_FAIL
} from '../../constants';

const initialState = {
  isAjaxRequestInProgress: false,
  hasAjaxRequestFailed: false,
  columnConfigs: [{
    field: 'clientName',
    label: 'Client name',
    visible: true,
    type: 'string'
  }, {
    field: 'status',
    label: 'Status',
    visible: true,
    type: 'string'
  }, {
    field: 'contractExpiryTill',
    label: 'Contract expiry till',
    visible: true,
    type: 'date'
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
    case GET_QUICK_CLIENT_LIST_REQUEST:
      return {
        ...state,
        ...{ isAjaxRequestInProgress: true, hasAjaxRequestFailed: false }
      };

    case GET_QUICK_CLIENT_LIST_SUCCCESS:
      return {
        ...state,
        ...{
          isAjaxRequestInProgress: false,
          hasAjaxRequestFailed: false,
          dataRows: payload
        }
      };

    case GET_QUICK_CLIENT_LIST_FAIL:
      return {
        ...state,
        ...{ isAjaxRequestInProgress: false, hasAjaxRequestFailed: true }
      };

    default:
      return state;
  }
}