/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Modified by: Edward McNamara
// Created on: Sep 2020
// Modified on: Jun 2022
// This is the Splash Scene

// extends our title scene using Phaser (code that someone else has already written)
class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })

    this.splashSceneBackgroundImage = null
  }
// Initializes our title scene class and sets the backround color
  init (data) { this.cameras.main.setBackgroundColor('#ffffff')
  }
// Prints to the console whatever scene were on (for debuging purposes)
  preload () {
    console.log('Menu Scene')
  }

  create (data) {
  }

  update (time, delta) {
    }
  }

export default MenuScene