import { Routes, Route,  Link } from "react-router-dom";
import WidgetLayout from './components/layout/default/WidgetLayout'
import {  createBrowserRouter, RouterProvider } from "react-router-dom";


function Home() {
  return (
    <div>
          <p>This is the Home page.</p>
    </div>
  );
}

function WidgetA() {
  return (
    <div>
      <p>This is the WidgetA page.</p>
    </div>
  );
}


function About() {
  return (
    <div>
      <p>This is the About page.</p>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page of the app</Link>
      </p>
    </div>
  );
}



const routes = createBrowserRouter([
  {
    path: "/",
    element: <WidgetLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "widgeta", element: <WidgetA /> },
      { path: "*", element: <NoMatch /> },
    ],
  },
]);

function App( ) {


  return (
    <RouterProvider router={routes} />
  );
}

export default App;
