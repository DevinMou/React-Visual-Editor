import React, { Component,createElement } from 'react';
import './App.css';

class ActionComponet extends Component {
  render(){
      return (<BaseModule {...this.props}/>)
  }
}
class App extends Component {
  constructor(props){
      super(props);
      this.state={
          originalData: {
              tag: 'div',
              props: {style:'background:red'},
              events: null,
              children: 'hello'
          }
      };
  }
  render() {
    return (
      <div className="App">
        <div className="Tool"></div>
        <div id="WorkSpace">
            <ActionComponet {...this.state.originalData}/>
        </div>
      </div>
    );
  }
}
class BaseModule extends Component {
  render() {
     const _props=Object.assign({},this.props,this.props.events)
     const _children=typeof this.props.children==='object'?this.props.children.map(val=><BaseModule {...val}/>):this.props.children
     return createElement(this.props.tag,_props,_children)
  }
}

export default App;
