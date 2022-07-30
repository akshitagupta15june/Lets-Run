let steps = 0
basic.showNumber(0)
basic.forever(function on_forever() {
    
    if (input.acceleration(Dimension.Strength) > 1500) {
        steps += 1
        basic.showNumber(steps)
    }
    
})
