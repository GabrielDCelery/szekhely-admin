const _ = require('lodash');
const express = require('express');
const router = express.Router();
const timeout = require('../../utils/timeout');

const clients = [{
  id: 1,
  clientName: 'Mark',
  status: 'Otto',
  contractExpiryTill: '2018-01-11'
}, {
  id: 2,
  clientName: 'Jacob',
  status: 'Thornton',
  contractExpiryTill: '2019-03-03'
}, {
  id: 3,
  clientName: 'Larry the Bird',
  status: 'twitter',
  contractExpiryTill: '2016-07-02'
}, {
  id: 4,
  clientName: 'Mark',
  status: 'Otto',
  contractExpiryTill: '2018-01-11'
}, {
  id: 5,
  clientName: 'Jacob',
  status: 'Thornton',
  contractExpiryTill: '2019-03-03'
}, {
  id: 6,
  clientName: 'Larry the Bird',
  status: 'twitter',
  contractExpiryTill: '2016-07-02'
}, {
  id: 7,
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
}];

function filterRowsUsingSearchTerm(_rows = [], _searchTerm = '') {
  console.log(_searchTerm)
  if (_searchTerm === '') {
    return _rows;
  }
  const _regExp = new RegExp(_searchTerm.toLowerCase());

  return _rows.filter(_row => {
    const _keys = Object.keys(_row);

    for (let _i = 0, _iMax = _keys.length; _i < _iMax; _i++) {
      let _value = _row[_keys[_i]];
      _value = typeof _value === 'string' ? _value.toLowerCase() : _value;

      if (_regExp.test(_value)) {
        return true;
      }
    }

    return false;
  });
}

function sliceRows(_rows, _currentPageIndex, _numOfRecordsPerPage) {
  return _.slice(_rows, _currentPageIndex * _numOfRecordsPerPage, ((_currentPageIndex + 1) * _numOfRecordsPerPage));
}

router.get('/quicksearch', async (_req, _res) => {
  await timeout(1000);

  return _res.json({
    success: true,
    payload: clients
  });
});

router.post('/quicksearch', async (_req, _res) => {
  await timeout(1000);

  return _res.json({
    success: true,
    payload: {
      clients: clients,
      numOfTotalRecords: clients.length
    }
  });
});

router.post('/search', async (_req, _res) => {
  await timeout(1000);

  return _res.json({
    success: true,
    payload: {
      clients: sliceRows(filterRowsUsingSearchTerm(clients, _req.body.filterTerm), _req.body.currentPageIndex, _req.body.numOfRecordsPerPage),
      numOfTotalRecords: clients.length
    }
  });
});



module.exports = router;