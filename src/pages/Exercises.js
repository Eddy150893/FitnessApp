import React from 'react'
import ExerciseList from '../Components/ExerciseList'
import Welcome from '../Components/Welcome'
import AddButton from '../Components/AddButton'

class Exercises extends React.Component{

	state={
		data:[]
	}
    async componentDidMount(){
        await this.fetchExercises()
    }

fetchExercises = async () => {
    let res = await fetch('http://localhost:8000/api/exercises')
    let data = await res.json()
    this.setState({
        data
    })
    console.log(data)
}

render(){
	return(<div>
	<Welcome username="Eddy"/>
	<ExerciseList
		exercises={this.state.data}
	/>
	<AddButton/>
	</div>)
}
}
export default Exercises