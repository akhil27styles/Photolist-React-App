import React from 'react';
import { Route , Switch} from "react-router-dom";
import Photolist from "./Photolist";
import PhotoDetails from "./PhotoDetails";
import Prac from "./Prac";
function App() {
    return (
        <div>
            <section>
                <Switch>
                <Route exact path="/" component={Photolist}/>
                <Route path="/:PhotoDetails" component={PhotoDetails}/>
             </Switch>
            </section>
            {/* <Prac/> */}
        </div>
    );
}

export default App
