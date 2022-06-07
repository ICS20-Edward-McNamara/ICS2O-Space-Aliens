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
    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = { font: '200px Times', fill: '#f5f542', align: 'center' }
  }
// Initializes our title scene class and sets the backround color
  init (data) { this.cameras.main.setBackgroundColor('#ffffff')
  }
// Prints to the console whatever scene were on (for debuging purposes)
  preload () {
    console.log('Title Scene')
    this.load.image('titleSceneBackground', './assets/cartoon-jungle-background.webp')
  }

  create (data) {
    this.titleSceneBackgroundImage =  this.add.sprite(0, 0, 'titleSceneBackground').setScale(3.00)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2
    this.titleSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, 'Protect Your Bananas', this.titleSceneTextStyle).setOrigin(0.5)
  }

  update (time, delta) {
    if (time > 6000) {
      this.scene.switch('menuScene')
    }
  }
}
export default TitleScene