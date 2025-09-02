import './App.css'
import PersonalInfo from './components/PersonalInfo'
import Education from './components/Education'
import Experience from './components/Experience'

function App() {
  return(
    <div className="cv-container">
      <h1>My CV Application</h1>
      <PersonalInfo />
      <Education />
      <Experience />
    </div>
  );
}

export default App
