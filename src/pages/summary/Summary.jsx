import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from "../../components/table/Table";

export default function Summary() {
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

                    <Table />
                </div>
            </div>
        </>
    )
}