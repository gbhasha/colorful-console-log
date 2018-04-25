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
}

var log = color => {
  return (...args) => {
    var len = args.length;
    var rest = args.splice(1)

    if (typeof window === 'undefined') {
      // on nodeJS env
      console.log(chalk.hex(color)(args[0]), ...rest)
    } else {
      // on browser env
      console.log('%c ' + args[0], 'color:' + color, ...rest);
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
