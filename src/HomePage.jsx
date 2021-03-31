import React from 'react';
import {Link, useHistory} from 'react-router-dom';

const HomePage = () => {
    const history = useHistory()
    return (
        <>
            <div onClick={()=>console.log('1')}>
                smth
            </div>
            <div onClick={()=>history.push("/route1")}>smth1</div>
            <div onClick={()=>history.push("/route2")}>smth2</div>
        </>
    )
}

export default HomePage