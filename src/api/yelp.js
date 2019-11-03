import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer Jzn3LfWa_N43tnne_u5ZYwb9Uc1jAQfgQDw4vARkhs2gZXtt2cjiTSifZT8t5P1uRG6Nup5dXoObgLWIcpwrVm8CS4FuK0GX00lP-pR2chIpMlfE0sw2U9V9S0y1XXYx'
  }
});

//we can use axios directly to make network request.
// !!! alternatively we can create an instance of it that has some preset options assigned,
// so this is how we're going to get some amount of code reuse

//yelp.get(/search) if we ever want to make a request to either that search rout or to
//some particular businessid - we would just call Yelp instance with which we are going 
//to import into some other file and we would do a get request (yelp.get) and then 
// like search ('/search').
//So it just saves us having to write out the entire URL inside that yelp.get() like so 
//yelp.get('https://api.yelp.com/v3/businesses').