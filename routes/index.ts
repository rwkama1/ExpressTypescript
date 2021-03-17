/*
 * GET home page.
 */


import express = require('express');

const router = express.Router();

router.get('/',async (req: express.Request, res: express.Response) => {
    res.render('index', { title: 'Express' });
});

export default router;