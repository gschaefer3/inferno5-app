import { version, Component } from 'inferno';
import './registerServiceWorker';
import Logo from './logo';
import './App.css';
import auth0 from 'auth0-js';
import Home from './Home';
import Search from './components/Search/Search';

import Login from './components/Login/Login';
import User from './components/User/User';
import Loading from './components/Loading/Loading';
import { BrowserRouter, Route, Link } from 'inferno-router';
import { linkEvent } from 'inferno';

const HomeApp = () => (
  <Home state={this.state} />
);

const SearchApp = () => (
  <Search />
);

const AboutApp = () => (
  <div>
      <h2>About</h2>
  </div>
);

const TopicApp = ({ match }) => (
  <div>
      <h3>{match.params.topicId}</h3>
  </div>
);

const TopicsApp = ({ match }) => (
  <div>
      <h2>Topics</h2>
      <ul>
          <li>
              <Link to={`${match.url}/rendering`}>
                  Rendering with React
        </Link>
          </li>
          <li>
              <Link to={`${match.url}/components`}>
                  Components
        </Link>
          </li>
          <li>
              <Link to={`${match.url}/props-v-state`}>
                  Props v. State
        </Link>
          </li>
      </ul>

      <Route path={`${match.url}/:topicId`} component={TopicApp} />
      <Route exact path={match.url} render={() => (
          <h3>Please select a topic.</h3>
      )} />
  </div>
);

// This functional component wrapper make sure vNodes are re-created when needed
const AllRoutes = () => {
  return (
    <div>
    <Route exact path="/" component={HomeApp} />
    <Route path="/search" component={SearchApp} />
    </div>


      // <div>
      //     <ul>
      //         <li><Link to="/">Home</Link></li>
      //         <li><Link to="/search">Search</Link></li>
      //         <li><Link to="/about">About</Link></li>
      //         <li><Link to="/topics">Topics</Link></li>
      //     </ul>
      //     <hr />
      //     <Route exact path="/" component={HomeApp} />
      //     <Route path="/search" component={SearchApp} />
      //     <Route path="/about" component={AboutApp} />
      //     <Route path="/topics" component={TopicsApp} />
      // </div>
  );
}

const MyWebsite = () => (
  <BrowserRouter>
      <AllRoutes />
  </BrowserRouter>
);


function logOut(instance) {
  // Remove token and profile from state
  // (using instance passed in by linkEvent to preserve "this" context)
  instance.setState({
    idToken: null,
    profile: null
  });

  // Remove token and profile from localStorage
  localStorage.removeItem('id_token');
  localStorage.removeItem('access_token');
  localStorage.removeItem('profile');
}


class App extends Component {
  constructor() {
    super();
  
    // Create Auth0 WebAuth instance
    this.auth0 = new auth0.WebAuth({
      clientID: 'j0EX0IvNAIE20qxo3Am0SLP80bD0cTy5',
      domain: 'multiplan.auth0.com'
    });

    // Initial authentication state:
    // check for existing token and profile
    this.state = {
      idToken: localStorage.getItem('id_token'),
      profile: JSON.parse(localStorage.getItem('profile'))
    };

  }
  componentDidMount() {
    

    // When Auth0 hash parsed, get profile
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.idToken && authResult.accessToken) {
        // Use access token to retrieve user's profile and set session
        // If you wanted to protect API requests, you'd use the access token to do so!
        // For more information, please see: https://auth0.com/docs/api-auth/grant/implicit
        this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
          window.location.hash = '';

          // Save tokens and profile to state
          this.setState({
            idToken: authResult.idToken,
            profile: profile
          });

          // Save tokens and profile to localStorage
          localStorage.setItem('id_token', this.state.idToken);
          // access_token should be used to protect API requests using an Authorization header
          localStorage.setItem('access_token', this.state.accessToken);
          localStorage.setItem('profile', JSON.stringify(profile));
        });
      }
    });

   
  }
  

  render(props, state) {
    return (
      <div className="App">
        <header className="App-header text-white clearfix">
          <div className="App-auth pull-right">
            {
              !state.idToken ? (
                <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                
                <Login auth0={this.auth0} />
                </nav>
              ) : (
                <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    Menu <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active"><a class="nav-link" href="/">Home</a></li>
                      <li class="nav-item"><a class="nav-link" href="search">Search</a></li>
                    </ul>
                    <span class="navbar-text text-right"><User profile={state.profile} />
                    <span style="margin-right:10px;"/>
                    <a
                                    className="App-auth-loggedIn-logout"
                                    onClick={linkEvent(this, logOut)}>Sign Out</a></span>
                  </div>
                </nav>
                // <div className="App-auth-loggedIn">
                //   <User profile={state.profile} />
                //   <a
                //     className="App-auth-loggedIn-logout"
                //     onClick={linkEvent(this, logOut)}>Log Out</a>
                // </div>
              )
            }
            </div>
          {/* <h1 className="text-center">Dinosaurs</h1> */}
        </header>
        <div className="App-content container-fluid">
          <div className="row">
            {
              state.idToken ? (
                <MyWebsite/>
              ) : (
               null
              )
            }
          </div>
        </div>
      </div>

     
    );
  }
}

export default App;
