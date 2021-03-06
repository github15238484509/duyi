// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../js/util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ = $;
exports.$$ = $$;
exports.createLi = createLi;

// ?????????????????????????????????????????????
// ?????? DOM ????????????
function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}
/**
 * ???????????? li ???????????????
 * @param {?????????????????????} center 
 * @param {??????????????????} liStartNum 
 * @param {??????????????????} liEndNum 
 * @param {?????????????????????} currentPage 
 */


function createLi(center, liStartNum, liEndNum, currentPage) {
  for (var i = liStartNum; i <= liEndNum; i++) {
    if (currentPage === i) {
      center += "<li class=\"pageNum currentPage\">".concat(i, "</li>");
    } else {
      center += "<li class=\"pageNum\">".concat(i, "</li>");
    }
  }

  return center;
}
},{}],"../js/myMock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numArr = exports.lastName = exports.firstName = exports.cityName = exports.charArr = void 0;
exports.randomContent = randomContent;
// ?????? Mock.js
// ???
var lastName = ["???", '???', "???", "???", '???', '???', '???', '???', '???', '???']; // ???

exports.lastName = lastName;
var firstName = ['???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???']; // ??????

exports.firstName = firstName;
var cityName = ['??????', '??????', '??????', '??????', '?????????', '??????', '??????', '??????', '??????', '?????????', '??????']; // ???????????????

exports.cityName = cityName;
var charArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // ???????????????

exports.charArr = charArr;
var numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; // ????????????????????????
// Math.floor(Math.random() * ???????????? + ??????????????????)
// 1 - 10  Math.floor(Math.random() * 10 + 1)

/**
 * 
 * @param {?????????????????????} arr 
 * @param {???????????????} num 
 */

exports.numArr = numArr;

function randomContent(arr, num) {
  // str ????????????????????????????????????
  var str = "";

  for (var i = 0; i < num; i++) {
    str += arr[Math.floor(Math.random() * arr.length)]; // str = str + 'q'
  }

  return str;
}
},{}],"../js/validateForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateForm = validateForm;

var _util = require("./util.js");

// ?????????????????????????????????
function validateForm() {
  // ??????????????????
  (0, _util.$)('#stuName').addEventListener('blur', function (e) {
    if (e.target.value) {
      (0, _util.$)('#validateName').innerHTML = "";
    } else {
      (0, _util.$)('#validateName').innerHTML = "???????????????";
    }
  }); // ????????????

  (0, _util.$)('#stuEmail').addEventListener('blur', function (e) {
    var value = e.target.value;

    if (value) {
      // ????????? if???????????????
      // ????????? /^[\w\.-_]+@[\w-_]+\.com$/ ????????????????????????
      // ?????????????????????????????????????????????????????????????????????????????????
      if (/^[\w\.-_]+@[\w-_]+\.com$/.test(value)) {
        (0, _util.$)('#validateEmail').innerHTML = "";
      } else {
        (0, _util.$)('#validateEmail').innerHTML = "????????????????????????";
      }
    } else {
      (0, _util.$)('#validateEmail').innerHTML = "???????????????";
    }
  }); // ????????????

  (0, _util.$)("#stuAge").addEventListener('blur', function (e) {
    var value = e.target.value;

    if (value) {
      if (isNaN(value)) {
        // isNaN ?????? true????????????????????????????????????
        (0, _util.$)('#validateAge').innerHTML = "????????????????????????";
      } else {
        if (value < 20 || value > 30) {
          (0, _util.$)('#validateAge').innerHTML = "???????????????????????????";
        } else {
          (0, _util.$)('#validateAge').innerHTML = "";
        }
      }
    } else {
      (0, _util.$)('#validateAge').innerHTML = "???????????????";
    }
  }); // ?????????????????????????????????????????????1????????? ???2???????????????????????????????????????????????????
}
},{"./util.js":"../js/util.js"}],"../js/index.js":[function(require,module,exports) {
"use strict";

var _util = require("./util.js");

var _myMock = require("./myMock.js");

var _validateForm = require("./validateForm.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// ?????????????????????????????????????????????????????????????????????
// ???????????????????????????????????????
// ???????????????
var stuData = [{
  "stuId": 1,
  "stuName": "??????",
  "stuGender": "???",
  "stuEmail": "123@qq.com",
  "stuAge": 18,
  "stuTel": 13112341234,
  "stuAddr": "??????"
}, {
  "stuId": 2,
  "stuName": "??????",
  "stuGender": "???",
  "stuEmail": "234@qq.com",
  "stuAge": 19,
  "stuTel": 13112341234,
  "stuAddr": "??????"
}, {
  "stuId": 3,
  "stuName": "??????",
  "stuGender": "???",
  "stuEmail": "789@qq.com",
  "stuAge": 18,
  "stuTel": 13112341234,
  "stuAddr": "?????????"
}];
var editStuId = null; // ??????????????????????????? id

var curPage = 1; // ???????????????????????????????????????

var pageNum = null; // ???????????????????????????????????????????????????????????????????????????

var eachPage = 5; // ??????????????????????????????

/**
 * ??????????????????
 * ??????????????????
 */

function goToStuList() {
  (0, _util.$)('.leftMenuItem').classList.add('itemActive');
  (0, _util.$$)('.leftMenuItem')[1].classList.remove('itemActive');
  (0, _util.$)('.rightContent>div').classList.remove('notShow');
  (0, _util.$$)('.rightContent>div')[1].classList.add('notShow'); // ??????????????????????????????????????????????????????

  clearForm();
}
/**
 * ??????????????????
 * ???????????? id ????????????
 */


function goToAddStu(id) {
  if (id) {
    // ????????? if????????????????????? id ????????????????????????????????????????????????
    // ???????????? id ??????????????????????????????????????????????????????
    var editStu = stuData.filter(function (item) {
      return item.stuId === parseInt(id);
    })[0]; // ??????????????????????????????

    (0, _util.$)('#stuName').value = editStu.stuName;
    (0, _util.$)('#stuEmail').value = editStu.stuEmail;
    (0, _util.$)('#stuAge').value = editStu.stuAge;
    (0, _util.$)('#stuTel').value = editStu.stuTel;
    (0, _util.$)('#stuAddr').value = editStu.stuAddr; // ????????????????????????

    if (editStu.stuGender === "???") {
      (0, _util.$)('.gender').checked = true;
    } else {
      (0, _util.$$)('.gender')[1].checked = true;
    }

    editStuId = editStu.stuId;
    (0, _util.$)('#addStuBtn').value = "????????????";
  }

  (0, _util.$)('.leftMenuItem').classList.remove('itemActive');
  (0, _util.$$)('.leftMenuItem')[1].classList.add('itemActive');
  (0, _util.$)('.rightContent>div').classList.add('notShow');
  (0, _util.$$)('.rightContent>div')[1].classList.remove('notShow');
}
/**
 * ??????????????????????????????
 */


function changeItem() {
  (0, _util.$)('.leftMenu').addEventListener('click', function (e) {
    if (e.target.innerHTML === '????????????') {
      // ??????????????????????????????
      goToStuList();
    } else {
      // ??????????????????????????????
      goToAddStu();
    }
  });
}
/**
 * ??????????????????
 * @param {?????????????????????????????????} arr 
 */


function renderContent(arr) {
  renderPager(arr); // ????????????
  // `` ??? ES6 ???????????????????????????????????????????????????????????????????????????????????????????????????
  // var name = "xiejie";
  // console.log(`Hello,${name} OK~`); // Hello, xiejie OK~
  // console.log(`
  //     qwe
  //     asd
  //     zxc
  // `);
  // ????????????????????????????????????????????????
  // 1-10 [0-9] arr.slice(0, 10)
  // 11-20 [10-19] arr.slice(10, 20)
  // ??????????????? 10 ???
  // arr.slice(???????????? - 1??? * ??????????????????????????? ???????????? * ????????????????????????)

  arr = arr.slice((curPage - 1) * eachPage, curPage * eachPage); // ??????

  var tHead = "\n        <thead>\n            <tr>\n                <th>\u5B66\u53F7</th>\n                <th>\u59D3\u540D</th>\n                <th>\u6027\u522B</th>\n                <th>\u90AE\u7BB1</th>\n                <th>\u5E74\u9F84</th>\n                <th>\u624B\u673A\u53F7</th>\n                <th>\u4F4F\u5740</th>\n                <th>\u64CD\u4F5C</th>\n            </tr>\n        </thead>\n    ";
  var tBody = arr.map(function (item) {
    // map ????????????????????????????????????????????????????????????????????????????????????
    return "\n            <tr>\n                <td>".concat(item.stuId, "</td>\n                <td>").concat(item.stuName, "</td>\n                <td>").concat(item.stuGender, "</td>\n                <td>").concat(item.stuEmail, "</td>\n                <td>").concat(item.stuAge, "</td>\n                <td>").concat(item.stuTel, "</td>\n                <td>").concat(item.stuAddr, "</td>\n                <td>\n                    <button data-id=").concat(item.stuId, " class=\"operationBtn editBtn\">\u7F16\u8F91</button>\n                    <button data-id=").concat(item.stuId, " class=\"operationBtn delBtn\">\u5220\u9664</button>\n                </td>\n            </tr>\n        ");
  }).join("");
  (0, _util.$)('#stuTable').innerHTML = "".concat(tHead, "<tBody>").concat(tBody, "</tBody>");
}
/**
 * ??????????????????????????????
 */


(0, _util.$)('#addStuRandom').addEventListener('click', function () {
  // ????????????????????????????????????????????????????????????????????????????????? Mock.js
  // ?????????????????????????????????????????????????????????????????????????????????
  // ???????????????????????????
  // { "stuId": 1, "stuName": "??????", "stuGender": "???", "stuEmail": "123@qq.com", "stuAge": 18, "stuTel": 13112341234, "stuAddr": "??????" }
  var newRandomStu = {
    "stuName": (0, _myMock.randomContent)(_myMock.lastName, 1) + (Math.random() > 0.5 ? (0, _myMock.randomContent)(_myMock.firstName, 1) : (0, _myMock.randomContent)(_myMock.firstName, 2)),
    "stuGender": Math.random() > 0.5 ? "???" : "???",
    "stuEmail": (0, _myMock.randomContent)(_myMock.charArr, Math.floor(Math.random() * 5 + 4)) + '@' + (0, _myMock.randomContent)(_myMock.charArr, 2) + '.com',
    "stuAge": Math.floor(Math.random() * 11 + 20),
    "stuTel": 1 + (0, _myMock.randomContent)(_myMock.numArr, 10),
    "stuAddr": (0, _myMock.randomContent)(_myMock.cityName, 1)
  };
  newRandomStu.stuId = stuData[stuData.length - 1].stuId + 1;
  stuData.push(newRandomStu);
  curPage = Math.ceil(stuData.length / eachPage); // ???????????????????????????????????????

  renderContent(stuData); // ??????????????????
});
/**
 * ?????????????????????????????????????????????????????????
 */

(0, _util.$)('#addStuBtnByForm').addEventListener('click', function () {
  goToAddStu();
});
/**
 * ?????????????????????????????????????????????????????????
 * ??????????????????????????????1???????????????  ???2???????????????
 */

(0, _util.$)('#addStuBtn').addEventListener('click', function () {
  // ??????????????????????????????????????????????????????????????????????????????
  // 1. ??????????????????????????????jQuery ?????????????????????????????????  serialize????????????????????????????????????????????????
  var arr = [(0, _util.$)('#stuName').value, (0, _util.$)('.gender').checked ? "???" : "???", (0, _util.$)('#stuEmail').value, (0, _util.$)('#stuAge').value, (0, _util.$)('#stuTel').value, (0, _util.$)('#stuAddr').value]; // ?????????????????????????????????????????????

  if (arr.every(function (item) {
    return item !== "";
  })) {
    // ?????? if????????????????????????
    // ??????????????????????????????????????????????????????????????????????????????????????????
    // var a = [1, 2, 3];
    // var b = [4, 5, 6];
    // var c = [...a,...b]; // [1,2,3,4,5,6]
    var regArr = _toConsumableArray((0, _util.$$)('.regValidate'));

    if (regArr.every(function (item) {
      return item.innerHTML === "";
    })) {
      // ????????? if????????????????????????????????? OK???????????????
      // ?????????????????????????????????????????????
      var newStu = {
        "stuName": arr[0],
        "stuGender": arr[1],
        "stuEmail": arr[2],
        "stuAge": arr[3],
        "stuTel": arr[4],
        "stuAddr": arr[5]
      };

      if ((0, _util.$)('#addStuBtn').value === "??????") {
        // ??????????????????????????????
        newStu.stuId = stuData[stuData.length - 1].stuId + 1; // ???????????????????????? id

        stuData.push(newStu);
        curPage = Math.ceil(stuData.length / eachPage); // ???????????????????????????????????????
      } else {
        // ????????????????????????
        newStu.stuId = editStuId; // ?????????????????????
        // ?????? stuData ???????????????????????????????????????????????????????????????????????????????????????

        for (var i = 0; i < stuData.length; i++) {
          if (stuData[i].stuId === editStuId) {
            // ??????????????? if??????????????????????????????????????????????????????????????? stuData ???????????????????????? i
            stuData.splice(i, 1, newStu);
            break;
          }
        }
      }

      renderContent(stuData);
      goToStuList();
    } else {
      window.alert('??????????????????????????????');
    }
  } else {
    window.alert('??????????????????????????????');
  }
});
/**
 * ????????????
 */

function clearForm() {
  // 1. ????????????????????????????????????
  (0, _util.$)('#addStuForm').reset(); // 2. ?????????????????????????????????

  var regArr = _toConsumableArray((0, _util.$$)('.regValidate'));

  for (var i = 0; i < regArr.length; i++) {
    regArr[i].innerHTML = "";
  } // 3. ?????????????????????????????????


  (0, _util.$)('#addStuBtn').value = "??????";
}
/**
 * ???????????????????????????????????????
 */


(0, _util.$)('#backStuList').addEventListener('click', function () {
  // 1. ????????????
  clearForm(); // 2. ?????????????????????

  goToStuList();
});
/**
 * ?????????????????????????????????????????????
 * ????????????????????????????????????????????????????????????????????????
 */

(0, _util.$)('#stuTable').addEventListener('click', function (e) {
  // ??????????????? editBtn?????????????????????
  if (e.target.classList.contains('editBtn')) {
    // ?????????????????????
    goToAddStu(e.target.dataset.id);
  }

  if (e.target.classList.contains('delBtn')) {
    // ???????????????????????????
    if (window.confirm('??????????????????????????????')) {
      var id = e.target.dataset.id;

      for (var i = 0; i < stuData.length; i++) {
        if (stuData[i].stuId === parseInt(id)) {
          stuData.splice(i, 1);
          break;
        }
      } // ???????????????????????????????????????
      // ???????????????????????????????????????????????????


      var totalPage = Math.ceil(stuData.length / eachPage);

      if (curPage > totalPage) {
        curPage = totalPage;
      }

      renderContent(stuData);
    }
  }
});
/**
 * ??????????????????
 */

function renderPager(arr) {
  (0, _util.$)('#page').innerHTML = ""; // ???????????????????????????????????????

  var center = ""; // ???????????????????????????????????????????????????????????????????????????
  // ????????????????????????????????????????????????????????? center

  var totalPage = Math.ceil(arr.length / eachPage); // ??????????????????????????????????????????center??????

  if (totalPage < 8) {
    // ?????????????????????????????????
    center = (0, _util.createLi)(center, 1, totalPage, curPage);
  } else {
    // ???????????? > 8 ????????????????????????????????????????????? ... ?????????
    // ??????????????????????????? 3 ?????????
    if (curPage <= 3) {
      // ?????????????????????????????????????????????
      center = (0, _util.createLi)(center, 1, 3, curPage);
      center += "...." + "<li class=\"pageNum\">".concat(totalPage, "</li>");
    } else if (curPage > totalPage - 3) {
      // ???????????????????????????????????????????????????
      center += "<li class=\"pageNum\">1</li>....";
      center = (0, _util.createLi)(center, totalPage - 3, totalPage, curPage);
    } else {
      // ???????????????????????????????????????????????????????????????
      center += "<li class=\"pageNum\">1</li>....";
      center = (0, _util.createLi)(center, curPage - 2, curPage + 2, curPage);
      center += "...." + "<li class=\"pageNum\">".concat(totalPage, "</li>");
    }
  } // ??????????????????????????????????????????????????? div#page ??????


  (0, _util.$)('#page').innerHTML = "\n        <ul id=\"pageSelect\" class=\"pagination\">\n            <li class=\"prevPage\">&lt;</li>\n            ".concat(center, "\n            <li class=\"nextPage\">&gt;</li>\n        </ul>\n    ");
} // ???????????????????????????
// ??????????????????????????????


(0, _util.$)('#page').addEventListener('click', function (e) {
  if (e.target.classList.contains('prevPage')) {
    // ?????????
    curPage--;

    if (!curPage) {
      // ?????????????????? 1 ???
      curPage = 1;
      window.alert("???????????????????????????");
      return;
    }

    renderContent(stuData);
  }

  if (e.target.classList.contains('nextPage')) {
    // ?????????
    curPage++;
    var totalPage = Math.ceil(stuData.length / eachPage);

    if (curPage > totalPage) {
      // ??????????????????????????????
      curPage = totalPage;
      window.alert("??????????????????????????????");
      return;
    }

    renderContent(stuData);
  }

  if (e.target.classList.contains('pageNum')) {
    // ???????????????????????????
    curPage = parseInt(e.target.innerText);
    renderContent(stuData);
  }
}); // ????????????????????????????????????????????????
// ??????????????????????????????????????????

/**
 * ????????????
 */

(0, _util.$)('#searchBtn').addEventListener('click', function (e) {
  var searchType = (0, _util.$)('#selectSearchItem').value; // ???????????????

  var searchContent = (0, _util.$)('#searchStu').value; // ???????????????

  if (searchContent) {
    // ?????? if?????????????????????????????????
    switch (searchType) {
      case "stuId":
        {
          // ???????????????????????????
          var filterData = stuData.filter(function (item) {
            return item.stuId === parseInt(searchContent);
          });
          break;
        }

      case "stuName":
        {
          // ?????????????????????????????????
          var filterData = stuData.filter(function (item) {
            return item.stuName === searchContent;
          });
          break;
        }
    }

    curPage = 1;
    renderContent(filterData);
  } else {
    window.alert('?????????????????????');
  }
});
/**
 * ?????????????????????
 */

(0, _util.$)('#backBtn').addEventListener('click', function () {
  (0, _util.$)('#searchStu').value = "";
  renderContent(stuData);
});
/**
 * ?????????
 */

function main() {
  // 1. ??????????????????????????????????????????????????????
  changeItem(); // 2. ??????????????????
  // ??????????????????????????????????????????????????????
  // ???????????????????????????????????????????????????????????????????????????????????? stuData ????????????

  renderContent(stuData);
  (0, _validateForm.validateForm)();
}

main();
},{"./util.js":"../js/util.js","./myMock.js":"../js/myMock.js","./validateForm.js":"../js/validateForm.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59109" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../js/index.js"], null)
//# sourceMappingURL=/js.fcffc47e.js.map