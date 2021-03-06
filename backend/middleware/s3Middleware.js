import aws from "aws-sdk";
import dotenv from "dotenv";
dotenv.config();

import multer from "multer";
import multerS3 from "multer-s3";
import path from "path";
import { v4 as uuid } from "uuid";

let cred = new aws.Credentials({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const s3 = new aws.S3({
  apiVersion: "2006-03-01",
  credentials: cred,
});

const uploadObject = multer({
  storage: multerS3({
    s3,
    bucket: "randmsgbucket",
    metadata: (req, res, callback) => {
      callback(null, { fieldName: res.fieldname });
    },
    key: (req, res, callback) => {
      const ext = path.extname(res.originalname);
      const objKey = `${uuid()}${ext}`;
      callback(null, objKey);
    },
  }),
  fileFilter(req, file, cb) {
    //if file not exist, false, else true

    const fileExist = file ? true : false;

    cb(null, fileExist);
  },
}).single("image");

const deleteObject = (key) => {
  var params = {
    Bucket: "randmsgbucket",
    Key: key,
  };

  s3.deleteObject(params, (err, data) => {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
  });
};

export { uploadObject, deleteObject };
