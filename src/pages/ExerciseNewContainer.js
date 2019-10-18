import React from 'react'
import Loading from '../Components/Loading'
import FatalError from './500'
import ExerciseNew from './ExerciseNew'
import url from '../config';
class ExerciseNewContainer extends React.Component {
    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        }, //El estate se inicializa con un objeto pero dicho objeto esta vacio
        loading: false,
        error: null
    }
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form, //mantiene la informacion de los campos
                [e.target.name]: e.target.value //le asigna al atributo entre parentesis el valor de dicho atributo en el formulario
            }

        })
    }

    handleSubmit = async e => {
        this.setState({
            loading: true
        })
        e.preventDefault() //esto hace que no recarge la pagina
            /*console.log(this.state)*/
        try {
            let config = {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            let res = await fetch(`${url}exercises`, config)
            let json = await res.json()
            this.setState({
                loading: false
            })
            this.props.history.push('/exercises')
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }

    render() {
        if (this.state.loading)
            return <Loading / >
                if (this.state.error)
                    return <FatalError / >
                        return <ExerciseNew
        form = { this.state.form }
        onChange = { this.handleChange }
        onSubmit = { this.handleSubmit }
        />
    }

}

export default ExerciseNewContainer