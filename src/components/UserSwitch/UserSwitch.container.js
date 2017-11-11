import { connect } from 'react-redux';

import { UserSwitchComponent } from './UserSwitch.component';
import { authActions } from '../../redux/auth/index';

export const UserSwitchContainer = connect(
  function mapStateToProps(state) {
    return {
      auth: state.auth
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      setUserType: (userType) => {
        dispatch(authActions.setUserType(userType))
      }
    };
  }
)(UserSwitchComponent);
