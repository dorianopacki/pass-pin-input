import React from 'react'
import './SingleInput.css'

interface ISingleInput {
    index: number,
    isDisabled: boolean,
    isHidden: boolean
}

const SingleInput = ({ index, isDisabled, isHidden }: ISingleInput) => {

    return(
        <div className='input_wrapper'>
            <input type={ isHidden ? "password" : "text" } maxLength={ 1 } disabled={ isDisabled } className='single_input' id={`input${index}`} />
            <div>{ index + 1 }</div>
        </div>
    )
}

export default SingleInput