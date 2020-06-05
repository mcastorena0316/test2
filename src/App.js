import React from 'react';
import Button from './component/Button'
import Display from './component/Display'
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      total: 0
    }
  }

   onClick=(name)=> {
     if (name ==='Add') {
       this.setState({
       total: this.state.total+1
       })
     } else if (name ==='Substract') {
      this.setState({
        total: this.state.total-2
        })
     } else if (name ==='Divide') {
      this.setState({
        total: this.state.total/3
        })
      }else if (name ==='Reset') {
        this.setState({
          total: 0
        })

   }
  }

  render() {
  return (
    <div className="App">
      <Button name={'Add'}  onClick={this.onClick}/>
      <Button name={'Substract'} onClick={this.onClick}/>
      <Button name={'Divide'} onClick={this.onClick}/>
      <Button name={'Reset'} onClick={this.onClick}/>
      <Display total={this.state.total} />
    </div>
  );
  }
}

export default App;
