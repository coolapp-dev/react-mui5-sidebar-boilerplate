import { Routes, Route,  Link } from "react-router-dom";
import WidgetLayout from './components/layout/default/WidgetLayout'
import {service as mainService} from './service/main'
import  {useActor} from '@xstate/react'


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


function App( ) {


  const [state, send] = useActor(mainService)

  return (



    <Routes>
      <Route path="/" element={<WidgetLayout />}>
        <Route index element={<Home />} />
        <Route path="widgeta" element={<WidgetA />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
  </Routes>

  );
}

export default App;
