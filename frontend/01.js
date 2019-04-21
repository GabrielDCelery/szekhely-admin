

window.alx_dynamic_form_config = {
  "targetGroups": {
    "parent": 8,
    "children": []
  },
  "plugins": {
    "urlLookup": {
      "id": "id_field_relationship_name"
    },
    "uniqueId": {
      field: 'id_field_reference_number',
      separator: '.',
      components: [{
        type: 'field',
        id: 'id_sites_field_site_id'
      }, {
        type: 'date',
        format: 'ddmmyy'
      }]
    }
  },
  "template": "default",
  "styling": {
    "colours": {
      "simple": {
        "primary": "#073846",
        "secondary": "#1f6d95"
      },
      "detailed": {
        "groups": {
          "heading": {
            "background": '#1e6d95'
          }
        }
      }
    }
  },
  "structure": {
    "groups": [{
      "id": "site_information",
      "fields": [
        "id_field_relationship_name",
        "id_document_analysis_field_lease_reference"
      ],
      "children": [{
        "id": "site_information_details",
        "fields": [
          "id_sites_field_site_id",
          "id_sites_field_site_address",
          "id_sites_field_site_city",
          "id_sites_field_site_county",
          "id_sites_field_site_post_code",
        ]
      }]
    }, {
      "id": "submitter_details",
      "fields": [
        "id_field_first_name",
        "id_field_last_name",
        "id_field_email_address",
        "id_field_company_name",
        "id_field_job_title"
      ],
      "children": []
    }, {
      "id": "request_details",
      "fields": [
        "id_field_document_type",
        "id_field_leasing_document_template",
        "id_field_project_description"
      ],
      "children": []
    }, {
      "id": "landlord_information",
      "fields": [
        "id_field_landlord_name",
        "id_field_ll_address_line_1",
        "id_field_ll_city",
        "id_field_ll_county",
        "id_field_ll_post_code"
      ],
      "children": []
    }, {
      "id": "terms",
      "fields": [],
      "children": [{
        "id": "terms_change_to_lease",
        "fields": [
          "id_field_any_change_to_the_lease_term",
          "id_field_how_long_is_the_renewal"
        ]
      }, {
        "id": "terms_renewal_rights",
        "fields": [
          "id_field_any_renewal_rights",
          "id_field_no_renewal_of"
        ]
      }, {
        "id": "terms_monthly_rent",
        "fields": [
          "id_field_any_change_to_the_monthly_rent_amount",
          "id_field_total_change_to_the_monthly_rent_amount"
        ]
      }, {
        "id": "terms_back_rent",
        "fields": [
          "id_field_any_back_rent",
          "id_field_total_back_rent_owed"
        ]
      }, {
        "id": "terms_revenue_share",
        "fields": [
          "id_field_any_revenue_share",
          "id_field_revenue_share_commencement_criteria"
        ]
      }, {
        "id": "terms_other_feecosts",
        "fields": [
          "id_field_are_there_other_feescosts",
          "id_field_other_feescosts_detail"
        ]
      }]
    }, {
      "id": "documents",
      "fields": [
        "id_field_existing_contract_document"
      ],
      "children": [{
        "id": "documents_extra",
        "fields": [
          "id_field_do_you_have_additional_documents_if_so_how_many",
          "id_field_document_1",
          "id_field_document_2",
          "id_field_document_3",
          "id_field_document_4",
          "id_field_document_5"
        ]
      }]
    }, {
      "id": "comments",
      "fields": [
        "id_field_do_you_need_to_contact_the_legal_department",
        "id_field_send_a_message_to_the_legal_team",
        "id_field_send_a_message_to_the_submitter"
      ],
      "children": []
    }],
    "pages": [{
      "id": "site_information",
      "label": "Site Information"
    }, {
      "id": "submitter_details",
      "label": "Submitter Details"
    }, {
      "id": "request_details",
      "label": "Request Details"
    }, {
      "id": "landlord_information",
      "label": "Landlord Information"
    }, {
      "id": "terms",
      "label": "Terms"
    }, {
      "id": "documents",
      "label": "Documents"
    }, {
      "id": "comments",
      "label": "Comments"
    }]
  },
  "content": {
    "page": {
      "logo": "https://www.autologyx.com/sites/default/files/ALX_logonostrap-R-350x96.png",
      "title": "New Lease"
    },
    "single": {
      "fields": {
        "id_field_relationship_name": {
          "label": "Reference No."
        },
        "id_sites_field_site_id": {
          "label": "ID:"
        },
        "id_sites_field_site_address": {
          "label": "Address:"
        },
        "id_sites_field_site_city": {
          "label": "City:"
        },
        "id_sites_field_site_county": {
          "label": "County:"
        },
        "id_sites_field_site_post_code": {
          "label": "Post Code:"
        },
        "id_field_project_description": {
          "label": "Description:"
        },
        "id_field_landlord_name": {
          "label": "Name:"
        },
        "id_field_ll_address_line_1": {
          "label": "Address Line 1:"
        },
        "id_field_ll_city": {
          "label": "City:"
        },
        "id_field_ll_county": {
          "label": "County:"
        },
        "id_field_ll_post_code": {
          "label": "Post Code:"
        },
        "id_field_project_description": {
          "helperText": "Please ensure you have selected the appropriate Template as incorrect information will slow down the process. If your project needs additional information to be shared please also give us some details."
        }
      },
      "groups": {
        "site_information_details": {
          "heading": "Site Details"
        },
        "terms_change_to_lease": {
          "heading": "Lease Terms"
        },
        "terms_renewal_rights": {
          "heading": "Renewal Rights"
        },
        "terms_monthly_rent": {
          "heading": "Monthly Rent"
        },
        "terms_back_rent": {
          "heading": "Back Rent"
        },
        "terms_revenue_share": {
          "heading": "Revenue Share"
        },
        "terms_other_feecosts": {
          "heading": "Other Fees/Costs"
        },
        "documents_extra": {
          "heading": "Extra documents"
        }
      }
    },
    "multiple": {
      "fields": {
        "types": [{
          "type": "textarea",
          "config": {
            "rows": 7
          },
          "ids": [
            "id_field_other_feescosts_detail",
            "id_field_send_a_message_to_the_legal_team",
            "id_field_send_a_message_to_the_submitter",
            "id_field_project_description"
          ]
        }]
      }
    }
  },
  "state": {
    "single": {
      "fields": {
        "id_document_analysis_field_lease_reference": {
          "default": {
            "visible": false,
            "alwaysSubmit": true
          }
        },
        "id_field_how_long_is_the_renewal": {
          "default": {
            "visible": false
          },
          "other": [{
            "visible": true,
            "conditions": [{
              "target": "id_field_any_change_to_the_lease_term",
              "values": ["Yes"]
            }]
          }]
        },
        "id_field_no_renewal_of": {
          "default": {
            "visible": false
          },
          "other": [{
            "visible": true,
            "conditions": [{
              "target": "id_field_any_renewal_rights",
              "values": ["Yes"]
            }]
          }]
        },
        "id_field_total_change_to_the_monthly_rent_amount": {
          "default": {
            "visible": false
          },
          "other": [{
            "visible": true,
            "conditions": [{
              "target": "id_field_any_change_to_the_monthly_rent_amount",
              "values": ["Yes"]
            }]
          }]
        },
        "id_field_total_back_rent_owed": {
          "default": {
            "visible": false
          },
          "other": [{
            "visible": true,
            "conditions": [{
              "target": "id_field_any_back_rent",
              "values": ["Yes"]
            }]
          }]
        },
        "id_field_revenue_share_commencement_criteria": {
          "default": {
            "visible": false
          },
          "other": [{
            "visible": true,
            "conditions": [{
              "target": "id_field_any_revenue_share",
              "values": ["Yes"]
            }]
          }]
        },
        "id_field_other_feescosts_detail": {
          "default": {
            "visible": false
          },
          "other": [{
            "visible": true,
            "conditions": [{
              "target": "id_field_are_there_other_feescosts",
              "values": ["Yes"]
            }]
          }]
        },
        "id_field_document_1": {
          "default": {
            "visible": false
          },
          "other": [{
            "visible": true,
            "conditions": [{
              "target": "id_field_do_you_have_additional_documents_if_so_how_many",
              "values": ["1", "2", "3", "4", "5"]
            }]
          }]
        },
        "id_field_document_1": {
          "default": {
            "visible": false
          },
          "other": [{
            "visible": true,
            "conditions": [{
              "target": "id_field_do_you_have_additional_documents_if_so_how_many",
              "values": ["1", "2", "3", "4", "5"]
            }]
          }]
        },
        "id_field_document_2": {
          "default": {
            "visible": false
          },
          "other": [{
            "visible": true,
            "conditions": [{
              "target": "id_field_do_you_have_additional_documents_if_so_how_many",
              "values": ["2", "3", "4", "5"]
            }]
          }]
        },
        "id_field_document_3": {
          "default": {
            "visible": false
          },
          "other": [{
            "visible": true,
            "conditions": [{
              "target": "id_field_do_you_have_additional_documents_if_so_how_many",
              "values": ["3", "4", "5"]
            }]
          }]
        },
        "id_field_document_4": {
          "default": {
            "visible": false
          },
          "other": [{
            "visible": true,
            "conditions": [{
              "target": "id_field_do_you_have_additional_documents_if_so_how_many",
              "values": ["4", "5"]
            }]
          }]
        },
        "id_field_document_5": {
          "default": {
            "visible": false
          },
          "other": [{
            "visible": true,
            "conditions": [{
              "target": "id_field_do_you_have_additional_documents_if_so_how_many",
              "values": ["5"]
            }]
          }]
        },
        "id_field_send_a_message_to_the_legal_team": {
          "default": {
            "visible": false
          },
          "other": [{
            "visible": true,
            "conditions": [{
              "target": "id_field_do_you_need_to_contact_the_legal_department",
              "values": ["Yes"]
            }]
          }]
        },
        "id_field_send_a_message_to_the_submitter": {
          "default": {
            "visible": false
          },
          "other": [{
            "visible": true,
            "conditions": [{
              "target": "id_field_do_you_need_to_contact_the_legal_department",
              "values": ["Yes"]
            }]
          }]
        }
      },
      "groups": {
      }
    }
  }
}