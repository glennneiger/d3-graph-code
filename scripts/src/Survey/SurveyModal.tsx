import React, { Component } from 'react';
import Modal from 'react-modal';
import Survey from './Survey';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 300,
  },
  content : {
    top                   : 'calc(40% + 50px)',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  }
};

class SurveyModal extends Component<{}, {shown: boolean}> {
  state = {shown: false};
  _onClose = () => this.setState({ shown: false });
  show = () => this.setState({shown: true});

  render(){
    return (
      <div>
        <Modal
          isOpen={this.state.shown}
          onRequestClose={this._onClose}
          contentLabel="Send us feedback"
          style={customStyles}
          appElement={document.body}
        >
          <h2>Send us feedback</h2>
          <button type="button" className="close" aria-label="Close" onClick={this._onClose}> <span aria-hidden="true">×</span></button>
          <Survey onComplete={() => setTimeout(this._onClose, 1500)} />
        </Modal>
      </div>
    )
  }
}

export default SurveyModal;