//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
  constructor(name, mass, scores) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }
  addScore(newScore) {
    this.scores.push(newScore);
  }
  average() {
    let sum = 0;
    for (let index = 0; index < this.scores.length; index++) {
      sum += this.scores[index];
    }
    const average = sum / this.scores.length;
    return Math.round(average * 10) / 10;
  }
  status(average) {
    if (average >= 90) {
      return "Accepted";
    } else if (average >= 80 && average <= 89) {
      return "Reserve";
    } else if (average >= 70 && average <= 79) {
      return "Probationary";
    } else if (average < 70) {
      return "Rejected";
    }
  }
}

let candidate1 = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let candidate2 = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let candidate3 = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);
console.log(candidate1);
console.log(candidate2);
console.log(candidate3);
candidate1.addScore(83);
console.log(candidate1);
console.log(candidate2.average());
console.log(
  `${
    candidate1.name
  } earned an average test score of ${candidate1.average()}% and has a status of ${candidate1.status(
    candidate1.average()
  )}.`
);
console.log(
  `${
    candidate2.name
  } earned an average test score of ${candidate2.average()}% and has a status of ${candidate2.status(
    candidate2.average()
  )}.`
);
console.log(
  `${
    candidate3.name
  } earned an average test score of ${candidate3.average()}% and has a status of ${candidate3.status(
    candidate3.average()
  )}.`
);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
function booster(candidate, status) {
  let count = 0;
  if (status === "Accepted") {
    while (candidate.average() < 90) {
      count += 1;
      candidate.addScore(100);
    }
  }
  if (status === "Reserve") {
    while (candidate.average() < 80) {
      count++;
      candidate.addScore(100);
    }
  }
  return count;
}
console.log(
  "The number of tests added to boost: " + booster(candidate3, "Reserve")
);
