function doSomething (num: number) {
	
}
let num = randint(0, 10)
let num1 = randint(11, 20)
let num2 = randint(0, 20)
let num3 = randint(20, 30)
let num4 = randint(10, 30)
game.splash("Least to greatest")
game.splash([
num,
num1,
num2,
num3,
num4
])
let list = [
num < num1,
num1 < num2,
num2 < num3,
num3 < num4
]
game.splash(list)
game.reset()
