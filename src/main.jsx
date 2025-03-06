import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import 'modern-normalize';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <PersistGate persistor={persistor}>
            <Provider store={store}>
                <BrowserRouter>
                    <Layout />
                </BrowserRouter>
            </Provider>
        </PersistGate>
    </StrictMode>
);
