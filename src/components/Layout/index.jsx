import PropTypes from 'prop-types'
import React, { Component } from "react"

import { withRouter } from "react-router-dom"

import Sidebar from "./sidebar"
class Layout extends Component {
    
    constructor(props) {
        super(props)
    }
    render() {
        debugger;
        return (
            <>
                <React.Fragment>
                <Sidebar
                     
                    />
                    <main className="flex-1">
                        {this.props.children}
                    </main>
                </React.Fragment>
            </>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.object,

}
export default withRouter(Layout)