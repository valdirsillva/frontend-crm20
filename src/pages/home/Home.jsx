import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Content from '../../components/content/Content';

import "./home.css"
export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuButtonClick = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <>
            <div className='container-fluid'>
                <div className='row flex-nowrap'>
                    <Sidebar
                        menuHasOpen={menuOpen}
                        handleMenuButtonClick={handleMenuButtonClick}
                    />

                    <Content/>
                </div>
            </div>
        </>
    )
}