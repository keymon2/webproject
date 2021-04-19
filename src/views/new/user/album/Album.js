import React from 'react';
import imgfile from './imgfile.png';
import imgfile2 from './imgfile2.png';
import imgfile3 from './imgfile3.png';

const Album = (props) => {
    return (
        <div>
            <img src={imgfile} />
            <img src={imgfile2} />
            <img src={imgfile3} />
        </div>
    )
}

export default Album;