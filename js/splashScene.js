/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Modified by: Edward McNamara
// Created on: Sep 2020
// Modified on: Jun 2022
// This is the Splash Scene

// extends our splash scene using Phaser (code that someone else has already written)
class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'splashScene' })

    this.splashSceneBackgroundImage = null
  }
// Initializes our splash scene  and sets our backround color
  init (data) { this.cameras.main.setBackgroundColor('#ffffff')
  }
// Prints to the console whatever scene were on (for debuging purposes)
  preload () {
    console.log('Splash Scene')
    // loads the image 
    this.load.image('splashSceneBackground', './images/Immaculate.jpg')
  }

  create (data) {
    // places the splash scene in the middle of the screen
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground')
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }
// use an if statment to detemine the length of the splash scene 
  update (time, delta) {
    if (time > 4500) {
     this.scene.switch('titleScene')
    }
  }
}
export default SplashScene