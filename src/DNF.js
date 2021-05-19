import React from "react";
import {Link} from "react-router-dom";
import dnf from "./DNFlogo.jpeg";
import "./App.css";
import vagi from "./bagi.png";
import flex from "./flex.png";
function DNF(){
    return(
        <center>
            <div class="App">
                <img src={dnf}></img><br/>
                <p>Splitski plesni studio D'N'F' stoji za "Dancin n Fun".<br/>
                Lokacija kluba je 21000, Ul. Jurja Šižgorića 20, 21000, Split.<br/>
                Kao tema ove stranice D'N'F' je breakdance i hip-hop plesni klub no sadrzi mnoge razne aktivnosti kao sto su:<br/>
                zumba, djecje zabave, vlastiti show...<br/>
                Ponosni vlasnit kluba Vangel Likusevski je ujedino i prvak jugoslavije u hip-hopu.<br/>
                <img src={vagi}></img><br/>
                No Vangel nije jedini trener u D'N'F'-a. Tu imamo i trenera breakdancea Marka Sarajc-Budiju.<br/>
                <img src={flex}></img><br/>
                </p>
            <Link to="/">Nazad na povratnu</Link>
        </div>
        </center> 
    );
}
export default DNF;