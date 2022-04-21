import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {getFood, typeOfFood} from '../actions'

const Food = (props) => {
    const {food} = props;

    useEffect(() => {
        props.getFood();
    }, [])

    const handleClick = () => {
        props.getFood();
    }
    
    const handleTypeClick = (type) => {
        props.typeOfFood(type.biryani);
    }

    const onSubmit = evt => {
        typeOfFood(biryani);
    }
    return (
        <>
            <div>
                <h2>What's for dinner?</h2>
            </div>
            <img width="600" height="500" src={food}/>
            <button>BIRYANI</button>
             {/* <a href='' >biryani</a>
             <a href='' >burger</a>
             <a href='' >butter-chicken</a>
             <a href='' >dessert</a>
             <a href='' >dosa</a>
             <a href='' >idly</a>
             <a href='' >pasta</a>
             <a href='' >rice</a>
             <a href='' >pizza</a>
             <a href='' >sanisa</a>  */}
            <br></br>
            <button onClick={handleClick}>Get new food</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        food: state.food,
        error: state.error
    }
}
export default connect(mapStateToProps, {getFood})(Food);