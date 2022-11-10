const OPERANDS = ['*', '/', '+', '-']
const FUNCTIONS = ['del', 'reset', 'equals']
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']



export default class Calculator {
  constructor(screen) {
    this.screen = screen
    this.operand1 = "0"
    this.operand2 = "0"
    this.result = null
    this.operator = null
    this.resultScreen = false
    this.updateScreen()
  }

  input(n) {
    if (!OPERANDS.concat(FUNCTIONS, DIGITS).includes(n)) return
    if (n === 'reset') return this.reset()
    if (n === 'del') return this.delete()
    if (n === 'equals') return this.equals()

    if (this.resultScreen && OPERANDS.includes(n)) {
      this.operand1 = this.result
      this.result = null
      this.resultScreen = false 
      this.operator = n
      this.updateScreen()
      return
    }

    this.resultScreen = false

    if (OPERANDS.includes(n)) {
      if (this.operator) {
        return this.equals()
      }
      this.operator = n
      this.updateScreen()
      return
    }

    this.operator ? 
      this.operand2 = this.process(n, this.operand2) : 
      this.operand1 = this.process(n, this.operand1)
    
    this.updateScreen()
  }

  process(n, activeOperand) {
    if (n === '.' && activeOperand.includes('.')) return activeOperand
    if (activeOperand === '0') return n
    return activeOperand + n
  }

  updateScreen() {
    if (this.resultScreen) {
      this.screen.innerText = this.format(this.result) 
      return
    }
    if (this.operator) {
      this.screen.innerText = this.format(this.operand2)
      return 
    }
    this.screen.innerText = this.format(this.operand1)
  }

  equals() {
    if (!this.operator) return
    let result
    switch(this.operator) {
      case("*"): 
        result = parseFloat(this.operand1) * parseFloat(this.operand2)
        break
      case("/"): 
        result = parseFloat(this.operand1) / parseFloat(this.operand2)
        break
      case("+"): 
        result = parseFloat(this.operand1) + parseFloat(this.operand2)
        break
      case("-"): 
        result = parseFloat(this.operand1) - parseFloat(this.operand2)
        break
    }
    
    this.result = result
    this.resultScreen = true
    this.reset(true)
    this.updateScreen()
  }

  delete() {
    if (this.operator) {
      this.operand2.length === 1 ?
        this.operand2 = "0" :
        this.operand2 = this.operand2.slice(0, this.operand2.length - 1)
    }
    else {
      this.operand1.length === 1 ?
        this.operand1 = "0" :
        this.operand1 = this.operand1.slice(0, this.operand1.length - 1)
    }
    this.updateScreen()
  }

  reset(result = false) {
    this.operand1 = "0"
    this.operand2 = "0"
    this.operator = null
    this.resultScreen = result
    this.updateScreen()
  }

  formatter = new Intl.NumberFormat()

  format(string) {
    let split = string.toString().split('.')
    let int = this.formatter.format(split[0])
    return `${int}${split[1] ? `.${split[1].slice(0, 8)}` : ''}`
  }
}