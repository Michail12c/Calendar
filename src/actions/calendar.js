import {
   CREATE_CALENDAR,
   CREATE_EVENT,
   EDIT_EVENT,
   DELETE_EVENT,
  } from "../constants";

export const createCalendar = (form) => (dispatch) => dispatch ({
  type: CREATE_CALENDAR,
  form
});

export const createEvent = (form) => (dispatch) => dispatch ({
  type: CREATE_EVENT,
  form
});

export const editEvent = (event) => (dispatch) => dispatch ({
  type: EDIT_EVENT,
  event
});

export const deleteEvent = (event) => (dispatch) => dispatch ({
  type: DELETE_EVENT,
  event
});