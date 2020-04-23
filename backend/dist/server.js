/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst config = {\n  port: 8080,\n  mongoUri: \"mongodb+srv://test_user:clearlabs@cluster0-wlcbv.mongodb.net/test?retryWrites=true&w=majority\",\n  mongoUris: \"mongodb+srv://test_user:clearlabs@cluster0-wlcbv.mongodb.net/test\",\n  jwtSecret: \"Ulises_Martinez_Moran\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./models/Rack.js":
/*!************************!*\
  !*** ./models/Rack.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst Schema = mongoose.Schema;\nconst Rack = new Schema({\n  indexPlateReference: {\n    type: String,\n    required: true\n  },\n  selectedGenus: {\n    type: String,\n    required: true\n  },\n  samples: {\n    type: String,\n    required: true\n  }\n});\nmodule.exports = Item = mongoose.model(\"rack\", Rack);\n\n//# sourceURL=webpack:///./models/Rack.js?");

/***/ }),

/***/ "./models/Sample.js":
/*!**************************!*\
  !*** ./models/Sample.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst Schema = mongoose.Schema;\nconst Sample = new Schema({\n  id: {\n    type: String,\n    required: true\n  }\n});\nmodule.exports = Item = mongoose.model(\"sample\", Sample);\n\n//# sourceURL=webpack:///./models/Sample.js?");

/***/ }),

/***/ "./models/Simulation.js":
/*!******************************!*\
  !*** ./models/Simulation.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst Schema = mongoose.Schema;\nconst Simulation = new Schema({\n  id: {\n    type: String,\n    required: true\n  },\n  environment: {\n    type: String,\n    required: true\n  },\n  userPersona: {\n    type: String,\n    required: true\n  },\n  racks: {\n    type: String,\n    required: true\n  },\n  sample: {\n    type: String,\n    required: true\n  },\n  analysisFiles: {\n    type: String,\n    required: true\n  }\n});\nmodule.exports = Item = mongoose.model(\"simulation\", Simulation);\n\n//# sourceURL=webpack:///./models/Simulation.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n\n\n // import config from \"./../../config/config\";\n\n\n\nconst signin = (req, res) => {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n    email: req.body.email\n  }, (err, user) => {\n    if (err || !user) return res.status(\"401\").json({\n      error: \"User not found\"\n    });\n\n    if (!user.authenticate(req.body.password)) {\n      return res.status(\"401\").send({\n        error: \"Email and password don't match.\"\n      });\n    }\n\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({\n      _id: user._id\n    }, _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret);\n    res.cookie(\"t\", token, {\n      expire: new Date() + 9999\n    });\n    return res.json({\n      token,\n      user: {\n        _id: user._id,\n        name: user.name,\n        email: user.email\n      }\n    });\n  });\n};\n\nconst signout = (req, res) => {\n  res.clearCookie(\"t\");\n  return res.status(\"200\").json({\n    message: \"signed out\"\n  });\n};\n\nconst requireSignin = express_jwt__WEBPACK_IMPORTED_MODULE_2___default()({\n  secret: _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret,\n  userProperty: \"auth\"\n});\n\nconst hasAuthorization = (req, res, next) => {\n  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n\n  if (!authorized) {\n    return res.status(\"403\").json({\n      error: \"User is not authorized\"\n    });\n  }\n\n  next();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  signin,\n  signout,\n  requireSignin,\n  hasAuthorization\n});\n\n//# sourceURL=webpack:///./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\n\n\n\nconst create = (req, res, next) => {\n  const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n  console.log(user);\n  user.save((err, result) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n\n    res.status(200).json({\n      message: \"Successfully signed up!\"\n    });\n  });\n};\n/**\n * Load user and append to req.\n */\n\n\nconst userByID = (req, res, next, id) => {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id).exec((err, user) => {\n    if (err || !user) return res.status(\"400\").json({\n      error: \"User not found\"\n    });\n    req.profile = user;\n    next();\n  });\n};\n\nconst read = (req, res) => {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n};\n\nconst list = (req, res) => {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find((err, users) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n\n    res.json(users);\n  }).select(\"name email updated created\");\n};\n\nconst update = (req, res, next) => {\n  let user = req.profile;\n  user = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.extend(user, req.body);\n  user.updated = Date.now();\n  user.save(err => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n\n    user.hashed_password = undefined;\n    user.salt = undefined;\n    res.json(user);\n  });\n};\n\nconst remove = (req, res, next) => {\n  let user = req.profile;\n  user.remove((err, deletedUser) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n\n    deletedUser.hashed_password = undefined;\n    deletedUser.salt = undefined;\n    res.json(deletedUser);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  create,\n  userByID,\n  read,\n  list,\n  remove,\n  update\n});\n\n//# sourceURL=webpack:///./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var method_override__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! method-override */ \"method-override\");\n/* harmony import */ var method_override__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(method_override__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n\n\n\n\n\n\n\n // Route import\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());\napp.use(method_override__WEBPACK_IMPORTED_MODULE_7___default()(\"_method\"));\napp.set(\"view engine\", \"ejs\");\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use(\"/\", _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.use(\"/\", _routes_auth_routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\napp.get(\"/he\", (req, res) => {\n  res.status(200).send(Object(_template__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\n});\napp.use((err, req, res, next) => {\n  if (err.name === \"UnauthorizedError\") {\n    res.status(401).json({\n      error: err.name + \": \" + err.message\n    });\n  }\n});\napp.use((err, req, res, next) => {\n  if (err.name === \"UnauthorizedError\") {\n    res.status(401).json({\n      error: err.name + \": \" + err.message\n    });\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getErrorMessage = err => {\n  let message = \"\";\n\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = getUniqueErrorMessage(err);\n        break;\n\n      default:\n        message = \"Something went wrong\";\n    }\n  } else {\n    for (let errName in err.errors) {\n      if (err.errors[errName].message) message = err.errors[errName].message;\n    }\n  }\n\n  return message;\n};\n\nconst getUniqueErrorMessage = err => {\n  let output;\n\n  try {\n    let fieldName = err.message.substring(err.message.lastIndexOf(\".$\") + 2, err.message.lastIndexOf(\"_1\"));\n    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + \" already exists\";\n  } catch (ex) {\n    output = \"Unique field already exists\";\n  }\n\n  return output;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getErrorMessage\n});\n\n//# sourceURL=webpack:///./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  firstName: {\n    type: String,\n    trim: true,\n    required: \"Name is required\"\n  },\n  lastName: {\n    type: String,\n    trim: true,\n    required: \"Last Name is required\"\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: \"Email already exists\",\n    match: [/.+\\@.+\\..+/, \"Please fill a valid email address\"],\n    required: \"Email is required\"\n  },\n  hashed_password: {\n    type: String,\n    required: \"Password is required\"\n  },\n  salt: String,\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  }\n});\nUserSchema.virtual(\"password\").set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\nUserSchema.path(\"hashed_password\").validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate(\"password\", \"Password must be at least 6 characters.\");\n  }\n\n  if (this.isNew && !this._password) {\n    this.invalidate(\"password\", \"Password is required\");\n  }\n}, null);\nUserSchema.methods = {\n  authenticate: function (plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  encryptPassword: function (password) {\n    if (!password) return \"\";\n\n    try {\n      return crypto__WEBPACK_IMPORTED_MODULE_1___default.a.createHmac(\"sha1\", this.salt).update(password).digest(\"hex\");\n    } catch (err) {\n      return \"\";\n    }\n  },\n  makeSalt: function () {\n    return Math.round(new Date().valueOf() * Math.random()) + \"\";\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"User\", UserSchema));\n\n//# sourceURL=webpack:///./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route(\"/auth/signin\").post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signin);\nrouter.route(\"/auth/signout\").get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signout);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route(\"/api/users\").get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list).post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create);\nrouter.route(\"/api/users/:userId\").get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].read).put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\nrouter.param(\"userId\", _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userByID);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ \"./config/config.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var multer_gridfs_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! multer-gridfs-storage */ \"multer-gridfs-storage\");\n/* harmony import */ var multer_gridfs_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(multer_gridfs_storage__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var gridfs_stream__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gridfs-stream */ \"gridfs-stream\");\n/* harmony import */ var gridfs_stream__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gridfs_stream__WEBPACK_IMPORTED_MODULE_7__);\n\n\n // Uploading image\n\n\n\n\n\n\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri, {\n  useNewUrlParser: true,\n  useCreateIndex: true,\n  useFindAndModify: false,\n  useUnifiedTopology: true\n}).then(() => console.log(\"MongoDB Connected...\")).catch(err => console.log(err));\n\nconst Simulation = __webpack_require__(/*! ../models/Simulation */ \"./models/Simulation.js\");\n\nconst Sample = __webpack_require__(/*! ../models/Sample */ \"./models/Sample.js\");\n\nconst Rack = __webpack_require__(/*! ../models/Rack */ \"./models/Rack.js\");\n/* Uploading Files */\n// Mongo URI\n\n\nconst mongoURIs = \"mongodb+srv://writer:writer1@cluster0-wlcbv.mongodb.net/test\"; // connection\n\nconst conn = mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.createConnection(mongoURIs, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n}); // init gfs\n\nlet gfs;\nconn.once(\"open\", () => {\n  // init stream\n  gfs = new mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.mongo.GridFSBucket(conn.db, {\n    bucketName: \"uploads\"\n  });\n}); // Storage\n\nconst storage = new multer_gridfs_storage__WEBPACK_IMPORTED_MODULE_6___default.a({\n  url: mongoURIs,\n  file: (req, file) => {\n    return new Promise((resolve, reject) => {\n      crypto__WEBPACK_IMPORTED_MODULE_4___default.a.randomBytes(16, (err, buf) => {\n        if (err) {\n          return reject(err);\n        }\n\n        const filename = buf.toString(\"hex\") + path__WEBPACK_IMPORTED_MODULE_3___default.a.extname(file.originalname);\n        const fileInfo = {\n          filename: filename,\n          bucketName: \"uploads\"\n        };\n        resolve(fileInfo);\n      });\n    });\n  }\n});\nconst upload = multer__WEBPACK_IMPORTED_MODULE_5___default()({\n  storage\n});\n/* CREATE */\n// const newSimulation = new Simulation({\n//   id: \"1234567\",\n//   environment: \"environment-w\",\n//   userPersona: \"Dr. Dog\",\n//   racks: \"Rack name\",\n//   sample: \"sample name\",\n//   analysisFiles: \"File name\"\n// });\n// newSimulation\n//   .save()\n//   .then(item => console.log(item))\n//   .catch(err => console.log(err));\n\n/*  READ */\n// Simulation.find()\n//   .sort({ date: -1 })\n//   .then(items => console.log(items));\n\n/*  UPDATE  */\n// Simulation.findOneAndUpdate(\n//   { _id: \"5e617aa0e846ba25f6a0e3e8\" },\n//   { environment: \"environment-y\" }\n// ).then(item => console.log(item));\n\n/* DELETE */\n// Simulation.findOneAndDelete(\n//   { _id: \"5e617d7bd2a322266f9cdc30\" },\n//   { environment: \"environment-w\" }\n// ).then(console.log(\"Item deleted\"));\n\n/* Simulation ENDPOINTS */\n// GET\n\n_express__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/Simulation/\", (req, res) => {\n  Simulation.find().sort({\n    date: -1\n  }).then(items => console.log(res.json(items)));\n}); // POST\n\n_express__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/Simulation/\", (req, res) => {\n  const newSimulation = new Simulation({\n    name: req.body.name,\n    id: req.body.id,\n    environment: req.body.environment,\n    userPersona: req.body.userPersona,\n    racks: req.body.racks,\n    sample: req.body.sample,\n    analysisFiles: req.body.analysisFiles\n  });\n  newSimulation.save().then(item => res.json(item));\n}); // DELETE\n\n_express__WEBPACK_IMPORTED_MODULE_2__[\"default\"].delete(\"/Simulation/:id\", (req, res) => {\n  Simulation.findOneAndDelete({\n    _id: req.params.id\n  }).then(() => res.json({\n    success: true\n  })).catch(err => res.status(404).json({\n    success: false\n  }));\n}); // UPDATE\n\n_express__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(\"/Simulation/:id\", (req, res) => {\n  Simulation.findOneAndUpdate({\n    _id: req.params.id\n  }, req.body).then(() => res.json({\n    success: true\n  })).catch(err => res.status(404).json({\n    success: false\n  }));\n});\n/* RACK ENDPOINTS */\n// GET\n\n_express__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/Rack/\", (req, res) => {\n  Simulation.find().sort({\n    date: -1\n  }).then(items => console.log(res.json(items)));\n}); // POST\n\n_express__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/Rack/\", (req, res) => {\n  const newSimulation = new Simulation({\n    name: req.body.name,\n    id: req.body.id,\n    environment: req.body.environment,\n    userPersona: req.body.userPersona,\n    racks: req.body.racks,\n    sample: req.body.sample,\n    analysisFiles: req.body.analysisFiles\n  });\n  newSimulation.save().then(item => res.json(item));\n}); // DELETE\n\n_express__WEBPACK_IMPORTED_MODULE_2__[\"default\"].delete(\"/Rack/:id\", (req, res) => {\n  Simulation.findOneAndDelete({\n    _id: req.params.id\n  }).then(() => res.json({\n    success: true\n  })).catch(err => res.status(404).json({\n    success: false\n  }));\n}); // UPDATE\n\n_express__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(\"/Rack/:id\", (req, res) => {\n  Simulation.findOneAndUpdate({\n    _id: req.params.id\n  }, req.body).then(() => res.json({\n    success: true\n  })).catch(err => res.status(404).json({\n    success: false\n  }));\n});\n/* Sample ENDPOINTS */\n// GET\n\n_express__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/Sample/\", (req, res) => {\n  Simulation.find().sort({\n    date: -1\n  }).then(items => console.log(res.json(items)));\n}); // POST\n\n_express__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/Sample/\", (req, res) => {\n  const newSimulation = new Simulation({\n    name: req.body.name,\n    id: req.body.id,\n    environment: req.body.environment,\n    userPersona: req.body.userPersona,\n    racks: req.body.racks,\n    sample: req.body.sample,\n    analysisFiles: req.body.analysisFiles\n  });\n  newSimulation.save().then(item => res.json(item));\n}); // DELETE\n\n_express__WEBPACK_IMPORTED_MODULE_2__[\"default\"].delete(\"/Sample/:id\", (req, res) => {\n  Simulation.findOneAndDelete({\n    _id: req.params.id\n  }).then(() => res.json({\n    success: true\n  })).catch(err => res.status(404).json({\n    success: false\n  }));\n}); // UPDATE\n\n_express__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(\"/Sample/:id\", (req, res) => {\n  Simulation.findOneAndUpdate({\n    _id: req.params.id\n  }, req.body).then(() => res.json({\n    success: true\n  })).catch(err => res.status(404).json({\n    success: false\n  }));\n});\n/******************** File Uploading **********************/\n\n_express__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/\", (req, res) => {\n  gfs.files.find().toArray((err, files) => {\n    // Check if files\n    if (!files || files.length === 0) {\n      res.render(\"index\", {\n        files: false\n      });\n    } else {\n      files.map(file => {\n        if (file.contentType === \"image/jpeg\" || file.contentType === \"image/png\") {\n          file.isImage = true;\n        } else {\n          file.isImage = false;\n        }\n      });\n      res.render(\"index\", {\n        files: files\n      });\n    }\n  });\n}); // @route POST /upload\n// @desc  Uploads file to DB\n\n_express__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/upload\", upload.single(\"file\"), (req, res) => {\n  // res.json({ file: req.file });\n  res.redirect(\"/\");\n});\n_express__WEBPACK_IMPORTED_MODULE_2__[\"default\"].listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, () => console.log(`Server started on port: http://localhost:${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port}`));\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  return `<!DOCTYPE html>\n  <html lang=\"en\">\n    <head>\n      <meta charset=\"UTF-8\" />\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n      <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n      <link\n        rel=\"stylesheet\"\n        href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\n      />\n      <title>Mongo File Upload</title>\n    </head>\n  \n    <body>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-6 m-auto\">\n            <h1 class=\"my-4\">Lets upload some stuff</h1>\n            <form action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n              <div class=\"custom-file mb-3\">\n                <input\n                  type=\"file\"\n                  class=\"custom-file-input\"\n                  name=\"file\"\n                  id=\"file1\"\n                  onchange=\"readSingleFile(this.files)\"\n                />\n                <label class=\"custom-file-label\" for=\"file1\" id=\"file-label\"\n                  >Choose file</label\n                >\n              </div>\n              <input\n                type=\"submit\"\n                value=\"Submit\"\n                class=\"btn btn-primary btn-block\"\n              />\n            </form>\n            <hr />\n            <% if(files) { %> <% files.forEach(function(file) {%>\n            <div class=\"card mb-3\">\n              <div class=\"card-header\">\n                <div class=\"card-title\">\n                  <%= file.filename %>\n                </div>\n              </div>\n              <div class=\"card-body\">\n                <% if (file.isImage) { %>\n                <img\n                  src=\"image/<%= file.filename %>\"\n                  width=\"250\"\n                  alt=\"\"\n                  class=\"img-responsive\"\n                />\n                <%} else { %>\n                <p><% file.filename %></p>\n                <% } %>\n              </div>\n              <div class=\"card-footer\">\n                <form action=\"/files/del/<%= file._id %>\" method=\"post\">\n                  <button type=\"submit\" class=\"btn btn-danger\">Remove</button>\n                </form>\n              </div>\n            </div>\n            <%}) %> <% } else { %>\n            <p>No files to show</p>\n            <% } %>\n          </div>\n        </div>\n      </div>\n  \n      <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\"></script>\n      <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\n      <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>\n      <script>\n        function readSingleFile(e) {\n          const name = e[0].name;\n          document.getElementById(\"file-label\").textContent = name;\n        }\n      </script>\n    </body>\n  </html>\n  `;\n});\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "gridfs-stream":
/*!********************************!*\
  !*** external "gridfs-stream" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gridfs-stream\");\n\n//# sourceURL=webpack:///external_%22gridfs-stream%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "method-override":
/*!**********************************!*\
  !*** external "method-override" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"method-override\");\n\n//# sourceURL=webpack:///external_%22method-override%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");\n\n//# sourceURL=webpack:///external_%22multer%22?");

/***/ }),

/***/ "multer-gridfs-storage":
/*!****************************************!*\
  !*** external "multer-gridfs-storage" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer-gridfs-storage\");\n\n//# sourceURL=webpack:///external_%22multer-gridfs-storage%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });