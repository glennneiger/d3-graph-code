import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import React, { Component } from 'react';

const sendDataToServer = (survey) => {
  survey.setValue('path', window.location.href);
  survey.sendResult('1088cb26-71a2-4491-83e3-66cd90dc3bad');
};

class SurveyComponent extends Component<{onComplete?: () => void}, {}> {
  componentWillMount() {    
    Survey.Survey.cssType = "bootstrap";
    Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
  }

  render() {
    var json = {
      completedHtml: "Thank you for giving us your feedback!",
      completeText: "Submit",
      elements: [
        {
          type: "comment",
          name: "comment",
          description: "Do you have any comments about how we can improve Nova Search?",
          isRequired: true,
          titleLocation: "hidden",
          placeHolder: "Do you have any comments about how we can improve Nova Search?"
        },
        {
          type: "text",
          name: "email",
          titleLocation: "hidden",
          inputType: "email",
          placeHolder: "Your email (optional)",
        },
      ],
    };
    return <Survey.Survey json={json} onComplete={this._onComplete} />;
  }

  _onComplete = (survey) => {
    sendDataToServer(survey);
    this.props.onComplete && this.props.onComplete();
  };
}

export default SurveyComponent;