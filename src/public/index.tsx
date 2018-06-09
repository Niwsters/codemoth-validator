import { h, render } from 'preact'
import { Router } from 'preact-router'
import { Link } from 'preact-router/match'

import Validator from './validator'
import {
  HelloWorld,
  SimpleGreeting,
  AliceBobGreeting
} from './exercises'

const links = [
  {
    href: "/helloworld",
    text: "Problem 1: Hello World"
  },
  {
    href: "/simplegreeting",
    text: "Problem 2: Simple Greeting"
  },
  {
    href: "/alicebobgreeting",
    text: "Problem 3: Personalized Greeting"
  }
]

const Main = () => (
  <div>
    <ul>
      {links.map((link) => {
        return <li><Link activeClassName="active" href={link.href}>{link.text}</Link></li>
      })}
    </ul>

    <Router>
      <HelloWorld path="/helloworld"/>
      <SimpleGreeting path="/simplegreeting" validator="simplegreeting" />
      <AliceBobGreeting path="/alicebobgreeting" validator="alicebobgreeting" />
    </Router>
  </div>
);


render(<Main />, document.body)
