// src/components/Loading/Loading.js

import Component from 'inferno-component';
// import loading from './raptor-loading.gif';
import loading from './SkinnySeveralAsianlion.gif';
import './Loading.css';

class Loading extends Component {
  render(props) {
    let itemLoading = props.item;
    return(
      <div className="Loading">
        {
          !props.error ? (
            <div>
              Loading {itemLoading} ...<br/>
              <img className="Loading-img" src={loading} alt="Loading..." height='100' width='100'/>
            </div>
          ) : (
            <p className="alert alert-danger"><strong>Error:</strong> Could not retrieve data.</p>
          )
        }
      </div>
    );
  }
}

export default Loading;
