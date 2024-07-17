import React from 'react';

const SubmitButton = (props) => {
    if(props.submit===false){
        return <button onClick={props.onClick}type='submit'>{props.text}</button>
    }
    else{
        return(
            <button disabled={true}>processing.......</button>
        )
    }
};

export default SubmitButton;