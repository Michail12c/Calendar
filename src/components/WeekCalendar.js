import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Title from './menu/Title';
import Square from './menu/Square';
import { Redirect } from 'react-router-dom';

const columns = [
  {
    id: 'hour',
    label: 'Hour',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'monday',
    label: 'Monday',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'tuesday',
    label: 'Tuesday',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
  id: 'wednesday',
  label: 'Wednesday',
  minWidth: 100,
  align: 'center',
  format: (value) => value.toLocaleString('en-US'),
 },
 {
  id: 'thursday',
  label: 'Thursday',
  minWidth: 100,
  align: 'center',
  format: (value) => value.toLocaleString('en-US'),
 },
 {
  id: 'friday',
  label: 'Friday',
  minWidth: 100,
  align: 'center',
  format: (value) => value.toLocaleString('en-US'),
 },
 {
  id: 'saturday',
  label: 'Saturday',
  minWidth: 100,
  align: 'center',
  format: (value) => value.toLocaleString('en-US'),
 },
 {
  id: 'sunday',
  label: 'Sunday',
  minWidth: 100,
  align: 'center',
  format: (value) => value.toLocaleString('en-US'),
 }
];

function createData(hour, monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
  const density = saturday / sunday;
  return {hour, monday, tuesday, wednesday, thursday, friday, saturday, sunday };
}

const rows = [];
let a = 5;
let b = 4
let event = 'hello';
let el1;
let el2;
let el3;
let el4;
let el5;
let el6;
let el7;

for(let i = 0; i < 24; i++){
 el1 = <Square/>;
 el2 = <Square/>;
 el3 = <Square/>;
 el4 = <Square/>;
 el5 = <Square/>;
 el6 = <Square/>;
 el7 = <Square/>;
  if(i == b){
  switch(a){
    case 1:
      el1 = <Square title={event}/> ;
     break;
     case 2:
      el2 = <Square title={event}/> ;
     break;
     case 3:
      el3 = <Square title={event}/> ;
     break;
     case 4:
      el4 = <Square title={event}/> ;
     break;
     case 5:
      el5 = <Square title={event} />;
     break;
     case 6:
     el6 = <Square title={event}/> ;
     break;
     case 7:
     el7 = <Square title={event}/> ;
     break;
   default:

  }
}
  rows.push(createData(`${i}`, el1, el2, el3, el4, el5, el6, el7));
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 640,
  },
  title: {
    marginLeft: 30
  }
});

export default function WeekCalendar({calendar, activeIndex}) {

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  if(!calendar.length){
    return <Redirect to="/"/>
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
      <Paper className={classes.root}>
        <div className={classes.title}>
          {calendar.length > 0 && <Title
                                    calendar={calendar}
                                    activeIndex={activeIndex}/>}
        </div>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead >
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, backgroundColor: 'gray' }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
  );
}

