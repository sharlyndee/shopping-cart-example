import React from 'react';
import './App.css';
import MenuItem from './MenuItem.js'
import shop from './shop.png'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      shopping: [
      {
      name: 'Cookie Monster',
      id: 1,
      picUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTozj45CuzZXk21cqq9CY_bPzJwMdElwge2SfG6KAt5B9ol2E5F&s',
      description: 'Blue lovable, eats only cookies and nothing else.',
      price: 10000,
      quantity: 1
    },
    {
      name: 'PS4',
      id: 2,
      picUrl:'http://pluspng.com/img-png/ps4-png-ps4-pro-png-1920.png',
      description: 'About to be obsolete due to the PS5. It came after the PS3',
      price: 18000,
      quantity: 9
    },
    {
      name: 'Airpods',
      id: 3,
      picUrl:'https://www.uicbookstore.org/images/product/medium/37705.png',
      description: 'White, innovative, expensive. apple',
      price: 10000,
      quantity: 6
    },
    {
      name: 'Seaver',
      id: 4,
      picUrl:'https://comet.dlsu.edu.ph/assets/png/profile/seaver_choy.jpg',
      description: 'Smort but his body is the best!',
      price: 10,
      quantity: 1
    }
  ],
  name:'',
  tempName: '',
  tempDescription: '',
  tempPrice:'',
  tempQuantity:'',
  pic: 'https://www.clipartwiki.com/clipimg/detail/111-1119782_shopping-transparent-gambar-logo-online-shop-png.png',


  }
}
  
handleChange=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
      
    }

  Increment=(id)=>{
    let addOne=[...this.state.shopping];
    let editArray = addOne.filter((item) => {
      return item.id === id
    })
    if (editArray.length > 0) {
      editArray[0].quantity += 1
    }
   this.setState({
    shopping: addOne
    })
 
   
  } 

  Decrement=(id)=>{
    let minusOne =[...this.state.shopping]
    let editMinus = minusOne.filter((item) => {
      return item.id === id
    })[0]

    editMinus.quantity-=1
    this.setState({
      shopping: minusOne
    })

  } 

  handleAdd =(e)=> { 
    e.preventDefault()
    const {tempName, tempDescription, tempPrice, tempQuantity, pic} =this.state
    console.log(tempName, tempDescription, tempPrice, tempQuantity)
    const newItem={id:this.state.shopping.length+1, name: tempName, description:tempDescription, price: tempPrice, quantity: tempQuantity, picUrl:pic}
    const temp = this.state.shopping
   this.setState({shopping:[...temp,newItem]}, console.log(this.state.shopping) )
  }
  render(){
    var subtotal=0;
    return (
      <div>
        
        <div class="container">
          <div>
            <div className="row border border-dark mt-3 p-2 text-center">
              <div className="col-sm-12">
                <h1>Add a new product</h1>
              </div>
              <div className="col-sm-2">
                <img src={shop} alt="" className="pic"></img>
              </div>
              <div className="col-sm-2">
                <input
                  type="text"
                  name="tempName"
                  placeholder="Product Name"
                  onChange={this.handleChange}
                  value={this.state.tempName}
                ></input>
              </div>
              <div className="col-sm-2">
                <input
                  type="text"
                  name="tempDescription"
                  placeholder="description"
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="col-sm-2">
                <input
                  type="text"
                  name="tempPrice"
                  placeholder="Price"
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="col-sm-2">
                <input
                  type="text"
                  name="tempQuantity"
                  placeholder="Quantity"
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="col-sm-2">
                <button type="button" onClick={this.handleAdd}>
                  Add
                </button>
              </div>
            </div>
          </div>
          {this.state.shopping.map(
            ({ name, id, picUrl, description, price, quantity }) => (
              <div>
                <MenuItem
                  key={id}
                  name={name}
                  pic={picUrl}
                  des={description}
                  price={price}
                  quantity={quantity}
                  Increment={this.Increment.bind(this, id)}
                  Decrement={this.Decrement.bind(this, id)}
                ></MenuItem>
                <div class="row">
                  <p>Price: {(subtotal += price * quantity)}</p>
                </div>
              </div>
            )
          )}

          <div class="row text-center mb-4">
            <div class="col-sm-12 text-center">
              <h1>Total:{subtotal}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
  }

export default App;
