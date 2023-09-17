const formData = {
    name: 'Thor Odinson',
    email: 'godofthunder@gmail.com',
};

// const newValue = {
//     email: 'newemail@gmail.com'
// };

// const destroyConfig = {
//     method: 'DELETE',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//     },
// };

const createConfig = { //Generalizes a template to be used every time submitData is called, so that function is more concise and readable.
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify(formData),
};

// const updateConfig = {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//     },
//     body: JSON.stringify(newValue)
// };

const submitData = () => {
    fetch('http://localhost:3000/users', createConfig)
    .then(resp => resp.json())
    .then(data => {
        document.querySelector('body').append(data.id)
    })

    .catch(error => {
        alert('An error has occured')
        console.log('An error has occured.')
    })
};

// const deleteUser = (id) => {
//     fetch(`http://localhost:3000/users/${id}`, destroyConfig)
//         console.log('Resource deleted successfully.')
// };

// const updateEmail = (id, newValue) => {

//     fetch(`http://localhost:3000/users/${id}`, updateConfig)
//         .then(resp => resp.json())
//         .then(data => data.email = newValue.email)    
//     console.log('Resource updated successfully')
// }