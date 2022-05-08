import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        Login
      </header>
      <div>
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required />
        
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />
            
        <button type="submit" onClick={()=>{ alert('Login Successfully Done !'); }}>Login</button>
      </div>
    </div>
  );
}

export default App;
