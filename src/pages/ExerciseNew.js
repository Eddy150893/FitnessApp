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

     handleSubmit = async e => {
        e.preventDefault()//esto hace que no recarge la pagina
        console.log(this.state)
        try{
        	let config = {
        		method: 'POST',
        		header:{
        			'accept':'application/json',
        			'Content-Type':'applicaciont/json'
        		},
        		body: JSON.stringify(this.state.form)
        	}
        	let res = await fetch('http://localhost:8000/api/exercises',config)
        	let json = await res.json()
        	console.log(json)
        }catch(error){

        }
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
    				onSubmit={this.handleSubmit}
    				form={this.state.form}
    				/>
    			</div>
    		</div>
    		
    	)
    }

}

export default ExerciseNew