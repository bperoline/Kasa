import React from 'react';

import "@/Components/Tag/Tag.css";

const Tag = ({ unTag }) => {

    return (
        <li className='tag-li'>
            <span className='tag-span'>{unTag}</span>
        </li>
    );
};

export default Tag;