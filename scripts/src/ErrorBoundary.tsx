import React from 'react';
import Raven from "raven-js";

interface ErrorState {
  error: any,
};

export default class ErrorBoundary extends React.Component<{}, ErrorState> {
  constructor(props) {
      super(props);
      this.state = { error: null };
  }

  componentDidCatch(error, errorInfo) {
      this.setState({ error });
      Raven.captureException(error, { extra: errorInfo });
  }

  render() {
    if (this.state.error) {
        //render fallback UI
        return (
            <div className="snap alert alert-warning m-4 p-4">
              <p>We're sorry — something's gone wrong.</p>
              <p>Our team has been notified, but we are glad to hear your report!</p>
              <button className="btn" onClick={() => Raven.lastEventId() && Raven.showReportDialog()}>Send us a more detailed bug report</button>
            </div>
        );
    } else {
        //when there's not an error, render children untouched
        return this.props.children;
    }
  }
}