import React from 'react';
import Hoc from './Hoc';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Paper, Checkbox} from '@material-ui/core';
import placeholder from '../assets/placeholder.jpg';
import {COMPANY} from '../queries'
import { Query } from 'react-apollo';
import {add} from "../redux/actions";
import {connect} from "react-redux";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  rightCol: {
    padding: 40
  }
});

function Detail(props){
  const {classes, match} = props;
  const id = match.params.id;
  return(
    <div style={{padding: 10}}>
      <Query query={COMPANY} variables={{id: id}}>
        {({data, error, loading}) => {
          if(loading) return <div>loading...</div>
          if(error) return <div>{error}</div>
          if(data){
            return (
              <Grid container spacing={24}>
                <Grid item xs={12} sm={12} md={6} xl={6}>
                  <Paper className={classes.paper}>
                    <img src={placeholder} height="100%" width="100%"/>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} xl={6}>
                  <div className={classes.rightCol}>
                    <div>
                      Name: {data.company.companyName}
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: `Description: ${data.company.description}` }} />
                    <div>
                      Opens @ {data.company.opensAt}
                    </div>
                    <div>
                      Closes @ {data.company.closesAt}
                    </div>
                    <div>
                      Established in {data.company.establishedIn}
                    </div>
                    <div>
                      Created @ {data.company.createdDate}
                    </div>
                    <div>
                      <Checkbox
                        checked={props.CheckList.indexOf(data.company.id) !== -1}
                        onChange={e => props.add(data.company.id)}
                      />
                      Mark
                    </div>
                  </div>
                </Grid>
              </Grid>
            )
          }
        }}
      </Query>
    </div>
  )
}

export default  withStyles(styles)(Hoc(Detail));