import React from 'react';
import './style.css';



class Background extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedColor : 'select color'
        }
    }


    changeBackgroundColor = (event) =>{
       this.setState({
           selectedColor: event.target.value
       })
 
    };

    render = () =>{
        return(
            <div style={{
                backgroundColor : this.state.selectedColor
            }}className="background" >
                
                <div className="play">
                    <h1>Color picker</h1>
                <div className="Inner-content">
                    <h1>Choose a color</h1>
                    <input onChange={this.changeBackgroundColor} type="color" />
                    <p> {this.state.selectedColor}</p>
                </div>
                </div>
            </div>
            );
    }
     
}
export default Background;