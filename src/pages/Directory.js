import React, { Component } from "react";
import API from "../utils/API";
import SearchBar from "../components/SearchBar";
import Container from "../components/Container";



class Directory extends Component {
    state = {
      search: "",
      employees: [],
      error: "",
      order: "up"
    }

  componentDidMount() {
      API.getEmployees().then(res => {
          this.setState({
            employees: res.data.results
          })
          console.log(this.state.employees)
      })
  }

  orderChange = () => {
    const { order } = this.employees;
    let nextOrder;

    if (order === "down") {
      nextOrder = "up";
    } else if (order === "up") {
      nextOrder = "down";
    } 

    this.setState({ order: nextOrder });
    console.log(this.state.order);
  };
  
  formatDOB = dob => {
    let year = dob.slice(0,4);
    let month = dob.slice(5,7);
    let day = dob.slice(8,10);
    
    let newDate = month + "/" + day + "/" + year;
    return newDate;
  };
  
  formatName = (first, last) => {
      let FullName = first + " " + last;
      return FullName;
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value});
      if (event.target.value.length > 0) {
        let searchArray = this.state.employees.filter(items => {
          return items.name.first.toUpperCase().includes(event.target.value.toUpperCase()) 
          || items.name.last.toUpperCase().includes(event.target.value.toUpperCase())
        });
          this.setState({ searchResults: searchArray});
          console.log(searchArray)
      }
        else {
          this.setState({ searchResults: [] });
        }
  }

  showEmployees = () => {
    if (this.state.searchResults != null) {
      return this.state.searchResults.map((item) => {
        return (
          <tr key={item.id.value}>
            <td><img src={item.picture.thumbnail} alt="headshot" /></td>
            <td>{this.formatName(item.name.first, item.name.last)}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>{this.formatDOB(item.dob.date)}</td>
          </tr> 
          )
      }) 
    }
      else {
        return this.state.employees.map((item) => {
          return (
            <tr key={item.id.value}>
              <td><img src={item.picture.thumbnail} alt="headshot" /></td>
              <td>{this.formatName(item.name.first, item.name.last)}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{this.formatDOB(item.dob.date)}</td>
            </tr> 
            )
        }) 
    }
  }

  render() {
    return (
      <Container>
        <SearchBar 
        onChange={this.handleInputChange}
        >
        </SearchBar>
        <table className="table"> 
          <thead className="thead-light">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            {this.showEmployees()}
          </tbody>
        </table>    
      </Container>
    )
  }
}

export default Directory;
