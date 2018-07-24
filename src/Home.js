import CaseList from './components/CaseList/CaseList';
import NewsItemList from './components/NewsItemList/NewsItemList';

export default ({ state }) => {

  return (
    

      <div class="row">

        <div class="col-sm">

          <div class="card mb-4">
            <CaseList />
          </div>

        </div>

        <div class="col-sm">

          
            <NewsItemList />
          
        </div>

      </div>


   
  );
};
