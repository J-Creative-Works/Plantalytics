import React, {Component} from 'react';
import { connect } from 'react-redux';

import LocationCrops from './Loc-Crops';
import Messages from './Messages';
import Newsfeed from './Newsfeed';
import ProfilePic from './Profile-Pic';
import Settings from './Settings';
import UserNav from './User-Nav';

import Header from '../../Header';
import {getUser} from '../../../Actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.getUser = this.getUser.bind(this);
  }
  getUser(user){
    this.props.getUser(user);
  }

  render(){
    return (
      <div id="dashboard">
        <Header/>
        <h1>User Name</h1>
        <UserNav/>
        <ProfilePic/>
        <Settings/>
        <LocationCrops/>
        <Newsfeed/>
        <Messages/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    state
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: id => {
      dispatch(getUser(id))
    }
  }
}

const ConnectedDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default ConnectedDashboard;
