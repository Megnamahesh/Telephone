import React,{ Component } from 'react';
 
class Telephone extends Component{
  constructor(){
    super();
    this.state = {
      telephonedata: [],
      title: 'Telephone directory application',
      counter: 0,

    
    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

  }

  removeTodo(index){
    console.log(index);
    let telephonedata = this.state.telephonedata;
    let data = telephonedata.find(function(data){
      return data.counter === index;
    })
    telephonedata.splice(data, 1);
    this.setState({
      telephonedata: telephonedata
    })
  }


  addTodo(event){
    event.preventDefault();
    let name = this.refs.name.value;
    let phone = this.refs.phone.value;
    let address = this.refs.address.value;
    let counter = this.state.counter;


    let data = {
      name,
      phone,
      address,
      counter
    };
     counter+=1;
    let telephonedata = this.state.telephonedata;
    telephonedata.push(data);
    this.setState ({
      telephonedata: telephonedata,
      counter: counter
    });

    this.refs.todoForm.reset();
  }
  render(){
    let title = this.state.title;
    let telephonedata = this.state.telephonedata;
    return(
 <div>
 <h1>{title}</h1>
   <form ref="todoForm">
      <label>Name</label>
     <input type="text" ref="name" placeholder="Enter name"/>
     <label  style={{marginLeft:10}}>Phone No</label>
     <input type="number" ref="phone" style={{marginLeft:10}} placeholder="Enter Phone no"/>
     <label  style={{marginLeft:10}}> Address</label>
     <input type="text" ref="address" style={{marginLeft:10}} placeholder="Enter address"/>
     <button onClick={this.addTodo} style={{marginLeft:10}}>Add todo </button>
   </form>
<ul> 
{telephonedata.map((data => < li key={data.counter}>{data.name} {data.phone} {data.address}
<button onClick={this.removeTodo.bind(null,data.counter)}>Remove</button>

 </li>))}

</ul>
  </div>
);
}
}

export default Telephone;
