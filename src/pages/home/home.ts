import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [
    {"id":1, "name":"첫번째 item"},
    {"id":2, "name":"두번째 item"},
    {"id":3, "name":"세번째 item"},
  ];

  disabledSwitch = false;
  username:any;

  constructor(public navCtrl: NavController) {
    this.username = "아이오닉";
  }

  itemSelected(item){
    alert(item.id);
  }
  clickButton(event) {
    console.log(event.clientX+ ", " + event.clientY);
    this.navCtrl.push("bindPage");
  }


}
