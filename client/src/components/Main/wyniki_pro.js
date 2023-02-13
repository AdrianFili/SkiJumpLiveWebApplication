import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Czy_admin from "./czy_admin"
import styles from "./styless.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Skoki = props => (
  <tr>
    <td>{props.skoki.pozycja}</td>
    <td>{props.skoki.belka}</td>
    <td>{props.skoki.kraj}</td>
    <td>{props.skoki.nota}</td>
    <td>{props.skoki.nr_zaownika}</td>
    <td>{props.skoki.odleglosc}</td>
    <td>{props.skoki.punkty}</td>
    <td>{props.skoki.wiatr}</td>
    <td>{props.skoki.zawodnik}</td>
  </tr>
)

export default class Wyniki_pro extends Component {
  constructor(props) {
    super(props);

    this.deleteSkok = this.deleteSkok.bind(this)

    this.state = {skoki: []};
  }

  componentDidMount() {
    const token = localStorage.getItem("token")
    const config = {
        url: 'http://localhost:8080/api/userlist/detail',
        headers: { 'Content-Type': 'application/json', 'x-access-token': token }
    }
    axios.get('http://localhost:8080/api/userlist/wyniki2', config)
      .then(response => {
        console.log(response.data)
        this.setState({ skoki: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteSkok(id) {
    const token = localStorage.getItem("token")
    const config = {
        url: 'http://localhost:8080/api/userlist/detail',
        headers: { 'Content-Type': 'application/json', 'x-access-token': token }
    }
    axios.delete('http://localhost:8080/api/userlist/delete'+ config, id)
      .then(response => { console.log(response.data)});

    this.setState({
        skoki: this.state.skoki.filter(el => el._id !== id)
    })
  }

  SkiList() {
    return this.state.skoki.map(currentskoki => {
      return <Skoki skoki={currentskoki} deleteSkok={this.deleteSkok} key={currentskoki._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Wyniki skoków narciarskich live:
        <Czy_admin />
        </h3>
        <table className="table" border="1px" variant="dark">
          <thead className="thead-light">
            <tr>
              <th>pozycja</th>
              <th>belka</th>
              <th>kraj</th>
              <th>nota</th>
              <th>nr_zaownika</th>
              <th>odleglosc</th>
              <th>punkty</th>
              <th>wiatr</th>
              <th>zawodnik</th>
            </tr>
          </thead>
          <tbody>
            { this.SkiList() }
          </tbody>
        </table>
      </div>
    )
  }
}