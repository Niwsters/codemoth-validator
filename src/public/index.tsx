import { h, render } from 'preact'
import Validator from './validatorComponent'
import { Router } from 'preact-router'
import { Link } from 'preact-router/match'

const Main = () => (
  <div>
    <Link activeClassName="active" href="/validator">lolpan</Link>
    <Router>
      <Validator path="/validator" />
    </Router>
  </div>
);


render(<Main />, document.body)
