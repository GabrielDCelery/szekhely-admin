const express = require('express');
const router = express.Router();
const timeout = require('../../utils/timeout');

const clients = {
  columns: [{
    label: 'Client Name',
    field: 'clientName'
  }, {
    label: 'Constract Status',
    field: 'status'
  }, {
    label: 'Contract End Date',
    field: 'contractEndDate'
  }],
  rows: [{
    clientName: 'Mark',
    status: 'Otto',
    contractEndDate: '2018-01-11'
  }, {
    clientName: 'Jacob',
    status: 'Thornton',
    contractEndDate: '2019-03-03'
  }, {
    clientName: 'Larry the Bird',
    status: 'twitter',
    contractEndDate: '2016-07-02'
  }, {
    clientName: 'Mark',
    status: 'Otto',
    contractEndDate: '2018-01-11'
  }, {
    clientName: 'Jacob',
    status: 'Thornton',
    contractEndDate: '2019-03-03'
  }, {
    clientName: 'Larry the Bird',
    status: 'twitter',
    contractEndDate: '2016-07-02'
  }, {
    clientName: 'Mark',
    status: 'Otto',
    contractEndDate: '2018-01-11'
  }, {
    clientName: 'Jacob',
    status: 'Thornton',
    contractEndDate: '2019-03-03'
  }, {
    clientName: 'Larry the Bird',
    status: 'twitter',
    contractEndDate: '2016-07-02'
  }, {
    clientName: 'Mark',
    status: 'Otto',
    contractEndDate: '2018-01-11'
  }, {
    clientName: 'Jacob',
    status: 'Thornton',
    contractEndDate: '2019-03-03'
  }, {
    clientName: 'Larry the Bird',
    status: 'twitter',
    contractEndDate: '2016-07-02'
  }, {
    clientName: 'Mark',
    status: 'Otto',
    contractEndDate: '2018-01-11'
  }, {
    clientName: 'Jacob',
    status: 'Thornton',
    contractEndDate: '2019-03-03'
  }, {
    clientName: 'Larry the Bird',
    status: 'twitter',
    contractEndDate: '2016-07-02'
  }, {
    clientName: 'Mark',
    status: 'Otto',
    contractEndDate: '2018-01-11'
  }, {
    clientName: 'Jacob',
    status: 'Thornton',
    contractEndDate: '2019-03-03'
  }, {
    clientName: 'Larry the Bird',
    status: 'twitter',
    contractEndDate: '2016-07-02'
  }, {
    clientName: 'Mark',
    status: 'Otto',
    contractEndDate: '2018-01-11'
  }, {
    clientName: 'Jacob',
    status: 'Thornton',
    contractEndDate: '2019-03-03'
  }, {
    clientName: 'Larry the Bird',
    status: 'twitter',
    contractEndDate: '2016-07-02'
  }, {
    clientName: 'Mark',
    status: 'Otto',
    contractEndDate: '2018-01-11'
  }, {
    clientName: 'Jacob',
    status: 'Thornton',
    contractEndDate: '2019-03-03'
  }, {
    clientName: 'Larry the Bird',
    status: 'twitter',
    contractEndDate: '2016-07-02'
  }, {
    clientName: 'Mark',
    status: 'Otto',
    contractEndDate: '2018-01-11'
  }, {
    clientName: 'Jacob',
    status: 'Thornton',
    contractEndDate: '2019-03-03'
  }, {
    clientName: 'Larry the Bird',
    status: 'twitter',
    contractEndDate: '2016-07-02'
  }, {
    clientName: 'Mark',
    status: 'Otto',
    contractEndDate: '2018-01-11'
  }, {
    clientName: 'Jacob',
    status: 'Thornton',
    contractEndDate: '2019-03-03'
  }, {
    clientName: 'Larry the Bird',
    status: 'twitter',
    contractEndDate: '2016-07-02'
  }, {
    clientName: 'Mark',
    status: 'Otto',
    contractEndDate: '2018-01-11'
  }, {
    clientName: 'Jacob',
    status: 'Thornton',
    contractEndDate: '2019-03-03'
  }, {
    clientName: 'Larry the Bird',
    status: 'twitter',
    contractEndDate: '2016-07-02'
  }, {
    clientName: 'Mark',
    status: 'Otto',
    contractEndDate: '2018-01-11'
  }, {
    clientName: 'Jacob',
    status: 'Thornton',
    contractEndDate: '2019-03-03'
  }, {
    clientName: 'Larry the Bird',
    status: 'twitter',
    contractEndDate: '2016-07-02'
  }, {
    clientName: 'Mark',
    status: 'Otto',
    contractEndDate: '2018-01-11'
  }, {
    clientName: 'Jacob',
    status: 'Thornton',
    contractEndDate: '2019-03-03'
  }, {
    clientName: 'Larry the Bird',
    status: 'twitter',
    contractEndDate: '2016-07-02'
  }, {
    clientName: 'Mark',
    status: 'Otto',
    contractEndDate: '2018-01-11'
  }, {
    clientName: 'Jacob',
    status: 'Thornton',
    contractEndDate: '2019-03-03'
  }, {
    clientName: 'Larry the Bird',
    status: 'twitter',
    contractEndDate: '2016-07-02'
  }, {
    clientName: 'Mark',
    status: 'Otto',
    contractEndDate: '2018-01-11'
  }, {
    clientName: 'Jacob',
    status: 'Thornton',
    contractEndDate: '2019-03-03'
  }, {
    clientName: 'Larry the Bird',
    status: 'twitter',
    contractEndDate: '2016-07-02'
  }, {
    clientName: 'Mark',
    status: 'Otto',
    contractEndDate: '2018-01-11'
  }, {
    clientName: 'Jacob',
    status: 'Thornton',
    contractEndDate: '2019-03-03'
  }, {
    clientName: 'Larry the Bird',
    status: 'twitter',
    contractEndDate: '2016-07-02'
  }, {
    clientName: 'Mark',
    status: 'Otto',
    contractEndDate: '2018-01-11'
  }, {
    clientName: 'Jacob',
    status: 'Thornton',
    contractEndDate: '2019-03-03'
  }, {
    clientName: 'Larry the Bird',
    status: 'twitter',
    contractEndDate: '2016-07-02'
  }, {
    clientName: 'Mark',
    status: 'Otto',
    contractEndDate: '2018-01-11'
  }, {
    clientName: 'Jacob',
    status: 'Thornton',
    contractEndDate: '2019-03-03'
  }, {
    clientName: 'Larry the Bird',
    status: 'twitter',
    contractEndDate: '2016-07-02'
  }]
};

router.get('/quicksearch', async (_req, _res) => {
  await timeout(1000);

  return _res.json({
    success: true,
    payload: clients
  });
});


module.exports = router;