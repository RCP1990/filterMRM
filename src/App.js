import React, { Component } from 'react';
import './App.css';
import Button from './button';
import Accordion from './accordion';

class App extends Component {
  constructor() {
    super()
    this.initialState = {
      array1 : ['tidy','dust','panoramic','songs','straight','replace','eyes','quartz','downtown','lying','maid','equable','plant','better','spoil','childlike','activity','tease','creature','knit' ],
      open: true, 
      a: false,
      r: false,
      t: false,
    }
    this.state = this.initialState;
 }

filterWord = (e) => {
  let copyarr = this.state.array1.filter(word => word.includes(e.target.value) === false) 
  this.setState({array1 : copyarr, [e.target.value] : true});
};

reset = (e) => {
  this.setState(this.initialState);
};

showAccordion = () => {
      this.setState({ open: !this.state.open })  
  };

  render() {
    const {array1, open, a, r, t,} = this.state;
    return (
      <div>
        <header></header>
        <div className={'container'}>
          <div className={'blurb'}>
            Use the buttons below to filter words in the list. 
          </div>

          <div className={'row'}>
            <div className={'col onehalf'}></div>
            <div className={'col two'}>
              <Button className={'btn dark'} onClick={this.filterWord} value="a" clicked={a} />
            </div>
            <div className={'col two'}>
              <Button className={'btn dark'} onClick={this.filterWord} value="r" clicked={r} />
            </div>
            <div className={'col two'}>
              <Button className={'btn dark'} onClick={this.filterWord} value="t" clicked={t} />
            </div>
            <div className={'col three'}>
              <Button className={'btn rouge'} onClick={this.reset} value="Reset List" clicked={false} />
            </div>
          </div>

          <div className={'col twelve'} >
            <Accordion 
              open={open}
              array1={array1}
              showAccordion={this.showAccordion}
            />
          </div>

         </div>
      </div>
    );
  }
}

export default App;
