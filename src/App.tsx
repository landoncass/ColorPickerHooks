import React from 'react'
import { useState } from 'react'

export function App() {
  const [hue, setHue] = useState(180)
  const [sat, setSet] = useState(50)
  const [light, setLight] = useState(50)
  const newBackgroundColor = `hsl(this.hue, this.sat,this.light )`
  const newStyle = { backgroundColor: newBackgroundColor }

  return (
    <div>
      <p>
        H
        <input id="hue" type="range" step="1" value={hue} min="0" max="360" />
      </p>
      <p>
        S
        <input id="sat" type="range" step="1" value={sat} min="0" max="100" />
      </p>
      <p>
        L
        <input
          id="light"
          type="range"
          step="1"
          value={light}
          min="0"
          max="100"
        />
      </p>
    </div>
  )
}
