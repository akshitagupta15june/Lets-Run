## Inspiration

Monitoring your steps and calories burned while walking with a step tracker immediately takes the guesswork out of your fitness program, and it’s something you can just turn on and forget about. 

With a step counter, not only can you track your goals, but you can set new ones too. If increasing your heart rate is part of your current fitness routine, set a specific number of steps that you must complete within a certain time frame.

Count your steps and track your workouts with Let's Run.

## What it does

Let's Run is made using micro:bit which is a pocket-sized computer that lets you get creative with digital technology.

Micro:bit has an in built accelerometer. The accelerometer on the micro:bit detects the acceleration (in milli-g) in 3 planes: x and y (the horizontal planes), and z (the vertical plane). As well as detecting acceleration, accelerometers can also detect orientation, which is used in smart phones and tablets to rotate content as you tilt the device.

If the acceleration is greater than (>) 1500, the steps variable is increased by one and show the step count on the LED display output. 1500 is the threshold – the point at which a movement will trigger a step to be counted.

Lets say if the goal is 7k steps per day. In this case, for every 100 steps done, one LED will starts to glow. As we progress for every 1000 steps you would see one row fully ON and later starts filling up the next column. 

## How we built it

micro: bit and optional battery pack is used to make this device.

## Challenges we ran into

There was a bit of challenge while fixing the device on our shoe but I was able to fix it.

## Accomplishments that we're proud of

My greatest accomplishment was making a device that can track your workouts and steps rather than carrying a mobile phone during a walk or sprint.

## What we learned

I learned about micro:bit functionalities as well as programming in GNAT Studio. I also learned how to apply thresholds to sensor data to trigger events like increasing a step counter

## What's next for Let's Run

The device is powered up using 2x 1.5V AAA batteries and with this it is expected to last for a month. The brightness of LED can be reduced more in order to get long lasting performance.

An application that displays real time data about a week's worth of workouts and steps.
