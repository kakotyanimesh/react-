import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp() {
    return (
        <div>
            <h1>custom App | animesh</h1>
        </div>
    )
}
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blanck',

//     },
//     children: 'Click me to visit google'

// }

const anotherElement = (
    <a href="https://google.com" target='_blanck'>visit google</a>

)


const anotherUser = "chai aur react"

const ReactElement = React.createElement(
    'a',          //first the tag 
    {href: 'https://google.com', target: '_blanck'},
    'click me to visit google',      // what to print
    anotherElement

)



ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <App />,
    // Myapp()     // we can execute with () also 
    // ReactElement
    // anotherElement,
    ReactElement

  
)
