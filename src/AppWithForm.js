import logo from './logo.svg';
import './App.css';

//          📙            📚📚📚
// import { useState } from "react"
import React, { useState } from "react"



import ourCohortArray from './data/cohortArrayOfObjects.js';
// console.log( ourCohortArray )


function AppWithForm() {  ////  js


  // const [ arrayOfPeopleObjs , setArrayOfPeopleObjs ] = useState( [] )
  const [ arrayOfPeopleObjs , setArrayOfPeopleObjs ]    = useState( ourCohortArray )
    console.log( "STATE OF arrayOfPeopleObjs: " , arrayOfPeopleObjs )



  const peopleToMap = arrayOfPeopleObjs.map(  ( eachPersonObj )=>{ 

    // console.log( eachPersonObj )

    return( <h2>{ eachPersonObj.name }</h2> )
    
  }  )


  const [ stateOfPeopleListShowing , setStateOfPeopleListShowing ] = useState( true )
  console.log( "State of stateOfPeopleListShowing: " , stateOfPeopleListShowing )

  const toggleList = () => { 

    setStateOfPeopleListShowing( ! stateOfPeopleListShowing )
    // stateOfPeopleListShowing = ! stateOfPeopleListShowing 

    console.log( stateOfPeopleListShowing ) 

  }


  // let theStateOfInputFieldValue = ""
  const handleNewPersonSubmit = ( synthEvent ) =>{ 

    synthEvent.preventDefault() 
    
    let whatTheUserTypedForName = synthEvent.target.newPersonName.value
    let whatTheUserTypedForRole = synthEvent.target.personRole.value

    let newPersonObj = {

      name: whatTheUserTypedForName,
      role: whatTheUserTypedForRole

    }

    setArrayOfPeopleObjs(  [ ...arrayOfPeopleObjs , newPersonObj  ]  )  // Top of the List
    // setArrayOfPeopleObjs(  [ newPersonObj , ...arrayOfPeopleObjs ]  )  // Bottom of the List
    // [ {}{}{} ]  ->  {}{}{} -> [ {}{}{} ]  -> [ {}{}{} , {} ]

    synthEvent.target.reset()

  }    
  ////  js
  return (
    <div className="App">

      <img src={logo} className="App-logo" alt="logo" />


      <h1>10-10 Rocks! :)</h1>
      <br/><br/>


      <form onSubmit={ handleNewPersonSubmit } >

        < input id={"personName"} name={"newPersonName"} />
        < input id={"personRole"} name={"newPersonRole"} />

        <input type='submit' />
        {/* <button type='submit'> Woobly </button> */}

      </form>


      <br/><br/>
      <h1 onClick={  toggleList  } >

        Render Everyone in the Cohort

      </h1>
      {
      
        // someCondition ? 
        stateOfPeopleListShowing ?  
      
        // TRUE 
          peopleToMap
        : 
          <></>
          // <div></div>
          // null
        // FALSE
      
      }


      
    
    </div>
  );
}
export default AppWithForm;



/* 


  <App />




    const [ nameInputField , setNameInputField ] = useState( "" )
    const [ roleInputField , setRoleInputField ] = useState( "" )

    const [ personFormData , setPersonFormData ] = useState( { name: "", role: "" } )


*/






/*










function App() {  ////  js


  const peopleToMap = ourCohortArray.map(  ( eachPersonObj )=>{ 

    // console.log( eachPersonObj )

    return( <h2>{ eachPersonObj.name }</h2> )
    
  }  )

  // const [ variable , function ] = useState( initialState )
  // const [ v , f ] =                                               useState( initialState )
  const [ stateOfPeopleListShowing , setStateOfPeopleListShowing ] = useState( true )
  console.log( "State of stateOfPeopleListShowing: " , stateOfPeopleListShowing )

  const h1Click = () => { 

    setStateOfPeopleListShowing( ! stateOfPeopleListShowing )
    // stateOfPeopleListShowing = ! stateOfPeopleListShowing 

    console.log( stateOfPeopleListShowing ) 

  }


  ////  js
  return (
    <div className="App">

      <img src={logo} className="App-logo" alt="logo" />


      <h1>10-10 Rocks! :)</h1>


      <h1 onClick={  h1Click  } >

        Render Everyone in the Cohort

      </h1>
      {
      
        // someCondition ? 
        stateOfPeopleListShowing ?  
      
        // TRUE 
        peopleToMap
        : 
          <></>
          // <div></div>
          // null
        // FALSE
      
      }


      
    
    </div>
  );
}
export default App;

















function App() {  ////  js

  console.log( ourCohortArray )

  ////  js
  return (
    <div className="App">

      <img src={logo} className="App-logo" alt="logo" />


      <h1>10-10 Rocks! :)</h1>


      <h1>Render Everyone in the Cohort</h1>
      {
        // [ eachThing:{} , {} , {} ]
        ourCohortArray.map(  ( eachPersonObj )=>{ 

          console.log( eachPersonObj )

          return( <h2>{ eachPersonObj.name }</h2> )
          
        }  )

      }
    
    </div>
  );
}
export default App;





*/