import './signUp.css'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = ()=>{
    
    const navigate = useNavigate('/')
    const [err, setErr] = useState({})
    const [notMuch, setNotMuch] = useState(false);

    // function for checking if both pass and email not empty
    const validation = (values)=>{
        const Errors = {}

        if(values.email === ""){
            Errors.email = 'Missing user name'
        }
        if(values.password === ""){
            Errors.password = 'Missing password'
        }
        return Errors
    }

    
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });


    const handleCahnge = (event)=>{
        setInputs(value => ({...value, [event.target.name]: event.target.value}));
    }
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        const url = 'http://localhost/Vit_app/validation.php';
        setErr(validation(inputs))

        
        axios.post(url, inputs, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then((res)=>{
            if(res.data === 'email and password match'){
                navigate('/home')
            }else if(res.data === 'non found'){
                setNotMuch(true)
            }else if(res.data === 'input empty'){
                setNotMuch(false)
            }
        })
        // .catch((err)=>console.log(err))

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
                            <h1 className='text-center my-3 header'>Sign In</h1>
                            <form className="row g-3" onSubmit={handleSubmit} method='POST'>
                                <div className="col-md-12">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" name='email'  value={inputs.email}  onChange={handleCahnge} />
                                    {err.email && <p className='err'>{err.email}</p>}
                                </div>
                                
                                <div className="col-12">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" name="password" value={inputs.password}  onChange={handleCahnge}/>
                                    {err.password && <p className='err'>{err.password}</p>}
                                </div>
                                {notMuch && <p className='err text-center'>Not Found either password or email incorrect</p>}
                                
                                <div className="col-12 text-center">
                                    <button type="submit" className="btn submitMe" >Sign in</button>
                                </div>
                                <div className="col-12 text-center">
                                    <p>really! <Link to="./signUp">not a member</Link></p>
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
        </>
    )
}

export default SignIn