import React, { Component } from 'react';
import axios from 'axios';
import styles from "./styless.module.css";
import { useState } from "react"

const token = localStorage.getItem("token")
const config = {
    url: 'http://localhost:8080/api/userlist/detail',
    headers: { 'Content-Type': 'application/json', 'x-access-token': token }
}

export default class Update extends Component {
    
    constructor(props) {
        super(props);

        this.onChangefirstName = this.onChangefirstName.bind(this);
        this.onChangelastName = this.onChangelastName.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/userlist/update3', config)
          .then(response => {
            this.setState({
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                email: response.data.email,
            })   
          })
          .catch(function (error) {
            console.log(error);
          })
      }
  

  onChangefirstName(e) {
    this.setState({
        firstName: e.target.value
    })
  }

  onChangelastName(e) {
    this.setState({
        lastName: e.target.value
    })
  }

  onChangeemail(e) {
    this.setState({
        email: e.target.value
    })
  }

  onChangepassword(e) {
    this.setState({
        password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
    }

    console.log(exercise);

    const url = "http://localhost:8080/api/userlist/update";
    const headers = { 'Content-Type': 'application/json', 'x-access-token': token }
      axios.post(url, exercise, {headers : headers})
      .then(res => console.log(res.data), window.alert("Dane użytkownika zostały zaktualizowane"));
  }
 
  render() {
    return (
    <div className={styles.form_container}>
      <h3>Edytuj dane konta: </h3>
      
      <form onSubmit={this.onSubmit}>
      <table>
      <tr>
      <td>
          <label>Podaj imię: </label>
          </td>
          <td>
          <input  type="text"
              required
              className={styles.input}
              value={this.state.firstName}
              onChange={this.onChangefirstName}
              />
        </td>
        </tr>
        <tr>
        <td>
          <label>Podaj nazwisko: </label>
          </td>
          <td>
          <input  type="text"
              required
              className={styles.input}
              value={this.state.lastName}
              onChange={this.onChangelastName}
              />
        </td>
        </tr>
        <tr>
          <td>
          <label>Podaj email: </label>
          </td>
          <td>
          <input 
              type="text" 
              className={styles.input}
              value={this.state.email}
              onChange={this.onChangeemail}
              />
              </td>
        </tr>
        
        <tr>
          <td>
            <input type="submit" value="Uaktualnij profil" className="btn btn-primary" />
          </td>

        </tr>
        </table>
      </form>
      
    </div>
    )
  }
}