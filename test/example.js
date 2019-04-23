/****
 * Reset test's example
 * Empty rule's for index.js
 */

async function test() {
  let a = 1
  let ab = 10
  let b = 1
  var c = 2

  console.log(a, b)
  if (a === 2) {
    console.log(a)
    console.log(c)
  }
  return await new Promise()
}
test()

class A {
  constructor() {
    this.a = 1
  }

  test() {

  }
}
