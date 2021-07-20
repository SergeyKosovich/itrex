class Game{
  constructor(){    
      this.abs=5,
      this.tractionControl=5,
      this.stabilityControl=5
  }
  setABS(num){
    if(num>5||num<1){
      console.log('use value from 1 to 5')
      return
    }
    this.abs=num;
    console.log(`ABS:${num}`); 
  }
  setTraction(num){
    if(num>5||num<1){
      console.log('use value from 1 to 5')
      return
    }
    this.tractionControl=num;
    console.log(`Traction Control:${num}`);
  }
  setStability(num) {
    if(num>5||num<1){
      console.log('use value from 1 to 5')
      return
    }
    this.stabilityControl=num;
    console.log(`Stability Control:${num}`)
  }
  Beginner(){
    console.log('set to Beginner mode')
    this.setABS(5);
    this.setTraction(5);
    this.setStability(5);
  }
  GoodDriver(){
    console.log('set to GoodDriver mode')
    this.setABS(3);
    this.setTraction(3);
    this.setStability(3);
  }
  Maniac(){
    console.log('set to Maniac mode')
    this.setABS(1);
    this.setTraction(1);
    this.setStability(1);
  }
 
}
const maniacUser=new Game;
console.log(maniacUser)
maniacUser.Maniac();
console.log(maniacUser);
maniacUser.setStability(2);
maniacUser.setABS(2);
maniacUser.setTraction(2);
console.log(maniacUser);