/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Modified by: Edward McNamara
// Created on: Sep 2020
// Modified on: Jun 2022
// This is the Instruction Scene

class InstructionScene extends Phaser.Scene {
  constructor () {
    super({ key: 'instructionScene' })
    //  variable for the backround image
    this.instructionSceneBackgroundImage = null
    // variable for the instruction scene text
    this.instructionSceneText = null
    // style for the instruction scene text
    this.instructionSceneBodyTextStyle = { font: '45px Georgia', backgroundColor: '#29ab87', fontStyle: 'bold', fill: '#0047AB', align: 'center' }
    // creates a variable for back button
    this.backButton = null
  }
  
// Initializes our title scene class and sets the backround color
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }
// Prints to the console whatever scene were on (for debuging purposes)
  preload () {
    console.log('Instruction Scene')
    // this loads the background image
    this.load.image('instructionSceneBackground', './images/jungle-background.webp')
    // this loads the back button image
    this.load.image('backButton', './images/back_button.jpg')
  }
  
  create (data) {
    // Determines the size and placement of the background image 
    this.instructionSceneBackgroundImage = this.add.sprite(0, 0, 'instructionSceneBackground').setScale(0.5)
    this.instructionSceneBackgroundImage.x = 1920 / 2
    this.instructionSceneBackgroundImage.y = 1080 / 2
   // Determines the size and placement of the body text
    this.instructionSceneText = this.add.text(1920 / 2, 1080 / 2 , 'Welcome to Protect Your Kingdom!\nUh Oh! Someone has sent a swarm of balloons to take \nover your kingdom with their sheer numbers! \nIts your job to throw darts to pop incoming balloons!\nTry to pop 50 balloons, and you should have scared them off!\n Controls: Arrow keys to move and spacebar to shoot',
    this.instructionSceneBodyTextStyle).setOrigin(0.5)
    // makes a back button
    this.backButton = this.add.sprite(350, (1080 / 6) + 1, 'backButton').setScale(0.15)
    // this lets the user click the back  button to return to the menu scene
    this.backButton.setInteractive({ useHandCursor: true })
    this.backButton.on('pointerdown', () => this.clickButtonBack())
  }
  
  update (time, delta) {
  }
  // switches to the menu scene when the back button is clicked
  clickButtonBack () {
    this.scene.start('menuScene')
  }
}

export default InstructionScene