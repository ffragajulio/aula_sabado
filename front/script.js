function handleSubmit(event) {
    event.preventDefault();
    
    getUser();
}

async function getUser() {
    let email    = 'email@email.com';
    let password = '123'

    const data = {email, password}

    const response = await fetch('http://localhost:3005/api/login', {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.sucess) {
        console.log(result.data)
        //alert(result.message)
        window.location.href = "./pages/home.html";
    } else {
        alert(result.message)
    }
}

