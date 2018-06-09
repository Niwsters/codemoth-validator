import { h } from 'preact'

import Validator from './validator'

function Exercise(data) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.descr}</p>
      <Validator validator={data.validator} />
    </div>
  )
}

function HelloWorld (props) {
	return Exercise({
    title: "Hello World",
    descr: "Write a program in Javascript that writes 'Hello World!' in console",
    validator: "helloworld"
  })
}

function SimpleGreeting (props) {
	return (
		<div>
			<h1>Simple Greeting</h1>
			<p>Write a function that takes a name as input and returns a greeting, like this:</p>
      <p>greeting("Sebastian") --> "Hello Sebastian!"</p>
			<Validator validator="simplegreeting"/>
		</div>
	)
}

function AliceBobGreeting (props) {
  return (
		<div>
			<h1>Personalized Greeting</h1>
			<p>Rewrite the previous function (from Simple Greeting) so that it greets Alice and Bob, but for other names just writes "Hello!". Like this:</p>
      <p>greeting("Sebastian") --> "Hello!"</p>
      <p>greeting("Alice") --> "Hello Alice!"</p>
      <p>greeting("Bob") --> "Hello Bob!"</p>
			<Validator validator="alicebobgreeting"/>
		</div>
  )
}

export { HelloWorld, SimpleGreeting, AliceBobGreeting }
