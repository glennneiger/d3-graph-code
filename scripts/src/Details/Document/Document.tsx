import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import './Document.scss';

// import { Document } from 'react-pdf/dist/entry.webpack';

// pdf not found: http://localhost:8080/results/pma/P960042
// pdf found: http://localhost:8080/results/pma/P120009

class NovaDocument extends Component<{src: string}, {notFound: boolean}> {
  state = {notFound: false};

  componentDidMount() {
    fetchJsonp(this.props.src).catch(
      err => {
        // Time out usually indicates pdf, this is a hack
        if (err.message.indexOf('timed out') === -1) {
          console.log(err);
          this.setState({notFound: true});
        }
      },
    );
  }

  render() {
    const src = this.props.src.trim();
    if (src) {
      return (
        <div className="nova-document-container">
          {
            this.state.notFound ? (<a className="nova-document-not-found-blur" href={src}> 
            <p className="nova-document-not-found-blur-text">
              We cannot find the relevant PDF file for you. 
            </p>
          </a>) : null
          }
          <iframe src={src} style={{"width": "100%", "height": "800px"}} /> 
        </div>
      );
    }
    else {
      return <div>PDFs are not available for applications submitted before 2000.</div>;
    }
  }
}

export default NovaDocument;