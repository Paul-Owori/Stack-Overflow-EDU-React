import React, { Component } from 'react';

import './../stylesheets/base.css'
import './../stylesheets/themes/not-found.css'

class NotFound extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="page-container">
                <div class="not-found-container">
                    <div>
                        <h1>404 Not found!</h1>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default NotFound;