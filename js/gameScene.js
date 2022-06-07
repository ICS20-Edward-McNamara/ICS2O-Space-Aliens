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
    
    
  }

  create (data) {
    this.background = this.add.image(0, 0, 'jungleBackground').setScale(3.00)
    this.background.setOrigin(0, 0)
    this.monkey = this.physics.add.sprite(1920 / 2, 1080 - 100, 'monkey').setScale(0.25)
  }

  update (time, delta) {
    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    
    if (keyLeftObj.isDown === true) {
      this.monkey.x -= 15
      if (this.monkey.x < 0) {
        this.monkey.x = 1920
      }
    }
    if (keyRightObj.isDown === true) {
      this.monkey.x += 15
      if (this.monkey.x > 1920) {
        this.monkey.x = 0
      }
    }
  }
}
  
export default GameScene