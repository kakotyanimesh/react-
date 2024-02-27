function customRender(reactElement, container) {

    // first written code 
    // const domELement = document.createElement(reactElement.type)
    // domELement.innerHTML = reactElement.children
    // domELement.setAttribute('href', reactElement.props.href)
    // domELement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domELement)

    // the cleaner code 
    
    const domElement =  document.createElement(reactElement.type)       // we can use another name also 
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop])

            
        }
        container.appendChild(domElement)
    
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blanck',

    },
    children: 'Click me to visit google'

}


const mainContainer =  document.querySelector('#root')

customRender(reactElement, mainContainer)

