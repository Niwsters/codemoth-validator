import { h } from 'preact'

import Validator from './validator.view'

export default function (props) {
	return (
		<div>
			<h1>Hello World</h1>
			<p>Write a program in Javascript that writes "Hello World!" in console</p>
			<Validator validator="helloworld"/>
		</div>
	)
}
