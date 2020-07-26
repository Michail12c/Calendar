import React, { useState, useEffect } from 'react';
import Day from './Day';
import Title from './menu/Title';
import { Redirect } from 'react-router-dom';

const MonthCalendar = ({
 calendar,
 activeIndex,
 createEvent,
 deleteEvent,
 events,
 editEvent,
}) => {
  const [thisMonth, setThisMonth] = useState(new Date().getMonth() + 1);
  const [thisYear, setThisYear] = useState(new Date().getFullYear());


  const week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  if(!calendar.length){
    return <Redirect to="/"/>
  }

  const formationKey = (key) => {
    if (key < 10) return 0 + `${key}`;
    return `${key}`;
  }

  const createCalendar = (year, prevMonth, arrEvents ) => {
    let month = prevMonth - 1;
    let date = new Date(year, month);
    let cellEmpty, cellContent, cellEnd;
    let count = 1;
    let accumulateIteration = [];
    let accumulateIterationTwo = [];

    for (let i = 0; i < getDay(date); i++) {
      accumulateIteration.push(i);
    }
    cellEmpty = accumulateIteration.map(item => <Day key={item}  />)
    accumulateIteration.length = 0;

    while (date.getMonth() == month) {
      accumulateIteration.push(count);
      date.setDate(date.getDate() + 1);
      count++;
    }
    if (getDay(date) !== 0) {
      for (let i = getDay(date); i < 7; i++) {
        accumulateIterationTwo.push(i);
      }
    }

    cellContent = accumulateIteration.map((item, i) => {
      let event = arrEvents.find(event => event.date == `${item}.${thisMonth}` )
      if(event){
        event = event.title;
      }

      return <Day
                key={item}
                title={ i + 1}
                event={event}
                createEvent={createEvent}
                deleteEvent={deleteEvent}
                editEvent={editEvent}/>
      });

    cellEnd = accumulateIterationTwo.map( item => (
     <Day
     key={item} /> ))

    return { cellEmpty, cellContent, cellEnd };
  }

  const getDay = (date) => {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
  }

  let calendarInner = createCalendar(thisYear, thisMonth, events);
  const { cellEmpty, cellContent, cellEnd } = calendarInner;

  const nameMonth = new Date(thisYear, thisMonth - 1).toLocaleString('ru', {
    month: 'long'
  });

  return (
    <div className="calendar-page">
      <div className="calendar">
        <div className="calendar__wrapper">

          { calendar.length > 0 && <Title
                                     activeIndex={activeIndex}
                                     calendar={calendar}/> }
          <div className='wrapper-content'>
            {cellEmpty}
            {cellContent}
            {cellEnd}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonthCalendar;