function render(details, container) {
    const element = document.createElement(details.type)
    element.innerHTML = details.child
    for (const prop in details.props) {
        if (prop === "child") continue;  // this line is to skip the item name 'child'
        element.setAttribute(prop, details.props[prop])
    }
    container.appendChild(element)
}

const details = {
    type : 'a',
    props: {
        href: 'https://google.com',
        target: '_blanck',
    },
    child: 'click me please'

}

const mainContainer2 = document.querySelector('#root1')

render(details, mainContainer2)