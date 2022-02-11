import React from 'react';

import { Footer, Header } from '../components'

function MainLayout({children}) {
    return (
        <>
          <Header/>
          <main>{children}</main>
          <Footer/>
        </>
    );
}

export { MainLayout };
