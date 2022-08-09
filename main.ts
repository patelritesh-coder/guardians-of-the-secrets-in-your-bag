let Light_Value = 0
basic.forever(function () {
    Light_Value = pins.analogReadPin(AnalogPin.P1)
    if (Light_Value >= 100) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(100)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
    basic.pause(100)
})
