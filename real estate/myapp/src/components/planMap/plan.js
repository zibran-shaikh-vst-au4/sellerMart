import React, { Component, Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap'

const first = "http://hompark.themezinho.net/wp-content/uploads/2020/03/plan01.jpg";
const second = "http://hompark.themezinho.net/wp-content/uploads/2020/03/plan02.jpg";
const third = "http://hompark.themezinho.net/wp-content/uploads/2020/03/plan03.jpg"

class Plans extends Component {
    state={
        image:"http://hompark.themezinho.net/wp-content/uploads/2020/03/plan01.jpg"}

    handleOne=()=>{
        const image = {...this.state.image}
        this.setState({
            image:first
        })
    }
    handleTwo=()=>{
        const image = {...this.state.image}
        this.setState({
            image:second
        })
    }
    handleThree=()=>{
        const image = {...this.state.image}
        this.setState({
            image:third
        })
    }
    

    render() {

        return (
            <Fragment>
                <div className="container " style={{marginTop:'40px', marginBottom:'40px'}}>
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12 mt-5">
                            <h3>Vengurlekars Chaitra Spaces</h3>
                           {/*  <h4>Decorated Flats in Vengurlekars Chaitra</h4> */}
                            <p style={{ fontSize: '15px' }}>We are waiting for you in our sales office for having all these opportunities
                            with affordable prices and appropriate payment opportunities..</p>
                            <p style={{ fontSize: '20px' }}>Total area : 680 metre square</p>
                            <p style={{ fontSize: '20px' }}>Total floor : 24 floor</p>
                            <p style={{ fontSize: '20px' }}>Parking lot: 5 large</p>
                            <p style={{ fontSize: '20px' }}>Social Area : 860 metre square</p>

                        </div>
                        <div className='col-md-6 col-sm-12 col-xs-12'>
                            
                            <a className="btn btn-lg m-2" style={{borderBottom:'2px solid #D0A24C'}}onClick={this.handleOne}>1 Room 47m</a>
                            <a className="btn btn-lg m-2" style={{borderBottom:'2px solid #D0A24C'}}onClick={this.handleTwo}>1 Room 67m</a>
                            <a className="btn btn-lg m-2"style={{borderBottom:'2px solid #D0A24C'}}onClick={this.handleThree}>1 Room 90m</a>
                            <img className='col-md-12 col-sm-12 col-xs-12 mt-5'src={this.state.image}></img>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Plans;