import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SignupFormContainer from '../session_form/signup_form_container';

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    zIndex            : '100'
  },
  content : {
    position                   : 'absolute',
    top                        : '20%',
    left                       : '40%',
    right                      : 'auto',
    bottom                     : 'auto',
    border                     : '1px solid #ccc',
    background                 : '#444444',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'
  }
};

class SignupModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    if (this.props.bottomOfHome) {
      this.setState({modalIsOpen: true});
    }

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

    window.globalSignupModal = () => {
        this.setState({modalIsOpen: true});
      };

    window.globalSignupModal = window.globalSignupModal.bind(this);
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
    this.props.clearErrors();
  }

  openModal() {
    this.setState({ modalIsOpen: true });
    this.props.clearErrors();
  }


  render() {
    return (
      <div className="nav-button">
        <button onClick={this.openModal}>Create Account</button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Signup Modal">

          <SignupFormContainer />
        </Modal>
      </div>
    );
  }
}

export default SignupModal;
