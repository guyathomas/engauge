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

export async function uploadFile(filepath) {
    const filename = filepath.slice(filepath.lastIndexOf('/') + 1)
    console.log('uploadToAWS')
    const stream = await fs.createReadStream(filepath);

    const params = {Bucket: 'engauge-bucket', Key: 'screenshots/' + filename, Body: stream};

    return new Promise((resolve, reject) => {
        s3.upload(params, function(err, data) { err ? reject(err) : resolve(data) })
    })
}

export function deleteFile(filepath) {
    fs.unlink(filepath, (err) => {
        if (err) { console.log('Error deleting file', filepath); }
        console.log('Deleted', filepath)
    })
}