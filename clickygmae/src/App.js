import React, {Component} from "react";
// import ImageCard from "./components/ImageCard";
import Title from "./components/Title";
import Wrapper from "./components/Wraper";
import Image from "./Images.json";
import "./App.css";

class App extends Component{
  state = {
    Image
  };

removeImage = id => {
const Image = this.state.Image.filter(Image => Image.id !== id);

this.setState({Image});

};

render(){
  return(
    <Wrapper>
      <title>{Title}</title>
      {this.state.Image.map(Image =>(
        <Image
        removeImage={this.removeImage}
        id={Image.id}
        key={Image.id}
        name={Image.name}
        image={Image.image}
        />
      ))}
      </Wrapper>
  );
      }
        }


        export default App;