import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// import * as Sentry from "@sentry/react";
// import { BrowserTracing } from "@sentry/tracing";
import App from './App';



// Sentry.init({
//   dsn: "https://XXXXXXX@XXXXXXX.ingest.sentry.io/XXXXXX",
//   integrations: [new BrowserTracing()],

//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   //tracesSampleRate: 1.0,
// });




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);






root.render(
  <React.StrictMode>
        <ThemeConfig>
        {/* <GlobalStyles /> */}
            <App />
        </ThemeConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
