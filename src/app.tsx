import './app.css'

import {
  LocationProvider,
  ErrorBoundary,
  Router,
  Route,
  lazy,
} from "preact-iso";

// synchronous
import Home from "./pages/Home"

import Head from "./pages/Head"
import Foot from "./pages/Foot"

// async
const NotFound = lazy(() => import("./pages/NotFound"))

export function App() {
  return (
    <>
      <Head />
      <body>
        <LocationProvider>
          <ErrorBoundary>
            <Router>
              <Route path='/' component={Home} />
              <Route default component={NotFound} />
            </Router>
          </ErrorBoundary>
        </LocationProvider>
      </body>
      <Foot />
    </>
  )
}
