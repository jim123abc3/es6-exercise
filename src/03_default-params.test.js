// 03: Default parameters - basics
// To do: make all tests pass, leave the expect lines unchanged!

describe('default parameters make function parameters more flexible', () => {

  it('define it using an assignment to the parameter `function(param=1){}`', () => {
    let number = (int) => int

    //Answer
    let number = (int=0) => int

    expect(number()).toEqual(0)
  })

  it('it is not used when a value is given', () => {
    function xhr() {
      return method
    }

    //Answer
    function xhr(method) {
      return method
    }

    expect(xhr('POST')).toEqual('POST')
  })

  it('it is evaluated at run time', () => {
    let defaultValue

    function xhr(method = `value: ${defaultValue}`) {
      return method
    }
    //Answer Works only at this scope level
    defaultValue = 42

    expect(xhr()).toEqual('value: 42')
    defaultValue = 23
    //Answer
    defaultValue = 42

  })


  it('it can also be a function', () => {
    let defaultValue
    function fn(value = defaultValue()) {
      return value
    }

    expect(fn()).toEqual(defaultValue())

    //Answer ------------------------------

    function defaultValue(){return 1;}

    function fn(value = defaultValue()) {
      return value
    }

    expect(fn()).toEqual(defaultValue())

    //Answer ------------------------------
  })

})
