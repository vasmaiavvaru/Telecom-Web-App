
export async function SignInWithEmailAndPassword(data){
    // const url = `${process.env.API_BASE_URL}/api/signin`;
    // const options = {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json;charset=UTF-8'
    //     },
    //     body: JSON.stringify(data)
    // };
    // try {
    //     return fetch(url, options)
    //         .then(response => response.json())
    //         .then(data => { return data });
    // }
    // catch (err) {
    //     throw err;
    // }
    return {
            firstName: "Test",
            lastName: "User",
            mobileNumber: "9999999999",
            emailAddress: "test.user@test.com"
    }
}

export async function CreateUserWithEmailAndPassword(data){
    return {
        firstName: "Test",
        lastName: "User",
        mobileNumber: "9999999999",
        emailAddress: "test.user@test.com"
}
}
