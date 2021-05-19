import React from "react";
import {Link} from "react-router-dom";
import "./Headerr.css";

function Header() {
  return (
    <div className="App">
        <center>
            <h1>Breakdance</h1>
        </center>
        <div class="break1">
        <h3>Sto je to breakdance</h3>
        <p>Breakdance je ples koji spada pod umjetnost i sport. Mnogo se <br/><br/>
        ljudi bavi tim plesmon, no puno njih odustane jer treba mnogo<br/><br/>
        vremena da bi se uspjelo nesto u njemu. Najpoznatije natjecanje<br/><br/>
        breakdanca je RedBull BC1. Ovdje dolaze mnogi natjecatelji i <br/><br/>
        nastupaju u 1 na 1 bitkama. RedBull BC1 drzi i svjetska prvenstva.<br/><br/>
        Razvio se krajem 1970-ih u Bronxu i Harlemu.<br/><br/>
        </p>
        </div>
        <div class="break2">
          <h3>Razvoj</h3>
          <p>
          Tijekom razvijanja breakdancea i uključivanja bijelaca, nastao je <br/>
          sukob između službenog naziva za ples. "Breakdance" je komercijalni <br/>
          naziv. Da bi očuvali korijene hip-hop kulture, Breakdanceri se i <br/><br/>
          dalje nazivaju B-boyevima, a Breakdance nazivaju B-boying. <br/>
          Breakdance je ujedno i najmlađi od 4 elementa hip-hopa. Osoba koja <br/>
          se bavi ovom vrstom plesa, od zavisnosti svoga spola se naziva <br/><br/>
          B-Boy (muško) ili B-girl (žensko). Također se koriste i nazivi kao <br/>
          Flyboy, Flygirl, Breaker itd. Već rečeno, breakdance se razvio <br/>
          poslije DJ-inga, MC-inga i Graffiti Writera. Breakdanceri su težili <br/><br/>
          da ta vrsta plesa bude jedinstvena. U ples su ubačeni koraci <br/>
          (tj. Moves) i trikovi Kung-Fu vještine(Kipup, Airflare...), ili <br/>
          gimnastičarskih i atletskih vježbi i disciplina (Jazz Split, Flare),<br/><br/>
          ali najčešće i improvizacija (1990., 2000., Swipe...)...U <br/>
          Breakdance-u su se razvile i 2 nove grane: Popping i Locking. <br/>
          Osnovna grana Breakdance-a se naziva B-Boying.
          </p>
        </div>
        <center>
            <Link to="/klasaa">Link na upis</Link><br/>
            <Link to="/ljudi">Link na najbolje breakdancere</Link><br/>
            <Link to="/dnf">Link na Splitski breakdance klub</Link>
        </center>
    </div>
  );
}

export default Header;