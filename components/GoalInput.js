import { useState } from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"

function GoalInput({onAddGoal}){
    const [enteradoGoalText, setEnteradiGoalText] = useState('')
    
    function handleInputGoal(enteredText){
        console.log(enteredText)
        setEnteradiGoalText(enteredText)
    }

    function addGoalHandler(){
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
        console.log('addGoalHandler')
    }
}

export default GoalInput
