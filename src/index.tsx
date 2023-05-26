import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from "./app/App";
import { store } from './store/store';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Контейнер рут не найден');
}

const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
