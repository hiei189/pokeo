import React, { useRef, useState } from 'react'
import Button from './Button'
import Select from './Select'

const MembersCountForm = ({ onSubmit }) => {
  const [selectedCount, setSelectedCount] = useState(5)
  const handleSubmit = event => {
    event.preventDefault()
    onSubmit(selectedCount)
  }

  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <label className="block mt-4" htmlFor="voters-count">
        ¿Cuántas personas ponen puntos?
      </label>
      <Select value={selectedCount} onChange={event => setSelectedCount(event.target.value)} />
      <Button size="small" className="mt-8 text-sm">
        Invitar
      </Button>
    </form>
  )
}

export default MembersCountForm
