import React, { Component, Fragment } from 'react';


const first = "http://hompark.themezinho.net/wp-content/uploads/2020/03/plan01.jpg";
const second = "http://hompark.themezinho.net/wp-content/uploads/2020/03/plan02.jpg";
const third = "http://hompark.themezinho.net/wp-content/uploads/2020/03/plan03.jpg"

class FloorPlan extends Component {
    state = {
        image: "http://hompark.themezinho.net/wp-content/uploads/2020/03/plan01.jpg"
    }


    handleOne = () => {
        const image = { ...this.state.image }
        this.setState({
            image: first
        })
    }
    handleTwo = () => {
        const image = { ...this.state.image }
        this.setState({
            image: second
        })
    }
    handleThree = () => {
        const image = { ...this.state.image }
        this.setState({
            image: third
        })
    }


    render() {

        return (
            <Fragment>
                <div className="container" id="project-floormap" >
                    <div className="row mt-5">
                    <div className='col-md-8 col-sm-12 col-xs-12 text-center' data-aos="fade-right" style={{ cursor: 'pointer' }}>
                            <div className="a-tags col-md-6 col-sm-6 col-xs-6 m-auto ">
                                <a onClick={this.handleOne}><span>67 metre |</span></a>
                                <a onClick={this.handleTwo}><span>79 metre |</span></a>
                                <a onClick={this.handleThree}><span>90 metre</span></a>
                            </div>
                            <img className='col-md-8 col-sm-12 col-xs-12 m-2' src={this.state.image} ></img>
                        </div>
                        <div className='col-md-4 col-sm-12 col-xs-12' data-aos="fade-left" style={{ cursor: 'pointer' }}>
                            <h3>Vegurlekar's Chaitra</h3>
                            <p>We are waiting for you in our sales office for having all these opportunities with affordable prices and appropriate payment opportunities..</p>
                            <p>Total area: 680 meter square</p>
                            <p>Total floor: 24 floor</p>
                            <p>Parking Lot: 5 Large</p>
                            <p>Social Area: 860 metre square</p>
                        </div>

                       
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default FloorPlan;