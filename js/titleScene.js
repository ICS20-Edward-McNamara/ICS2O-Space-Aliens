/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Modified by: Edward McNamara
// Created on: Sep 2020
// Modified on: Jun 2022
// This is the Splash Scene

// extends our title scene using Phaser (code that someone else has already written)
class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene' })
// the background image and title scene text
    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
// gives the title scene text unique styling 
    this.titleSceneTextStyle = { font: '200px Times', fill: '#f5f542', align: 'center' }
  }
// Initializes our title scene class and sets the backround color
  init (data) { this.cameras.main.setBackgroundColor('#ffffff')
  }
// Prints to the console whatever scene were on (for debuging purposes)
  preload () {
    console.log('Title Scene')
// Loads our background image and gives it an ID (titleSceneBackground)   
    this.load.image('titleSceneBackground', './images/cartoon-jungle-background.webp')
  }

  create (data) {
    // determines the size and position of our background image 
    this.titleSceneBackgroundImage =  this.add.sprite(0, 0, 'titleSceneBackground').setScale(3.00)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2
    // determines the size and position of our title scene text
    this.titleSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, 'Protect Your Kingdom', this.titleSceneTextStyle).setOrigin(0.5)
  }

  update (time, delta) {
    // if statement that allows the title scene to stay on screen until 6000 ms has elapsed since the start of the program
    if (time > 12000) {
      this.scene.switch('menuScene')
    }
  }
}
export default TitleScene