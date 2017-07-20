import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import LoginFormContainer from '../session_form/login_form_container';

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'absolute',
    zIndex                     : '100',
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

class LoginModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

    window.globalOpenModal = () => {
        this.setState({modalIsOpen: true});
      };
      window.globalOpenModal = window.globalOpenModal.bind(this);
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
    this.props.clearErrors();
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }


  render() {
    return (
      <div className="nav-button">
        <button onClick={this.openModal}>Sign In</button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Login Modal">

          <LoginFormContainer />
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
