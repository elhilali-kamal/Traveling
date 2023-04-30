
import './signUp.css'
import { useEffect, useState } from 'react'
import axios, { formToJSON } from 'axios'
import { Link } from 'react-router-dom'





const SignUp = ()=>{

    const [err, setErr] = useState({});
    const [wlc, setwlc] = useState('')
    
    // function for returing if there's an err 
    const validation = (values)=>{
        const Errors = {}
        const email_patrent = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        const password_patrent = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

        if(values.firstname === "" ){
            Errors.firstname = 'first name is required!'
        }
        if(values.lastName === "" ){
            Errors.lastName = 'last name is required!'
        }
        if(values.email === ''){
            Errors.email = 'Email is required!'
        }else if(!email_patrent.test(values.email)){
            Errors.email = 'Email is not correct'
        }
        if(values.password === '' ){
            Errors.password = 'Passowrd is required!'
        }else if(!password_patrent.test(values.password)){
            Errors.password = 'Password is not correct'
        }
        if(values.c_password != values.password || values.c_password === ""){
            Errors.c_password = "Password dosn't match";
        }
        return Errors

    }

    const [inputs, setInputs] = useState({
        firstname: "",
        lastName: '',
        email: '',
        password: "",
        c_password: '',
    });
    
    const handleCahnge = (event)=>{
        setInputs(value => ({...value, [event.target.name]: event.target.value}));
    }
    
 

    const handleSubmit = (event)=>{
        event.preventDefault();
        setErr(validation(inputs))
        
        const url = 'http://localhost/Vit_app/api.php';
        
        axios.post(url, inputs)
        .then((res)=> {
            if(res.data === "all good"){
                setwlc("active")
            }
            else if(res.data === "email already token"){
                setInputs(value =>({...value, ["email"]:""}))
                setErr(prev =>({ ...prev, ['emailToken']: 'sorry but this email was already taken'}))
            }else if(res.data === 'input empty'){
                console.log('empty')
            }
        })
        // .then((data)=> console.log(data))

        // console.log(inputs)
    }
    return(
        <> 
            <div className="container-fluid">
                <div className="row landpage">
                    <div className="col-md-6">
                        <div className="container">
                            <h1>Explore</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ex magnam officia vitae saepe placeat culpa sit autem vel ullam eum quam natus, facilis magni? Cum voluptate aut laudantium impedit.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="container signup">
                            <h1 className='text-center mt-3 header'>Sign Up</h1>
                            <form className="row" onSubmit={handleSubmit}>
                                <div className="col-md-6">
                                    <label htmlFor="firstname" className="form-label">First Name</label>
                                    <input type="text" className="form-control" name='firstname'  value={inputs.firstname}  onChange={handleCahnge} />
                                    {err.firstname && <p className='err'>{err.firstname}</p>}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" name='lastName'  value={inputs.lastName}  onChange={handleCahnge} />
                                    {err.lastName && <p className='err'>{err.lastName}</p>}
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="text" className="form-control" name="email" value={inputs.email}  onChange={handleCahnge}/>
                                    {err.email && <p className='err'>{err.email}</p>}{err.emailToken && <p className='err'>{err.emailToken}</p>}
                                </div>
                                <div className="col-12">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" name="password" value={inputs.password}  onChange={handleCahnge}/>
                                    {err.password && <p className='err'>{err.password}</p>}
                                </div>
                                <div className="col-12">
                                    <label htmlFor="c_password" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" name="c_password" value={inputs.c_password}  onChange={handleCahnge}/>
                                    {err.c_password && <p className='err'>{err.c_password}</p>}
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className="btn submitMe" >Sign in</button>
                                </div>
                                <div className="col-12 text-center">
                                    <p>I already <Link to="/">have an account</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="break">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <button className='btn learnmore'>Learn More <i className="fa-solid fa-chevron-right"></i></button>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, voluptate? Voluptatibus quas enim debitis error nisi molestiae dolore consequatur cum inventore blanditiis, culpa similique doloribus ipsam, maxime quidem recusandae tempora.</p>
                        </div>
                        <div className="col-md-4">
                            <button className='btn learnmore'>Learn More <i className="fa-solid fa-chevron-right"></i></button>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, voluptate? Voluptatibus quas enim debitis error nisi molestiae dolore consequatur cum inventore blanditiis, culpa similique doloribus ipsam, maxime quidem recusandae tempora.</p>
                        </div>
                        <div className="col-md-4">
                            <button className='btn learnmore'>Learn More <i className="fa-solid fa-chevron-right"></i></button>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, voluptate? Voluptatibus quas enim debitis error nisi molestiae dolore consequatur cum inventore blanditiis, culpa similique doloribus ipsam, maxime quidem recusandae tempora.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`model-container ${wlc}`}>
                <div className="container PopUs ">
                    <h1>welcom to our community</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis deleniti eos placeat, autem quasi nemo! Quidem repellat suscipit iste, consequuntur minima doloremque ullam unde facilis reprehenderit veritatis consequatur vel eum?</p>
                    <p className='link'>Begin your journy<Link to="/" >Here</Link></p>
                </div>
            </div>
        </>
    )
}

export default SignUp