import { h, render } from 'preact'
import Validator from './validator.view'
import { Router } from 'preact-router'
import { Link } from 'preact-router/match'
import HelloWorldExercise from './helloWorldExercise.view'

const Main = () => (
  <div>
    <ul>
      <li><Link activeClassName="active" href="/helloworld">Problem 1: Hello World</Link></li>
      <li><Link activeClassName="active" href="/simplegreeting">Problem 2: Simple greeting</Link></li>
    </ul>

    <Router>
      <HelloWorldExercise path="/helloworld"/>
      <Validator path="/simplegreeting" validator="simplegreeting" />
    </Router>
  </div>
);


render(<Main />, document.body)
