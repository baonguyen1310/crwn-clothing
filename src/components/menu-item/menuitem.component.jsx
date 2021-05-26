import React from 'react'
import { withRouter } from 'react-router-dom';
import './menuitem.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) =>(
    <div className={`${size} menu-item`} onClick={()=> console.log(match)}>
        <div className='background-image' style= {{
          backgroundImage : `url(${imageUrl})`
        }}/>
        <div className='content'>
          <div className='title'>{ title.toUpperCase() }</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
);

export default withRouter(MenuItem);