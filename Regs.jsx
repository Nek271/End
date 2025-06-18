import  { useState } from 'react'; 
import { Link } from 'react-router-dom';


function RegPost() { 

  const [login, setLogin] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [message, setMessage] = useState(''); 
  const [email, setEmail] = useState(''); 

  const tokens =  localStorage.getItem("token")
  
  const handleSubmit = async (event) => { 



    event.preventDefault(); 

    try { 
      fetch('http://localhost:5000/regs', 
      
      {

         method: 'POST', 
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ login, password, email, tokens }) 
        
        })

        .then(response => response.json())
        .then(elem => {
          const { message } = elem;
          setMessage(message);
            // console.log(message)
            // setMessage(elem);

            // console.log(message);

            localStorage.setItem("token", elem.token)
            
        })
         
        //  const data = await response.json(); 
        //  console.log(data); 
      }
         catch (error) 
            { console.error('Ошибка:', error); } ;
            
        }; 
         
         
         return (
          
<div>
			<div className="form">


				<div className="p-2">
                <form onSubmit={handleSubmit}> 
						<h3>Регистрация</h3>

						

						<div className='flex'>

						<div className="form-element pt-2">
                        <input type="text" 

                            value={login} 
                            onChange={(e) => setLogin(e.target.value)} 
                            placeholder='Логин'
                            required

                             /> 
                             
						</div>

            </div>

						<div className="form-element pt-2">
							 <input type="password" 
           
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder='Пароль'
                                required

                            /> 
						</div>

            <div className="form-element pt-2">
							 <input type="email" 
           
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder='Почта'
                               

                            /> 
						</div>


						<div>
							<button className="btn btn-form block">
								Зарегистрироваться
							</button>

            <div className='red'>
              <div>{message}</div>
              </div>

                            
                          <b> <div className='gray'> Есть аккаунт? <Link to = "/login"> <div className='blue'> Войти </div> </Link> </div>  </b>
                          

						</div>
					</form>
				</div>
			</div>
		</div>

          ); 
        } 
        
        export default RegPost;
