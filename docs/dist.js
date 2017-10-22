(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.ringingtones = {})));
}(this, (function (exports) { 'use strict';

var ringEU = function (audioCtx) {

  var oscillator = audioCtx.createOscillator();
  oscillator.frequency.value = 425;
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);

  oscillator.start();

  gainNode.gain.value = 0;

  var ring = function () {
    var now = audioCtx.currentTime;
    gainNode.gain.linearRampToValueAtTime(1, now + 0.03);
    gainNode.gain.linearRampToValueAtTime(1, now + 1);
    gainNode.gain.linearRampToValueAtTime(0, now + 1.03);
  };

  ring();

  var interval = setInterval(ring, 4000);

  return {
    connect: gainNode.connect.bind(gainNode),
    disconnect: function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      clearInterval(interval);
      return gainNode.disconnect.apply(gainNode, args)
    }
  }
};

// TODO - this is canada too… hmm not sure of the best way to do this
var ringUS = function (audioCtx) {

  var oscillator = audioCtx.createOscillator();
  oscillator.frequency.value = 440;
  var oscillator2 = audioCtx.createOscillator();
  oscillator2.frequency.value = 480;

  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  oscillator2.connect(gainNode);

  oscillator.start();

  gainNode.gain.value = 0;

  var ring = function () {
    var now = audioCtx.currentTime;
    gainNode.gain.linearRampToValueAtTime(1, now + 0.03);
    gainNode.gain.linearRampToValueAtTime(1, now + 2);
    gainNode.gain.linearRampToValueAtTime(0, now + 2.03);
  };

  ring();

  var interval = setInterval(ring, 4000);

  return {
    connect: gainNode.connect.bind(gainNode),
    disconnect: function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      clearInterval(interval);
      return gainNode.disconnect.apply(gainNode, args)
    }
  }
};


// AND Republic of Ireland, Australia, New Zealand, and many Commonwealth nations
var ringUK = function (audioCtx) {

  var oscillator = audioCtx.createOscillator();
  oscillator.frequency.value = 400;
  var oscillator2 = audioCtx.createOscillator();
  oscillator2.frequency.value = 450;

  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  oscillator2.connect(gainNode);

  oscillator.start();

  gainNode.gain.value = 0;

  var ring = function () {
    var now = audioCtx.currentTime;
    gainNode.gain.linearRampToValueAtTime(1, now + 0.01);
    gainNode.gain.linearRampToValueAtTime(1, now + 0.4);
    gainNode.gain.linearRampToValueAtTime(0, now + 0.41);
    gainNode.gain.linearRampToValueAtTime(0, now + 0.6);
    gainNode.gain.linearRampToValueAtTime(1, now + 0.61);
    gainNode.gain.linearRampToValueAtTime(1, now + 1);
    gainNode.gain.linearRampToValueAtTime(0, now + 1.01);
  };

  ring();

  var interval = setInterval(ring, 3000);

  return {
    connect: gainNode.connect.bind(gainNode),
    disconnect: function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      clearInterval(interval);
      return gainNode.disconnect.apply(gainNode, args)
    }
  }
};


var ringJP = function (audioCtx) {

  var oscillator = audioCtx.createOscillator();
  oscillator.frequency.value = 400;

  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);

  oscillator.start();

  gainNode.gain.value = 0;

  var ring = function () {
    var now = audioCtx.currentTime;
    gainNode.gain.linearRampToValueAtTime(1, now + 0.01);
    gainNode.gain.linearRampToValueAtTime(1, now + 1);
    gainNode.gain.linearRampToValueAtTime(0, now + 1.01);

    /* TODO:
    The tone has a frequency of 400 ± 20 Hz, and the amplitude modulation is 15 to 20Hz
    */
  };

  ring();

  var interval = setInterval(ring, 3000);

  return {
    connect: gainNode.connect.bind(gainNode),
    disconnect: function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      clearInterval(interval);
      return gainNode.disconnect.apply(gainNode, args)
    }
  }
};

exports.ringEU = ringEU;
exports.ringUS = ringUS;
exports.ringUK = ringUK;
exports.ringJP = ringJP;

Object.defineProperty(exports, '__esModule', { value: true });

})));
