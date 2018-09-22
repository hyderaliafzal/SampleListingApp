import React from 'react';
import {Grid, Paper} from '@material-ui/core';
import Header from './Header';
import {connect} from "react-redux";
import {add} from "../redux/actions";

function Hoc(WrappedComponent) {
   class withRedux extends React.Component {
     state ={
       CheckList: this.props.CheckList
     };
    render () {
      const props = this.props;
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

  const mapStateToProps = ({CheckList}) => {
    return {
      CheckList: CheckList
    };
  };

  const mapDispatchToProps = dispatch => ({
    add: (id) => dispatch(add(id)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(withRedux);
}

export default Hoc;