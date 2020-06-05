import React from 'react';

class Button extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      const { onClick } = this.props;
      const { name } = this.props;
      return onClick(name);
    }
    render(){

        return(
            <button type="button" onClick={this.handleClick}>{this.props.name}</button>
        )
        
    }
}
    



export default Button