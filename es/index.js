var chalk = require('chalk');

var rainbowColors = {
  violet: '#9400D3',
  indigo: '#4B0082',
  blue: '#0000FF',
  green: '#00FF00',
  yellow: '#FFFF00',
  orange: '#FF7F00',
  red: '#FF0000'
};

var log = function log(color) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var msg = '';
    var len = args.length;
    for (var i in args) {
      if (i == 0) {
        msg += args[i];
      } else {
        msg += ' ' + args[i];
      }
    }
    if (typeof window === 'undefined') {
      // on nodeJS env
      console.log(chalk.hex(color)(msg));
    } else {
      // on browser env
      console.log('%c ' + msg, 'color:' + color);
    }
  };
};

module.exports = {
  violet: log(rainbowColors.violet),
  indigo: log(rainbowColors.indigo),
  blue: log(rainbowColors.blue),
  green: log(rainbowColors.green),
  yellow: log(rainbowColors.yellow),
  orange: log(rainbowColors.orange),
  red: log(rainbowColors.red)
};