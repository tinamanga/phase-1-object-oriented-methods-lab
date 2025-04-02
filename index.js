// Step 1: Define the constructor function
function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
  
  // Step 2: Add methods to the constructor function
  BoardMember.prototype.veto = function() {
    return "No, I must disagree";
  };
  
  BoardMember.prototype.approve = function() {
    return "You can do that!";
  };
  
  BoardMember.prototype.doCharity = function() {
    return "I like to help people.";
  };
  
  BoardMember.prototype.releasePressStatement = function() {
    return "You will see great things from Scuber.";
  };
  
  BoardMember.prototype.sayHi = function() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
  };
  
  // Step 3: Create new objects using the constructor function
  const boardMember1 = new BoardMember('Alice', 'New York', 'Management');
  const boardMember2 = new BoardMember('Bob', 'California', 'Engineering');
  
  