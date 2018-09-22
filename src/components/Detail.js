import React from 'react';
import Hoc from './Hoc';
import {Grid, Paper, Checkbox} from '@material-ui/core';
import placeholder from '../assets/placeholder.jpg';
import {COMPANY} from '../queries'
import { Query } from 'react-apollo';
import {add} from "../redux/actions";
import {connect} from "react-redux";
import store from '../redux/store';

class Detail extends React.Component {
  state = {
    CheckList: []
  };

  setCheckList = () => {
    this.setState({
      CheckList: this.props.CheckList
    })
  };

  componentWillMount(){
    this.setState({
      CheckList: this.props.CheckList
    });
    store.subscribe(() => this.setCheckList())
  }

  render() {
    const {match, add} = this.props;
    const id = match.params.id;
    return (
      <div style={{padding: 10}}>
        <Query query={COMPANY} variables={{id: id}}>
          {({data, error, loading}) => {
            if (loading) return <div>loading...</div>
            if (error) return <div>{error}</div>
            if (data) {
              return (
                <Grid container spacing={24}>
                  <Grid item xs={12} sm={12} md={6} xl={6}>
                    <Paper>
                      <img src={placeholder} height="100%" width="100%"/>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} xl={6}>
                    <div>
                      <div>
                        Name: {data.company.companyName}
                      </div>
                      <div dangerouslySetInnerHTML={{__html: `Description: ${data.company.description}`}}/>
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
                          checked={this.state.CheckList.indexOf(data.company.id) !== -1}
                          onClick={e => add(data.company.id)}
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
}

const mapStateToProps = ({CheckList}) => {
  return {
    CheckList: CheckList
  }
};

const mapDispatchToProps = dispatch => ({
  add: (id) => dispatch(add(id)),
});

export default  connect(mapStateToProps, mapDispatchToProps)(Hoc(Detail));