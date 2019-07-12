import axios from 'axios';

export default {
    login(){
        axios.get('/api/environment', {
            headers: [{'Access-Control-Allow-Origin': '*'}]
        }).then(response => {
            console.log(response);
            state.logged = true;
        }).catch(e => {
            console.log(e.toString());
            state.logged = false;
        })
    }

}