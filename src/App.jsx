import './App.css';
import { tree,SearchForMutualFriends,userRecommendations }  from './BFS';
import React,{useEffect,useState} from 'react'


function App() {

  const[username,setUsername] = useState('');
  const[searchResult,setSearchResult] = useState('');
  const[userRecommendation,setUserRecommendation] = useState([]);

  const handleSubmit = (event) =>{
    setSearchResult(SearchForMutualFriends(tree,tree['Sagar'],username));
    event.preventDefault();
  }

  useEffect(()=>{
    setUserRecommendation(userRecommendations(tree,tree['Sagar']));
  },[]);

  
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">/|\ BFS</a>
        </div>
      </nav>
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 myInfoHolder">
          <img src="/Images/Sagar.png" alt="Sagar.png" className="profileImage" />
          <p className="mt-3 profileName">Sagar Parker</p>
          <img src="/Images/Friends.png" alt="Friends.png" />
        </div>
        <div className="col-8 mainDiv">
          <form onSubmit={handleSubmit} className="mt-3">
            <input type="text" name="username" required className="searchBox" placeholder="Enter a username to check if you have a mutual connection." 
              value={username} onChange={e=> setUsername(e.target.value)}/>
            <button type="submit" className="searchBtn">Search</button>
          </form>
          <h4 style={{margin:18}}>{searchResult}</h4>
          <div className="userRecommendation">
            <p style={{fontSize:20,color:'rgb(230, 230, 230)'}}>Sagar's Friend Recommendations</p>
            <div className="row">
              {userRecommendation.map(username =>{
                let imagePath = `/Images/${username}.png`;
                return(
                <div className="recommendationHolder col-2" key={username}>
                  <img src={imagePath} alt="UserImage" className="recommendationImages"/>
                  <p className="mt-1">{username}</p>
                </div>) 
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
     
    </div>
  );
}

export default App;
