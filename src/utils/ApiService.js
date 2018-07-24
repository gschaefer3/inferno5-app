// src/utils/ApiService.js

const _baseUrlDino = 'http://localhost:3001/api/';
// const _baseUrlCase = 'http://localhost:3001/api/';
const _baseUrlCase = 'https://my.api.mockaroo.com/mpi_cases.json?key=8e2bc210';
// const _baseUrlNews = 'http://localhost:3001/api/';
const _baseUrlNews = 'https://my.api.mockaroo.com/mpi_news.json?key=8e2bc210';


// GET list of all dinosaurs from API
function getDinoList() {
  return fetch(`${_baseUrlDino}dinosaurs`)
    .then(_verifyResponse, _handleError);
}

// GET a dinosaur's detail info from API by ID
function getDino(id) {
  return fetch(`${_baseUrlDino}dinosaur/${id}`)
    .then(_verifyResponse, _handleError);
}

// GET list of all dinosaurs from API
function getCaseList() {
 return fetch(`${_baseUrlCase}`) 
    .then(_verifyResponse, _handleError);
}


// GET list of all dinosaurs from API
function getNewsList() {
  return fetch(`${_baseUrlNews}`)
    .then(_verifyResponse, _handleError);
  
}



// Verify that the fetched response is JSON
function _verifyResponse(res) {
  let contentType = res.headers.get('content-type');
  if (contentType && contentType.indexOf('application/json') !== -1) {
    return res.json();
  } else {
    _handleError({ message: 'Response was not JSON'});
  }
}

// Handle fetch errors
function _handleError(error) {
  console.error('An error occurred:', error);
  throw error;
}

// Export ApiService
const ApiService = { getDinoList, getDino, getCaseList, getNewsList };
export default ApiService;
