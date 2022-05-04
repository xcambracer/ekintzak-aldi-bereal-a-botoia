input.onButtonPressed(Button.A, function () {
    hasiera = 1
})
input.onButtonPressed(Button.B, function () {
    hasiera = 1
})
let hasiera = 0
DFRobotMaqueenPlus.I2CInit()
hasiera = 0
basic.forever(function () {
    while (hasiera == 0) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.CYAN)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.PINK)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        basic.pause(1000)
    }
})
basic.forever(function () {
    while (hasiera == 0) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.PINK)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        basic.pause(1000)
    }
})
