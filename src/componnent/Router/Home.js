import { Component } from "react";
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import '../../App.css'
import HomeItem from './HomeItem'

class Home extends Component{
  state = {isLoader:false,updateData:[]}

  componentDidMount(){
    this.getHomeData()
  }

  getHomeData = async () =>  {
  
    const respnse = await fetch("https://apis.ccbp.in/blogs")
    const data = await respnse.json();
    this.setState({updateData:data, isLoader:false} )
  }
  
  render() {
    const {updateData} = this.state
    const {isLoader} = this.state
    return (
      <div className="parent-grid">
          {isLoader ? (
          // <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          <p>Loading...</p>
        ) :
          (updateData.map(eachItem => (
            <HomeItem updateData={eachItem} key={eachItem.id} />
          )))}
      </div>
  )
  }
}


// const Home = () => (
//     <div className="home-container">
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
//         alt="home"
//         className="home-img"
//       />
//       <h1 className="home-heading">Home</h1>
//     </div>
//   )
  
  export default Home