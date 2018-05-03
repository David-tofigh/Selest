import React from 'react';

class Inscription extends React.Component {

    verifyPasswordConformity = event => {
        let password = document.getElementById("password").value;
        let majusculeDOM = document.getElementById("majuscule");
        let minusculeDOM = document.getElementById("minuscule");
        let chiffreDOM = document.getElementById("chiffre");
        let longueurDOM = document.getElementById("longueur");
        var majuscule  = new RegExp("(?=.*[A-Z])");
        var minuscule = new RegExp("(?=.*[a-z])");
        var chiffre = new RegExp("(?=.*[0-9])")
        var longueur = new RegExp(".{8,}$")
        console.log(password);
        if(majuscule.test(password)) majusculeDOM.style.color = "green"; else majusculeDOM.style.color = "red"
        if(minuscule.test(password)) minusculeDOM.style.color = "green"; else minusculeDOM.style.color = "red"
        if(chiffre.test(password)) chiffreDOM.style.color = "green"; else chiffreDOM.style.color = "red"
        if(longueur.test(password)) longueurDOM.style.color = "green"; else longueurDOM.style.color = "red";
        if(majuscule.test(password)&& minuscule.test(password) && chiffre.test(password) && longueur.test(password)){
            return true;
        }
    };

    showConformity = event =>{
        document.getElementById("majuscule").innerText = "Au moins une majuscule";
        document.getElementById("majuscule").style.color = "red";
        document.getElementById("minuscule").innerText = "Au moins une minuscule";
        document.getElementById("minuscule").style.color = "red";
        document.getElementById("chiffre").innerText = "Au moins un chiffre";
        document.getElementById("chiffre").style.color = "red";
        document.getElementById("longueur").innerText = "Au moins 8 caractères";
        document.getElementById("longueur").style.color = "red";
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <p></p>
                    <label>
                        Password:
                        <input type="password" name="password" 
                            onChange={e => this.verifyPasswordConformity(e)} 
                            onFocus={e =>this.showConformity(e)} 
                            id="password" />
                    <p id="majuscule"></p>
                    <p id="minuscule"></p>
                    <p id="chiffre"></p>
                    <p id="longueur"></p>
                    
                    </label>
                </form>
            </div>
        );
    }
}

export default Inscription;