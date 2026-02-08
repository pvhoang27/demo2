import React, { useState } from 'react';
const Lesson3 = (props) => {
    const [name , setName] = useState('');
    return (
        <div>
            <label>Name:</label>
            <input type={'text'} />
            <div>Your name 's ... </div>
        </div>
    )
}

export default Lesson3;