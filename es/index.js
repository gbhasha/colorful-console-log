var chalk = require('chalk');

var rainbowColors = {
  violet: '#9400D3',
  indigo: '#4B0082',
  blue: '#0000FF',
  green: '#00FF00',
  yellow: '#FFFF00',
  orange: '#FF7F00',
  red: '#FF0000',
  white: '#FFFFFF'
};

var log = function log(color) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var len = args.length;
    var rest = args.splice(1);

    if (typeof window === 'undefined') {
      var _console;

      // on nodeJS env
      (_console = console).log.apply(_console, [chalk.hex(color)(args[0])].concat(rest));
    } else {
      var _console2;

      // on browser env
      (_console2 = console).log.apply(_console2, ['%c ' + args[0], 'color:' + color].concat(rest));
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
  red: log(rainbowColors.red),
  white: log(rainbowColors.white)
};