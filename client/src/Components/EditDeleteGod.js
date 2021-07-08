import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromStorage } from './Authentification/auth'


const DeleteEditGod = () => {

  const { name } = useParams()


  const deleteGod = async() => {
    try {
      await axios.delete(`/api/gods(${name})`, {
        headers: {
          Authorization: `Bearer ${getTokenFromStorage()}` },
      })
      history.pushState('/home')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <h1>TEST</h1>
  )
}


export default DeleteEditGod