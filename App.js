import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { GoalInput } from './components/GoalInput';
import { GoalItem } from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)
  function addGoalHandler(goalText) {
    setCourseGoals(preState => [...preState, {text: goalText, id: Math.random().toString()}])
    setModalIsVisible(false)
  }
  function deleteGoalHanlder(id) {
    setCourseGoals(preState => preState.filter(goal => goal.id !== id))
  }
  function addNewGoalPressHandler() {
    setModalIsVisible(true)
  }
  function endNewGoalHandler() {
    setModalIsVisible(false)
  }

  return (
    <>
      <StatusBar style='dark' />
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color="#5e0acc" onPress={addNewGoalPressHandler} />
        <GoalInput onAddGoal={addGoalHandler} onCancel={endNewGoalHandler} visible={modalIsVisible} />
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={(itemData) => <GoalItem onDeleteItem={deleteGoalHanlder} id={itemData.item.id} text={itemData.item.text} />} alwaysBounceVertical={false} />
        </View>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    // flex 1 to take all the height can be used for parent container
    flex: 1,  
    paddingTop: 50,
    paddingHorizontal: 16,
    // backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 5,
  }
})
