import React from 'react'
import useBearStore from './BearStore'

const BearButton: React.FC = () => {
  const increasePopulation = useBearStore((state) => state.increase)
  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => increasePopulation(1)}
      >
        +
      </button>
    </>
  )
}

export default BearButton
