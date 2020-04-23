// import confix from "../config/config";
// import mongoose from "mongoose";
// import app from "./express";

// // Uploading image
// import path from "path";
// import crypto from "crypto";
// import multer from "multer";
// import GridFsStorage from "multer-gridfs-storage";
// import Grid from "gridfs-stream";

// mongoose
//   .connect(confix.mongoUri, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB Connected..."))
//   .catch((err) => console.log(err));

// const Simulation = require("../models/Simulation");
// const Sample = require("../models/Sample");
// const Rack = require("../models/Rack");

// /* Uploading Files */

// // Mongo URI
// const mongoURIs =
//   "mongodb+srv://writer:writer1@cluster0-wlcbv.mongodb.net/test";

// // connection
// const conn = mongoose.createConnection(mongoURIs, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // init gfs
// let gfs;
// conn.once("open", () => {
//   // init stream
//   gfs = new mongoose.mongo.GridFSBucket(conn.db, {
//     bucketName: "uploads",
//   });
// });

// // Storage
// const storage = new GridFsStorage({
//   url: mongoURIs,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {
//         if (err) {
//           return reject(err);
//         }
//         const filename = buf.toString("hex") + path.extname(file.originalname);
//         const fileInfo = {
//           filename: filename,
//           bucketName: "uploads",
//         };
//         resolve(fileInfo);
//       });
//     });
//   },
// });

// const upload = multer({
//   storage,
// });

// /* CREATE */
// // const newSimulation = new Simulation({
// //   id: "1234567",
// //   environment: "environment-w",
// //   userPersona: "Dr. Dog",
// //   racks: "Rack name",
// //   sample: "sample name",
// //   analysisFiles: "File name"
// // });
// // newSimulation
// //   .save()
// //   .then(item => console.log(item))
// //   .catch(err => console.log(err));

// /*  READ */
// // Simulation.find()
// //   .sort({ date: -1 })
// //   .then(items => console.log(items));

// /*  UPDATE  */
// // Simulation.findOneAndUpdate(
// //   { _id: "5e617aa0e846ba25f6a0e3e8" },
// //   { environment: "environment-y" }
// // ).then(item => console.log(item));

// /* DELETE */
// // Simulation.findOneAndDelete(
// //   { _id: "5e617d7bd2a322266f9cdc30" },
// //   { environment: "environment-w" }
// // ).then(console.log("Item deleted"));

// /* Simulation ENDPOINTS */

// // GET
// app.get("/Simulation/", (req, res) => {
//   Simulation.find()
//     .sort({ date: -1 })
//     .then((items) => console.log(res.json(items)));
// });

// // POST
// app.post("/Simulation/", (req, res) => {
//   const newSimulation = new Simulation({
//     name: req.body.name,
//     id: req.body.id,
//     environment: req.body.environment,
//     userPersona: req.body.userPersona,
//     racks: req.body.racks,
//     sample: req.body.sample,
//     analysisFiles: req.body.analysisFiles,
//   });
//   newSimulation.save().then((item) => res.json(item));
// });

// // DELETE
// app.delete("/Simulation/:id", (req, res) => {
//   Simulation.findOneAndDelete({ _id: req.params.id })
//     .then(() => res.json({ success: true }))
//     .catch((err) => res.status(404).json({ success: false }));
// });

// // UPDATE
// app.put("/Simulation/:id", (req, res) => {
//   Simulation.findOneAndUpdate({ _id: req.params.id }, req.body)
//     .then(() => res.json({ success: true }))
//     .catch((err) => res.status(404).json({ success: false }));
// });

// /* RACK ENDPOINTS */

// // GET
// app.get("/Rack/", (req, res) => {
//   Simulation.find()
//     .sort({ date: -1 })
//     .then((items) => console.log(res.json(items)));
// });

// // POST
// app.post("/Rack/", (req, res) => {
//   const newSimulation = new Simulation({
//     name: req.body.name,
//     id: req.body.id,
//     environment: req.body.environment,
//     userPersona: req.body.userPersona,
//     racks: req.body.racks,
//     sample: req.body.sample,
//     analysisFiles: req.body.analysisFiles,
//   });
//   newSimulation.save().then((item) => res.json(item));
// });

// // DELETE
// app.delete("/Rack/:id", (req, res) => {
//   Simulation.findOneAndDelete({ _id: req.params.id })
//     .then(() => res.json({ success: true }))
//     .catch((err) => res.status(404).json({ success: false }));
// });

// // UPDATE
// app.put("/Rack/:id", (req, res) => {
//   Simulation.findOneAndUpdate({ _id: req.params.id }, req.body)
//     .then(() => res.json({ success: true }))
//     .catch((err) => res.status(404).json({ success: false }));
// });

// /* Sample ENDPOINTS */

// // GET
// app.get("/Sample/", (req, res) => {
//   Simulation.find()
//     .sort({ date: -1 })
//     .then((items) => console.log(res.json(items)));
// });

// // POST
// app.post("/Sample/", (req, res) => {
//   const newSimulation = new Simulation({
//     name: req.body.name,
//     id: req.body.id,
//     environment: req.body.environment,
//     userPersona: req.body.userPersona,
//     racks: req.body.racks,
//     sample: req.body.sample,
//     analysisFiles: req.body.analysisFiles,
//   });
//   newSimulation.save().then((item) => res.json(item));
// });

// // DELETE
// app.delete("/Sample/:id", (req, res) => {
//   Simulation.findOneAndDelete({ _id: req.params.id })
//     .then(() => res.json({ success: true }))
//     .catch((err) => res.status(404).json({ success: false }));
// });

// // UPDATE
// app.put("/Sample/:id", (req, res) => {
//   Simulation.findOneAndUpdate({ _id: req.params.id }, req.body)
//     .then(() => res.json({ success: true }))
//     .catch((err) => res.status(404).json({ success: false }));
// });

// /******************** File Uploading **********************/

// app.get("/", (req, res) => {
//   gfs.files.find().toArray((err, files) => {
//     // Check if files
//     if (!files || files.length === 0) {
//       res.render("index", { files: false });
//     } else {
//       files.map((file) => {
//         if (
//           file.contentType === "image/jpeg" ||
//           file.contentType === "image/png"
//         ) {
//           file.isImage = true;
//         } else {
//           file.isImage = false;
//         }
//       });
//       res.render("index", { files: files });
//     }
//   });
// });

// // @route POST /upload
// // @desc  Uploads file to DB
// app.post("/upload", upload.single("file"), (req, res) => {
//   res.json({ file: req.file });
//   res.redirect("/");
// });

// app.listen(confix.port, () =>
//   console.log(`Server started on port: http://localhost:${confix.port}`)
// );
const express = require("express");
const app = express();

const crypto = require("crypto");
const path = require("path");
const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");

// Middlewares
app.use(express.json());
app.set("view engine", "ejs");

// DB
const mongoURI =
  "mongodb+srv://test_user:clearlabs@cluster0-wlcbv.mongodb.net/test?retryWrites=true&w=majority";

// connection
const conn = mongoose.createConnection(mongoURI);

// init gfs
let gfs;
conn.once("open", () => {
  // init stream
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "uploads",
  });
});

// Storage
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({
  storage,
});

// get / page
app.get("/", (req, res) => {
  if (!gfs) {
    console.log("some error occured, check connection to db");
    res.send("some error occured, check connection to db");
    process.exit(0);
  }
  gfs.find().toArray((err, files) => {
    // check if files
    if (!files || files.length === 0) {
      return res.render("template", {
        files: false,
      });
    } else {
      const f = files
        .map((file) => {
          if (
            file.contentType === "image/png" ||
            file.contentType === "image/jpeg"
          ) {
            file.isImage = true;
          } else {
            file.isImage = false;
          }
          return file;
        })
        .sort((a, b) => {
          return (
            new Date(b["uploadDate"]).getTime() -
            new Date(a["uploadDate"]).getTime()
          );
        });

      return res.render("template", {
        files: f,
      });
    }

    return res.json(files);
  });
});

app.post("/upload", upload.single("file"), (req, res) => {
  // res.json({file : req.file})
  res.redirect("/");
});

app.get("/files", (req, res) => {
  gfs.find().toArray((err, files) => {
    // check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: "no files exist",
      });
    }

    return res.json(files);
  });
});

app.get("/files/:filename", (req, res) => {
  gfs.find(
    {
      filename: req.params.filename,
    },
    (err, file) => {
      if (!file) {
        return res.status(404).json({
          err: "no files exist",
        });
      }

      return res.json(file);
    }
  );
});

app.get("/image/:filename", (req, res) => {
  // console.log('id', req.params.id)
  const file = gfs
    .find({
      filename: req.params.filename,
    })
    .toArray((err, files) => {
      if (!files || files.length === 0) {
        return res.status(404).json({
          err: "no files exist",
        });
      }
      gfs.openDownloadStreamByName(req.params.filename).pipe(res);
    });
});

// files/del/:id
// Delete chunks from the db
app.post("/files/del/:id", (req, res) => {
  gfs.delete(new mongoose.Types.ObjectId(req.params.id), (err, data) => {
    if (err) return res.status(404).json({ err: err.message });
    res.redirect("/");
  });
});

const port = 5002;

app.listen(port, () => {
  console.log("server started on " + port);
});
