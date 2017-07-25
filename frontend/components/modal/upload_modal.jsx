import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import UploadFormContainer from '../upload/upload_form_container';

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
    width                      : '625px',
    top                        : '20%',
    left                       : '20%',
    right                      : 'auto',
    bottom                     : 'auto',
    border                     : '1px solid #ccc',
    background                 : '#444444',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    paddingTop                 : '50px'
  }
};

class UploadModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      songId: undefined
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

    window.globalUploadModal = (songId) => {
      if (songId) {
        this.setState({ songId });
      }
      this.setState({modalIsOpen: true});
    };

    window.globalUploadModal = window.globalUploadModal.bind(this);
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
        <button onClick={this.openModal}>Upload</button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Upload Modal">

          <UploadFormContainer songId={this.state.songId} closeModal={this.closeModal}/>
        </Modal>
      </div>
    );
  }
}

export default UploadModal;
