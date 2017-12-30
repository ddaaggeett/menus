import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ContactBlooprint from '../../containers/Contact/blooprint'
import Header from './dumb/Header'
import { handleBrowserTitleChange } from '../../functions'

class Blooprint extends Component {

    componentDidMount() {
        handleBrowserTitleChange('Blooprint', 'marker')
    }

    render() {
        return (
            <div className='body'>

                <Header />

                <a href="http://www.blooprint.xyz/menus"><div className="project_button" id="restaurant_button"><p>menu software</p></div></a>

                <div id="blooprint_center_content">
                    <ContactBlooprint />
                </div>
            </div>

        );
    }
}

export default Blooprint
