/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Modified by: Edward McNamara
// Created on: Sep 2020
// Modified on: Jun 2022
// This is the Menu Scene

// extends our title scene using Phaser (code that someone else has already written)
class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })
// Our backround image and button variables  
    this.menuSceneBackgroundImage = null
    this.startButton = null
    this.instructionButton = null
  }
// Initializes our title scene class and sets the background color
  init (data) { 
    this.cameras.main.setBackgroundColor('#ffffff')
  }
// Prints to the console whatever scene were on (for debugging purposes)
  preload () {
    console.log('Menu Scene')
    this.load.image('menuSceneBackground', 'assets/jungle-image.jpg')
    this.load.image('startButton', 'assets/start-button.png')
    this.load.image('instructionButton', 'assets/instruction_button.webp')
  }

  create (data) {
    // displays the background image and determines its position and size 
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground').setScale(3.00)
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2
    // displays the button in the middle of the screen and allows the user to press the button to move on to gameScene
    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startButton')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton())
    // displays the button in the middle of the screen and allows the user to press the button to move on to the instruction scen
    this.instructionButton = this.add.sprite(350, (1080 / 7) + 1, 'instructionButton').setScale(0.25)
    this.instructionButton.setInteractive({ useHandCursor: true })
    this.instructionButton.on('pointerdown', () => this.clickButtonA())
  }

  update (time, delta) {
    }
// function that takes the user to gameScene when the button is pressed
  clickButton () {
    this.scene.start('gameScene')
// function that takes the user to instructionScene when the button is pressed
  }
  clickButtonA () {
    this.scene.start('instructionScene')
  }
}
export default MenuScene 