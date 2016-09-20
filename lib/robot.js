'use strict'

class Robot {
  constructor() {
    this.coordinates = [0, 0]
    this.bearing = 'north'
  }

  orient(direction) {
    if(['east', 'west', 'north', 'south'].includes(direction)) {
      this.bearing = direction
    } else {
      throw new Error('Invalid Robot Bearing')
    }
  }

  turnRight() {
    if (this.bearing === 'north') {
      this.orient('east')
    } else if (this.bearing === 'south') {
      this.orient('west')
    } else if (this.bearing === 'east') {
      this.orient('south');
    } else if (this.bearing === 'west') {
      this.orient('north');
    }
  }

  turnLeft() {
    if (this.bearing === 'north') {
      this.orient('west')
    } else if (this.bearing === 'south') {
      this.orient('east')
    } else if (this.bearing === 'east') {
      this.orient('north');
    } else if (this.bearing === 'west') {
      this.orient('south');
    }
  }

  advance() {
    if (this.bearing == 'north') {
      this.coordinates[1] += 1;
    } else if (this.bearing == 'south') {
      this.coordinates[1] -= 1;
    } else if (this.bearing == 'east') {
      this.coordinates[0] += 1;
    } else if (this.bearing == 'west') {
      this.coordinates[0] -= 1;
    }
  }

  at(x, y) {
    this.coordinates = [x, y]
  }

  place(object) {
    this.coordinates = [object.x, object.y]
    this.bearing = object.direction
  }

  instructions(string) {
    var translations = []
    var arr = string.split('')

    arr.forEach(character => {
      if (character === 'L') {
        translations.push('turnLeft')
      } else if (character === 'R') {
        translations.push('turnRight')
      } else if (character === 'A') {
        translations.push('advance')
      }
    })

    return translations
  }

  evaluate(string) {
    this.instructions(string).forEach((command) => {
      this[command]()
      // self.send("turn_left")
    }, this)
  }

  // evaluate(string) {
  //   debugger
  //   // this.instructions(string).forEach(command => {

  //     // this.instructions(command)
  //   })
  // }
}