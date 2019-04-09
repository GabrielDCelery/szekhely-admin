const express = require('express');
const router = express.Router();
const timeout = require('../../utils/timeout');

const clients = [{
  clientName: 'Mark',
  status: 'Otto',
  contractExpiryTill: '2018-01-11'
}, {
  clientName: 'Jacob',
  status: 'Thornton',
  contractExpiryTill: '2019-03-03'
}, {
  clientName: 'Larry the Bird',
  status: 'twitter',
  contractExpiryTill: '2016-07-02'
}, {
  clientName: 'Mark',
  status: 'Otto',
  contractExpiryTill: '2018-01-11'
}, {
  clientName: 'Jacob',
  status: 'Thornton',
  contractExpiryTill: '2019-03-03'
}, {
  clientName: 'Larry the Bird',
  status: 'twitter',
  contractExpiryTill: '2016-07-02'
}, {
  clientName: 'Mark',
  status: 'Otto',
  contractExpiryTill: '2018-01-11'
}, {
  clientName: 'Jacob',
  status: 'Thornton',
  contractExpiryTill: '2019-03-03'
}, {
  clientName: 'Larry the Bird',
  status: 'twitter',
  contractExpiryTill: '2016-07-02'
}, {
  clientName: 'Mark',
  status: 'Otto',
  contractExpiryTill: '2018-01-11'
}, {
  clientName: 'Jacob',
  status: 'Thornton',
  contractExpiryTill: '2019-03-03'
}, {
  clientName: 'Larry the Bird',
  status: 'twitter',
  contractExpiryTill: '2016-07-02'
}, {
  clientName: 'Mark',
  status: 'Otto',
  contractExpiryTill: '2018-01-11'
}, {
  clientName: 'Jacob',
  status: 'Thornton',
  contractExpiryTill: '2019-03-03'
}, {
  clientName: 'Larry the Bird',
  status: 'twitter',
  contractExpiryTill: '2016-07-02'
}, {
  clientName: 'Mark',
  status: 'Otto',
  contractExpiryTill: '2018-01-11'
}, {
  clientName: 'Jacob',
  status: 'Thornton',
  contractExpiryTill: '2019-03-03'
}, {
  clientName: 'Larry the Bird',
  status: 'twitter',
  contractExpiryTill: '2016-07-02'
}, {
  clientName: 'Mark',
  status: 'Otto',
  contractExpiryTill: '2018-01-11'
}, {
  clientName: 'Jacob',
  status: 'Thornton',
  contractExpiryTill: '2019-03-03'
}, {
  clientName: 'Larry the Bird',
  status: 'twitter',
  contractExpiryTill: '2016-07-02'
}, {
  clientName: 'Mark',
  status: 'Otto',
  contractExpiryTill: '2018-01-11'
}, {
  clientName: 'Jacob',
  status: 'Thornton',
  contractExpiryTill: '2019-03-03'
}, {
  clientName: 'Larry the Bird',
  status: 'twitter',
  contractExpiryTill: '2016-07-02'
}, {
  clientName: 'Mark',
  status: 'Otto',
  contractExpiryTill: '2018-01-11'
}, {
  clientName: 'Jacob',
  status: 'Thornton',
  contractExpiryTill: '2019-03-03'
}, {
  clientName: 'Larry the Bird',
  status: 'twitter',
  contractExpiryTill: '2016-07-02'
}, {
  clientName: 'Mark',
  status: 'Otto',
  contractExpiryTill: '2018-01-11'
}, {
  clientName: 'Jacob',
  status: 'Thornton',
  contractExpiryTill: '2019-03-03'
}, {
  clientName: 'Larry the Bird',
  status: 'twitter',
  contractExpiryTill: '2016-07-02'
}, {
  clientName: 'Mark',
  status: 'Otto',
  contractExpiryTill: '2018-01-11'
}, {
  clientName: 'Jacob',
  status: 'Thornton',
  contractExpiryTill: '2019-03-03'
}, {
  clientName: 'Larry the Bird',
  status: 'twitter',
  contractExpiryTill: '2016-07-02'
}, {
  clientName: 'Mark',
  status: 'Otto',
  contractExpiryTill: '2018-01-11'
}, {
  clientName: 'Jacob',
  status: 'Thornton',
  contractExpiryTill: '2019-03-03'
}, {
  clientName: 'Larry the Bird',
  status: 'twitter',
  contractExpiryTill: '2016-07-02'
}, {
  clientName: 'Mark',
  status: 'Otto',
  contractExpiryTill: '2018-01-11'
}, {
  clientName: 'Jacob',
  status: 'Thornton',
  contractExpiryTill: '2019-03-03'
}, {
  clientName: 'Larry the Bird',
  status: 'twitter',
  contractExpiryTill: '2016-07-02'
}, {
  clientName: 'Mark',
  status: 'Otto',
  contractExpiryTill: '2018-01-11'
}, {
  clientName: 'Jacob',
  status: 'Thornton',
  contractExpiryTill: '2019-03-03'
}, {
  clientName: 'Larry the Bird',
  status: 'twitter',
  contractExpiryTill: '2016-07-02'
}, {
  clientName: 'Mark',
  status: 'Otto',
  contractExpiryTill: '2018-01-11'
}, {
  clientName: 'Jacob',
  status: 'Thornton',
  contractExpiryTill: '2019-03-03'
}, {
  clientName: 'Larry the Bird',
  status: 'twitter',
  contractExpiryTill: '2016-07-02'
}, {
  clientName: 'Mark',
  status: 'Otto',
  contractExpiryTill: '2018-01-11'
}, {
  clientName: 'Jacob',
  status: 'Thornton',
  contractExpiryTill: '2019-03-03'
}, {
  clientName: 'Larry the Bird',
  status: 'twitter',
  contractExpiryTill: '2016-07-02'
}, {
  clientName: 'Mark',
  status: 'Otto',
  contractExpiryTill: '2018-01-11'
}, {
  clientName: 'Jacob',
  status: 'Thornton',
  contractExpiryTill: '2019-03-03'
}, {
  clientName: 'Larry the Bird',
  status: 'twitter',
  contractExpiryTill: '2016-07-02'
}, {
  clientName: 'Mark',
  status: 'Otto',
  contractExpiryTill: '2018-01-11'
}, {
  clientName: 'Jacob',
  status: 'Thornton',
  contractExpiryTill: '2019-03-03'
}, {
  clientName: 'Larry the Bird',
  status: 'twitter',
  contractExpiryTill: '2016-07-02'
}]

router.get('/quicksearch', async (_req, _res) => {
  await timeout(1000);

  return _res.json({
    success: true,
    payload: clients
  });
});


module.exports = router;