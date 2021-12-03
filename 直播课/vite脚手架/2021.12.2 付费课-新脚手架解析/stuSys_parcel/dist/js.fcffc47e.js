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

// 工具库，相关工具函数都放在这里
// 封装 DOM 查询函数
function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}
/**
 * 创建中间 li 标题的函数
 * @param {要拼接的字符串} center 
 * @param {从多少页开始} liStartNum 
 * @param {到多少页结束} liEndNum 
 * @param {当前页是多少页} currentPage 
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
// 模拟 Mock.js
// 姓
var lastName = ["赵", '钱', "孙", "李", '周', '吴', '郑', '王', '谢', '张']; // 名

exports.lastName = lastName;
var firstName = ['杰', '梅', '丽', '虎', '进', '兵', '成', '皓', '立', '文', '静']; // 城市

exports.firstName = firstName;
var cityName = ['成都', '北京', '长沙', '郑州', '内蒙古', '重庆', '甘肃', '河北', '漯河', '驻马店', '江西']; // 随机的字符

exports.cityName = cityName;
var charArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // 随机的数字

exports.charArr = charArr;
var numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; // 复习随机数的公式
// Math.floor(Math.random() * 可能性数 + 第一个可能值)
// 1 - 10  Math.floor(Math.random() * 10 + 1)

/**
 * 
 * @param {你要用哪个数组} arr 
 * @param {返回多少个} num 
 */

exports.numArr = numArr;

function randomContent(arr, num) {
  // str 是我们最终要返回的字符串
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

// 该文件专门用于表单验证
function validateForm() {
  // 验证学生姓名
  (0, _util.$)('#stuName').addEventListener('blur', function (e) {
    if (e.target.value) {
      (0, _util.$)('#validateName').innerHTML = "";
    } else {
      (0, _util.$)('#validateName').innerHTML = "请填写姓名";
    }
  }); // 验证邮箱

  (0, _util.$)('#stuEmail').addEventListener('blur', function (e) {
    var value = e.target.value;

    if (value) {
      // 进入此 if，说明非空
      // 下面的 /^[\w\.-_]+@[\w-_]+\.com$/ 是一个正则表达式
      // 所谓正则表达式，就是验证某一个字符串是否符合某一个要求
      if (/^[\w\.-_]+@[\w-_]+\.com$/.test(value)) {
        (0, _util.$)('#validateEmail').innerHTML = "";
      } else {
        (0, _util.$)('#validateEmail').innerHTML = "邮箱的格式不正确";
      }
    } else {
      (0, _util.$)('#validateEmail').innerHTML = "请填写邮箱";
    }
  }); // 验证年龄

  (0, _util.$)("#stuAge").addEventListener('blur', function (e) {
    var value = e.target.value;

    if (value) {
      if (isNaN(value)) {
        // isNaN 返回 true，说明传入的参数不是数字
        (0, _util.$)('#validateAge').innerHTML = "请填写正确的数字";
      } else {
        if (value < 20 || value > 30) {
          (0, _util.$)('#validateAge').innerHTML = "年龄不符合范围要求";
        } else {
          (0, _util.$)('#validateAge').innerHTML = "";
        }
      }
    } else {
      (0, _util.$)('#validateAge').innerHTML = "请填写年龄";
    }
  }); // 这里可以继续添加手机号的验证（1）非空 （2）手机号是否符合要求（正则表达式）
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

// 按道理来讲，数据应该是发送请求从服务器上面获取
// 这里我们就先把数据放到本地
// 学生的数据
var stuData = [{
  "stuId": 1,
  "stuName": "谢杰",
  "stuGender": "男",
  "stuEmail": "123@qq.com",
  "stuAge": 18,
  "stuTel": 13112341234,
  "stuAddr": "成都"
}, {
  "stuId": 2,
  "stuName": "张三",
  "stuGender": "男",
  "stuEmail": "234@qq.com",
  "stuAge": 19,
  "stuTel": 13112341234,
  "stuAddr": "北京"
}, {
  "stuId": 3,
  "stuName": "李四",
  "stuGender": "女",
  "stuEmail": "789@qq.com",
  "stuAge": 18,
  "stuTel": 13112341234,
  "stuAddr": "哈尔滨"
}];
var editStuId = null; // 保存要编辑的学生的 id

var curPage = 1; // 当前的页码数，默认是第一页

var pageNum = null; // 总页码数，一开始是空的，后期要通过数据的长度来计算

var eachPage = 5; // 每一页显示多少条数据

/**
 * 跳转学生列表
 * 其实就是挂类
 */

function goToStuList() {
  (0, _util.$)('.leftMenuItem').classList.add('itemActive');
  (0, _util.$$)('.leftMenuItem')[1].classList.remove('itemActive');
  (0, _util.$)('.rightContent>div').classList.remove('notShow');
  (0, _util.$$)('.rightContent>div')[1].classList.add('notShow'); // 每次跳转回学生列表时，表单也重置一下

  clearForm();
}
/**
 * 跳转新增学生
 * 接收一个 id 作为参数
 */


function goToAddStu(id) {
  if (id) {
    // 进入此 if，说明是传递了 id 过来的，那么就说明你是要修改学生
    // 根据这个 id 获取到对应的学生数据，回填到表单里面
    var editStu = stuData.filter(function (item) {
      return item.stuId === parseInt(id);
    })[0]; // 下一步要做表单的回填

    (0, _util.$)('#stuName').value = editStu.stuName;
    (0, _util.$)('#stuEmail').value = editStu.stuEmail;
    (0, _util.$)('#stuAge').value = editStu.stuAge;
    (0, _util.$)('#stuTel').value = editStu.stuTel;
    (0, _util.$)('#stuAddr').value = editStu.stuAddr; // 性别需要单独处理

    if (editStu.stuGender === "男") {
      (0, _util.$)('.gender').checked = true;
    } else {
      (0, _util.$$)('.gender')[1].checked = true;
    }

    editStuId = editStu.stuId;
    (0, _util.$)('#addStuBtn').value = "确认修改";
  }

  (0, _util.$)('.leftMenuItem').classList.remove('itemActive');
  (0, _util.$$)('.leftMenuItem')[1].classList.add('itemActive');
  (0, _util.$)('.rightContent>div').classList.add('notShow');
  (0, _util.$$)('.rightContent>div')[1].classList.remove('notShow');
}
/**
 * 给左侧菜单栏绑定事件
 */


function changeItem() {
  (0, _util.$)('.leftMenu').addEventListener('click', function (e) {
    if (e.target.innerHTML === '学生列表') {
      // 用户点击的是学生列表
      goToStuList();
    } else {
      // 用户点击的是新增学生
      goToAddStu();
    }
  });
}
/**
 * 渲染表格内容
 * @param {接收要渲染的数据的数组} arr 
 */


function renderContent(arr) {
  renderPager(arr); // 渲染分页
  // `` 是 ES6 新提供的模板字符串，一个是可以解析字符串里面的变量，支持多行字符串
  // var name = "xiejie";
  // console.log(`Hello,${name} OK~`); // Hello, xiejie OK~
  // console.log(`
  //     qwe
  //     asd
  //     zxc
  // `);
  // 这里需要对传入的数据进行一个截取
  // 1-10 [0-9] arr.slice(0, 10)
  // 11-20 [10-19] arr.slice(10, 20)
  // 每一页显示 10 条
  // arr.slice(（当前页 - 1） * 每一页显示的数量， 当前页吗 * 每一页显示的数量)

  arr = arr.slice((curPage - 1) * eachPage, curPage * eachPage); // 表头

  var tHead = "\n        <thead>\n            <tr>\n                <th>\u5B66\u53F7</th>\n                <th>\u59D3\u540D</th>\n                <th>\u6027\u522B</th>\n                <th>\u90AE\u7BB1</th>\n                <th>\u5E74\u9F84</th>\n                <th>\u624B\u673A\u53F7</th>\n                <th>\u4F4F\u5740</th>\n                <th>\u64CD\u4F5C</th>\n            </tr>\n        </thead>\n    ";
  var tBody = arr.map(function (item) {
    // map 回调函数中，你返回什么，最终外面就会得到你的返回值的数组
    return "\n            <tr>\n                <td>".concat(item.stuId, "</td>\n                <td>").concat(item.stuName, "</td>\n                <td>").concat(item.stuGender, "</td>\n                <td>").concat(item.stuEmail, "</td>\n                <td>").concat(item.stuAge, "</td>\n                <td>").concat(item.stuTel, "</td>\n                <td>").concat(item.stuAddr, "</td>\n                <td>\n                    <button data-id=").concat(item.stuId, " class=\"operationBtn editBtn\">\u7F16\u8F91</button>\n                    <button data-id=").concat(item.stuId, " class=\"operationBtn delBtn\">\u5220\u9664</button>\n                </td>\n            </tr>\n        ");
  }).join("");
  (0, _util.$)('#stuTable').innerHTML = "".concat(tHead, "<tBody>").concat(tBody, "</tBody>");
}
/**
 * 随机新增一条学生数据
 */


(0, _util.$)('#addStuRandom').addEventListener('click', function () {
  // 这里我们想要新增一条学生数据，理论上来讲有一个第三方库 Mock.js
  // 通过这个第三方库，可以快速的新增任意条可定制的随机数据
  // 这里我们来手动实现
  // { "stuId": 1, "stuName": "谢杰", "stuGender": "男", "stuEmail": "123@qq.com", "stuAge": 18, "stuTel": 13112341234, "stuAddr": "成都" }
  var newRandomStu = {
    "stuName": (0, _myMock.randomContent)(_myMock.lastName, 1) + (Math.random() > 0.5 ? (0, _myMock.randomContent)(_myMock.firstName, 1) : (0, _myMock.randomContent)(_myMock.firstName, 2)),
    "stuGender": Math.random() > 0.5 ? "男" : "女",
    "stuEmail": (0, _myMock.randomContent)(_myMock.charArr, Math.floor(Math.random() * 5 + 4)) + '@' + (0, _myMock.randomContent)(_myMock.charArr, 2) + '.com',
    "stuAge": Math.floor(Math.random() * 11 + 20),
    "stuTel": 1 + (0, _myMock.randomContent)(_myMock.numArr, 10),
    "stuAddr": (0, _myMock.randomContent)(_myMock.cityName, 1)
  };
  newRandomStu.stuId = stuData[stuData.length - 1].stuId + 1;
  stuData.push(newRandomStu);
  curPage = Math.ceil(stuData.length / eachPage); // 将当前页码数修改为最后一页

  renderContent(stuData); // 渲染表格数据
});
/**
 * 点击“自定义新增”按钮跳转到新增的表单
 */

(0, _util.$)('#addStuBtnByForm').addEventListener('click', function () {
  goToAddStu();
});
/**
 * 用户点击表单的“提交”按钮时要做的事情
 * 这里对应两种情况：（1）新增学生  （2）修改学生
 */

(0, _util.$)('#addStuBtn').addEventListener('click', function () {
  // 在判读是新增还是修改之前，我们有一些其他的东西要判断
  // 1. 表单是否有非空项目（jQuery 里面有一个很好用的方法  serialize，可以快速的获取到表单的每一项）
  var arr = [(0, _util.$)('#stuName').value, (0, _util.$)('.gender').checked ? "男" : "女", (0, _util.$)('#stuEmail').value, (0, _util.$)('#stuAge').value, (0, _util.$)('#stuTel').value, (0, _util.$)('#stuAddr').value]; // 数组里面存储表单项目的每一项值

  if (arr.every(function (item) {
    return item !== "";
  })) {
    // 进入 if，说明没有空项目
    // 接下来我们要进行第二项验证，判断用户填写的每一项是否符合要求
    // var a = [1, 2, 3];
    // var b = [4, 5, 6];
    // var c = [...a,...b]; // [1,2,3,4,5,6]
    var regArr = _toConsumableArray((0, _util.$$)('.regValidate'));

    if (regArr.every(function (item) {
      return item.innerHTML === "";
    })) {
      // 进入此 if，说明没有空项，验证也 OK，可以提交
      // 接下来就需要判断是新增还是修改
      var newStu = {
        "stuName": arr[0],
        "stuGender": arr[1],
        "stuEmail": arr[2],
        "stuAge": arr[3],
        "stuTel": arr[4],
        "stuAddr": arr[5]
      };

      if ((0, _util.$)('#addStuBtn').value === "提交") {
        // 说明是要手动新增学生
        newStu.stuId = stuData[stuData.length - 1].stuId + 1; // 新增学生要修改的 id

        stuData.push(newStu);
        curPage = Math.ceil(stuData.length / eachPage); // 将当前页码数修改为最后一页
      } else {
        // 说明是要修改学生
        newStu.stuId = editStuId; // 进行数据的替换
        // 变量 stuData 数组，该数组里面装的一个个对象，每一个对象就是一个学生数据

        for (var i = 0; i < stuData.length; i++) {
          if (stuData[i].stuId === editStuId) {
            // 如果进入此 if，说明找到了要编辑的学生对象，该学生对象在 stuData 数组中的下标就是 i
            stuData.splice(i, 1, newStu);
            break;
          }
        }
      }

      renderContent(stuData);
      goToStuList();
    } else {
      window.alert('请按照要求填写每一项');
    }
  } else {
    window.alert('请填写表单的所有项目');
  }
});
/**
 * 清空表单
 */

function clearForm() {
  // 1. 清空表单项目里面填写的值
  (0, _util.$)('#addStuForm').reset(); // 2. 清空正则验证的提醒文字

  var regArr = _toConsumableArray((0, _util.$$)('.regValidate'));

  for (var i = 0; i < regArr.length; i++) {
    regArr[i].innerHTML = "";
  } // 3. 还原表单的“提交”按钮


  (0, _util.$)('#addStuBtn').value = "提交";
}
/**
 * 表单“返回”按钮对应的事件
 */


(0, _util.$)('#backStuList').addEventListener('click', function () {
  // 1. 清空表单
  clearForm(); // 2. 跳转回学生列表

  goToStuList();
});
/**
 * 用户点击“编辑”按钮对应的事件
 * 注意这里用到了事件委托（原理就是用到了事件冒泡）
 */

(0, _util.$)('#stuTable').addEventListener('click', function (e) {
  // 如果类名为 editBtn，那么就是编辑
  if (e.target.classList.contains('editBtn')) {
    // 跳转到学生表单
    goToAddStu(e.target.dataset.id);
  }

  if (e.target.classList.contains('delBtn')) {
    // 说明是要做删除操作
    if (window.confirm('是否要删除此名学生？')) {
      var id = e.target.dataset.id;

      for (var i = 0; i < stuData.length; i++) {
        if (stuData[i].stuId === parseInt(id)) {
          stuData.splice(i, 1);
          break;
        }
      } // 删除学生之后，要做一个判断
      // 判断当前的总页码数是否大于总页码数


      var totalPage = Math.ceil(stuData.length / eachPage);

      if (curPage > totalPage) {
        curPage = totalPage;
      }

      renderContent(stuData);
    }
  }
});
/**
 * 渲染分页函数
 */

function renderPager(arr) {
  (0, _util.$)('#page').innerHTML = ""; // 这里我们先来书写固定的部分

  var center = ""; // 中间部分，一开始是空的，需要根据页码数来动态的渲染
  // 首先我们需要计算出页码数，才能动态生成 center

  var totalPage = Math.ceil(arr.length / eachPage); // 接下来我们来动态的生成中间的center部分

  if (totalPage < 8) {
    // 所有的页码数都渲染出来
    center = (0, _util.createLi)(center, 1, totalPage, curPage);
  } else {
    // 总页码数 > 8 页，我们只渲染一部分，然后使用 ... 来代替
    // 而且这种渲染方式有 3 种形态
    if (curPage <= 3) {
      // 当前页码比较靠前，省略号在后面
      center = (0, _util.createLi)(center, 1, 3, curPage);
      center += "...." + "<li class=\"pageNum\">".concat(totalPage, "</li>");
    } else if (curPage > totalPage - 3) {
      // 说明当前页码比较靠后，省略号在前面
      center += "<li class=\"pageNum\">1</li>....";
      center = (0, _util.createLi)(center, totalPage - 3, totalPage, curPage);
    } else {
      // 说明当前页码在中间，省略号就需要拼接在两边
      center += "<li class=\"pageNum\">1</li>....";
      center = (0, _util.createLi)(center, curPage - 2, curPage + 2, curPage);
      center += "...." + "<li class=\"pageNum\">".concat(totalPage, "</li>");
    }
  } // 最后一步，就是将所有的字符串填充到 div#page 里面


  (0, _util.$)('#page').innerHTML = "\n        <ul id=\"pageSelect\" class=\"pagination\">\n            <li class=\"prevPage\">&lt;</li>\n            ".concat(center, "\n            <li class=\"nextPage\">&gt;</li>\n        </ul>\n    ");
} // 给分页绑定各种事件
// 还是会使用到事件委托


(0, _util.$)('#page').addEventListener('click', function (e) {
  if (e.target.classList.contains('prevPage')) {
    // 上一页
    curPage--;

    if (!curPage) {
      // 说明已经小于 1 了
      curPage = 1;
      window.alert("当前已经是第一页了");
      return;
    }

    renderContent(stuData);
  }

  if (e.target.classList.contains('nextPage')) {
    // 下一页
    curPage++;
    var totalPage = Math.ceil(stuData.length / eachPage);

    if (curPage > totalPage) {
      // 说明已经到最后一页了
      curPage = totalPage;
      window.alert("当前已经是最后一页了");
      return;
    }

    renderContent(stuData);
  }

  if (e.target.classList.contains('pageNum')) {
    // 点击的是具体的页码
    curPage = parseInt(e.target.innerText);
    renderContent(stuData);
  }
}); // 分页完成之后，做最后的删除和搜索
// 删除是直接写在修改那一部分的

/**
 * 搜索功能
 */

(0, _util.$)('#searchBtn').addEventListener('click', function (e) {
  var searchType = (0, _util.$)('#selectSearchItem').value; // 搜索的种类

  var searchContent = (0, _util.$)('#searchStu').value; // 搜索的内容

  if (searchContent) {
    // 进入 if，说明搜索框是有内容的
    switch (searchType) {
      case "stuId":
        {
          // 按照学号来进行搜索
          var filterData = stuData.filter(function (item) {
            return item.stuId === parseInt(searchContent);
          });
          break;
        }

      case "stuName":
        {
          // 按照学生姓名来进行搜索
          var filterData = stuData.filter(function (item) {
            return item.stuName === searchContent;
          });
          break;
        }
    }

    curPage = 1;
    renderContent(filterData);
  } else {
    window.alert('请填写搜索内容');
  }
});
/**
 * 返回所有的数据
 */

(0, _util.$)('#backBtn').addEventListener('click', function () {
  (0, _util.$)('#searchStu').value = "";
  renderContent(stuData);
});
/**
 * 主函数
 */

function main() {
  // 1. 左侧菜单栏绑定事件，点击之后可以切换
  changeItem(); // 2. 渲染初始数据
  // 正常来讲，数据应该是从服务器获取到的
  // 但是由于现在还没有学习网络的相关知识，那么我们先手动返回 stuData 学生数据

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
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
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
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
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