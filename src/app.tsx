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

export function App() {

  return <ThemeProvider>
    <Head />
      <LocationProvider scope='/portfolio-redux'>
        <ErrorBoundary>
          <Router>
            <Route path='/portfolio-redux/' component={Home} />
            <Route path='/portfolio-redux/about' component={About} />
            <Route path='/portfolio-redux/projects' component={Projects} />
            <Route path='/portfolio-redux/contact' component={Contact} />
            <Route default component={NotFound} />
          </Router>
        </ErrorBoundary>
      </LocationProvider>
    <Foot />
  </ThemeProvider>
}
