import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TicketPage = () => { 
  const [formData, setFormData] = useState({
    status: 'not started',
    progress: 0,
    timestamp: new Date().toISOString()
  })

  const editMode = false;
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!editMode) {
      const response = await axios.post('http://localhost:8000/tickets', {
        formData
      })
      const success = response.status === 200
      if(success) {
        navigate('/')
      }
  }
}

  const handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    const desc = event.target.description
    console.log(desc)

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      [desc]: desc
    })
    )
  }

  const categories = ['test 1', 'test 2', 'test 3', 'test 4']

  console.log(formData)

  return (
    <div className="ticket">
      <h1>{editMode ? 'Update your ticket' : 'Create a ticket'}</h1>
      <div className="ticket-container">
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.title}
            />
            <label htmlFor="description">Description</label>
            <input
              id="description"
              name="description"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.description}
            />

            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {categories?.map((category, _index) => (
                <option key={_index} value={category}>{category}</option>
              ))}
            </select>

            <label htmlFor="category">New Category</label>
            <input
              id="new-category"
              name="category"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.category}
            />
            <label>Priority</label>
            <div className="multiple-input-container">
              <input
                id="priority-1"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={1}
                checked={formData.priority == 1}
              />
              <label htmlFor="priority-1">1</label>
              <input
                id="priority-2"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={2}
                checked={formData.priority == 2}
              />
              <label htmlFor="priority-2">2</label>
              <input
                id="priority-3"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={3}
                checked={formData.priority == 3}
              />
              <label htmlFor="priority-3">3</label>
              <input
                id="priority-4"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={4}
                checked={formData.priority == 4}
              />
              <label htmlFor="priority-4">4</label>
              <input
                id="priority-5"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={5}
                checked={formData.priority == 5}
              />
              <label htmlFor="priority-5">5</label>
            </div>

            {editMode &&
              <>
                <input
                  type="range"
                  id="progress"
                  name="progress"
                  value={formData.progress}
                  onChange={handleChange}
                  min="0"
                  max="100"
                />
            <label htmlFor="progress">Progress</label>
              
            
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option selected={formData.status === 'done'} value='done'>Done</option>
              <option selected={formData.status === 'working on it'} value='working on it'>Working on it</option>
              <option selected={formData.status === 'stuck'} value='stuck'>Stuck</option>
              <option selected={formData.status === 'not started'} value='not started'>Done</option>
            </select>
            </>

            }
            
            <input type="submit" value="Submit"/>
          </section>

          <section>
            <label htmlFor="owner">Owner</label>
            <input
                id="owner"
                name="owner"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.owner}
              />

             <label htmlFor="avatar">Avatar</label>
            <input
                id="avatar"
                name="avatar"
                type="url"
                onChange={handleChange}
                required={true}
                value={formData.avatar}
              />
              <div className="img-preview">
                {formData.avatar && (
                  <img src={formData.avatar} alt="image preview"/>
                )}
              </div>
          </section>
        </form>
      </div>
    </div>
  )
}

export default TicketPage