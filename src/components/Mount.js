import React from 'react';

class Mount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color:'green'
        }
    }
    componentDidMount(){ 
        setTimeout(()=>{
            this.setState({
                color:'red'
            });
        },5000)
    }
  render() {
        return (
            <div>
                <p style={{
                    color: this.state.color
                }}>
                    Good Morning Mount
                </p>
            </div>
        )
  }
}

export default Mount;
