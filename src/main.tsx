import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import store from './Redux/store.tsx';

createRoot(document.getElementById('root')!).render(
 <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  
  
)
