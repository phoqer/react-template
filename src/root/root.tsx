import React from 'react';

import classNames from 'classnames';
import { ToastProvider } from 'phoqer';
import { ReduceAnimationsProvider } from 'phoqer-shared';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Pages } from 'src/pages/pages';

import css from './root.module.scss';

export const Root = (): JSX.Element => {
    return (
        <ToastProvider>
            <ReduceAnimationsProvider>
                <BrowserRouter>
                    <div className={classNames(css.root, process.env.NODE_ENV === 'development' && css.development)}>
                        <Routes>
                            <Route path="*" element={<Pages />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </ReduceAnimationsProvider>
        </ToastProvider>
    );
};
