import axios from 'axios'
import React, { useState } from 'react'


const Add = () => {
    const[input,changeData]=useState(
        {
            team_id: "",
            team_name: "",
            leader_name: "",
            leader_email: "",
            leader_phone: "",
            college_name: "",
            no_of_members: "",
            project_title: "",
            problem_track: "",
            tech_stack: "",
            mentor_name: "",
            reg_date: "",
            tableStation_no: ""
        }
    )

    const inputHandler=(event)=>{
        changeData({...input,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(input)
        axios.post("http://localhost:3000/add_team",input).then(
            (response)=>{response.data}
        ).catch()
    }

  return (
    <div>
        <h1>Add Team</h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Team Id:</label>
                            <input type="text" className="form-control" name='team_id' value={input.team_id} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">team name:</label>
                            <input type="text" className="form-control" name='team_name' value={input.team_name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">leader name:</label>
                            <input type="text" className="form-control" name='leader_name' value={input.leader_name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">leader email:</label>
                            <input type="text" className="form-control" name='leader_email' value={input.leader_email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">leader phone</label>
                            <input type="text" className="form-control" name='leader_phone' value={input.leader_phone} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">college_name</label>
                            <input type="text" className="form-control" name='college_name'value={input.college_name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">no of members:</label>
                            <input type="text" className="form-control" name='no_of_members' value={input.no_of_members} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">project title:</label>
                            <input type="date" className="form-control" name='project_title' value={input.project_title} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">problem track:</label>
                             <select  id="" className="form-control" name="problem_track" value={input.problem_track } onChange={inputHandler}>
                                <option value="Artificial Intelligence" className="options">Artificial Intelligence</option>
                                <option value="Machine Learning" className="options">Machine Learning</option>
                                <option value="Cyber Security" className="options">Cyber Security</option>
                                
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                        
                            <label htmlFor="" className="form-label">Technology Stack</label>
                            <select  id="" className="form-control" name="tech_stack" value={input.tech_stack } onChange={inputHandler}>
                                <option value="React.js" className="options">React.js</option>
                                <option value="Node.js" className="options">MERN Stack</option>
                                <option value="Flutter" className="options">Flutter</option>
                                <option value="Python-Django" className="options">Python-Django</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">mentor_name:</label>
                            <input type="text" className="form-control" name='mentor_name'value={input.mentor_name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">reg_date:</label>
                            <input type="date" className="form-control" name='reg_date'value={input.reg_date} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">tableStation_no:</label>
                            <input type="text" className="form-control" name='tableStation_no'value={input.tableStation_no} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add