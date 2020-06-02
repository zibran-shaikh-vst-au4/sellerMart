import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchCart } from '../../actions/cartActions'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import ReactTooltip from "react-tooltip";
import { toast } from 'react-toastify';
import { css } from 'glamor'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCreditCard, faWindowClose } from '@fortawesome/free-solid-svg-icons'


class Cart extends Component {

    componentDidMount() {
        this.props.fetchCart();
    }
    componentDidUpdate() {
        this.props.fetchCart();
    }
    render() {
        let subTotal = 0;
        let subQty = 0;

        const { carts } = this.props;

        carts.forEach(prod => {
            subTotal += prod.total
        })
        carts.forEach(prod => {
            subQty += prod.qty
        })
        const notify = () => toast(`Order successfully placed!`, {
            position: toast.POSITION.TOP_CENTER, autoClose: 2000, closeButton: false, className: css({
                background: '#e4fcf9',
            }),
            bodyClassName: css({
                fontSize: '20px',
                color: '#071e3d',
                fontFamily: `'Baloo Tamma 2', cursive`

            })
        });

        return carts.loading ? (
            <h2>Loading</h2>
        ) : carts.error ? (
            <h2>{carts.error}</h2>
        ) : (
                    <Fragment>
                        <div>
                            <NotificationContainer />
                            <a data-tip data-for="cart" style={{ margin: '0px' }} className="position-fixed">
                                <button className="btn btn-lg" style={{ marginRight: '5px', backgroundColor: '#071e3d', color: '#21e6c1' }} data-toggle="modal" data-target="#cartItem">

                                    <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
                                    <span className="badge badge-pill badge-sm ml-2" style={{ color: 'white' }}>{carts.length}</span>
                                </button>
                            </a>
                            <ReactTooltip id="cart" place="bottom" type="warning" effect="float">
                                <span>Cart products</span>
                            </ReactTooltip>

                            <div className="modal fade" id="cartItem" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Cart Products</h5>
                                            <button type="button" className="btn btn-sm" data-dismiss="modal" style={{ backgroundColor: '#071e3d', marginRight: '5px', color: '#21e6c1' }}><FontAwesomeIcon icon={faWindowClose} /></button>

                                        </div>
                                        <div className="modal-body" style={{ backgroundColor: '#e4fcf9' }}>
                                            <div className="d-flex flex-wrap justify-content-center">

                                                {/* {
                                                    carts && carts.map(cart => {
                                                        return (

                                                            <div className="p-1" key={cart.id}>
                                                                <div className="card box p-1 mb-2" style={{ width: '16rem', color: '#071e3d', backgroundColor: '#e4fcf9' }} key={cart.id}>
                                                                    <div className="card-body">
                                                                        <span className="card-title"> {cart.product_name}</span>
                                                                        <p style={{ margin: '0px' }}>Price: Rs {cart.price}</p>
                                                                        <p>Qty: {cart.qty}</p>
                                                                        <div className="card-footer" style={{ padding: '5px 0px 0px 0px', backgroundColor: '#e4fcf9' }}>
                                                                            <p>Total: {cart.total}</p>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> */}


                                                <table className="table table-striped table-dark responsive">
                                                    <thead>
                                                        <th>Product Name</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>
                                                        <th>Total</th>
                                                    </thead>

                                                    <tbody>
                                                        {carts && carts.map(cart => (
                                                            <tr key={cart.id}>
                                                                <td>{cart.product_name}</td>
                                                                <td>Rs {cart.price}</td>
                                                                <td>{cart.qty}</td>
                                                                <td>{cart.total}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>



                                                {/* )
                                                    })

                                                } */}

                                                <span className="font-weight-bold offset-md-4">Total Qty: {subQty}, Total Price: {subTotal}</span>

                                                <button className="btn btn-small" onClick={notify} data-dismiss="modal" style={{ backgroundColor: '#071e3d', marginRight: '5px', color: '#21e6c1' }}>
                                                    <FontAwesomeIcon icon={faCreditCard} /> Procced to Pay
                                                </button>


                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>



                    </Fragment >
                )

    }

}

const mapStateToProps = (state) => {
    return {
        carts: state.cart.carts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCart: () => dispatch(fetchCart()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
