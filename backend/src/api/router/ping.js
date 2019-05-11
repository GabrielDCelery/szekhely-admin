const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
    return res.send({
        success: true,
        message: null,
        payload: 'Hello World!'
    });
});

module.exports = router;
