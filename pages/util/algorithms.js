import React from 'react';

const Algorithms = (props) => {
  return (
    <span className=''>
        <select name='Algorithm' id='menu' onChange={(e) => props.onChange(e.target.value, 'algo')}>
            {props.algorithms.map(element => (
                <option key = {element.value} value={element.value}>
                    {element.type}
                </option>
            ))}
        </select>
    </span>
  )
}

export default Algorithms;