import axios from'axios';

export const editSlider = (id) => {
    return (dispatch) => {
        axios.put(`http://localhost:6969/banner/${id}`)
            .then(response => {
                console.log(response);
                
            })
    }
}