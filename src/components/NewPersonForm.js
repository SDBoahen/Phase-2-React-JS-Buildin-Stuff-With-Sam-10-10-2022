
/* 

    props: { 

        formFunctionProp: ƒ ,

        sendUpSomething: f

    }

*/

import { useState } from "react"

function NewPersonForm(  { formFunctionProp , sendUpSomething }  ){

    // const { formFunctionProp , sendUpSomething } = props

    console.log( formFunctionProp )
    console.log( sendUpSomething )

    return(
        <div>

            <h1 onClick={    ( sythEvent ) => { sendUpSomething( "You're Going Better Than You Think!" ) }    }  >

                THIS IS SUPPOSED TO BE A FORM 👀  //  Lololz 

            </h1>


            <form onSubmit={ formFunctionProp } >

                {/* handleNewPersonSubmit( sythEvent ) */}

                < input id={"personName"} name={"newPersonName"} />
                < input id={"personRole"} name={"newPersonRole"} />

                <input type='submit' />
                {/* <button type='submit'> Woobly </button> */}

            </form>

        </div>
    )
}
export default NewPersonForm












////  props. - "props-dot approach"


//  formFunctionProp = { handleNewPersonSubmit }
//  sendUpSomething  = { someElevatorFunction }

//  formFunctionProp: { handleNewPersonSubmit }
/* 

    props: { 
        formFunctionProp: ƒ ,
        sendUpSomething: f
    }

*/

// function NewPersonForm( props ){

//     console.log( props )
//     console.log( props.formFunctionProp )
//     console.log( props.sendUpSomething )

//     return(
//         <div>

//             <h1 onClick={    ( sythEvent ) => { props.sendUpSomething( "You're Going Better Than You Think!" ) }    }  >

//                 THIS IS SUPPOSED TO BE A FORM 👀  //  Lololz 

//             </h1>


//             <form onSubmit={ props.formFunctionProp } >

//                 {/* handleNewPersonSubmit( sythEvent ) */}

//                 < input id={"personName"} name={"newPersonName"} />
//                 < input id={"personRole"} name={"newPersonRole"} />

//                 <input type='submit' />
//                 {/* <button type='submit'> Woobly </button> */}

//             </form>

//         </div>
//     )
// }
// export default NewPersonForm