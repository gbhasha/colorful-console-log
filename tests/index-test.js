import expect from 'expect'

import $console from 'src/index'

describe('$console', () => {
  it('displays a colorful log message', () => {
    $console.violet("message in violet color");
    $console.indigo("message in indigo color");
    $console.blue("message in blue color");
    $console.green("message in green color");
    $console.yellow("message in yellow color");
    $console.orange("message in orange color");
    $console.red("message in red color");
  })
})
