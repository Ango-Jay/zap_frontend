export const  visualize = (args:{
    canvaRef: HTMLCanvasElement,
    canva
}) => {
    const { backgroundColor, foregroundColor } = this.props

    this.WIDTH = this.canvas.width
    this.HEIGHT = this.canvas.height
    this.CENTERX = this.canvas.width / 2
    this.CENTERY = this.canvas.height / 2

    if (!this.analyser) return

    this.analyser.fftSize = 2048
    const bufferLength = this.analyser.fftSize
    const dataArray = new Uint8Array(bufferLength)

    this.canvasCtx.clearRect(0, 0, this.WIDTH, this.HEIGHT)

    //reference this using self
    let self = this
    const draw = function () {
      self.drawVisual = requestAnimationFrame(draw)

      self.analyser.getByteTimeDomainData(dataArray)

      self.canvasCtx.fillStyle = backgroundColor
      self.canvasCtx.fillRect(0, 0, self.WIDTH, self.HEIGHT)

      self.canvasCtx.lineWidth = 2
      self.canvasCtx.strokeStyle = foregroundColor

      self.canvasCtx.beginPath()

      var sliceWidth = (self.WIDTH * 1.0) / bufferLength
      var x = 0

      for (var i = 0; i < bufferLength; i++) {
        var v = dataArray[i] / 128.0
        var y = (v * self.HEIGHT) / 2

        if (i === 0) {
          self.canvasCtx.moveTo(x, y)
        } else {
          self.canvasCtx.lineTo(x, y)
        }

        x += sliceWidth
      }

      self.canvasCtx.lineTo(self.canvas.width, self.canvas.height / 2)
      self.canvasCtx.stroke()
    }

    draw()
  }