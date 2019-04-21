const initialState = {
  clients: [{
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
  contracts: [{
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
  }, {
    field: 'clientDetails',
    label: 'Client details',
    visible: true,
    type: 'url',
    url: '/contract',
    value: _rowData => {
      return {
        contractId: _rowData['id']
      }
    }
  }]
};

export function dataTablesConfigsReducer(state = initialState, { type, payload }) {
  return state;
}