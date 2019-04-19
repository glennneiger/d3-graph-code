interface DetailsState  {
  result: any;
  loading: boolean;
  error: any;
  detail_header: any;
}

interface IResult510K {
  "applicant": string,
  "statement_or_summary": string,
  "expedited_review_flag": string,
  "postal_code": string,
  "country_code": string,
  "decision_date": string,
  "product_code": string,
  "city": string,
  "date_received": string,
  "state": string,
  "address_1": string,
  "advisory_committee_description": string,
  "review_advisory_committee": string,
  "third_party_flag": string,
  "decision_description": string,
  "decision_code": string,
  "clearance_type": string,
  "device_name": string,
  "advisory_committee": string,
  "contact": string,
  "k_number": string,
  "address_2": string,
  "zip_code": string,
  "regulation_number": string,
  "year": number,
  "application_length": number,
  "pdf_link": string,
  "pdf_links": {
    "summary": string
  },
  "links": {
    "fda": string,
    "pdf_links": {
      "summary": string
    }
  }
}

interface IResultPMA {
  "applicant": string,
  "supplement_number": string,
  "fed_reg_notice_date": string,
  "decision_date": string,
  "product_code": string,
  "city": string,
  "zip": string,
  "pma_number": string,
  "generic_name": string,
  "state": string,
  "date_received": string,
  "trade_name": string,
  "expedited_review_flag": string,
  "supplement_reason": string,
  "advisory_committee_description": string,
  "zip_ext": string,
  "street_1": string,
  "street_2": string,
  "docket_number": string,
  "decision_code": string,
  "advisory_committee": string,
  "supplement_type": string,
  "ao_statement": string,
  "regulation_number": string,
  "year": number,
  "application_length": number,
  "pdf_links": {
    "approval_order": string,
    "summary_safety": string,
    "C": string
  },
  "links": {
    "pma": string,
    "pdf_links": {
      "approval_order": string,
      "summary_safety": string,
      "C": string
    }
  }
}

interface IResultProductCode {
  "definition": string,
  "implant_flag": string,
  "review_code": string,
  "gmp_exempt_flag": string,
  "third_party_flag": string,
  "regulation_number": string,
  "device_class": string,
  "medical_specialty": string,
  "device_name": string,
  "life_sustain_support_flag": string,
  "review_panel": string,
  "submission_type_id": string,
  "medical_specialty_description": string,
  "product_code": string,
  "unclassified_reason": string,
  "PHYSICALSTATE": string,
  "TARGETAREA": string,
  "TECHNICALMETHOD": string
}