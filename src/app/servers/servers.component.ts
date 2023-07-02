import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl:'./servers.component.html', 
  // template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverName = '';
  allowNewServers = false;
  serverCreationStatus: String = "No Server was crerated" ;
  serverCreated = false;
  btnPressed = false;
  servers = ['item1', 'item2', 'item3'];


  //Assignment 1
  userName = '';
  allowBtnPress = false;


  //Assignment 2
  menuVisable = false;
  btnClickCount: number = 0;
  btnClicks = [];
  btnColor2:  String = 'lightblue';

  menuToggle(){
    //Menu visibilty togggle
    this.menuVisable = this.menuVisable === false? true: false;
    //Btn increments
    this.btnClickCount += 1;
    // if(this.btnClickCount >= 4){
    //   this.btnClicks.push('click'+ this.btnClickCount);
    // }
    this.btnClicks.push('click'+ this.btnClickCount);
    
  }

  

  emptyString(){
    if(this.userName.length == 0){
      this.allowBtnPress = false;
    }else{
      this.allowBtnPress = true;
    }
  }

  resetUsername(){
    this.userName = '';
  }

  constructor(){
    setTimeout(() => {
      this.allowNewServers = true;
    },  2000);

   
  }

  ngOnInit(){

  }

  /**
   * Initializes 'Servers' component vars
   */
  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created!';
    this.servers.push(this.serverName);
  }

  onInputServerName(event: Event){
    this.serverName = (<HTMLInputElement> event.target).value;
  }

}
