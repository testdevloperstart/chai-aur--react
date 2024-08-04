function costumrender(reactElement, container){
    // this first type of approch
/*const domeElement = document.createElement(reactElement.type);
domeElement.innerHtml = reactElement.children;
domeElement.setAttribute('href', reactElement.props.href);
domeElement.setAttribute('target', reactElement.props.target);
container.appendChild(domeElement);*/
//this is second type of appeoch
const domElement=document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children
for(const prop in object){
    if(prop === children) container;
    domElement.setAttribute(prop, reactElement.reactElement.props [prop])
}
container.appendChild(domElement)
}

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}

const maincontainer=document.querySelector('#root')

costumrender(reactElement,maincontainer)

