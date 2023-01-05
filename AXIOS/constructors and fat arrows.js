/*class student{
  static count =0
  constructor(name, age, phoneNo, marks){
    this.name = name
    this.age = age 
    this.phoneNo = phoneNo
    this.marks = marks
    student.countstudent()
  }
  static countstudent(){
    return student.count++
  }
  printMarks(){
    console.log(`${this.name} has scored ${this.marks} marks`)
  }
  checkEligibility(){
    if (this.marks>40){
      console.log(`${this.name} is eligible`)
    }
    else if (this.marks<40){
      console.log(`{this.name} is not eligible`)
    }
  }
}
const s1 = new student('ram', 22, 57573545, 43)
const s2 = new student('yam', 23, 57574754, 32)
const s3 = new student('tam', 26, 57575445, 44)
const s4 = new student('bam', 25, 57554665, 56)
const s5 = new student('pam', 21, 57575466, 39)

s1.printMarks()
s1.checkEligibility()
console.log(student.countstudent()) */
class student{
  static count =0
  constructor(name, age, phoneNo, marks){
    this.name = name
    this.age = age 
    this.phoneNo = phoneNo
    this.marks = marks
    student.countstudent()
  }
  static countstudent(){
    return student.count++
  }
  printMarks(){
    console.log(`${this.name} has scored ${this.marks} marks`)
  }
  setPlacementAge(minPlacementAge){
    console.log(this);
    return (minMarks) =>{
    console.log('insidEligibleForCurrentCompany', this)
    if (this.marks>minMarks && this.age>minPlacementAge){
      console.log(this.name + 'is ready for placments')
    }
    else{
      console.log(this.name + 'is not ready for placments')
    }
  }
}}
const ram = new student('ram', 22, 57573545, 43)
const yam = new student('yam', 23, 57574754, 32)
const tam = new student('tam', 26, 57575445, 44)
const bam = new student('bam', 25, 57554665, 56)
const pam = new student('pam', 21, 57575466, 39)





ram.setPlacementAge(23)(44)