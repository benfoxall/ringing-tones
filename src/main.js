export const ringEU = audioCtx => {

  const oscillator = audioCtx.createOscillator()
  const gainNode = audioCtx.createGain()

  oscillator.connect(gainNode)

  oscillator.start()

  return gainNode
}
