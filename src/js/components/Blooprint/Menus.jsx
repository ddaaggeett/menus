import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ContactBlooprint from '../../containers/Contact/blooprint'
import Header from './dumb/Header'
import Footer from './dumb/Footer'
import { handleBrowserTitleChange } from '../../functions'

class Menus extends Component {

    componentDidMount() {
        handleBrowserTitleChange('Menu Listings', 'food')
    }

    render() {
        return (
            <div className='body'>

                <Header />

                <h2 id="services">Menu Listing Software</h2>

                <Footer />

            </div>

        );
    }
}

export default Menus
