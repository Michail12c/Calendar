import React from 'react';
import { Switch, Route,  withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import DayCalendar from './DayCalendar';
import HomePage from './HomePage';
import MonthCalendar from './MonthCalendar';
import WeekCalendar from './WeekCalendar';
import {
  createCalendar,
  createEvent,
  editEvent,
  deleteEvent} from '../actions/calendar';


const mapStateToProps = ({
 calendarReducer: {
   calendar,
   activeIndex,
   events,
 }
}) => ({
  calendar,
  activeIndex,
  events,
});

const MainPage = ({
  createCalendar,
  createEvent,
  deleteEvent,
  calendar,
  activeIndex,
  editEvent,
  events,
}) => {

  return  (
   <>
    <Switch>
      <Route exact path="/">
        <HomePage
          calendar={calendar}
          createCalendar={createCalendar}/>
      </Route>
      <Route exact path="/month">
        <MonthCalendar
          calendar={calendar}
          events={events}
          activeIndex={activeIndex}
          createEvent={createEvent}
          deleteEvent={deleteEvent}
          editEvent={editEvent}/>
      </Route>

      <Route  exact path='/week'>
            <WeekCalendar
              calendar={calendar}
              activeIndex={activeIndex}/>
      </Route>

      <Route exact path='/day'>
        <DayCalendar
          calendar={calendar}
          activeIndex={activeIndex}/>
      </Route>
    </Switch>
  </>
  )
}

export default withRouter(connect(mapStateToProps, {
 createCalendar,
 createEvent,
 deleteEvent,
 editEvent,
})(MainPage));
