import { useEffect, useRef } from "react"
import * as THREE from 'three'
import BIRDS from "vanta/dist/vanta.birds.min"

export default function BirdsBackground() {
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = BIRDS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        birdSize: 1.2,
        cohesion: 36.0,
        backgroundColor: 0x0f172a
      })
    }

    return () => {
      vantaEffect.current?.destroy()
      vantaEffect.current = null
    }
  }, [])

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 z-0"
    />
  )
}

