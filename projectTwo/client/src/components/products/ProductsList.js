import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreator from '../../actions/productActions'
import axios from 'axios';

// import { fetchProducts } from '../../actions/productActions'
import { addAllProducts } from '../../actions/allProductActions'
// import { deleteProducts } from '../../actions/productActions'
// import { editProducts } from '../../action/productActions'
// import { toast } from 'react-toastify';
// import { css } from 'glamor'
import ReactTooltip from "react-tooltip";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faEdit, faTrash, faWindowClose, faSave } from '@fortawesome/free-solid-svg-icons'



class ProductsList extends Component {
    state = {
        product_name: '',
        price: '',
        stock: ''
    }



    componentDidMount() {
        this.props.fetchProducts();
    }
    componentDidUpdate() {
        this.props.fetchProducts();
    }


    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })

    }


    render() {
        const { products } = this.props;


        const handleClick = (id) => {
            // this.props.deleteProducts(this.props.products.id);
            //console.log(this.props);
            // const ide = this.props.products.find(prod => prod.id === id)
            this.props.addAllProducts(this.props.products.find(prod => prod.id === id))

        }

        const handleDeleteClick = (id) => {
            // this.props.deleteProducts(this.props.products.id);
            //console.log(this.props);
            const ide = this.props.products.find(prod => prod.id === id)
            this.props.deleteProducts(ide.id)


        }


        //save button
        const handleEditClick = (id) => {
            //console.log(this.props.products.find(prod => prod.id === id));
            // const ide = (this.props.products.find(prod => prod.id === id));
            // this.props.editProducts(ide.id);
            const data = {
                product_name: this.state.product_name,
                price: this.state.price,
                stock: this.state.stock
            }

            axios.put(`http://localhost:3010/product/${id}`, data)
                .then(response => {
                    console.log(response);
                    //dispatch(fetchProductsDelete(product))
                })


        }
        // const notify = () => toast(`Product is live!`, {
        //     position: toast.POSITION.TOP_CENTER, autoClose: 4000, closeButton: false, className: css({
        //         background: '#e4fcf9',
        //     }),
        //     bodyClassName: css({
        //         fontSize: '20px',
        //         color: '#071e3d',
        //         fontFamily: `'Baloo Tamma 2', cursive`

        //     })
        // });

        return products.loading ? (
            <h2>Loading</h2>
        ) : products.error ? (
            <h2>{products.error}</h2>
        ) : (
                    <div>


                        <div className="d-flex flex-wrap justify-content-center">

                            {
                                products && products.map(product => {
                                    return (
                                        <div className="p-2" key={product.id}>
                                            <div className="card box p-1 mb-2" style={{ width: '16rem', color: '#071e3d', backgroundColor: '#e4fcf9' }} key={product.id}>
                                                <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/71J2W6TlWDL._SL1500_.jpg" alt=""
                                                    style={{ width: '100%', height: '15vw', objectFit: 'cover' }} />
                                                <div className="card-body" style={{ padding: '10px' }}>
                                                    <span className="card-title"> {product.product_name}</span>
                                                    <hr />
                                                    <p style={{ marginBottom: '5px' }}>Price: Rs {product.price}</p>
                                                    <p style={{ marginBottom: '5px' }}>Stock Qty: {product.stock}</p>
                                                    <p style={{ marginBottom: '5px' }}>Actions:
                                                    <a data-tip data-for="publish" style={{ marginLeft: '10px' }}>
                                                            <button className="btn smbtn" style={{ backgroundColor: '#071e3d', marginRight: '5px', color: '#21e6c1' }} onClick={() => handleClick(product.id)}>
                                                                <FontAwesomeIcon icon={faCartPlus} />
                                                            </button>
                                                        </a>

                                                        <a data-tip data-for="edit">
                                                            <button className="btn smbtn" style={{ backgroundColor: '#071e3d', marginRight: '5px', color: '#21e6c1' }} data-toggle="modal" data-target={`#id${product.id}`}>
                                                                <FontAwesomeIcon icon={faEdit} style={{ verticalAlign: 'baseline' }} />
                                                            </button>
                                                        </a>

                                                        <a data-tip data-for="close" style={{ margin: '0px' }}>
                                                            <button className="btn smbtn" style={{ backgroundColor: '#071e3d', marginRight: '5px', color: '#21e6c1' }} onClick={() => handleDeleteClick(product.id)}>
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </a>

                                                        <ReactTooltip id="close" place="bottom" type="error" effect="float">
                                                            <span>Delete product</span>
                                                        </ReactTooltip>

                                                        <ReactTooltip id="edit" place="bottom" type="warning" effect="float">
                                                            <span>Edit product</span>
                                                        </ReactTooltip>

                                                        <ReactTooltip id="publish" place="bottom" type="success" effect="float">
                                                            <span>Publish: Go Live</span>
                                                        </ReactTooltip>
                                                    </p>

                                                    <div className="card-footer" style={{ padding: '5px 0px 0px 0px', backgroundColor: '#e4fcf9', marginTop: '10px' }}>
                                                        <p class="card-text" style={{ marginBottom: '5px' }}><small style={{ color: '#581b98', fontWeight: 'bold' }}>Added on: {product.createdAt ? product.createdAt.split('').map(p => <span>{p}</span>) : ''}</small></p>
                                                        <p class="card-text" style={{ marginBottom: '5px' }}><small style={{ color: '#581b98', fontWeight: 'bold' }}>Last Modified on: {product.updatedAt}</small></p>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal fade" id={`id${product.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
                                                        </div>
                                                        <div className="modal-body" style={{ backgroundColor: '#e4fcf9' }}>
                                                            <form>
                                                                <label> Product name
                                                            <input type="text" className="form-control" name="product_name" value={this.state.product_name} onChange={this.handleChange} required />
                                                                </label>
                                                                <br />
                                                                <label> Price
                                                            <input type="number" className="form-control" name="price" value={this.state.price} onChange={this.handleChange} required />
                                                                </label>
                                                                <br />
                                                                <br />
                                                                <label> Stock Qty
                                                            <input type="number" className="form-control" name="stock" value={this.state.stock} onChange={this.handleChange} required />
                                                                </label>

                                                                <button type="button" className="btn btn-sm" data-dismiss="modal" style={{ backgroundColor: '#071e3d', marginRight: '5px', color: '#21e6c1' }}><FontAwesomeIcon icon={faWindowClose} /> Close</button>
                                                                <button type="button" className="btn btn-sm " data-dismiss="modal" style={{ backgroundColor: '#071e3d', marginRight: '5px', color: '#21e6c1' }} onClick={() => { handleEditClick(product.id) }}><FontAwesomeIcon icon={faSave} /> Save</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    )
                                })

                            }
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
        fetchProducts: () => dispatch(actionCreator.fetchProducts()),
        deleteProducts: (id) => dispatch(actionCreator.deleteProducts(id)),

        // editProducts: () => dispatch(actionCreator.editProducts()),

        addAllProducts: (allproducts) => {
            dispatch(addAllProducts(allproducts))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
