const test = require('tape')

const validator = require('./../src/validator')

test("validator should say when code doesn't throw error", (t) => {
  t.plan(1)

  let feedback = validator.validate('var x = 3')
  t.equal(feedback, 'Your code did not throw an error!')

})

test("validator should show error when code throws error", (t) => {
  t.plan(1)

  let feedback = validator.validate('va x = 3')
  t.equal(feedback, 'va x = 3\n   ^\nSyntaxError: Unexpected identifier\n')
})
