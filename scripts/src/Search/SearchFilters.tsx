import './SearchFilters.scss';
import React, { ReactNode, PureComponent } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {Handle, Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import { changeAdvancedFilters, fetchSearchResults } from '../store/search/actions';
import { connect } from 'react-redux';
import { MEDICAL_SPECIALTY } from '../constants';
import SearchResultFields from './SearchResultFields';

function ListGroupSubItem(props: { title?: string, children: ReactNode }) {
  return (<div className="nova-list-group-sub-item flex-column align-items-start">
    <h6>{props.title}</h6>
    <div className="mb-1">
      {props.children}
    </div>
  </div>);
}

interface FilterInterfaceProps {
  label?: string,
  children?: ReactNode,
  tooltip?: string
}

interface FilterInterfaceState {
  open: boolean,
}

class Filter extends PureComponent<FilterInterfaceProps, FilterInterfaceState> {
  
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    this.setState({open: !this.state.open})
  }

  render() {
    const { label, children, tooltip } = this.props;
    const { open } = this.state;
    return (
      <div className="nova-filters-left-right">
        <div className='filter-head'>
          <div className="nova-filters-label">{label}</div>
          <div className='toggle-filter-container'>
            <i
              className={`toggle-filter fa ${open ? 'fa-minus-circle' :'fa-plus-circle'}`}
              onClick={this.onToggle}
            />
          </div>
        </div>
        <div className="nova-filters-input-wrapper">
          <span className="nova-filters-input">
            {open && children}
          </span>
          <Tooltip
            placement="left"
            overlay={tooltip}
            trigger={['click']}>
            <span></span>
          </Tooltip>
        </div>
        <div className="nova-filters-left-right-clearfix" />
      </div>
    );
  }
}

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      overlay={value}
      placement="top"
      visible={dragging}
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};


const mapStateToProps = state => ({
  ...state.search.advancedFilters,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (filters) => {
    dispatch(changeAdvancedFilters(filters));
    dispatch(fetchSearchResults());
  },
  onChangeWithoutRefreshing: (filters) => {
    dispatch(changeAdvancedFilters(filters));
  },
  refreshing: () => {
    dispatch(fetchSearchResults());
  },
});

interface SearchAdvancedFiltersProps extends SearchAdvancedFiltersState {
  onChange: (SearchAdvancedFiltersState) => void,
  onChangeWithoutRefreshing: (SearchAdvancedFiltersState) => void,
  refreshing: () => void,
}

function SearchFilters(props: SearchAdvancedFiltersProps) {
  return (
    <div>
      <SearchResultFields />
      <ListGroupSubItem>
        <div className='all-filters'>
          FILTER
        </div>
      </ListGroupSubItem>
      <ListGroupSubItem>
        <Filter label="Decision Year" tooltip="Decision Year Description">
          <Range min={1980} max={2018} value={[props.year_start, props.year_end]} handle={handle} 
            onChange={value => props.onChangeWithoutRefreshing({...props, year_start: value[0], year_end: value[1]})}
            onAfterChange={props.refreshing} />
        </Filter>
      </ListGroupSubItem>
      <ListGroupSubItem>
        <Filter label="Received Date" tooltip="Received Date Description">
          <Select
            name="medical_specialty"
            value={props.medical_specialty}
            onChange={value => props.onChange({...props, medical_specialty: value && value.value})}
            options={Object.keys(MEDICAL_SPECIALTY).map(
              key => ({value: MEDICAL_SPECIALTY[key], label: MEDICAL_SPECIALTY[key]}),
            )}
          />
        </Filter>
      </ListGroupSubItem>
      <ListGroupSubItem title="Premarket Applications">
        <Filter label="Risk Classification" tooltip="Risk Classification Description">
          <ToggleButtonGroup type="checkbox" value={props.device_class}
            onChange={value => props.onChange({...props, device_class: value})}>
            <ToggleButton value="1">1</ToggleButton>
            <ToggleButton value="2">2</ToggleButton>
            <ToggleButton value="3">3</ToggleButton>
            <ToggleButton value="U">U</ToggleButton>
            <ToggleButton value="N">N</ToggleButton>
            <ToggleButton value="f">f</ToggleButton>
          </ToggleButtonGroup>
        </Filter>
      </ListGroupSubItem>
      <ListGroupSubItem>
        <Filter label="Medical Specialties" tooltip="Medical Specialties Description">
          <ToggleButtonGroup type="checkbox" value={props.application_type}
            onChange={value => props.onChange({...props, application_type: value})}>
            <ToggleButton value="510k">510(k)</ToggleButton>
            <ToggleButton value="pma">PMA</ToggleButton>
            </ToggleButtonGroup>
        </Filter>
      </ListGroupSubItem>
      <ListGroupSubItem>
        <Filter label="Technology" tooltip="Technology Description">
          <ToggleButtonGroup type="checkbox" value={props.application_type}
            onChange={value => props.onChange({...props, application_type: value})}>
            <ToggleButton value="510k">510(k)</ToggleButton>
            <ToggleButton value="pma">PMA</ToggleButton>
            </ToggleButtonGroup>
        </Filter>
      </ListGroupSubItem>
      <ListGroupSubItem>
        <Filter label="Region" tooltip="Region Description">
          <ToggleButtonGroup type="checkbox" value={props.application_type}
            onChange={value => props.onChange({...props, application_type: value})}>
            <ToggleButton value="510k">510(k)</ToggleButton>
            <ToggleButton value="pma">PMA</ToggleButton>
            </ToggleButtonGroup>
        </Filter>
      </ListGroupSubItem>
      <ListGroupSubItem>
        <Filter label="Type" tooltip="Type Description">
          <ToggleButtonGroup type="checkbox" value={props.application_type}
            onChange={value => props.onChange({...props, application_type: value})}>
            <ToggleButton value="510k">510(k)</ToggleButton>
            <ToggleButton value="pma">PMA</ToggleButton>
            </ToggleButtonGroup>
        </Filter>
      </ListGroupSubItem>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilters);