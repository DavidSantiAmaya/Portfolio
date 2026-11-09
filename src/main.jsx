import './style.css';

import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import LasBotasProjectPage from './components/projects/las-botas-viejas-de-papa/LasBotasProjectPage';
import ProjectCardInjection from './components/projects/las-botas-viejas-de-papa/ProjectCardInjection';

function Root() {
    const isLasBotasRoute = () => window.location.pathname.replace(/\/$/, '').endsWith('/projects/las-botas-viejas-de-papa');
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
        if (showLasBotas) document.title = 'Las botas viejas de papá — David Santiago Amaya';
    }, [showLasBotas]);

    const returnToPortfolio = () => {
        window.history.pushState({}, '', '/');
        setShowLasBotas(false);
    };

    return showLasBotas ? <LasBotasProjectPage onReturn={returnToPortfolio} /> : <><App /><ProjectCardInjection /></>;
}

ReactDOM.createRoot(document.querySelector('#root')).render(<Root />);
