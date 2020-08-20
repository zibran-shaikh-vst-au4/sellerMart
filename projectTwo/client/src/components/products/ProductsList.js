import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as actionCreator from '../../actions/productActions'
import axios from 'axios';
import { addAllProducts } from '../../actions/allProductActions'

import ReactTooltip from "react-tooltip";
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faWindowClose, faSave } from '@fortawesome/free-solid-svg-icons'



class ProductsList extends Component {
    state = {
        
        product_name: '',
        price:'',
        stock:'',
        publish: '',
        coverImage:''
        
    }



    componentDidMount() {
        this.props.fetchProducts();
    }
    
    
    componentDidUpdate() {
        this.props.fetchProducts();
    }
    


   

    handleChange = (e) => {
        e.preventDefault();
        const {value, name } = e.target
        this.setState({
            [name] : value
        }, ()=> console.log(this.state))

    }
    handleToggle = e => {
        e.preventDefault()
        const { checked , name} = e.target;
       
        this.setState({
            [name]: checked
        }, () => console.log("checked", this.state))

    }

    
     handleClick = (id) => {
        // this.props.deleteProducts(this.props.products.id);
        //console.log(this.props);
        // const ide = this.props.products.find(prod => prod.id === id)
        this.props.addAllProducts(this.props.products.find(prod => prod.id === id))

    }

     handleDeleteClick = (id) => {
        // this.props.deleteProducts(this.props.products.id);
        //console.log(this.props);
        const ide = this.props.products.find(prod => prod.id === id)
        this.props.deleteProducts(ide.id)


    }


    //save button
     handleEditClick = (id) => {
        //console.log(this.props.products.find(prod => prod.id === id));
        // const ide = (this.props.products.find(prod => prod.id === id));
        // this.props.editProducts(ide.id);
        const data = {
            product_name: this.state.product_name,
            price: this.state.price,
            stock: this.state.stock,
            publish: this.state.publish
            
        }

        axios.put(`http://localhost:3010/product/${id}`, data)
            .then(response => {
                console.log(response);
                //dispatch(fetchProductsDelete(product))
            })


    }

    render() {
 
        const {products} = this.props
       
       
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
                    <Fragment>


                        <div className="d-flex flex-wrap justify-content-center">

                            {
                                products && products.map(product => {
                                    return (
                                        <div className="p-2" key={product.id}>
                                            <div className="card box p-1 mb-2" style={{ width: '16rem', color: '#071e3d', backgroundColor: '#e4fcf9' }} key={product.id}>
                                                <img className="card-img-top" src={product.coverImage} alt=""
                                                    style={{ width: '100%', height: '15vw', objectFit: 'cover' }} />
                                                <div className="card-body" style={{ padding: '10px' }}>
                                                    <span className="card-title"> {product.product_name}</span>
                                                    <hr />
                                                    <span style={{ marginBottom: '5px' }}>Price: Rs {product.price}</span>
                                                    <span style={{ marginBottom: '5px' }}>Stock Qty: {product.stock}</span>
                                                    <span style={{ marginBottom: '5px' }}>Actions:
                                                  

                                                        <a data-tip data-for="edit">
                                                            <button className="btn smbtn" style={{ backgroundColor: '#071e3d', marginRight: '5px', color: '#21e6c1' }} data-toggle="modal" data-target={`#id${product.id}`}>
                                                                <FontAwesomeIcon icon={faEdit} style={{ verticalAlign: 'baseline' }} />
                                                            </button>
                                                        </a>

                                                        <a data-tip data-for="close" style={{ margin: '0px' }}>
                                                            <button className="btn smbtn" style={{ backgroundColor: '#071e3d', marginRight: '5px', color: '#21e6c1' }} onClick={() => this.handleDeleteClick(product.id)}>
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </a>

                                                        <ReactTooltip id="close" place="bottom" type="error" effect="float">
                                                            <span>Delete product</span>
                                                        </ReactTooltip>

                                                        <ReactTooltip id="edit" place="bottom" type="warning" effect="float">
                                                            <span>Edit product</span>
                                                        </ReactTooltip>

                                                     
                                                    </span>

                                                    <div className="card-footer" style={{ padding: '5px 0px 0px 0px', backgroundColor: '#e4fcf9', marginTop: '10px' }}>
                                                        <span className="card-text" style={{ marginBottom: '5px' }}><small style={{ color: '#581b98', fontWeight: 'bold' }}>Added on: {product.createdAt }</small></span>
                                                        <span className="card-text" style={{ marginBottom: '5px' }}><small style={{ color: '#581b98', fontWeight: 'bold' }}>Last Modified on: {product.updatedAt}</small></span>

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
                                                            <input type="text" className="form-control" name="product_name" onChange={this.handleChange} />
                                                                </label>
                                                                <br />
                                                                <label> Price
                                                            <input type="number" className="form-control" name="price"  onChange={this.handleChange} />
                                                                </label>
                                                                <br />
                                                                <br />
                                                                <label> Stock Qty 
                                                            <input type="number" className="form-control" name="stock" onChange={this.handleChange} />
                                                            </label>
                                                            <a data-tip data-for="publish" style={{ marginLeft: '10px' }}>
                                                            <Toggle  name="publish" onChange={this.handleToggle}/></a>
                                                            <ReactTooltip id="publish" place="bottom" type="success" effect="float">
                                                                 <span>Publish: Go Live</span>
                                                                </ReactTooltip>
                                                            <button type="button" className="btn btn-sm" data-dismiss="modal" style={{ backgroundColor: '#071e3d', marginRight: '5px', color: '#21e6c1' }}><FontAwesomeIcon icon={faWindowClose} /> Close</button>
                                                                <button type="button" className="btn btn-sm " data-dismiss="modal" style={{ backgroundColor: '#071e3d', marginRight: '5px', color: '#21e6c1' }} onClick={() => { this.handleEditClick(product.id) }}><FontAwesomeIcon icon={faSave} /> Save</button>
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
                    </Fragment>

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
