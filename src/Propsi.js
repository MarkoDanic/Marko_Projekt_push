import React from "react";
import pocket from "./pocket.jpeg";
import mascot from "./mascot.jpeg";
import physics from "./physics.jpeg";
import cico from "./cico.jpeg";
import taisuke from "./taisuke.jpeg";
import Lilou from "./Lilou.jpeg";
import hong10 from "./hong10.jpeg";
import kiddavid from "./kiddavid.jpeg";
import menno from "./menno.jpeg";
import theend from "./theend.jpeg";
import "./App.css";
import {Link} from "react-router-dom";
function Propsi({propsic1, propsic2, propsic3, propsic4, propsic5, propsic6, propsic7, propsic8, propsic9, propsic10}){
    return(
        <div class="App">
            <center>
                1. {propsic1.ime}<br/><img src={pocket} class="slika"></img><br/>
                2. { propsic2.ime}<br/><img src={mascot} class="slika"></img><br/>
                3. {propsic3.ime}<br/><img src={physics} class="slika"></img><br/>
                4. {propsic4.ime}<br/><img src={cico} class="slika"></img><br/>
                5. {propsic5.ime}<br/><img src={taisuke} class="slika"></img><br/>
                6. {propsic6.ime}<br/><img src={Lilou} class="slika"></img><br/>
                7. {propsic7.ime}<br/><img src={hong10} class="slika"></img><br/>
                8. {propsic8.ime}<br/><img src={kiddavid} class="slika"></img><br/>
                9. {propsic9.ime}<br/><img src={menno} class="slika"></img><br/>
                10. {propsic10.ime}<br/><img src={theend} class="slika"></img><br/>
                <Link to="/">Nazad na naslovnu</Link>
            </center>
        </div>
    );
}
export default Propsi;