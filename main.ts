OrientBit.enableEncoder(
DigitalPin.P0,
DigitalPin.P1,
16,
14
)
OLED12864_I2C.init(60)
basic.forever(function () {
    maqueen.motorStop(maqueen.Motors.M2)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
    OLED12864_I2C.showString(
    0,
    0,
    "L:      ",
    1
    )
    OLED12864_I2C.showNumber(
    4,
    0,
    OrientBit.getwheelPulseCount(OrientBit.wheelSide.left),
    1
    )
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
    OLED12864_I2C.showString(
    0,
    1,
    "R:      ",
    1
    )
    OLED12864_I2C.showNumber(
    4,
    1,
    OrientBit.getwheelPulseCount(OrientBit.wheelSide.right),
    1
    )
    basic.pause(500)
})
