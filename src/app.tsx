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

export function App() {
  return <>
    <Head />
    <body>
      <LocationProvider>
        <ErrorBoundary>
          <Router>
            <Route path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
            <Route default component={NotFound} />
          </Router>
        </ErrorBoundary>
      </LocationProvider>
    </body>
    <Foot />
  </>
}
