import React, { PureComponent } from 'react';
import './SearchResultFields.scss';

interface SearchResultFieldsProps {
    selectedField: string
}

export default class SearchResultFields extends PureComponent<{}, SearchResultFieldsProps> {

    constructor(props) {
        super(props);
        this.state = {selectedField: 'regulationNumbers'};
        this.toggleField = this.toggleField.bind(this);
    }

    toggleField(field: string) {
        this.setState({
            selectedField: field
        })
    }

    render() {
        const { selectedField } = this.state;
        return (
            <div className='search-result-fields-container'>
                <div>
                    <div
                        className={`field-label 
                            ${selectedField === 'regulationNumbers' ? 'selected' : ''}
                        `}
                        id='regulationNumbers'
                        onClick={(e: any) => this.toggleField(e.target.id)}
                    >
                        Regulation Numbers
                        <span
                            className='result-count'
                            style={{
                            backgroundColor: '#007aff',
                                right: selectedField === 'regulationNumbers' ? 20: 35
                            }}
                        >
                            12
                        </span>
                    </div>
                </div>
                <div>
                    <div className='dotted-border'></div>
                    <div
                        className={`field-label prod-code 
                            ${selectedField === 'prodCode' ? 'selected' : ''}
                        `}
                        id='prodCode'
                        onClick={(e: any) => this.toggleField(e.target.id)}
                    >
                        Product Codes
                        <span className='result-count' style={{backgroundColor: '#5856d6'}}>
                            29
                        </span>
                    </div>
                </div>
                <div>
                    <div className='dotted-border indented five-ten'></div>
                    <div
                        className={`field-label five-ten 
                            ${selectedField === 'fiveTen' ? 'selected' : ''}
                        `}
                        id='fiveTen'
                        onClick={(e: any) => this.toggleField(e.target.id)}
                    >
                        510K applications
                        <span className='result-count' style={{backgroundColor: '#ff9500'}}>
                            308
                        </span>
                    </div>
                </div>
                <div>
                    <div className='dotted-border indented pma-dotted'></div>
                    <div
                        className={`field-label pma-app 
                            ${selectedField === 'pmaApp' ? 'selected' : ''}
                        `}
                        id='pmaApp'
                        onClick={(e: any) => this.toggleField(e.target.id)}
                    >
                        PMA Applications
                        <span className='result-count' style={{backgroundColor: '#ff58b8'}}>
                            71
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
