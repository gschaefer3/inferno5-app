/* src/components/Search/Search.js */
import './Search.css';
import SearchResults from '../SearchResults/SearchResults';

export default ({ state }) => {

    return (
        <main role="main" class="container-fluid">
            {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous" /> */}

            <h1 class="page-title">User Search</h1>

            <form>
                <div class="form-row">
                    <div class="form-group col-md-2">
                        <label for="lastname" class="small">Last Name</label>
                        <input type="text" class="form-control form-control-sm" id="lastname" />
                    </div>

                    <div class="form-group col-md-2">
                        <label for="firstname" class="small">First Name</label>
                        <input type="text" class="form-control form-control-sm" id="firstname" />
                    </div>

                    <div class="form-group col-md-1">
                        <label for="gender" class="small">Gender</label>
                        <input type="text" class="form-control form-control-sm" id="gender" />
                    </div>

                    <div class="form-group col-md-1">
                        <label for="dob" class="small">DOB</label>
                        <input type="text" class="form-control form-control-sm" id="dob" />
                    </div>

                    <div class="col-md-1 pt-4">
                        <button type="button" class="btn btn-sm btn-secondary" data-toggle="collapse" data-target="#results"><i class="fa fa-search fa-lg"></i> Search</button>
                    </div>
                </div>
            </form>

            <SearchResults />

        </main>


    )
}
