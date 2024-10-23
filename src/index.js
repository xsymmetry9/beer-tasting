import React from 'react';
import {createRoot} from 'react-dom/client';
import './styles.scss';
import App from './App.jsx';

const container = document.getElementById("root");
createRoot(container).render(<App />);
