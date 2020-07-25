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
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { stateMapper } from "../../redux/reducers/rootReducer";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom"
import { Input } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

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

function ContentEdit() {
    const history = useHistory()
    const { id } = useParams()
    const classes = useStyles();

    const [editSlider, setEditSlider] = useState([])





    /* console.log("editSlider", editSlider)
    console.log("id", id) */
    const loadSlider = async () => {
        await axios.get(`http://localhost:6969/banner/${id}`)
            .then(res => {
               /*  console.log(res.data.banner) */
                setEditSlider(res.data.banner)
            })
            .catch(err =>
                console.log(`err ${err}`))
    }
console.log("editSlider", editSlider)
    const handleEdit =  () => {
       
        const fd= new FormData();
        console.log("form data", fd)
        fd.append('image', editSlider)
        axios.put(`http://localhost:6969/banner/${id}`, fd)
            .then(res => {
                console.log("edited", res.data.banner)
                setEditSlider(res.data.banner)
                history.push(`/contentmanagement`)
            })
            .catch(err =>
                console.log(`err ${err}`))
    }

    useEffect(() => {
        loadSlider()
    }, [])



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
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <FormControl  fullWidth>
                                        <Input
                                            
                                            type="file"
                                            required
                                            onChange={e => setEditSlider(e.target.files[0])}
                                            name="image"
                                            required
                                        ></Input>
                                        <Button color="primary" onClick={handleEdit}>SAVE</Button>
                                    </FormControl>




                                </GridItem>
                            </GridContainer>
                        </CardBody>
                       
                    </Card>
                </GridItem>
            </GridContainer>
        </div >
    );
}

export default connect(stateMapper)(ContentEdit);