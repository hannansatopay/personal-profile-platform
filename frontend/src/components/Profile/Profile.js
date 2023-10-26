import React from 'react'
import "./Profile.css"

export const Profile = () => {
  return (
    <>
    <div className="mainForm">
    <div className="mainHead">
        <h1>Create Your Profile!</h1>
    </div>
    <div className="signupFrm">
        <form action className="form">
          <h1 className="title">Contact Details</h1>
          <div className="inputContainer">
            <input type="text" className="input" placeholder="a" />
            <label htmlFor className="label">Name:</label>
          </div>
          <div className="inputContainer">
            <input type="text" className="input" placeholder="a" />
            <label htmlFor className="label">Phone No:</label>
          </div>
          <div className="inputContainer">
            <input type="text" className="input" placeholder="a" />
            <label htmlFor className="label">Email Id:</label>
          </div>
          <div className="inputContainer">
            <input type="text" className="input" placeholder="a" />
            <label htmlFor className="label">Linkedin:</label>
          </div>
          <input type="submit" className="submitBtn" defaultValue="Sign up" />
        </form>
      </div>

      {/* add job form */}
      <div className="signupFrm">
        <form action className="form">
          <h1 className="title">Add a Job</h1>
          <div className="inputContainer">
            <input type="text" className="input" placeholder="a" />
            <label htmlFor className="label">Job Title:</label>
          </div>
          <div className="inputContainer">
            <input type="text" className="input" placeholder="a" />
            <label htmlFor className="label">Position Held:</label>
          </div>
          <div className="inputContainer">
            <input type="text" className="input" placeholder="a" />
            <label htmlFor className="label">Company:</label>
          </div>
          <div className="inputContainer">
            <input type="text" className="input" placeholder="a" />
            <label htmlFor className="label">City:</label>
          </div>
          <div className="inputContainer">
            <input type="text" className="input" placeholder="a" />
            <label htmlFor className="label">Start Date:</label>
          </div>
          <div className="inputContainer">
            <input type="text" className="input" placeholder="a" />
            <label htmlFor className="label">End Date:</label>
          </div>
          <input type="submit" className="submitBtn" defaultValue="Sign up" value="Add"/>
        </form>
      </div>

      {/* Add a qualification */}

      <div className="signupFrm">
        <form action className="form">
          <h1 className="title">Add a Qualification</h1>
          <div className="inputContainer">
            <input type="text" className="input" placeholder="a" />
            <label htmlFor className="label">Qualification Name:</label>
          </div>
          <div className="inputContainer">
            <input type="text" className="input" placeholder="a" />
            <label htmlFor className="label">Institution of Qualification:</label>
          </div>
          <div className="inputContainer">
            <input type="text" className="input" placeholder="a" />
            <label htmlFor className="label">Location:</label>
          </div>
          <div className="inputContainer">
            <input type="text" className="input" placeholder="a" />
            <label htmlFor className="label">End Date:</label>
          </div>
          <input type="submit" className="submitBtn" defaultValue="Sign up" value="Add"/>
        </form>
      </div>
      
      {/* skills to be added */}
      <div className="signupFrm">
        <form action className="form">
          <h1 className="title">Add a Skills</h1>
          <div className="inputContainer">
            <input type="text" className="input" placeholder="a" />
            <label htmlFor className="label">Skill:</label>
          </div>
          <input type="submit" className="submitBtn" defaultValue="Sign up" value="Add"/>
        </form>
      </div>
    </div>
    </>
  )
}
