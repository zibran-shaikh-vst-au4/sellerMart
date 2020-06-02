import React, { Component } from 'react'
import ProductsList from './ProductsList'
import AddProducts from './AddProducts'

class ManageProducts extends Component {
    render() {
        return (
            <div className="container" style={{ marginTop: '15vh' }}>
                <div className="row">
                    <div className="col col-sm-12 col-md-7"><ProductsList /></div>
                    <div className="col col-sm-12 col-md-5"><AddProducts /></div>
                </div>
            </div>
        )
    }
}

export default ManageProducts
