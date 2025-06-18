import  { useState } from 'react'; 
import { Link } from 'react-router-dom';



function AvtGet() { 
    
    const [login, setLogin] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [token, setToken] = useState(''); 
    const [message, setMessage] = useState(''); 

    

    const handleSubmit = async (event) => { event.preventDefault(); 

        setToken(localStorage.getItem("token"))
        
        try { 
            
             fetch('http://localhost:5000/login', { 

            method: 'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({ login, password, token }) 

        })
        
        .then(response => response.json())
        .then(elem => {



            const { message } = elem;
            setMessage(message);
            //   console.log(message)


            if(elem.token)
            localStorage.setItem("token", elem.token)
            
        })
        
        
            // const data = await response.json(); 
            // console.log(data); 
        } 
        catch (error) 
            { console.error('Ошибка:', error); } };
         
         
         return (
       

<div >
			<div className="form">
				<div className="p-2">
                <form onSubmit={handleSubmit}> 
						<h3>Авторизация</h3>

						

						

						<div className="form-element pt-2">
                        <input type="text" 

                            value={login} 
                            onChange={(e) => setLogin(e.target.value)} 
                            placeholder='Логин'
                            required

                             /> 
						</div>

						<div className="form-element pt-2">
							 <input type="password" 
           
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder='Пароль'
                                required

                            /> 
						</div>


						<div>
							<button className="btn btn-form block">
								ВХОД
							</button>
                            <div className='red' value={`${message}`}>{message}</div>
                            
                          <b> <div className='gray'> Нет аккаунта? <Link to = "/regs"> <div className='blue'> Зарегистрироваться </div> </Link> </div>  </b>


						</div>
					</form>
				</div>
			</div>
		</div>

          ); 
        } 
        
        export default AvtGet;
