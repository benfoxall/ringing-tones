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

// TODO - this is canada too… hmm not sure of the best way to do this
export const ringUS = audioCtx => {

  const oscillator = audioCtx.createOscillator()
  oscillator.frequency.value = 440
  const oscillator2 = audioCtx.createOscillator()
  oscillator2.frequency.value = 480

  const gainNode = audioCtx.createGain()

  oscillator.connect(gainNode)
  oscillator2.connect(gainNode)

  oscillator.start()

  gainNode.gain.value = 0

  const ring = () => {
    const now = audioCtx.currentTime
    gainNode.gain.linearRampToValueAtTime(1, now + 0.03)
    gainNode.gain.linearRampToValueAtTime(1, now + 2)
    gainNode.gain.linearRampToValueAtTime(0, now + 2.03)
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


// AND Republic of Ireland, Australia, New Zealand, and many Commonwealth nations
export const ringUK = audioCtx => {

  const oscillator = audioCtx.createOscillator()
  oscillator.frequency.value = 400
  const oscillator2 = audioCtx.createOscillator()
  oscillator2.frequency.value = 450

  const gainNode = audioCtx.createGain()

  oscillator.connect(gainNode)
  oscillator2.connect(gainNode)

  oscillator.start()

  gainNode.gain.value = 0

  const ring = () => {
    const now = audioCtx.currentTime
    gainNode.gain.linearRampToValueAtTime(1, now + 0.01)
    gainNode.gain.linearRampToValueAtTime(1, now + 0.4)
    gainNode.gain.linearRampToValueAtTime(0, now + 0.41)
    gainNode.gain.linearRampToValueAtTime(0, now + 0.6)
    gainNode.gain.linearRampToValueAtTime(1, now + 0.61)
    gainNode.gain.linearRampToValueAtTime(1, now + 1)
    gainNode.gain.linearRampToValueAtTime(0, now + 1.01)
  }

  ring()

  const interval = setInterval(ring, 3000)

  return {
    connect: gainNode.connect.bind(gainNode),
    disconnect: (...args) => {
      clearInterval(interval)
      return gainNode.disconnect.apply(gainNode, args)
    }
  }
}


export const ringJP = audioCtx => {

  const oscillator = audioCtx.createOscillator()
  oscillator.frequency.value = 400

  const gainNode = audioCtx.createGain()

  oscillator.connect(gainNode)

  oscillator.start()

  gainNode.gain.value = 0

  const ring = () => {
    const now = audioCtx.currentTime
    gainNode.gain.linearRampToValueAtTime(1, now + 0.01)
    gainNode.gain.linearRampToValueAtTime(1, now + 1)
    gainNode.gain.linearRampToValueAtTime(0, now + 1.01)

    /* TODO:
    The tone has a frequency of 400 ± 20 Hz, and the amplitude modulation is 15 to 20Hz
    */
  }

  ring()

  const interval = setInterval(ring, 3000)

  return {
    connect: gainNode.connect.bind(gainNode),
    disconnect: (...args) => {
      clearInterval(interval)
      return gainNode.disconnect.apply(gainNode, args)
    }
  }
}
