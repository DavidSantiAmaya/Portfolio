import './style.css';

import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import LasBotasProjectPage from './components/projects/las-botas-viejas-de-papa/LasBotasProjectPage';
import { homePath, projectSlugFromPath } from './config/routes';

function Root() {
    const isLasBotasRoute = () => projectSlugFromPath() === 'las-botas-viejas-de-papa';
    const [showLasBotas, setShowLasBotas] = useState(isLasBotasRoute);

    useEffect(() => {
        const syncRoute = () => setShowLasBotas(isLasBotasRoute());
        window.addEventListener('popstate', syncRoute);
        window.addEventListener('portfolio:navigate', syncRoute);
        return () => {
            window.removeEventListener('popstate', syncRoute);
            window.removeEventListener('portfolio:navigate', syncRoute);
        };
    }, []);

    useEffect(() => {
        if (!showLasBotas) return;

        document.title = 'Las botas viejas de papá — David Santiago Amaya';
        const heading = document.querySelector('.botas-page h1');
        if (heading) {
            heading.tabIndex = -1;
            heading.focus({ preventScroll: true });
        }
    }, [showLasBotas]);

    const returnToPortfolio = () => {
        window.history.pushState({}, '', homePath);
        setShowLasBotas(false);
    };

    return showLasBotas ? <LasBotasProjectPage onReturn={returnToPortfolio} /> : <App />;
}

ReactDOM.createRoot(document.querySelector('#root')).render(<Root />);
