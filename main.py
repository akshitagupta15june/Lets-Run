steps = 0
basic.show_number(0)

def on_forever():
    global steps
    if input.acceleration(Dimension.STRENGTH) > 1500:
        steps += 1
        basic.show_number(steps)
basic.forever(on_forever)
