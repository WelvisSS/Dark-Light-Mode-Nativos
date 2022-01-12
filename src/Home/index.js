import React from 'react';

import { Wrapper, Title } from './styles';

export default function Home({ initialTheme }) {

    return (
        <Wrapper>
            <Title>
                {initialTheme ? 'Dark' : 'Light'}
            </Title>
        </Wrapper>
    );

};