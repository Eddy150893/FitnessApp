import React from 'react'
import ExerciseForm from '../Components/ExerciseForm'
import Card from '../Components/Card'
const ExerciseNew = ({form,onChange,onSubmit}) =>(
	<div className="row">
    			<div className="col-sm">
    			<Card {...form }/>
    			</div>
    			<div className="col-sm">
    				<ExerciseForm
    				onChange={onChange}
    				onSubmit={onSubmit}
    				form={form}
    				/>
    			</div>
    		</div>
)


export default ExerciseNew