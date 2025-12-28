import React from 'react'

function ProfileCard({name, title}) {
  return (
    <div className="profile-card">
       <p>Hi</p>
         <h2>{name}</h2>
            <h3>{title}</h3>
    </div>
  )
}

export default ProfileCard
