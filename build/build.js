(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//Export Variable
var a = exports.a = 'Hello World';
var object = exports.object = { foo: 1, bar: 2 };
//Export Function
var add = exports.add = function add(x, y) {
  return x + y;
};

//Export Default
var text = 'This is default';
exports.default = text;

},{}],2:[function(require,module,exports){
'use strict';

var _Lib = require('./Lib');

var _Lib2 = _interopRequireDefault(_Lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//All Import
//import * as Lib from './Lib'
var foo = _Lib.object.foo,
    bar = _Lib.object.bar; //Normal Import

document.getElementById('result').innerHTML = _Lib2.default;
document.getElementById('other').innerHTML = (0, _Lib.add)(foo, bar);

},{"./Lib":1}]},{},[2])

//# sourceMappingURL=build.js.map
