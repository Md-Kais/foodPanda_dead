import { Button, Divider, Input } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import React from 'react';
import Header from './../Header/Header.js'
const Home = () => {
    function handleChange(event){
        console.log(event.target.value);
    }
    return (
        <div>
            <h1>Hehfsdf</h1>
            <Header></Header>
            <Input autoFocus={true} placeholder="Please Provide a FoodName" fullWidth={false} onChange={handleChange}></Input>
            
            <Button variant="contained" color='primary' style={{margin:'5px'}}>Search</Button>
        </div>
    );
};

export default Home;