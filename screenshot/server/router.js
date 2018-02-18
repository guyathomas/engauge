import express from 'express';
import { takeScreenshot, uploadFile, deleteFile } from './utils';

const router = express.Router();

router.post('/capture', async (req, res) => {
    const { targetURL } = req.body;
    const filepath = await takeScreenshot(targetURL);
    const publicInfo = await uploadFile(filepath);
    await deleteFile(filepath);
    res.send(publicInfo)
});

router.get('*', (req, res) => {
    res.send('Catch all')
})

module.exports = router;