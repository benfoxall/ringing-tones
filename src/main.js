export const ringEU = audioCtx => {

  const oscillator = audioCtx.createOscillator()
  oscillator.frequency.value = 425
  const gainNode = audioCtx.createGain()

  oscillator.connect(gainNode)

  oscillator.start()

  gainNode.gain.value = 0

  const ring = () => {
    const now = audioCtx.currentTime
    gainNode.gain.linearRampToValueAtTime(1, now + 0.03)
    gainNode.gain.linearRampToValueAtTime(1, now + 1)
    gainNode.gain.linearRampToValueAtTime(0, now + 1.03)
  }

  ring()

  const interval = setInterval(ring, 4000)

  return {
    connect: gainNode.connect.bind(gainNode),
    disconnect: (...args) => {
      clearInterval(interval)  
      return gainNode.disconnect.apply(gainNode, args)
    }
  }
}
