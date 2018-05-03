// Code React
import React from 'react';
import Citation from './Citation'
import Inscription from './Inscription'
import citations from '../citations';//Quand fichier js, pas besoin de dire .js à la fin.

class App extends React.Component {

    state = {};

    componentWillMount() {
        this.generateCitation();
    }

    generateCitation = event => {
        // Transforme l'objet en array
        const keyArray = Object.keys(citations);
        // Va chercher une clé au hasard dans l'objet
        const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
        if (this.state.citation === citations[randomKey].citation) {
            this.generateCitation();
            return;
        }
        this.setState(citations[randomKey]);
    };

    render() {
        return (
            <div>
                {/* <Citation details={this.state}/> */}
                <Inscription />
                <button onClick={e => this.generateCitation(e)}> Inscription</button>
            </div>
        )
    }


}

export default App;