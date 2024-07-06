async function getUser() {

    const data = {email: 'email@email.com', password: '123'}

    const response = await fetch('http://localhost:3005/api/login', {
        method: "POST",
        headers: {"Content-Type":"application/js"},
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.sucess) {
        console.log(result.data)
        alert(result.message)
    } else {
        alert(result.message)
    }
}

let call = getUser();