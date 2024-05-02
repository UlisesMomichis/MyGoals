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

    return(
        <view style={StyleSheet.inputContainer}>
            <TextInput
              style={StyleSheet.TextInput}
             placeholder="Your Goal!"
                onChargeText={handleInputGoal}
                value={enteredGoalText} 
            />
            <Button
             title="Add Goal" 
             color={'#A3FFD6'}
            onPress={addGoalHandler}
            />
        </view>


    )

}

export default GoalInput
