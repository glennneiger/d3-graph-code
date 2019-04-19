import fetch from "cross-fetch";
import {retryPromise} from "src/utils";

declare const ENDPOINT_URL: string;

export const fetchDetailStart = () => ({
  type: 'FETCH_DETAIL_START',
});

export const selectDetailTab = (tabLabel: string) => ({
  type: 'SELECT_DETAIL_TAB',
  tabLabel,
});


export const fetchDetailSuccess = (result, detail_header) => ({
  type: 'FETCH_DETAIL_SUCCESS',
  result,
  detail_header
});

export function fetchProductCodeData(product_code) {
  let adverseTypeCondition = "Initial submission";
  return dispatch => {
    dispatch(fetchDetailStart());
    retryPromise(
      () => Promise.all([
        fetch(`${ENDPOINT_URL}/product_code/${product_code}`).then(data => data.json()),
        fetch(`${ENDPOINT_URL}/510k/list?product_code=${product_code}&project=application_length,date_received,device_class,device_name,applicant,k_number,decision_date&aggregate=year`).then(data => data.json()),
        fetch(`${ENDPOINT_URL}/pma/list?product_code=${product_code}&supplement_number=&project=application_length,date_received,decision_date,trade_name,generic_name,pma_number&aggregate=year`).then(data => data.json()),
        fetch(`${ENDPOINT_URL}/recall/list?product_code=${product_code}&project=root_cause_description,event_date_terminated&aggregate=root_cause_description,root_cause_description%7Cyear`).then(data => data.json()),
        fetch(`${ENDPOINT_URL}/device_event/list?product_code=${product_code}&type_of_report=${adverseTypeCondition}&project=adverse_event_flag,event_type&aggregate=adverse_event_flag,device_operator,event_type%7Cyear`).then(data => data.json())
      ]),
      data => {
        let detail_header = {"id": product_code, "type": "Product Code", "title": data[0].item.device_name};
        dispatch(fetchDetailSuccess(data, detail_header));
      },
      err => console.log('error.', err),
    );
  }
}
export function fetchRegulationNumberData(regulation_number) {
  return dispatch => {
    dispatch(fetchDetailStart());
    retryPromise(
      () => Promise.all([
        fetch(`${ENDPOINT_URL}/regulation_number/${regulation_number}`).then(data => data.json()),
        fetch(`${ENDPOINT_URL}/510k/list?regulation_number=${regulation_number}&project=product_code,date_received,application_length,device_class&aggregate=product_code,application_length,year,product_code%7Cyear`).then(data => data.json()),
        fetch(`${ENDPOINT_URL}/pma/list?regulation_number=${regulation_number}&project=product_code,date_received,application_length,device_class&aggregate=product_code,application_length,year,product_code%7Cyear`).then(data => data.json()),
        fetch(`${ENDPOINT_URL}/product_code/list?regulation_number=${regulation_number}&project=product_code,device_class,medical_specialty_description,device_name`).then(data => data.json()),
      ]),
      data => {
        let detail_header = {"id": regulation_number, "type": "Regulation Number", "title": regulation_number};
        dispatch(fetchDetailSuccess(data, detail_header));
      },
      err => console.log('error.', err),
    );
  }
}
export function fetchFive10KData(k_number) {
  return dispatch => {
    dispatch(fetchDetailStart());
    let results = [];
    retryPromise(
      () => Promise.all([
        fetch(`${ENDPOINT_URL}/510k/${k_number}`).then(data => data.json())
      ])
      .then(data => {
        results = data;
      })
      .then(e => fetch(`${ENDPOINT_URL}/510k/list?product_code=${results[0].item.product_code}&aggregate=application_length`)).then(data => data.json()),
      (data: Array<any>) => {
        results.push(data);
        let detail_header = {"id": k_number, "type": "510(K)", "title": results[0].item.device_name};
        dispatch(fetchDetailSuccess(results, detail_header));
      },
      err => console.log('error.', err),
    );
  }
}
export function fetchPMAData(pma_number) {
  return dispatch => {
    dispatch(fetchDetailStart());
    let results = [];
    retryPromise(
      () => Promise.all([
        fetch(`${ENDPOINT_URL}/pma/${pma_number}`).then(data => data.json()),
        fetch(`${ENDPOINT_URL}/pma/list?pma_number=${pma_number}&project=supplement_type,application_length,date_received,decision_date,pma_number,supplement_number,supplement_reason&aggregate=year,pma_number`).then(data => data.json())
      ])
      .then(data => {
        results = data;
      })
      .then(e => fetch(`${ENDPOINT_URL}/pma/list?product_code=${results[0].item.product_code}&supplement_number=&aggregate=application_length`)).then(data => data.json()),
      (data: Array<any>) => {
        results.push(data);
        let detail_header = {"id": pma_number, "type": "PMA", "title": results[0].item.trade_name};
        dispatch(fetchDetailSuccess(results, detail_header));
      },
      err => console.log('error.', err),
    );
  }
}