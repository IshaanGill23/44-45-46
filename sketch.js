var back_ground
var space_ship
var space_shipImg
var vx =0
var vy =0
var g =0.05
var ground
var space_ship_crash, space_ship_land ,space_ship_left,space_ship_right,space_ship_thrust
var fuel =100

function draw() {
  background(back_ground)
  drawSprites()
  push()
  fill(222)
  textSize(23)
  text("vertical velocity: "+round(vy),12,19)
  text("fuel: "+fuel,800,25)
  text("horizontal velocity:"+round(vx),12,45)
  pop()
  vy+=g
  space_ship.position.y+=vy
  space_ship.position.x+=vx
  space_ship.collide(ground)
}


function setup() {
  createCanvas(1000,700)
  frameRate(80)
  timer=1500
  
  space_ship_thrust.frameDelay =5
  space_ship_right.frameDelay =5
  space_ship_left.frameDelay =5

  space_ship = createSprite(400,400)
  space_ship.addImage(space_shipImg)
  space_ship.addAnimation("thrusting", space_ship_thrust)
  space_ship.addAnimation("landing", space_ship_land)
  space_ship.addAnimation("crashing", space_ship_crash)
  space_ship.addAnimation("left",space_ship_left)
  space_ship.addAnimation("right",space_ship_right)
  
  space_ship.scale=0.2
  ground = createSprite(45,650,3000,10)
  space_ship.setCollider("circle",0,0,70)
  ground.visible =false

  rectMode(CENTER)
  textSize(50)
}

function preload() {
  space_shipImg = loadImage("normal.png")
  back_ground = loadImage("bg_sur.png")
  space_ship_thrust = loadAnimation("b_thrust_1.png","b_thrust_2.png","b_thrust_3.png")
  space_ship_land = loadAnimation("landing1.png","landing2.png","landing_3.png")
  space_ship_crash = loadAnimation("crash1.png","crash2.png","crash3.png")
  space_ship_left = loadAnimation("left_thruster_1.png","left_thruster_2.png")
  space_ship_right = loadAnimation('right_thruster_1.png',"right_thruster_2.png")
  
  space_ship_thrust.playing=true
  space_ship_thrust.looping =false
  //space_ship_crash.looping =false
  //space_ship_land.looping =false
  space_ship_left.looping =false
  space_ship_right.looping = false
}
function keyPressed() {
  if (keyCode===32) {
    upwardThrust()
    space_ship.changeAnimation("thrusting")
    space_ship_thrust.nextFrame()
  }
  if (keyCode===RIGHT_ARROW) {
    space_ship.changeAnimation("right")
    right_thrust()
  }
  if (keyCode===LEFT_ARROW) {
    space_ship.changeAnimation("left")
    left_thrust()
  }

}

function upwardThrust() {
  vy = -5
  fuel -= 1
}
function right_thrust() {
  vx += 0.6
  fuel -= 1
}
function left_thrust() {
  vx -=0.6
  fuel -= 1
}
