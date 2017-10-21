(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.ringingtones = {})));
}(this, (function (exports) { 'use strict';

var ringEU = function (audioCtx) {

  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);

  oscillator.start();

  return gainNode
};

exports.ringEU = ringEU;

Object.defineProperty(exports, '__esModule', { value: true });

})));
