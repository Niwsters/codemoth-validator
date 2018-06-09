import { h } from 'preact'

import Validator from './validator'

export default function (props) {
	return (
		<div>
			<h1>Simple Greeting</h1>
			<p>Write a function that takes a name as input and returns a greeting, like this:</p>
      <p>greeting("Sebastian") --> "Hello Sebastian!"</p>
			<Validator validator="simplegreeting"/>
		</div>
	)
}
