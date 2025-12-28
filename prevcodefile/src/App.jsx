import ProfileCard from './components/ProfileCard.jsx'
import SimpleCounter from "./components/SimpleCounter";
import LoginForm from "./components/LoginForm";

function App() {
 

  return (
    <>
      <div className="App">
        <ProfileCard 
        name="Ankitraj Kadel"
        title="Software Engineer Inetrn"
        />
        <SimpleCounter />
        <h1>Log In</h1>
        <div><LoginForm /></div>
    
      </div>
    </>
  )
}

export default App
