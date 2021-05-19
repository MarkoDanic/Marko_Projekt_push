import React from "react";
import Propsi from "./Propsi";

function Ljudi(){
    let plesac1 = {
        ime: "B-boy Pocket",
    }
    
    let plesac2 = {
        ime: "B-boy Mascot",
    }
    
    let plesac3 = {
        ime: "B-boy Physics",
    }
    
    let plesac4 = {
        ime: "B-boy Cico",
    }
    
    let plesac5 = {
        ime: "B-boy Taisuke",
    }
    
    let plesac6 = {
        ime: "B-boy Lilou",
    }
    
    let plesac7 = {
        ime: "B-boy Hong 10",
    }
    
    let plesac8 = {
        ime: "B-boy Kid David",
    }
    
    let plesac9 = {
        ime: "B-boy Menno",
    }
    
    let plesac10 = {
        ime: "B-boy The End",
    }
    return(
        <div class="App">
            <Propsi propsic1={plesac1} propsic2={plesac2} propsic3={plesac3} propsic4={plesac4} propsic5={plesac5} 
             propsic6={plesac6} propsic7={plesac7} propsic8={plesac8} propsic9={plesac9} propsic10={plesac10}>
             </Propsi>
        </div>
    );
}
export default Ljudi;