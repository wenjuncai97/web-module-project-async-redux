import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {getFood} from '../actions'

const Food = (props) => {
    const {food, isFetching, error} = props;

    // if(isFetching) {
    //     return <h2>Fetching food!</h2>
    // }

    useEffect(() => {
        props.getFood();
    }, [])

    const handleClick = () => {
        props.getFood();
    }
    
    return (
        <>
            <div>
                <h2>What's for dinner?</h2>
            </div>
            <img width="600" height="500" src={food}/>
            <br></br>
            <button onClick={handleClick}>Get new food</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        food: state.food,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(mapStateToProps, {getFood})(Food);