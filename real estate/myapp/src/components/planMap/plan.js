import React, { Component, Fragment } from 'react';


const first = "/img/2bhk wbg1.png";
const second = "/img/2bhk wbg2.png";
const third = "/img/3bhk wbg.png"

class Plans extends Component {
    state={
        image:"/img/2bhk wbg1.png"
    }


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
                <div className="container-fluid" id="project-map" >
                    <div className="row mt-5">
             
                        <div className='col-md-12 col-sm-12 col-xs-12 text-center' style={{cursor:'pointer'}}>
                            <div className="a-tags">
                            <a onClick={this.handleOne}><span>67 metre |</span></a>
                            <a onClick={this.handleTwo}><span>79 metre |</span></a>
                            <a onClick={this.handleThree}><span>90 metre</span></a>
                            </div>
                            <img className='col-md-12 col-sm-12 col-xs-12'src={this.state.image} ></img>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Plans;