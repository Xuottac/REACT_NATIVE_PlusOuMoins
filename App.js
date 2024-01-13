import { StatusBar } from 'expo-status-bar';
import { Button, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Pressable } from 'react-native';
import { useState } from 'react';



export default function App() {

  let [plusMoins, setPlusMoins] = useState("")
  let [nbMystere, setNbMystere] = useState(0)
  let [nbUser, setNbUser] = useState("")
  let [nbTry, setNbTry] = useState(1)
  let [colorBtn, setColorBtn] = useState("green")
  let [txtPlay, setTxtPlay] = useState("Jouer")

  generateMystere = () => { 
    const min = 1; 
    const max = 100; 
    const nbrandom = Math.floor(Math.random() * (max - min + 1)) + min; 
    setNbMystere(nbrandom ); 
    setTxtPlay("")
}; 

  const find = () => {
    setNbTry(nbTry + 1)
    if (nbMystere==0) {
      setPlusMoins("Le jeu n'a pas encore commencé")
    }
    else if (nbUser>nbMystere) {
      setPlusMoins("Le nombre mystère est plus petit")
      setNbUser("")
    }
    else if (nbUser<nbMystere) {
      setPlusMoins("Le nombre mystère est plus grand")
      setNbUser("")
    }
    else {
      setPlusMoins("Vous avez trouvé le nombre mystère en " + nbTry + " tentatives")
      setNbUser("")
      setNbTry(1)
      if (nbTry>5) {
        setColorBtn("red")
      }
      else {
        setColorBtn("green")
      }
      setTxtPlay("Rejouer")
    }
  }


  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Plus ou Moins</Text>
          <View style={styles.gameCard}>
            <Pressable style={styles.buttons} onPress={generateMystere}>
              <Text style={[{color:  colorBtn,},styles.buttonText]}>{txtPlay}</Text>
            </Pressable>
            <TextInput style={styles.input} placeholder='Veuillez entrer un nombre' onChangeText={setNbUser} value={nbUser} keyboardType='numeric'/>
            <Pressable style={styles.buttons} onPress={find}>
              <Text style={[{color:  "rgb(0,122,255)",},styles.buttonText]}>Proposer un nombre</Text>
            </Pressable>
            <Text>{plusMoins}</Text>
          </View>
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    paddingTop: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  gameCard: {
    alignItems: "center",
    borderWidth: 1,
    margin: 5,
  },
  input: {
    fontSize: 25,
  },
  buttons: {

  },
  buttonText: {
    fontSize: 25,
  }
});
