const matrix = [];

class Person {
  constructor() {
    this.house = 0;
    this.houseColor = "";
    this.pet = "";
    this.sport = "";
    this.drink = "";
    this.nationality = "";
  }
}

for (let index = 0; index < 5; index++) {
  const p = new Person();
  p.house = index;
  matrix.push(p);
}

const relation = {
  ABSOLUTE: 0,
  LEFT: 1,
  RIGHT: 2,
  ADJ: 3
};

class QuestionPart {
  constructor(category, relation, value) {
    this.category = category;
    this.relation = relation;
    this.value = value;
  }
}

class Question {
  constructor() {
    this.list = [];
  }

  add(questionPart) {
    this.list.push(questionPart);
  }
}

console.dir(matrix);

const q1 = new Question();
q1.add(new QuestionPart("house", relation.ABSOLUTE, 0));
q1.add(new QuestionPart("nationality", relation.ABSOLUTE, "NOR"));

const questions = [];

questions.push(q1);

function setAbsoluteHouses() {
  questions.forEach(question => {
    let found = -1;
    console.log(question);
    for (i = 0; i < question.list.length; i++) {
      console.log("here");
      if (
        question.list[i].category === "house" &&
        question.list[i].relation === relation.ABSOLUTE
      ) {
        found = question.list[i].relation;
        break;
      }
    }
    console.log("hello", found);
    if (found > -1) {
      console.log("HERE");
      question.forEach(questionPart => {
        console.log("setting value");
        matrix[i][questionPart.category] = questionPart.value;
      });
    }
  });
}

setAbsoluteHouses();

console.dir(matrix);
