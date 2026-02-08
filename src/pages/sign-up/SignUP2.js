import axios from "axios"

export const SignUpService = (
    usernameRef, emailRef, cityRef, passwordRef, genderRef,
)=>{
const newuser = {
    username: usernameRef.current.value,
    email: emailRef.currrent.value,
    city: cityRef.current.value,
    password: passwordRef.current.value,
    gender: genderRef.current.value

}

axios.post("",newuser)
.then(()=>{

})
.catch(()=>{
    console.error();
    
})
}