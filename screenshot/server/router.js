import express from 'express';
import { takeScreenshot, uploadFile, deleteFile } from './utils';

const router = express.Router();

<<<<<<< HEAD
router.post('/capture', async (req, res) => {
  const { targetURL } = req.body;
  const filepath = await takeScreenshot(targetURL);
  const publicInfo = await uploadFile(filepath);
  await deleteFile(filepath);
  res.send(publicInfo)
});

<<<<<<< HEAD
<<<<<<< HEAD
router.get('*', (req, res) => {
  res.send('Catch all')
<<<<<<< HEAD
}))
||||||| parent of 49b9dd7... Service will now accept a URL take an image and upload to S3
router.get('/capture', (req, res) => {
  takeScreenshot('engauge.xyz');
  res.send('Send a post request with the url instead')
})
=======
router.get('/capture', async (req, res) => {
  const filepath = await takeScreenshot('google.com');
||||||| parent of bdd3088... Finish basic screenshot service
router.post('/capture', (req, res) => {
  const { url } = req;
  res.send('200');
})
||||||| parent of aa9710d... Try to implement network request for landing to app
}))
=======
})
>>>>>>> aa9710d... Try to implement network request for landing to app

router.get('/capture', async (req, res) => {
  const filepath = await takeScreenshot('google.com');
=======
router.post('/capture', async (req, res) => {
  const { targetURL } = req.body;
  const filepath = await takeScreenshot(targetURL);
>>>>>>> bdd3088... Finish basic screenshot service
  const publicInfo = await uploadToAWS(filepath);
  await deleteFile(filepath);
  res.send(publicInfo)
})
>>>>>>> 49b9dd7... Service will now accept a URL take an image and upload to S3

||||||| parent of b04790c... Clean up deployment steps and stop buttons hiding on small devices
=======
router.get('*', (req, res) => {
  res.send('Catch all')
}))

>>>>>>> b04790c... Clean up deployment steps and stop buttons hiding on small devices
module.exports = router;
