import React from 'react'
import { useState } from 'react'

export function App() {
  const [hue, setHue] = useState(180)
  const [sat, setSat] = useState(50)
  const [light, setLight] = useState(50)

  function handleHueRange() {
    setHue(hue)
  }

  function handleSatRange() {
    setSat(sat + 1)
  }

  function handleLightRange() {
    setLight(light + 1)
  }

  const newBackgroundColor = `hsl(this.hue, this.sat,this.light )`
  const newStyle = { backgroundColor: newBackgroundColor }

  return (
    <div>
      <p>
        Hue
        <input id="hue" type="range" name="hue" min="0" max="360" />
      </p>
      <p>
        Saturation
        <input id="sat" type="range" min="0" max="100" />
      </p>
      <p>
        Lightness
        <input id="light" type="range" min="0" max="100" />
      </p>
    </div>
  )
}
