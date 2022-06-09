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
  constructor () {
    super({ key: 'gameScene' })

    this.background = null
    this.monkey = null
    this.fireMissile = false
  }
// Initializes our title scene class and sets the backround color
  init (data) { this.cameras.main.setBackgroundColor('#ffffff')
  }
// Prints to the console whatever scene were on (for debuging purposes)
  preload () {
    console.log('Game Scene')
    // these are the images
    this.load.image('jungleBackground', 'assets/rainforest-image.jpg')
    this.load.image('monkey', 'assets/monkey.png')
    this.load.image('banana', 'assets/Single_Banana.gif')
    // the sound files
    this.load.audio('splat', 'assets/Splat_Sound_Effect.wav')
    
  }

  create (data) {
    // Determines the size and placment of the background image 
    this.background = this.add.image(0, 0, 'jungleBackground').setScale(3.00)
    this.background.setOrigin(0, 0)
    this.monkey = this.physics.add.sprite(1920 / 2, 1080 - 100, 'monkey').setScale(0.25)
    
// creates a group for the bananas
    this.bananaGroup = this.physics.add.group()
  }

  update (time, delta) {
    // declaring variables to control the monkey connected to keys on our keyboard(left,rigt,space)
    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    const keySpaceObj = this.input.keyboard.addKey('SPACE')
    // if statment that checks if the left aroww key is pressed, if so it moves the monkey to the left 15 pixels 
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
        this.sound.play('splat')
      }
    }
    // if statement that ensures the user can only shoot a banana when the space bar is pressed then released 
    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }
    // this creates a group function for the banana group
    this.bananaGroup.children.each(function (item) {
      item.y = item.y - 15
      if (item.y < 50) {
        item.destroy()
      }
    })
  }
}
  
export default GameScene