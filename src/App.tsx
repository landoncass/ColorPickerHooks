import React from 'react'
import { useState } from 'react'

export function App() {
  const [hue, setHue] = useState(randomNumber(0, 360))
  const [sat, setSat] = useState(randomNumber(0, 100))
  const [light, setLight] = useState(randomNumber(0, 100))
  const [alpha, setAlpha] = useState(randomNumber(0, 1.0))

  function randomNumber(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function handleHueRange(event: React.FormEvent<HTMLInputElement>) {
    setHue(parseInt(event.currentTarget.value))
  }

  function handleSatRange(event: React.FormEvent<HTMLInputElement>) {
    setSat(parseInt(event.currentTarget.value))
  }

  function handleLightRange(event: React.FormEvent<HTMLInputElement>) {
    setLight(parseInt(event.currentTarget.value))
  }

  function handleAlphaRange(event: React.FormEvent<HTMLInputElement>) {
    setAlpha(parseInt(event.currentTarget.value))
  }

  const newBackgroundColor = `hsl(${hue}, ${sat}%,${light}%, ${alpha})`
  const newStyle = { backgroundColor: newBackgroundColor }

  return (
    <div style={newStyle} className="mainDiv">
      <div className="picker">
        <h1>
          HSLA({hue},{sat}%,{light}%,{alpha}
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
        <p>
          Alpha
          <input
            id="alpha"
            type="range"
            min="0"
            max="1"
            step=".01"
            onInput={handleAlphaRange}
            value={alpha}
          />
        </p>
        <button
          onClick={(event) => {
            setHue(randomNumber(0, 360))
            setSat(randomNumber(0, 100))
            setLight(randomNumber(0, 100))
            setAlpha(randomNumber(0, 1))
          }}
        >
          Click me for a random color!
        </button>
      </div>
    </div>
  )
}
