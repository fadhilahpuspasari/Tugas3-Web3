(this["webpackJsonppweb3-reactstrap"] = this["webpackJsonppweb3-reactstrap"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/home.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/assets/css/home.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".bg-grad{\n    /* background: linear-gradient(#283048,#859398); */\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html, body {\n  height: 100%;\n  margin: 0;\n}\n\na {\n  color: white; /* blue colors for links too */\n  text-decoration: none; /* no underline */\n}\n\n.full-height {\n  height: 100%;\n  /* style={{background: \"linear-gradient(#0F2027,#2C5364)\"}} */\n  background-color: #eee;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.svg */ "./src/logo.svg");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "/Users/FP/Documents/fp/smt 4/web 3/WEB3B-15703-FADHILAH-REACT/src/App.js";

 // import './App.css';


const cardData = [{
  nama: "Fadpus",
  job: "Athlete"
}, {
  nama: "Puspa",
  job: "Singer"
}, {
  nama: "Fadhilah",
  job: "Guitarist"
}, {
  nama: "Puspasari",
  job: "Song Writer"
}];

class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: {
        size: 4,
        offset: 4
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, cardData.map(data => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      body: true,
      color: data.color,
      style: {
        borderColor: '#333',
        color: 'white',
        margin: '10px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, data.nama), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, data.job)))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/app/Home.js":
/*!*************************!*\
  !*** ./src/app/Home.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_layouts_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/layouts/Navbar */ "./src/common/layouts/Navbar.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _assets_css_home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/css/home.css */ "./src/assets/css/home.css");
/* harmony import */ var _assets_css_home_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_css_home_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_HomeComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/HomeComponent */ "./src/modules/HomeComponent.js");
var _jsxFileName = "/Users/FP/Documents/fp/smt 4/web 3/WEB3B-15703-FADHILAH-REACT/src/app/Home.js";






class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      page: 1
    };

    this.pageChangeToProfile = () => {
      this.setState({
        page: 1
      });
    };

    this.pageChangeToPortfolio = () => {
      this.setState({
        page: 2
      });
    };

    this.pageChangeToContact = () => {
      this.setState({
        page: 3
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_HomeComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
      initialData: this.state,
      pageChangeToProfile: this.pageChangeToProfile,
      pageChangeToPortfolio: this.pageChangeToPortfolio,
      pageChangeToContact: this.pageChangeToContact,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/assets/css/home.css":
/*!*********************************!*\
  !*** ./src/assets/css/home.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/home.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/home.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/home.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/assets/images sync recursive ^\\.\\/.*\\.png$":
/*!**********************************************!*\
  !*** ./src/assets/images sync ^\.\/.*\.png$ ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./fadpus.png": "./src/assets/images/fadpus.png",
	"./music.png": "./src/assets/images/music.png",
	"./picture.png": "./src/assets/images/picture.png",
	"./sport.png": "./src/assets/images/sport.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync recursive ^\\.\\/.*\\.png$";

/***/ }),

/***/ "./src/assets/images/fadpus.png":
/*!**************************************!*\
  !*** ./src/assets/images/fadpus.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/fadpus.75fce922.png";

/***/ }),

/***/ "./src/assets/images/music.png":
/*!*************************************!*\
  !*** ./src/assets/images/music.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/music.69cca126.png";

/***/ }),

/***/ "./src/assets/images/picture.png":
/*!***************************************!*\
  !*** ./src/assets/images/picture.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/picture.8de2b890.png";

/***/ }),

/***/ "./src/assets/images/sport.png":
/*!*************************************!*\
  !*** ./src/assets/images/sport.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sport.28a0f802.png";

/***/ }),

/***/ "./src/common/component/About.js":
/*!***************************************!*\
  !*** ./src/common/component/About.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/FP/Documents/fp/smt 4/web 3/WEB3B-15703-FADHILAH-REACT/src/common/component/About.js";


const About = props => {
  // console.log(props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row h-100 m-0 p-0 d-flex align-items-center ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mr-4",
    style: {
      color: "#000533"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: {
      color: "#000533"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "About me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: "56px",
      height: "10px",
      backgroundColor: "#f6c7d0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "My name is Fadhilah Puspasari. I was born in Rembang on 4th August,1999. I'm confident in who I am, and I'm not doing anything wrong. I'm just being myself: being comfortable with my life, comfortable with my self, and I'm figuring out who I am.")));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/common/component/Contact.js":
/*!*****************************************!*\
  !*** ./src/common/component/Contact.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/FP/Documents/fp/smt 4/web 3/WEB3B-15703-FADHILAH-REACT/src/common/component/Contact.js";


const Contact = props => {
  console.log("Contact");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row h-100 m-0 p-0 d-flex align-items-center ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "ml-5",
    style: {
      color: "#000533"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Find me on :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-5",
    style: {
      width: "56px",
      height: "10px",
      backgroundColor: "#f6c7d0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: "56px",
      height: "10px",
      backgroundColor: ""
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-white",
    href: "https://www.instagram.com/fadhilahpuspasari/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded p-2 my-2",
    style: {
      backgroundColor: "#C13584"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Instagram ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "fab fa-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-white",
    href: "https://api.whatsapp.com/send?phone=6282242879555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded p-2 my-2",
    style: {
      backgroundColor: "#25D366"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Whatsapp ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "fab fa-whatsapp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-white",
    href: "https://github.com/fadhilahpuspasari",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded p-2 my-2 ",
    style: {
      backgroundColor: "#211F1F"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Github ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "fab fa-github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-white",
    href: "https://www.facebook.com/fadhilah.puspasari",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded p-2 my-2",
    style: {
      backgroundColor: "#0072b1"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Facebook ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "fab fa-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-white",
    href: "mailto:fadhilahpuspasari.48@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded p-2 my-2",
    style: {
      backgroundColor: "#B23121"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Email ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "fas fa-envelope",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/common/component/Portfolio.js":
/*!*******************************************!*\
  !*** ./src/common/component/Portfolio.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PortfolioCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PortfolioCard */ "./src/common/component/PortfolioCard.js");
var _jsxFileName = "/Users/FP/Documents/fp/smt 4/web 3/WEB3B-15703-FADHILAH-REACT/src/common/component/Portfolio.js";



class Portfolio extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      count: 0,
      portfolioData: [{
        name: "fadpus",
        title: "Photography",
        link: "hhttps://www.instagram.com/fadhilahpuspasari/",
        desc: "I began to pursue photography since class 1 high school. I am very interested in photography and really like to explore things. All photos produced using a smartphone camera."
      }, {
        name: "sport",
        title: "Sports",
        link: "https://www.youtube.com/watch?v=rTVObLjfBpo",
        desc: "I have won various sports, such as volleyball, table tennis, badminton and running. I don't know why but I really like sports. I want to try all sports. I once participated in a national javelin throwing competition."
      }, {
        name: "music",
        title: "Music",
        link: "https://www.youtube.com/channel/UC9SkSP7FKtIckHWDecSuOxg?view_as=subscriber",
        desc: "Music is my life. Guitar is my bestfriend. And singing is my release."
      }]
    };

    this.prevPortfolio = () => {
      const {
        count
      } = this.state;

      if (count == 0) {
        this.setState({
          count: 2
        });
        return;
      }

      const nextCount = count - 1;
      this.setState({
        count: nextCount
      });
    };

    this.nextPortfolio = () => {
      const {
        count
      } = this.state;

      if (count == 2) {
        this.setState({
          count: 0
        });
        return;
      }

      const nextCount = count + 1;
      this.setState({
        count: nextCount
      });
    };
  }

  render() {
    const {
      count,
      portfolioData
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container h-100 mx-0 mt-5 p-0 position-relative d-flex align-items-center",
      style: {
        color: "#000533"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "My Portfolio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.prevPortfolio,
      className: "col-2 d-flex align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: this.nextPortfolio,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: {
        fontSize: "56px",
        color: "#f6c7d0"
      },
      className: "fas fa-arrow-circle-left ml-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, portfolioData.map((port, index) => {
      if (count == index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PortfolioCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          data: port,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        });
      }
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-2 d-flex align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: this.nextPortfolio,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: {
        fontSize: "56px",
        color: "#f6c7d0"
      },
      className: "fas fa-arrow-circle-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ "./src/common/component/PortfolioCard.js":
/*!***********************************************!*\
  !*** ./src/common/component/PortfolioCard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/FP/Documents/fp/smt 4/web 3/WEB3B-15703-FADHILAH-REACT/src/common/component/PortfolioCard.js";


class PortfolioCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const data = this.props.data;

    const image = __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*\\.png$")("./" + data.name + ".png"); // const {urlImage} = this.props


    console.log(this.props.data.name);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card",
      style: {
        width: ""
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: image,
      className: "card-img-top",
      alt: "...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, data.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, data.desc), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: data.link,
      className: "btn btn-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "My Gallery"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PortfolioCard);

/***/ }),

/***/ "./src/common/component/Profile.js":
/*!*****************************************!*\
  !*** ./src/common/component/Profile.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About */ "./src/common/component/About.js");
var _jsxFileName = "/Users/FP/Documents/fp/smt 4/web 3/WEB3B-15703-FADHILAH-REACT/src/common/component/Profile.js";



const Profile = props => {
  // console.log(props);
  const image1 = __webpack_require__(/*! ../../assets/images/picture.png */ "./src/assets/images/picture.png");

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row h-100 m-0 p-0 d-flex align-items-center w-75",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col d-flex align-items-center d-block h-50 ",
    style: {
      backgroundColor: "#f6c7d0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-white",
    style: {
      fontSize: "70px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Fad", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      color: "#4f3961",
      fontSize: "128px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "."), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), "Pus", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: image1,
    className: "img-fluid h-100 position-absolute ml-auto",
    alt: "",
    style: {
      right: -100
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./src/common/layouts/Navbar.js":
/*!**************************************!*\
  !*** ./src/common/layouts/Navbar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/FP/Documents/fp/smt 4/web 3/WEB3B-15703-FADHILAH-REACT/src/common/layouts/Navbar.js";


class Navbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      pageChangeToProfile,
      pageChangeToPortfolio,
      pageChangeToContact
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "position-absolute",
      style: {
        right: "15%",
        zIndex: 99
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: "navbar navbar-expand-lg navbar-light w-100 ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "navbar-toggler",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarTogglerDemo01",
      "aria-controls": "navbarTogglerDemo01",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "navbar-toggler-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "collapse navbar-collapse ",
      id: "navbarTogglerDemo01",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "navbar-nav ml-auto mt-2 mt-lg-0 ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link",
      href: "#",
      onClick: pageChangeToProfile,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Profile")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link",
      href: "#",
      onClick: pageChangeToPortfolio,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Portfolio")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link",
      href: "#",
      onClick: pageChangeToContact,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Contact"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_app_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/app/Home */ "./src/app/Home.js");
var _jsxFileName = "/Users/FP/Documents/fp/smt 4/web 3/WEB3B-15703-FADHILAH-REACT/src/index.js";







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_app_Home__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.5d5d9eef.svg";

/***/ }),

/***/ "./src/modules/HomeComponent.js":
/*!**************************************!*\
  !*** ./src/modules/HomeComponent.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_layouts_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/layouts/Navbar */ "./src/common/layouts/Navbar.js");
/* harmony import */ var _common_component_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/component/Profile */ "./src/common/component/Profile.js");
/* harmony import */ var _common_component_Portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/component/Portfolio */ "./src/common/component/Portfolio.js");
/* harmony import */ var _common_component_Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/component/Contact */ "./src/common/component/Contact.js");
/* harmony import */ var _common_component_About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/component/About */ "./src/common/component/About.js");
var _jsxFileName = "/Users/FP/Documents/fp/smt 4/web 3/WEB3B-15703-FADHILAH-REACT/src/modules/HomeComponent.js";







class HomeComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      initialData,
      pageChangeToProfile,
      pageChangeToPortfolio,
      pageChangeToContact
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        boxSizing: "content-box",
        backgroundColor: "White"
      },
      className: " bg-grad h-75 w-75 mx-auto rounded shadow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_layouts_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      pageChangeToProfile: pageChangeToProfile,
      pageChangeToPortfolio: pageChangeToPortfolio,
      pageChangeToContact: pageChangeToContact,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container-fluid p-0 m-0 h-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row h-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-5 h-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_component_Profile__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, initialData.page == 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_component_About__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), initialData.page == 2 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_component_Portfolio__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), initialData.page == 3 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_component_Contact__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HomeComponent);

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/FP/Documents/fp/smt 4/web 3/WEB3B-15703-FADHILAH-REACT/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/FP/Documents/fp/smt 4/web 3/WEB3B-15703-FADHILAH-REACT/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/FP/Documents/fp/smt 4/web 3/WEB3B-15703-FADHILAH-REACT/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map