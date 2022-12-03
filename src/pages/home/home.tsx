import React, { useEffect } from 'react';

import { useOpen, Container } from 'phoqer';
import { Appear } from 'phoqer-shared';

const HomePage = (): JSX.Element => {
    const aside = useOpen(false);

    useEffect(() => {
        const handler = (event: KeyboardEvent): void => {
            if (event.code === 'Escape') {
                aside.onClose();
            }
        };

        if (aside) window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [aside]);

    return (
        <Appear>
            <Container>
                <h1>React template</h1>
            </Container>
        </Appear>
    );
};

export default HomePage;
