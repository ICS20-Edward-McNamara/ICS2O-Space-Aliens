/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This is the Splash Scene

// extends our splash scene using Phaser (code that someone else has already written)
class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'splashScene' })

    this.splashSceneBackgroundImage = null
  }
// Initializes our splash scene class and sets our backround color
  init (data) { this.cameras.main.setBackgroundColor('#ffffff')
  }
// Prints to the console whatever scene were on (for debuging purposes)
  preload () {
    console.log('Splash Scene')
     this.load.image('splashSceneBackground', './assets/Immaculate.jpg')
  }

  create (data) {
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground')
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }

  update (time, delta) {
    if (time > 5000) {
     this.scene.switch('titleScene')
    }
  }
}

export default SplashScene