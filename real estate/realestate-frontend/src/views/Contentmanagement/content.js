import React, { useState, useEffect, Fragment } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";
import Sidebar from "../../components/Sidebar/Sidebar"

// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
//import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import { CardMedia } from '@material-ui/core';
import axios from 'axios';
import { Typography } from "@material-ui/core";
import { Button as CustomButtons } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {stateMapper} from "../../redux/reducers/rootReducer";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom"




//import avatar from "assets/img/faces/marc.jpg";

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};

const useStyles = makeStyles(styles);

 function Content(props) {
    const classes = useStyles();
    const [banImg, setBanImg] = useState([])
    const history = useHistory()

const loadSlider =async ()=>{
         await axios.get(`http://localhost:6969/banner`)
            .then(res => {
               /*  console.log(res.data.banner) */
                setBanImg(res.data.banner)
                /* console.log('ban img', banImg) */
            })
            .catch(err =>
                console.log(`err ${err}`))
}

    useEffect(() => {
   loadSlider()
    }, [])

    const handleEdit = id =>{
         history.push(`/contentmanagement/edit/${id}`)
    }
    const handleDelete = id =>{
        /* console.log("delete", id) */
    }

    return (
        <div>
            <Sidebar />
            <GridContainer justify={"center"}>
                <GridItem xs={12} sm={12} md={6} >

                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Home</h4>
                            <p className={classes.cardCategoryWhite}>Add details for Home page</p>
                        </CardHeader>
                        <CardBody>
                            {/*  <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <CustomInput
                                        labelText="add link for website"
                                        id="firstname"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        type="url"
                                        required
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <CustomInput
                                        labelText="add link for mobile"
                                        id="firstname"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        type="url"
                                    />
                                </GridItem>
                            </GridContainer> */}

                            {banImg.map(ban => {
                                return (
                                    <Fragment>
                                        <CardMedia >
                                            <img key={ban._id} src={ban.image}
                                                width="50%" height="50%"
                                                alt="recipe thumbnail" />
                                        </CardMedia>
                                        <Button color="primary" onClick={()=>handleEdit(ban._id)}>Edit</Button>
                                        <Button color="primary" onClick={()=>handleDelete(ban._id)}>Delete</Button>
                                    </Fragment>
                                )

                            })

                            }




                        </CardBody>
                        {/* <CardFooter>
                            <Button color="primary" type="submit" >Add</Button>
                        </CardFooter> */}
                    </Card>
                </GridItem>
            </GridContainer>
        </div >
    );
}


export default connect(stateMapper)(Content)