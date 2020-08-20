import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify';
import { css } from 'glamor'
import ReactTooltip from "react-tooltip";
import { addProject } from '../../actions/productActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faLuggageCart } from '@fortawesome/free-solid-svg-icons'
import Toggle from 'react-toggle';
import "react-toggle/style.css";

class AddProducts extends Component {
    state = {
        product_name: '',
        price: 0,
        stock: 0,
        publish: false,
        coverImage: ''
    }

   
    handelChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleFiles = e => {
        const coverImage = {...this.state.coverImage}
        this.setState({
            coverImage: e.target.files[0]
            
        }, console.log("coverimage", this.state.coverImage))
    }
    handleToggleInput = e => {
        e.preventDefault()
        const { checked } = e.target;

        this.setState({
            publish: checked
        })

    }

    handleSubmit = e => {
        e.preventDefault();
        let fd = new FormData();
        fd.append('coverImage', this.state.coverImage )
        fd.append('product_name', this.state. product_name )
        fd.append('price', this.state.price )
        fd.append('stock', this.state.stock)
        fd.append('publish', this.state.publish )
        

        
        console.log("data", fd)
        this.props.addProducts(fd);
        this.setState({
            product_name: '',
            price: 0,
            stock: 0,
            publish: false,
            coverImage: ''

        })
    }



    render() {
        const { products } = this.props;

        const notify = () => toast(`${this.state.product_name}, added successfully!`, {
            position: toast.POSITION.TOP_LEFT, autoClose: 3000, closeButton: false, className: css({
                background: '#e4fcf9',
            }),
            bodyClassName: css({
                fontSize: '20px',
                color: '#071e3d',
                fontFamily: `'Baloo Tamma 2', cursive`

            })
        });

        return (
            <div className="position-fixed">
                <div className="card shadow" style={{ width: '430px' }}>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <h5 style={{ color: '#071e3d' }}>Add new product
                            <span className="btn" style={{ marginLeft: '150px', backgroundColor: '#071e3d', color: '#21e6c1' }}>

                                    <FontAwesomeIcon icon={faLuggageCart} ></FontAwesomeIcon>
                                    <span className="badge" style={{ color: 'white', fontSize: '20px' }}>{products.length}</span>
                                </span></h5>
                            <div className="form-group">
                                <label htmlFor="product_name" style={{ color: '#1f4287' }}>Product Name</label>
                                <input type="text" id="product_name" className="form-control" value={this.state.product_name} onChange={this.handelChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price" style={{ color: '#1f4287' }}>Price</label>
                                <input type="number" id="price" className="form-control" value={this.state.price} onChange={this.handelChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="stock" style={{ color: '#1f4287' }}>Stock Qty</label>
                                <input type="number" id="stock" className="form-control" value={this.state.stock} onChange={this.handelChange} />
                            </div>
                            <a data-tip data-for="publish" style={{ marginLeft: '10px' }}>
                                <Toggle
                                    name="publish"
                                    id='publish'
                                    onChange={this.handleToggleInput} />
                            </a>
                            <div className="form-group">
                                <label htmlFor="stock" style={{ color: '#1f4287' }}>Upload product image</label>
                                <input type="file" className="form-control-file" name="coverImage" onChange={this.handleFiles} />
                            </div>

                            <a data-tip data-for="add" style={{ margin: '0px' }}>
                                <button className="btn" onClick={notify} style={{ backgroundColor: '#21e6c1', color: '#1f4287', width: '40px', height: '35px' }}><FontAwesomeIcon icon={faPlus} style={{ fontSize: '1.2em' }} /></button>
                            </a>
                            <ReactTooltip id="publish" place="bottom" type="success" effect="float">
                                <span>Publish: Go Live</span>
                            </ReactTooltip>
                            <ReactTooltip id="add" place="bottom" type="info" effect="float">
                                <span>Add product to inventory</span>
                            </ReactTooltip>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.product.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProducts: (products) => {
            dispatch(addProject(products))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProducts);
