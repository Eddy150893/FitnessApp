import React from 'react'
import ExerciseList from '../Components/ExerciseList'
import Welcome from '../Components/Welcome'
import AddButton from '../Components/AddButton'

const Exercises = ({ data }) => ( 
	<div >
    <Welcome username = "Eddy" / >
    <ExerciseList exercises = {data }/>{/*Ya que esto solo es un vector y no un objeto por ende no se hace deconstructing o ...data*/}
     <AddButton / >
    }
    </div>
)


export default Exercises