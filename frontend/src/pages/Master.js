import React, { useRef } from 'react'
import Button from '../components/Button'
import { services } from '../feathers'
import MembersCountForm from '../components/MembersCountForm'

const Master = ({ history, ...props }) => {
  const handleSubmit = async votersCount => {
    const room = await services.rooms.create({ votersCount })
    if (typeof navigator.share !== 'undefined') {
      navigator.share({
        title: 'Invitación a votar!',
        text: 'Hola! te invito a votar',
        url: `http://localhost:1234/${room.slug}`
      })
    }
    history.push(`/${room.slug}`)
  }
  return (
    <div className="">
      <MembersCountForm onSubmit={handleSubmit} />
    </div>
  )
}

export default Master
