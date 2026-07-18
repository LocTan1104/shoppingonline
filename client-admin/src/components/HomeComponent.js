import  { Component } from 'react';
import home_img from '../assert/image/slide1.jpg'
class Home extends Component {
  render() {
    return (
      <div className="align-center">
        <h2 className="text-center">ADMIN HOME</h2>
        <img 
          src={home_img} 
          width="800px" 
          height="600px" 
          alt="" 
        />
      </div>
    );
  }
}
export default Home;