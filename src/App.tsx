import React from 'react'
import { useState } from 'react'

export function App() {
  const [hue, setHue] = useState('180')
  const [sat, setSat] = useState('50')
  const [light, setLight] = useState('50')

  function handleHueRange(event: React.FormEvent<HTMLInputElement>) {
    setHue(event.currentTarget.value)
  }

  function handleSatRange(event: React.FormEvent<HTMLInputElement>) {
    setSat(event.currentTarget.value)
  }

  function handleLightRange(event: React.FormEvent<HTMLInputElement>) {
    setLight(event.currentTarget.value)
  }

  const newBackgroundColor = `hsl(${hue}, ${sat}%,${light}%)`
  const newStyle = { backgroundColor: newBackgroundColor }

  return (
    <div style={newStyle}>
      <h1>
        hsl({hue},{sat}%,{light}%)
      </h1>
      <p>
        Hue
        <input
          id="hue"
          type="range"
          name="hue"
          min="0"
          max="360"
          onInput={handleHueRange}
          value={hue}
        />
      </p>
      <p>
        Saturation
        <input
          id="sat"
          type="range"
          min="0"
          max="100"
          onInput={handleSatRange}
          value={sat}
        />
      </p>
      <p>
        Lightness
        <input
          id="light"
          type="range"
          min="0"
          max="100"
          onInput={handleLightRange}
          value={light}
        />
      </p>
    </div>
  )
}
