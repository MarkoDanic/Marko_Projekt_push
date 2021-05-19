import "./App.css";
import React, {Component} from "react";
import {Link} from "react-router-dom";
export class Upisi extends Component{ 
    state={
      ime: "",
      prezime: "",
      izvodacko_ime: "",
      e_mail: "",
    }
    onSubmit=e=>{e.preventDefault();console.log(this.state.ime,this.state.prezime,this.state.izvodacko_ime,this.state.e_mail,);document.getElementsByTagName("p")[0].innerText=this.state.ime;document.getElementsByTagName("p")[1].innerText=this.state.prezime;document.getElementsByTagName("p")[2].innerText=this.state.izvodacko_ime;}
    render(){ 
      return (
        <center>
          <div className="Upisi">
              <div className="Upisi1">
                  <form>
                      <h3>Prijavite se za sljedece natjecanje.</h3>
                      <textarea placeholder="ime" value={this.state.ime} onChange={e=>this.setState({ime: e.target.value})}></textarea><br/>
                      <textarea placeholder="prezime" value={this.state.prezime} onChange={e=>this.setState({prezime: e.target.value})}></textarea><br/>
                      <textarea placeholder="izvodacko ime" value={this.state.izvodacko_ime} onChange={e=>this.setState({izvodacko_ime: e.target.value})}></textarea><br/>
                      <textarea placeholder="e-mail" value={this.state.e_mail} onChange={e=>this.setState({e_mail: e.target.value})}></textarea><br/>
                      <button onClick={e=>this.onSubmit(e)}>Submit</button>
                      <p></p>
                      <p></p>
                      <p></p>
                      <Link to="/">Pocetna strana</Link>
                  </form> 
              </div>
          </div>
        </center>
      );
    }
}
  export default Upisi;