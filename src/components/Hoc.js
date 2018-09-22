import React from 'react';
import {Grid, Paper} from '@material-ui/core';
import Header from './Header';

function Hoc(WrappedComponent) {
  return function (props) {
    return (
     <Grid style={{padding: 40, borderRadius: 12}}>
       <Grid item md={12} >
         <Header/>
         <Paper elevation={11}>
           <WrappedComponent {...props}/>
         </Paper>
       </Grid>
     </Grid>
    )
  }
}

export default Hoc;