import React, { Component } from "react";
import Modal from 'react-modal';
import history from "./history";

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 300,
  },
  content: {
    overflow: 'none',
    "max-width": "800px",
    "margin": "auto"
  }
};

class HelpModal extends Component<{}, { shown: boolean }> {
  constructor(props) {
    super(props);
    this.state = {
      shown: true
    };
  }
  onClose() {
    // this.setState({ shown: false });
    history.goBack();
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.shown}
          onRequestClose={() => this.onClose()}
          contentLabel="Help"
          style={customStyles}
          appElement={document.body}
        >
          <h2 className="text-center">
            Getting Started with Anora
            <button type="button"
              className="close"
              aria-label="Close"
              onClick={() => this.onClose()}>
              <span aria-hidden="true">×</span>
            </button>
          </h2>
          <iframe src="https://docs.google.com/document/d/e/2PACX-1vRfQ3CUBWV4PpkHGjrkvIsRk0tSnb2-6Dx98hZh1DEY41jxoYhCwZvfX_fSFM5eVCJS5L8MOcKPFaJw/pub?embedded=true"
            frameBorder="0"
            style={{ "width": "100%", "height": "100%" }}
          ></iframe>
        </Modal>
      </div>
    )
  }
}

export default HelpModal;