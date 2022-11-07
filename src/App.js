import logo from './logo.svg';
import './App.css';

//             📙📙           📚📚📚
// import { useState } from "react"
// import { useEffect } from "react"
import React, { useState , useEffect } from "react"

import ourCohortArray from './data/cohortArrayOfObjects.js';
import NewPersonForm from './components/NewPersonForm.js';


// console.log( ourCohortArray )


function App() {  ////  js


  
  // const [ v , f ] = useState( initialValue )
  const [ dataFromFetch , setDataFromFetch ] = useState( [] )



  // useEffect(  ()=>{} , [] )
  useEffect(  ()=>{

    fetch( 'http://localhost:3000/ourCohortArray' )
    .then( (response) => response.json() )
    .then( (data) => setDataFromFetch(data) );

  } , [] )  // We Want This To Happen Upon Mounting ( The COmponent Makes it To The DOM )





  //  function handleDelete(){

  //   // filterLogic

  //   fetch( `http://localhost:3000/ourCohortArray/${9}` , { method: "DELETE" } )
  //   .then( r => r.json() )
  //   .then( data => setDataFromFetch( [ ...filteredArray ] ) )
  //   // .then( console.log )

  //  }

  //  <button onClick={ handleDelete } ></button>






















  // const [ arrayOfPeopleObjs , setArrayOfPeopleObjs ] = useState( [] )
  const [ arrayOfPeopleObjs , setArrayOfPeopleObjs ]    = useState( ourCohortArray )
    console.log( "STATE OF arrayOfPeopleObjs: " , arrayOfPeopleObjs )

  const peopleToMap = arrayOfPeopleObjs.map(  ( eachPersonObj )=>{ 

    // console.log( eachPersonObj )

    // **** Component/Card - PersonCard
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
  //           sendUpSomething( "You're Going Better Than You Think!" )
  const someElevatorFunction =( somethingSentBackUp )=>{  

    console.log( somethingSentBackUp )

    // do something

  }


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


      {/* <  Component   whatYouWantToReferToThisAs={ ^ whatTheThingIsHERE ^ }     />   */}
      < NewPersonForm  

        formFunctionProp={ handleNewPersonSubmit }  
        sendUpSomething={ someElevatorFunction } 
        
      />


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
export default App;



/* 




  <App />
   L>
    < AttendancePage />
      L>
        < NewPersonForm /> < AttendanceList />




                        <App />
   L>
                   < AttendancePage />  state[] ♾ fetch()
      L>
           < NewPersonForm />  < AttendanceList /> 









  <App />
   L>
    < AttendancePage />
      L>
        < NewPersonForm />




    const [ nameInputField , setNameInputField ] = useState( "" )
    const [ roleInputField , setRoleInputField ] = useState( "" )

    const [ personFormData , setPersonFormData ] = useState( { name: "", role: "" } )


*/






/*







  // fetch( 'http://localhost:3000/ourCohortArray' )
  // .then( (response) => response.json() )
  // .then( (data) => setDataFromFetch(data) );

  // .then( (data) => { setDataFromFetch(data) } );
  // .then( (data) => console.log(data)   );








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