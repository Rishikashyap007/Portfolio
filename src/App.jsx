import React from 'react'
import Header from './Components/Header'
import Profile from './Components/Profile'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import WorkExperience from './Components/Work'
import ContactForm from './Components/Contact'
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
      <Header />
      <Profile />
      <WorkExperience/>
      <Projects />
      <Skills />
      <ContactForm />
      <Footer />
    <ToastContainer position="top-center" autoClose={3000} />

     </>
  )
}

export default App