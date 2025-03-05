import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import 'modern-normalize';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <PersistGate persistor={persistor}>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </PersistGate>
    </StrictMode>
);
