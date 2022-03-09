import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route, 
} from 'react-router-dom';  // https://reactrouter.com/docs/en/v6/getting-started/tutorial#installation
import Header from './components/Header-Component/header.component';
import Expenses from './components/Main-App/Comparison-Component/Comparison-Component';
import Invoices from './components/Main-App/Timeline-Component/Timeline.Component';
import './index.css';

const rootElement = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Expenses />} />
        <Route path="data-visulisation" element={<Invoices />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
