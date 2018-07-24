// src/components/Loading/Loading.js

import Component from 'inferno-component';
// import ApiService from '../../utils/ApiService';
// import Loading from '../Loading/Loading';
import './NewsItem.css';

class NewsItem extends Component {

  render(props) {
    let title = props.title;
    let article = props.article;
    let articleDate = props.articleDate;
    return (
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          {articleDate ? (
            <p class="card-subtitle mb-3 text-muted small">As of {articleDate}</p>
          ): (<div/>) }
          
          <p class="card-text">{article}</p>
        </div>
      </div>
    );
  }
}

export default NewsItem;
