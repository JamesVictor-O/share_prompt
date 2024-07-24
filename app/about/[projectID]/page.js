"use client"
import React from 'react'
import {useParams} from "next/navigation"

const AboutProject = () => {
  const {projectID}=useParams()
  return (
    <div>
       <h2>pageId: {projectID}</h2>
    </div>
  )
}

export default AboutProject
