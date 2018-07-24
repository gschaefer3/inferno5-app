// src/components/CaseList/CaseList.js

import Component from 'inferno-component';
import ApiService from './../../utils/ApiService';
import Loading from './../Loading/Loading';
import './CaseList.css';
import SpicyDatatable from 'spicy-datatable';

const customFilter = (rows, columns, searchQuery = '') => {
  // custom logic filter –> looks for match of the searchQuery in the name field only
  return rows.filter(row => row.provider_name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1);
};

const customOptions = {
  itemsPerPageOptions: [5, 10, 15, 20, 25, 30],
  itemsPerPageLabel: 'Items per page:',
  nextPageLabel: '>',
  previousPageLabel: '<',
  searchLabel: 'Search: ',
  searchPlaceholder: 'Enter search text…',
  noEntriesLabel: 'No Entries.',
  entryCountLabels: ['Displayed: ', 'to', 'of', 'entries.'],
  showDownloadCSVButton: true,
  downloadCSVButtonLabel: 'Download .csv',
  customFilter
};

const columns = [{
  key: 'created_on',
  label: 'Created On',
}, {
  key: 'case_number',
  label: '#',
}, {
  key: 'inquiry_type',
  label: 'Inquiry Type',
}, {
  key: 'provider_name',
  label: 'Provider',
},
];


class DinoList extends Component {
  constructor() {
    super();

    // Set default loading state to false
    this.state = {
      loading: false
    };

    // GET list of dinosaurs from API
    ApiService.getCaseList()
      .then(
        res => {
          // Set state with fetched dinos list
          this.setState({
            cases: res.cases
          });
        },
        error => {
          // An error occurred, set state with error
          this.setState({
            error: error
          });
        }
      );

  }

  render(props, state) {
    let cases = state.cases;
    let tableKey = "casesTable";

    return (
      <div>
        {cases ? (
          <div>

            <div class="card-body">
              <h5 class="card-title">Customer Service Cases</h5>
              <SpicyDatatable
                tableKey={tableKey} // see below for prop documentation
                columns={columns}
                rows={cases}
                config={customOptions} // optional, used to override chosen default settings/labels
              />
              {/* <table class="table table-sm table-striped table-hover">
                <thead class="thead-med">
                  <tr>
                    <th scope="col">Created On</th>
                    <th scope="col">Case #</th>
                    <th scope="col">Inquiry Type</th>
                    <th scope="col">Provider</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cases.map((caseItem) => (
                      <tr key={caseItem.id}>
                        <td>{caseItem.created_on}</td>
                        <td>{caseItem.case_number}</td>
                        <td>{caseItem.inquiry_type}</td>
                        <td>{caseItem.provider_name}</td>

                      </tr>
                    ))
                  }
                 
                </tbody>
              </table> */}

            </div>
          </div>
        ) : (<Loading item="Cases" />)}
      </div>

    );
  }
}

export default DinoList;


