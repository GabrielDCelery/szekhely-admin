const express = require('express');
const router = express.Router();
const timeout = require('../../utils/timeout');


const authenticate = (_email, _password) => {
  if (_email === 'admin@admin.com' && _password === 'admin') {
    return {
      success: true,
      statusCode: 200,
      message: null,
      payload: {
        email: _email,
        rules: [
          'contracts-page:visit',
          'dashboard-page:visit',
          'mails-page:visit',
          'inspections-page:visit'
        ],
        jwt: null
      }
    }
  }

  return {
    success: false,
    statusCode: 401,
    message: 'This email and password combination does not exist in our database.',
    payload: null
  }
}

router.post('/login', async (_req, _res) => {
  await timeout(1000);

  return _res.send(authenticate(_req['body']['email'], _req['body']['password']));
});

module.exports = router;