import React from 'react'
import ExerciseForm from '../Components/ExerciseForm'
import Card from '../Components/Card'
class ExerciseNew extends React.Component {
	state={
		form: {
			title: '',
			description: '',
			img: '',
			leftColor: '',
			rightColor: ''
		}//El estate se inicializa con un objeto pero dicho objeto esta vacio
	}
	handleChange = e => {
        this.setState({
        	form:{
        	...this.state.form,//mantiene la informacion de los campos
            [e.target.name]: e.target.value//le asigna al atributo entre parentesis el valor de dicho atributo en el formulario
        	}
        	
        })
    }
    render(){
    	return(
    		<div className="row">
    			<div className="col-sm">
    			<Card {...this.state.form }/>
    			</div>
    			<div className="col-sm">
    				<ExerciseForm
    				onChange={this.handleChange}
    				form={this.state.form}
    				/>
    			</div>
    		</div>
    		
    	)
    }

}

export default ExerciseNew