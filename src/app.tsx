import {
  LocationProvider,
  ErrorBoundary,
  Router,
  Route,
  lazy,
} from "preact-iso";

// synchronous
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

import Head from "./components/Head"
import Foot from "./components/Foot"

// async
const NotFound = lazy(() => import("./pages/NotFound"))

// other
import ThemeProvider from './utils/ThemeContext'
import BaseRoute from './constants/BaseRoute'

export function App() {
  return <ThemeProvider>
    <Head baseRoute={BaseRoute} />
      <LocationProvider scope={BaseRoute}>
        <ErrorBoundary>
          <Router>
            <Route path={BaseRoute + '/'} component={Home} />
            <Route path={BaseRoute + '/about'} component={About} />
            <Route path={BaseRoute + '/projects'} component={Projects} />
            <Route path={BaseRoute + '/contact'} component={Contact} />
            <Route default component={NotFound} />
          </Router>
        </ErrorBoundary>
      </LocationProvider>
    <Foot />
  </ThemeProvider>
}
