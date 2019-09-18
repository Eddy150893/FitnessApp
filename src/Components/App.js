import React from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import ExercisesContainer from '../pages/ExercisesContainer'
import ExercisesNewContainer from '../pages/ExerciseNewContainer'
import NotFound from '../pages/404'

const App = () => (
		<BrowserRouter>
			<Switch>
			<Route exact path="/exercises" component={ExercisesContainer}/>
			<Route exact path="/exercise/new" component={ExercisesNewContainer}/>
			<Route component={NotFound}/>
			</Switch>
		</BrowserRouter>
)

//function App(){
//	return(
//		<BrowserRouter>
//			<Switch>
//			<Route exact path="/exercise" component={Exercises}/>
//			<Route exact path="/exercise/new" component={ExercisesNew}/>
//			<Route component={NotFound}/>
//			</Switch>
//		</BrowserRouter>
//	)
//}
export default App