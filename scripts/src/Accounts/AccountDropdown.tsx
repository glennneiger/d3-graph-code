import React from 'react';
import DropdownMenu from 'react-dd-menu';
import 'react-dd-menu/src/scss/react-dd-menu.scss';
import SurveyModal from '../Survey/SurveyModal';

interface AccountDropdownProps {
  picture: string,
  name: string,
  logout: () => void,
  surveyModel: SurveyModal,
};

interface AccountDropdownState {
  isMenuOpen: boolean,
};

class AccountDropdown extends React.Component<AccountDropdownProps, AccountDropdownState> {

  constructor(props: AccountDropdownProps) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggle = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  close = () => {
    this.setState({ isMenuOpen: false });
  }

  handleLogout = () => {
    this.props.logout();
  }

  handleFeedback = () => {
    this.props.surveyModel && this.props.surveyModel.show();
  }

  render () {
    return (
      <DropdownMenu 
        isOpen={this.state.isMenuOpen} 
        close={this.close}
        toggle={
          <a onClick={this.toggle}>
            <img className="account-dropdown-avatar" src={this.props.picture} alt={this.props.name} />
          </a>
        }
        align="right">
          <li>
            <a className="account-dropdown-logout" href="#" onClick={this.handleLogout}>
                Log out
            </a>
          </li>
      </DropdownMenu>
    );
  }
}

export default AccountDropdown;