import React, { Component } from 'react'

export default class Class extends Component {
    state={
        searchInput:""
    }
    onSearchInput=event=>{
        this.setState({
            searchInput:event.target.value
        })
    }
    render() {
        const {inputS}=this.state
        return (
            <div>
       <input type='text' 
       onChange={this.OnSearchInput}
       value={inputS}/>
      
      </div>
    )
  }
}
