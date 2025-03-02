import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import 'modern-normalize';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
    // <StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App />
                <Toaster toastOptions={{ duration: 3000 }} />
            </PersistGate>
        </Provider>
    </BrowserRouter>
    // </StrictMode>
);
