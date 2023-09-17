const formData = {
    name: 'Steve',
    email: 'steve@steve.com',
};

const createConfig = { //Generalizes a template to be used every time submitData is called, so that function is more concise and readable.
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify(formData),
};

const submitData = () => {
    return fetch('http://localhost:3000/users', createConfig)
    .then(resp => resp.json())
    .then(data => {
        document.querySelector('body').append(data.id)
    })

    .catch(error => {
        alert('An error has occured')
        document.querySelector('body').append('Unauthorized Access.')
    });
};