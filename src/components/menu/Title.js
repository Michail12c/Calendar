import React from 'react';

const Title = ({calendar, activeIndex}) => {
  return (
    <>
     <div className='wrapperTitle'>
      <h2>{calendar[activeIndex].title}</h2>
      <p>{calendar[activeIndex].description && calendar[activeIndex].description}</p>
     </div>
    </>
  )
}

export default Title;