const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const s3 = new aws.S3({
  // accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  // secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  // region: process.env.AWS_DEFAULT_REGION
  accessKeyId: 'AKIAIYMEYSRN6XIZP22Q',
  secretAccessKey: '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',
  region: 'ap-south-1'
})

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'cctecbuckt',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, 'files_from_node/' + Date.now().toString() + file.originalname);
    }
  })
});

module.exports = {
  upload
};
