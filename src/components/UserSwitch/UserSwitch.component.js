import React from 'react';
import Switch from 'react-toggle-switch'

export class UserSwitchComponent extends React.Component {
  constructor(props) {
    super();
console.log('@@@', props.auth)
    this.state = {
      admin: this.isAdmin(props.auth.userType)
    };

    this.actions = {};
    this.actions.setUserType = props.setUserType;

    this.isAdmin = this.isAdmin.bind(this);
    this.toggleUserType = this.toggleUserType.bind(this);
  }

  isAdmin(userType) {
    return userType === 'admin';
  }

  toggleUserType() {
    const newUserType = this.state.admin
      ? 'user'
      : 'admin';

    this.setState({
      admin: this.isAdmin(newUserType)
    });

    this.actions.setUserType(newUserType);
  }

  render() {
    return (
      <div>
        <Switch onClick={this.toggleUserType} on={this.state.admin}/>
      </div>
    )
  };
}
