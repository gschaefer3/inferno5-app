// src/components/CaseList/CaseList.js

import Component from 'inferno-component';
import ApiService from './../../utils/ApiService';
import Loading from './../Loading/Loading';
import './CaseList.css';



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
    return (
      <div>
        { cases ? (
           <div>
            <div class="card-body">
              <h5 class="card-title">Customer Service Cases</h5>
              <table class="table table-sm table-striped table-hover">
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
                  {/* <tr>
                    <td class="text-center" colspan="4">Viewing 5 of X</td>
                  </tr> */}
                </tbody>
              </table>
              {/* <div class="text-right small"><a href="#">View All <i class="fas fa-arrow-alt-circle-right fa-lg ml-1"></i></a></div> */}
           </div>
         </div>
        ) : (<Loading item="Cases"/>)}
      </div>

    );
  }
}

export default DinoList;


