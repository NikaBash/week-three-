import { Component } from "react";
import check from './check.jpg';
export class GroceryList extends Component {
    state = {
    userInput: "",
    groceryList: []
    }

    onChangeEvent(e) {
        this.setState ({userInput: e})
    }

    addItem(input) {
        if(input === "") {
            alert("Plase enter an item")
        } else {
            let ListArray = this.state.groceryList;
            ListArray.push(input);
            this.setState({groceryList: ListArray, userInput: ''})
        }
        
    }

    deleteItem(){
        let ListArray = this.state.groceryList;
        ListArray = [];
        this.setState({groceryList: ListArray})
    }

    clossedWord(event) {
        const li = event.target;
        li.classList.toggle("crossed");
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" placeholder="Wath do you want to buy today? " onChange={(e) => {this.onChangeEvent(e.target.value)}}
            value = {this.state.userInput}/>
            </div>
            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
            </div>
            <ul>
                {this.state.groceryList.map((item, index) => (
                    <li onClick={this.clossedWord} key= { index }> <img src={check} alt="check" width="40px" /> { item } </li>
                    ))}
            </ul>
            <div className="container">
                <button onClick={() => this.deleteItem()} className="btn delete">Delete</button>
            </div>
            </form>
            </div>
        )
    }
}