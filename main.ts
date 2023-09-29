IrRemote.onPressEvent(RemoteButton.Ok, function () {
    magicbit.MotorStopAll()
})
IrRemote.onPressEvent(RemoteButton.UP, function () {
    magicbit.MotorRun(magicbit.Motors.M1, -100)
    magicbit.MotorRun(magicbit.Motors.M2, -100)
    magicbit.MotorRun(magicbit.Motors.M3, 100)
    magicbit.MotorRun(magicbit.Motors.M4, 100)
})
IrRemote.onPressEvent(RemoteButton.A, function () {
    magicbit.rgb().showColor(neopixel.rgb(100, 100, randint(0, 255)))
})
IrRemote.onPressEvent(RemoteButton.B, function () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
})
IrRemote.onPressEvent(RemoteButton.C, function () {
    music.playTone(262, music.beat(BeatFraction.Double))
})
basic.showIcon(IconNames.Happy)
IrRemote.init(Pins.P1)
