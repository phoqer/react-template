import React from 'react';

import 'phoqer/dist/styles/root.css';
import ReactDOM from 'react-dom/client';

import './i18n';

import { Root } from 'src/root/root';

import packageJson from '../package.json';

const mount = (el: HTMLElement): void => {
    const root = ReactDOM.createRoot(el);
    root.render(<Root />);
};

const id = process.env.NODE_ENV === 'development' ? 'root' : packageJson.name;
const root = document.getElementById(id);

if (root) {
    mount(root);
}

if (!root) {
    throw new Error(`There is no component with id "${id}"`);
}

export {};
