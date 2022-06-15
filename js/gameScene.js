/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Modified by: Edward McNamara
// Created on: Sep 2020
// Modified on: Jun 2022
// This is the Game Scene

// extends our title scene using Phaser (code that someone else has already written)
class GameScene extends Phaser.Scene {
  createBalloon () {
    // generates a random number between 1 and 1920 for the balloons X location;
    const balloonXLocation = Math.floor(Math.random() * 1920) + 1 
    // generates a number between 1 and 50 for the balloons velocity
    let balloonXVelocity = Math.floor(Math.random() * 50) + 1 
    // adds a minus sign in 50% of cases for the velocity of the balloon
    balloonXVelocity *= Math.round(Math.random()) ? 1 : -1
    // variable for the balloon
    const aBalloon = this.physics.add.sprite(balloonXLocation, -100, 'balloon').setScale(0.5)
    // setting the balloons velocity 
    aBalloon.body.velocity.y = 200
    aBalloon.body.velocity.x = balloonXVelocity
    this.balloonGroup.add(aBalloon)
  }
  
  constructor () {
    super({ key: 'gameScene' })
    // variables for our game scene
    this.background = null
    this.monkey = null
    this.fireMissile = false
    this.score = 0
    this.scoreText = null
    this.wins = 0
    this.winsText = null
    this.loss = 0
    this.lossText = null
    // these lines add style to the text in gameScene
    this.scoreTextStyle = { font: '65px Georgia', fill: '#ffffff', align: 'center' }
    this.winsTextStyle = { font: '65px Georgia', fill: '#ffffff', align: 'center' }
    this.lossTextStyle = { font: '65px Georgia', fill: '#ffffff', align: 'center' }
    this.gameOverText = null
    this.gameOverTextStyle = { font: '65px Georgia', fill: '#ff0000', align: 'center' }
    this.gameWinText = null
    this.gameWinTextStyle = { font: '65px Georgia', fill: '#00ff00', align: 'center' }
  }
// Initializes our title scene class and sets the backround color
  init (data) { this.cameras.main.setBackgroundColor('#ffffff')
  }
// Prints to the console whatever scene were on (for debuging purposes)
  preload () {
    console.log('Game Scene')
    // these are the images
    this.load.image('jungleBackground', 'images/jungle_background.jpg')
    this.load.image('monkey', 'images/monkey.png')
    this.load.image('banana', 'images/dart3.png')
    this.load.image('balloon', 'images/Ceramic_Bloon_Big.webp')
    // the sound files
    this.load.audio('throw', 'sounds/throwing-whip-effect.wav')
    this.load.audio('pop', 'sounds/balloon-pop.wav')
    this.load.audio('splat', 'sounds/Splat_Sound_Effect.wav')
  }

  create (data) {
    // plays the background music
    var audio = new Audio ('./sounds/background-music.mp3');
    audio.play();
    audio.loop = true;
    // Determines the size and placment of the background image 
    this.background = this.add.image(0, 0, 'jungleBackground')
    this.background.setOrigin(0, 0)
    // displays score text
    this.scoreText = this.add.text(10, 10, 'Score: ' + this.score.toString(), this.scoreTextStyle)
    // displays wins text
    this.winsText = this.add.text(300, 10, 'Wins: ' + this.wins.toString(), this.winsTextStyle)
    // displays losses text
    this.lossText = this.add.text(570, 10, 'Losses: ' + this.loss.toString(), this.lossTextStyle)
    
    this.monkey = this.physics.add.sprite(1920 / 2, 1080 - 100, 'monkey').setScale(0.25)
    
// creates a group for the bananas
    this.bananaGroup = this.physics.add.group()
// creates a group for the balloons
    this.balloonGroup = this.add.group()  
    this.createBalloon()
// collider that executes functions when a dart and a banana colide
    this.physics.add.collider(this.bananaGroup, this.balloonGroup, function (bananaCollide, balloonCollide) {
      // destroys bothe the dart and the balloon
      balloonCollide.destroy()
      bananaCollide.destroy()
      // plays a poppings noise 
      this.sound.play('pop') 
      // increments the score by 2
      this.score = this.score + 2
      this.scoreText.setText('Score: ' + this.score.toString())
      // creates 2 balloon to appear at the top of the screen
      this.createBalloon()
      this.createBalloon()
      // if statement that ends the game if 50 points is reached
    if (this.score >= 50.0) {
      // pauses the physics to stop new enemies from spawning
      this.physics.pause()
      // increments the wins by 1
      this.wins = this.wins + 1
      this.winsText.setText('Wins: ' + this.wins.toString())
      //  determines the size and placement of the win text
      this.gameWinText = this.add.text(1920 / 2, 1080 / 2, 'You won!\nClick to play again.', this.gameWinTextStyle).setOrigin(0.5)
      // makes text interactive and it takes you back to gameScene
      this.gameWinText.setInteractive({ useHandCursor: true })
      this.gameWinText.on('pointerdown', () => this.scene.start('gameScene', this.score = 0, this.wins = this.wins))
    }
      }.bind(this))
    // Collisions between ship and aliens
    this.physics.add.collider(this.monkey, this.balloonGroup, function (monkeyCollide, balloonCollide) {
      // this plays a splat sound 
      this.sound.play('splat')
      // pauses the physics to stop new enemies from spawning
      this.physics.pause()
      // destroys both the monkey and the balloon when they collide
      balloonCollide.destroy()
      monkeyCollide.destroy()
      // adds game over text when the monkey collides with a balloon
      this.gameOverText = this.add.text(1920 / 2, 1080 / 2, 'Game Over!\nClick to play again.', this.gameOverTextStyle).setOrigin(0.5)
      this.gameOverText.setInteractive({ useHandCursor: true })
      // makes text interactive so it takes you back to gameScene
      this.gameOverText.on('pointerdown', () => this.scene.start('gameScene'))
      // increments the losses by 1
      this.loss = this.loss + 1
      this.lossText.setText('Losses: ' + this.loss.toString())
      // resets score to zero 
      this.score = 0
    }.bind(this))
}

  update (time, delta) {
    // declaring variables to control the monkey connected to keys on our keyboard(left,rigt,space)
    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    const keySpaceObj = this.input.keyboard.addKey('SPACE')
    // if statment that checks if the left arrow key is pressed, if so it moves the monkey to the left 15 pixels 
    if (keyLeftObj.isDown === true) {
      this.monkey.x -= 15
      if (this.monkey.x < 0) {
        this.monkey.x = 1920
      }
    }
    // if statment that checks if the right aroww key is pressed, if so it moves the monkey to the right 15 pixels 
    if (keyRightObj.isDown === true) {
      this.monkey.x += 15
      if (this.monkey.x > 1920) {
        this.monkey.x = 0
      }
    }
    // if statment that checks if the space bar is pressed, if so it shoots a banana 
    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        this.fireMissile = true
        const aNewBanana = this.physics.add.sprite(this.monkey.x, this.monkey.y, 'banana').setScale(0.25)
        this.bananaGroup.add(aNewBanana)
        this.sound.play('throw')
      }
    }
    // if statement that ensures the user can only shoot a banana when the space bar is pressed then released 
    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }
    // This creates a group function for the banana group
    this.bananaGroup.children.each(function (item) {
      item.y = item.y - 15
      if (item.y < 50) {
        item.destroy()
      }
    })
    // creates a group function for the balloons 
    this.balloonGroup.children.each(function (item1) {
      // if statement that takes unpopped balloons to the top of the screen if they travel off the screen
      if ((item1.y > 1080) || (item1.x < 0 || item1.x > 1920)) {
        item1.y = -20
        const balloonXCoordinate = Math.floor(Math.random() * 1920) + 1 
        item1.x = balloonXCoordinate
      }
    })
  }  
}
export default GameScene