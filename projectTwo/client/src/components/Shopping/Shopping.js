import React, { Component } from 'react'
import { connect } from 'react-redux'
// import util from '../../util'
// import { addToCart } from '../../actions/cartActions'
import { addCart } from '../../actions/cartActions'
import { fetchProducts } from '../../actions/productActions'
import Cart from './Cart'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


class Shopping extends Component {
    state = {
        cartProducts: this.props.products
    }


    componentDidUpdate(prevProps) {
        if (prevProps.products !== this.props.products) {
            this.setState({
                cartProducts: this.props.products
            })
        }
    }
    componentDidMount() {
        this.props.fetchProducts();
    }
    handleSearch = (e) => {
        e.preventDefault();
        const { value } = e.target
        const newData = this.props.products.filter(product => {
            return (
                product.product_name.toLowerCase().indexOf(value.toLowerCase()) !== -1
                // product.product_name.toLowerCase().includes(value.toLowerCase())
            )
        })

        this.setState({
            cartProducts: newData
        })
    }

    handelChange = (e) => {
        const cartProducts = this.state.cartProducts.slice()
        const { value } = e.target
        const quantity = cartProducts.forEach(prod => {
            if (prod.qty !== value) {
                prod.qty = value
            }

        })

        this.setState({
            [cartProducts.qty]: quantity
        })

    }

    handleClick = (id) => {
        this.props.addCart(this.props.products.find(prod => prod.id === id))
        const cartProducts = this.state.cartProducts.slice();
        const total = cartProducts.forEach(prod => { prod.total = prod.price * prod.qty });
        this.setState({
            [cartProducts.total]: total
        })
    }


    render() {


        const { cartProducts } = this.state;



        return cartProducts.loading ? (
            <h2>Loading</h2>
        ) : cartProducts.error ? (
            <h2>{cartProducts.error}</h2>
        ) :
                (
                    <div className="container" style={{ marginTop: '15vh' }}>
                        <div className="row">
                            <div className="col col-sm-12 col-md-10">
                                <form className="col-md-4 mx-auto my-2">
                                    <input className="form-control mr-sm-2 my-2" type="search" placeholder="Search products" aria-label="Search" onChange={this.handleSearch}></input>

                                </form>
                                <div class="d-flex flex-wrap justify-content-center">
                                    {
                                        cartProducts && cartProducts.map(product => {
                                            return (
                                           
                                                <div className="p-1">
                                                    <div className="card box p-1 mb-2" style={{ width: '16rem', color: '#071e3d', backgroundColor: '#e4fcf9' }} key={product.id}>
                                                        <img class="card-img-top" src={product.coverImage} alt=""
                                                            style={{ width: '100%', height: '15vw', objectFit: 'cover' }} />
                                                        <div className="card-body" style={{ padding: '10px' }}>
                                                            <span className="card-title">{product.product_name}</span>
                                                            <hr />
                                                            <p style={{ marginBottom: '5px' }}>Price: Rs {product.price}</p>
                                                            <div className="input-group mb-3" style={{ width: 'fit-content', marginBottom: '0px' }}>
                                                                <div className="input-group-prepend">
                                                                    <label className="input-group-text" style={{ backgroundColor: '#071e3d', color: 'white' }}>Qty</label>
                                                                </div>
                                                                <select className="custom-select" onChange={this.handelChange} name="qty" style={{ color: '#071e3d' }}>

                                                                    <option value={1}>1</option>
                                                                    <option value={2}>2</option>
                                                                    <option value={3}>3</option>
                                                                </select>

                                                                <button className="btn btn-small" style={{ backgroundColor: '#071e3d', marginLeft: '60px', color: '#21e6c1' }} onClick={() => this.handleClick(product.id)}>
                                                                    <FontAwesomeIcon icon={faCartPlus} />
                                                                </button>

                                                            </div>



                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col col-sm-12 col-md-2"><Cart /></div>
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
        fetchProducts: () => dispatch(fetchProducts()),
        addCart: (carts) => {
            dispatch(addCart(carts))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shopping)
