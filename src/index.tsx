import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './core/store';
import { Suspense } from 'react';

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback=''>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById('root'),
);
