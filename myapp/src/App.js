import './App.css';
import {Component} from 'react';

class App extends Component{
  state = {
    tasks:[],
  }
  addtext=(event)=>{
    let taskDesc = event.target.value;
    this.setState({tasks:[this.state.tasks],taskDesc})
    event.target.reset();
    };
  
  

  render(){
    let TaskList = this.state.tasks.map((task,index) => {
      return <li key={index}>{task}</li>;
    });
    return(
      <div>
        <form onSubmit={this.addtext}>
          <input type='text' name='todotasks'></input>
          <button type='submit'>add to do</button>
          <ul>{TaskList}</ul>
        </form>

      </div>
      
    )
  }
}
export default App;
