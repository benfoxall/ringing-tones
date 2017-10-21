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

exports.ringEU = ringEU;

Object.defineProperty(exports, '__esModule', { value: true });

})));
