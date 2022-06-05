/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This is the Splash Scene

// extends our title scene using Phaser (code that someone else has already written)
class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene' })

    this.splashSceneBackgroundImage = null
  }
// Initializes our title scene class and sets the backround color
  init (data) { this.cameras.main.setBackgroundColor('#ffffff')
  }
// Prints to the console whatever scene were on (for debuging purposes)
  preload () {
    console.log('Title Scene')
  }

  create (data) {
  }

  update (time, delta) {
    }
  }

export default TitleScene