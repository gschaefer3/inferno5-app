// src/components/Loading/Loading.js

import Component from 'inferno-component';
import './SearchResults.css';

class SearchResults extends Component {
    render(props) {
        let nameCriteria = props.criteria;
        let genderCriteria = props.gender;
        let dobCriteria = props.dob;
        let emailCriteria = props.criteria;
        let phoneCriteria = props.phone;
        return (
            <div class="collapse" id="results">
                name={nameCriteria}
                gender={genderCriteria}
                dob={dobCriteria}
                email={emailCriteria}
                phone={phoneCriteria}

                <table class="table table-sm table-striped table-hover mt-3 mb-4">
                    <thead class="thead-med">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Date of Birth</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><a href="user-profile.html">Andrews, Fred</a></td>
                            <td>Male</td>
                            <td>03/24/1977</td>
                            <td>fandrews@email.com</td>
                            <td>212-555-3334</td>
                        </tr>

                        <tr>
                            <td><a href="user-profile.html">Beverly, Donna</a></td>
                            <td>Female</td>
                            <td>02/15/1966</td>
                            <td>bev@email.com</td>
                            <td>212-444-7766</td>
                        </tr>


                    </tbody>
                </table>

                <nav aria-label="Pagination">
                    <ul class="pagination pagination-sm justify-content-center">
                        <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default SearchResults;
