
// how to create  nested structure  using React.createElement

// <div id="parent">
//     <div id="child">
//         <h1>hello world</h1>
//         <h1>hello world</h1>
//         <h1>hello world</h1>
//     </div>
//     <div id="child">
//         <h1>hello world</h1>
//         <h1>hello world</h1>
//         <h1>hello world</h1>
//     </div>
// </div>


const parent = React.createElement('div', { id: 'parent' }, [
    React.createElement(
        'div', { id: 'child' },
        [React.createElement('h1', { id: 'heading' }, 'hello world'), React.createElement('h2', { id: 'heading' }, 'hello world')]
    ),
    React.createElement(
        'div', { id: 'child2' },
        [React.createElement('h1', { id: 'heading' }, 'hello world'), React.createElement('h2', { id: 'heading' }, 'hello world')]
    )
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)