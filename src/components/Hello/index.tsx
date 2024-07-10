import { useState } from 'react'
import data from './data'
const Hello = () => {
  const [count, setCount] = useState<number>(0)
  const addCount = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h1 className="underline font-bold text-3xl">Hello World!</h1>
      <button onClick={addCount}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      {data.map((item) => (
        <div key={item.id}>
          <div className="text-green-500">{item.name}</div>
          <div className="text-blue-500">{item.url}</div>
        </div>
      ))}
    </div>
  )
}

export default Hello
