import React, { useEffect, useState } from 'react'

type ColorType = 'hex' | 'rgb'

const RandomColor: React.FC = () => {
  const [color, setColor] = useState<string>('#FFFFFF')
  const [typeOfColor, setTypeOfColor] = useState<ColorType>('hex')
  const randomColorUtility = (length: number): number => {
    return Math.floor(length * Math.random())
  }
  const handleCreateRandomHexColor = () => {
    const hex: (string | number)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]
    }
    setColor(hexColor)
  }
  const handleCreateRandomRGBColor = () => {
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)
    setColor(`rgb(${r}, ${g}, ${b})`)
  }
  useEffect(() => {
    typeOfColor === 'hex' ? handleCreateRandomHexColor() : handleCreateRandomRGBColor()
  }, [typeOfColor])
  return (
    <div style={{ width: '100vw', height: '100vh', background: color }}>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        onClick={() => setTypeOfColor('hex')}
      >
        Create Random Hex Color
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        onClick={() => setTypeOfColor('rgb')}
      >
        Create Random RGB Color
      </button>
      <div>
        <h3>{typeOfColor === 'hex' ? 'Hex Color' : 'RGB Color'}</h3>
        <h3>{color}</h3>
      </div>
    </div>
  )
}
export default RandomColor
