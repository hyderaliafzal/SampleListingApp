import React from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  } from '@material-ui/core';
import {Query} from 'react-apollo';
import { Link } from "react-router-dom";
import Hoc from './Hoc';
import {ALL_COMPANIES} from '../queries';
import placeholder from '../assets/placeholder.jpg';

class InteractiveList extends React.Component {
  render() {
    return (
      <div>
        <Query query={ALL_COMPANIES}
          variables={{before: "2017-10-04", after: "2000-01-01", first: 10, last: 10}}>
          {({data, error, loading}) => {
            if(loading) return <div>loading...</div>
            if(error) return <div>{error}</div>
            if(data){
              return (
                <div>
                  <List dense>
                    {data.allCompanies.edges.map(company => (
                      <Link to={`/detail/${company.node.id}`}>
                        <ListItem button>
                          <ListItemAvatar>
                            <Avatar src={placeholder}/>
                          </ListItemAvatar>
                          <ListItemText
                            primary={company.node.companyName}
                            secondary={`${company.node.opensAt}-${company.node.closesAt}`}
                          />
                        </ListItem>
                      </Link>
                      )
                    )}
                  </List>
                </div>
              )
            }
          }}
        </Query>
      </div>
    );
  }
}

export default Hoc(InteractiveList);