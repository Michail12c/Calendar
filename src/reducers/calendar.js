import {
  CREATE_CALENDAR,
  CREATE_EVENT,
  EDIT_EVENT,
  DELETE_EVENT,
} from "../constants";

let initialState = {
  calendar: [],
  events: [],
  activeIndex: 0
};


const calendarReducer = (state = initialState, action) => {
  switch(action.type){
    case CREATE_CALENDAR:
    return {
      ...state,
      calendar: [...state.calendar, action.form ]
    }
    case CREATE_EVENT:
    return {
      ...state,
      events: [...state.events, action.form ]
    }
    case EDIT_EVENT:
    return {
      ...state,
      events: state.events.map(item => {
        if(item.date === action.event.date){
          return {title: action.event.title, date: action.event.date}
        }
        return item;
      })
    }
    case DELETE_EVENT:
    return {
      ...state,
      events: state.events.filter(item => item.date !== action.event.date)
    }
    default:
      return state;
  }
}

export default calendarReducer;