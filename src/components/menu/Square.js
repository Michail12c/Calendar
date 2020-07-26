import React from 'react';
import CreateEvent from '../CreateEvent';
import { createEvent } from '../../actions/calendar';

const Square = ({title='test'}) => {

  return (
    <div className='square'>
      <div className='inner-square' title='Create event'>
        {title && <h1>{title}</h1>}
        <CreateEvent title={title} createEvent={createEvent}/>
      </div>
    </div>
  )
}

export default Square;