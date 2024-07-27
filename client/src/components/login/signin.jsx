import React from 'react'

const Signin = () => {
  return (
    <div>
      <form action="#">
         <h1>Create Account 
         <select name="signin" id="">
            <option value="none">Login In</option>
            <option value="as-Admin">as Admin</option>
            <option value="as-Faculty">as Faculty</option>
            <option value="as-Student">as Student</option>
            <option value="as-Alumni">as Alumni</option>
         </select>
         </h1>
      </form>
    </div>
  )
}

export default Signin