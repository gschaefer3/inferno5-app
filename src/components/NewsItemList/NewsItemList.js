// src/components/NewsList/NewsList.js

import Component from 'inferno-component';
import ApiService from './../../utils/ApiService';
import Loading from './../Loading/Loading';
import './NewsItemList.css';
import NewsItem from './../NewsItem/NewsItem';

const xyz = (
  <div>abc</div>
)

class NewsItemList extends Component {
  constructor() {
    super();

    // Set default loading state to false
    this.state = {
      loading: false,
      newsItems: null
    };

    // GET list of news items from API
    ApiService.getNewsList()
      .then(
        res => {
          // Set state with fetched news items list
          this.setState({
            newsItems: res.news
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
    let newsItems = state.newsItems;
    return (
      <div>
        {newsItems ? (
          <div>
            {
              newsItems.map((newsItem) => (
                <NewsItem id={newsItem.id} title={newsItem.name} article={newsItem.article} articleDate={newsItem.articleDate} />
              ))
            }
          </div>
        ) : (<Loading item="News Items" />)}
      </div>

    );
  }
}

export default NewsItemList;


