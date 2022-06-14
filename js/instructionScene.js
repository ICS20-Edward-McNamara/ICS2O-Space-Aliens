/* global phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
// Modified 2022 Rory Mackay
//
// Created by: Rory Mackay
// Date: June 2022
// This is an instruction scene

class InstructionScene extends Phaser.Scene {
  constructor () {
    super({ key: 'instructionScene' })
    // creates a variable for backround image
    this.instructionSceneBackgroundImage = null
    // create variable for body text
    this.instructionSceneBodyText = null
    // style for the instruction scene body text
    this.instructionSceneBodyTextStyle = { font: '45px Georgia', backgroundColor: '#29ab87', fontStyle: 'bold', fill: '#0047AB', align: 'center' }
    // create variable for back button
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
    this.instructionSceneBodyText = this.add.text(1920 / 2, 1080 / 2 , 'Welcome to Protect Your Kingdom!\nUh Oh! Someone has sent a swarm of balloons to take \nover your kingdom with their sheer numbers! \nIts your job to throw darts to pop incoming balloons!\nTry to pop 50 balloons, and you should have scared them off!\n Controls: Arrow keys to move and spacebar to shoot',
    this.instructionSceneBodyTextStyle).setOrigin(0.5)
    // makes a back button
    this.backButton = this.add.sprite(350, (1080 / 6) + 1, 'backButton').setScale(0.15)
    // takes the user back to the menuScene
    this.backButton.setInteractive({ useHandCursor: true })
    this.backButton.on('pointerdown', () => this.clickButtonBack())
  }
  
  update (time, delta) {
  }
  // switch to menuScene and play button sound on back button clicked
  clickButtonBack () {
    this.scene.start('menuScene')
  }
}

export default InstructionScene