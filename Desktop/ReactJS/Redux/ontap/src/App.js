import React, { Component } from 'react'
import './App.css';
import Taskform from './component/Taskform';
import SortList from './component/SortList';
import Search from './component/Search';
import _ from 'lodash';
import {connect} from 'react-redux';
import * as actions from './Redux/Action/Action'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  onJokerData = () => {
    var product = [
      {
        id: this.GeneratorID(),
        name: 'Iphone',
        status: true
      },
      {
        id: this.GeneratorID(),
        name: 'Samsung',
        status: false
      },
      {
        id: this.GeneratorID(),
        name: 'Nokia',
        status: true
      },
    ]
    localStorage.setItem('product', JSON.stringify(product));
  }
  
  // componentWillMount() {
  //   if (localStorage && localStorage.getItem('product')) {
  //     var product = JSON.parse(localStorage.getItem('product'));
  //     this.setState({
  //       product: product
  //     });
  //   }
  // }
  onOpenCloseForm = () => {
   this.props.onDisplay();
    // this.setState({
    //   display: !display
    // });
  }
  onEdit = (id) => {
    var product = this.state.product;
    var index = _.findIndex(product, (item) => {
      return (
        item.id == id
      )
    });
    var edit = product[index];
    this.setState({
      edit: edit
    });
  }
  onOpenForm = () => {
    this.setState({
      display: true
    })
  }
  render() {
    // if(sortby){
    //   product.sort((a,b)=>{
    //     if(a.name > b.name){
    //       return sortvalue;
    //     }
    //     else if(a.name <b.name){
    //       return -sortvalue;
    //     }
    //     else{
    //       return 0
    //     }
    //   });
    // }
    var {display}=this.props;
    let eledisplay = display ?
      <Taskform
      /> : '';
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h1>QUẢN LÍ CÔNG VIỆC</h1>
          </div>
          <div className={display ? 'col-lg-4' : ''}>
            {eledisplay}
          </div>
          <div className={display ? 'col-lg-8' : 'col-lg-12'}>
            <Search
              onJokerData={this.onJokerData}
              onOpenCloseForm={this.onOpenCloseForm}
              onResetForm={this.props.onResetForm}
            />
            <SortList
              onOpenForm={this.onOpenForm}
              onEdit={this.onEdit}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    display:state.DisplayForm
  }
};

const mapDispatchToProps=(dispatch,props)=>{
  return{
    onDisplay:()=>{
      dispatch(actions.display());
    },
    onResetForm:(product)=>{
      dispatch(actions.editItem(product))
  },
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(App)



