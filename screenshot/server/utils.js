import path from 'path';
import Pageres from 'pageres';
import Promise from 'bluebird';
import AWS from 'aws-sdk';
import zlib from 'zlib';
import fs from 'fs';

//Set up the AWS bucket connection
const s3 = new AWS.S3();
let AWS_ACCESS_KEY_ID;
let AWS_SECRET_ACCESS_KEY;

try { 
  AWS_ACCESS_KEY_ID = fs.readFileSync('/run/secrets/AWS_ACCESS_KEY_ID', 'utf8').trim()
  AWS_SECRET_ACCESS_KEY =  fs.readFileSync('/run/secrets/AWS_SECRET_ACCESS_KEY', 'utf8').trim()
  
  s3.config.update({
    region: 'us-west-1', 
    credentials: {
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    }
  })
} catch (e) { 
  console.log('Couldnt update S3 Config', e)
}

export async function takeScreenshot(url) {
    return new Pageres({
      delay: 2,
      filename: '<%= date %>_<%= url %>_<%= size %>',
      format: 'jpg',
      incrementalName: true,
    })
    .src(url, ['1920x1080'])
    .dest(path.join(`${__dirname}/screenshots/`))
    .run()
    .then((stream) => {
      const filePath = path.join(`${__dirname}/screenshots/${stream[0].filename}`);
      console.log('Saved in',  filePath);
      return filePath;
    })
}

<<<<<<< HEAD
<<<<<<< HEAD
export async function uploadToAWS(filepath) {
  const filename = filepath.slice(filepath.lastIndexOf('/') + 1)
  console.log('uploadToAWS')
  const stream = await fs.createReadStream(filepath);

  const params = {Bucket: 'engauge-bucket', Key: 'screenshots/' + filename, Body: stream};
<<<<<<< HEAD
  // const s3Upload = Promise.promisify(s3.upload);
||||||| parent of 49b9dd7... Service will now accept a URL take an image and upload to S3
export function uploadToAWS(stream) {
=======
export async function uploadToAWS(filepath) {
  const filename = filepath.slice(filepath.lastIndexOf('/') + 1)
  console.log('uploadToAWS')
  const stream = await fs.createReadStream(filepath);
>>>>>>> 49b9dd7... Service will now accept a URL take an image and upload to S3

<<<<<<< HEAD
  return new Promise ((resolve, reject) => {
    s3.upload(params, function(err, data) {
      if (err !== null) {
        reject(err)
      } else {
        resolve(data);
      }
    });
||||||| parent of f2635b9... Completed end to end functionality for taking a screenshot
  // const s3Upload = Promise.promisify(s3.upload);

  return new Promise ((resolve, reject) => {
    s3.upload(params, function(err, data) {
      if (err !== null) {
        reject(err)
      } else {
        resolve(data);
      }
    });
=======
  
||||||| parent of e538b7d... Add minio support
export async function uploadToAWS(filepath) {
  const filename = filepath.slice(filepath.lastIndexOf('/') + 1)
  console.log('uploadToAWS')
  const stream = await fs.createReadStream(filepath);

  const params = {Bucket: 'engauge-bucket', Key: 'screenshots/' + filename, Body: stream};
  
=======
export async function uploadFile(filepath) {
<<<<<<< HEAD
  const filename = filepath.slice(filepath.lastIndexOf('/') + 1);
  const stream = fs.createReadStream(filepath);
  const filePath = 'screenshots/' + filename;
>>>>>>> e538b7d... Add minio support
||||||| parent of aec4375... Remove dependeancy on minio
  const filename = filepath.slice(filepath.lastIndexOf('/') + 1);
  const stream = fs.createReadStream(filepath);
  const filePath = 'screenshots/' + filename;
=======
  const filename = filepath.slice(filepath.lastIndexOf('/') + 1)
  console.log('uploadToAWS')
  const stream = await fs.createReadStream(filepath);

  const params = {Bucket: 'engauge-bucket', Key: 'screenshots/' + filename, Body: stream};
  
>>>>>>> aec4375... Remove dependeancy on minio
  return new Promise((resolve, reject) => {
<<<<<<< HEAD
<<<<<<< HEAD
    s3.upload(params, function(err, data) { err ? reject(err) : resolve(data) })
>>>>>>> f2635b9... Completed end to end functionality for taking a screenshot
||||||| parent of e538b7d... Add minio support
    s3.upload(params, function(err, data) { err ? reject(err) : resolve(data) })
=======
    minioClient.putObject('engauge', filePath, stream, (err, etag) => {
      err ? reject(err) : resolve('success');
    });
>>>>>>> e538b7d... Add minio support
||||||| parent of aec4375... Remove dependeancy on minio
    minioClient.putObject('engauge', filePath, stream, (err, etag) => {
      err ? reject(err) : resolve('success');
    });
=======
    s3.upload(params, function(err, data) { err ? reject(err) : resolve(data) })
>>>>>>> aec4375... Remove dependeancy on minio
  })
||||||| parent of 49b9dd7... Service will now accept a URL take an image and upload to S3
=======
  const params = {Bucket: 'engauge-bucket', Key: 'screenshots/' + filename, Body: stream};
  // const s3Upload = Promise.promisify(s3.upload);

  return new Promise ((resolve, reject) => {
    s3.upload(params, function(err, data) {
      if (err !== null) {
        reject(err)
      } else {
        resolve(data);
      }
    });
  })
>>>>>>> 49b9dd7... Service will now accept a URL take an image and upload to S3
}

<<<<<<< HEAD
export function deleteFile(filepath) {
  fs.unlink(filepath, (err) => {
    if (err) { console.log('Error deleting file', filepath); }
    console.log('Deleted', filepath)
  })
||||||| parent of 49b9dd7... Service will now accept a URL take an image and upload to S3
export function deleteScreenshot(filename) {
  
=======
export function deleteFile(filepath) {
<<<<<<< HEAD
  console.log('deleteFile ran', filepath)
>>>>>>> 49b9dd7... Service will now accept a URL take an image and upload to S3
||||||| parent of bdd3088... Finish basic screenshot service
  console.log('deleteFile ran', filepath)
=======
  fs.unlink(filepath, (err) => {
    if (err) { console.log('Error deleting file', filepath); }
    console.log('Deleted', filepath)
  })
<<<<<<< HEAD
>>>>>>> bdd3088... Finish basic screenshot service
}
||||||| parent of aec4375... Remove dependeancy on minio
}
=======
}
>>>>>>> aec4375... Remove dependeancy on minio
