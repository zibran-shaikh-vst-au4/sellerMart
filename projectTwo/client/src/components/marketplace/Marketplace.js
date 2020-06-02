import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { fetchAllProducts } from '../../actions/allProductActions'
import { fetchProducts } from '../../actions/productActions'

class Marketplace extends Component {
    state = {
        data: this.props.products
    }
    componentDidMount() {
        this.props.fetchProducts();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.products !== this.props.products) {
            this.setState({
                data: this.props.products
            })
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        const { value } = e.target
        const newData = this.props.products.filter(product => {
            return (
                product.product_name.toLowerCase().indexOf(value.toLowerCase()) !== -1
                // product.product_name.toLowerCase().includes(value.toLowerCase())
            )
        })

        this.setState({
            data: newData
        })
        console.log(newData);
    }

    handleSubmit = () => {

    }

    render() {
        const { products } = this.props;


        return products.loading ? (
            <h2>Loading</h2>
        ) : products.error ? (
            <h2>{products.error}</h2>
        ) : (
                    <div className="section" style={{ marginTop: '15vh' }}>

                        <form className="col-md-4 mx-auto my-2">
                            <input className="form-control mr-sm-2 my-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange}></input>

                        </form>
                        <div className="d-flex flex-wrap justify-content-center">
                            {
                                this.state.data && this.state.data.map(product => {
                                    return (
                                        <div className="p-1">
                                            <div className="card box p-1 mb-2" style={{ width: '16rem', color: '#071e3d', backgroundColor: '#e4fcf9' }} key={product.id}>
                                                <img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/71J2W6TlWDL._SL1500_.jpg" alt=""
                                                    style={{ width: '100%', height: '15vw', objectFit: 'cover' }} />
                                                <div className="card-body" style={{ padding: '10px' }}>
                                                    <span className="card-title">{product.product_name}</span>
                                                    <hr />
                                                    <p style={{ marginBottom: '5px' }}>Price: Rs {product.price}</p>
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
        fetchProducts: () => dispatch(fetchProducts())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Marketplace);
