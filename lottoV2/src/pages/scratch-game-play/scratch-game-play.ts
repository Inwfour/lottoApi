import { Component, ViewChild,ViewChildren, Renderer,QueryList } from '@angular/core';
import { NavController, Platform, normalizeURL, Content } from 'ionic-angular';
import { Ticket } from '../../models/ticket';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { GlobalVarible } from '../../app/models';
import { HttpClient,HttpHeaders } from '@angular/common/http'
/**
 * Generated class for the ScratchGamePlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-scratch-game-play',
  templateUrl: 'scratch-game-play.html',
})
export class ScratchGamePlayPage {
  ticket:Ticket;
  picCount:number = 1;
  @ViewChildren('imageCanvas') canvas: QueryList<any>;
  canvasElement: any[] = new Array(9);
  selectedBlock: number[] = new Array();
  isSelected:boolean = false;
  isDone:boolean = false;
 
  saveX: number;
  saveY: number;
  selectedColor = '#9e2956';
 
  colors = [ '#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3' ];
 
  // Make Canvas sticky at the top stuff
  @ViewChild(Content) content: Content;

 

  constructor(public navCtrl: NavController, public renderer: Renderer, private plt: Platform,private shared:SharedDataProvider,public http:HttpClient) {
    this.ticket = this.shared.Ticket;
  }

  ionViewDidEnter() {
    // https://github.com/ionic-team/ionic/issues/9071#issuecomment-362920591
    // Get the height of the fixed item
    
    let scroll = this.content.getScrollElement();
 
    // Add preexisting scroll margin to fixed container size

  }

  ionViewDidLoad() {
    let i = 0;
    this.canvas.forEach((child) => {
    //child.stuff = 'y' 
    this.canvasElement[i] = child.nativeElement;
    //this.canvasElement.width = this.plt.width() + '';
    this.canvasElement[i].width = 100;
    this.canvasElement[i].height = 100;
    let ctx = this.canvasElement[i].getContext('2d');
    
    ctx.fillStyle = "#666";
    ctx.fillRect(0,0,this.canvasElement[i].width, this.canvasElement[i].height);
    i++;
    })


    // Set the Canvas Element and its size
    // this.canvasElement = this.canvas.nativeElement;
    // //this.canvasElement.width = this.plt.width() + '';
    // this.canvasElement.width = 100;
    // this.canvasElement.height = 100;
    // let ctx = this.canvasElement.getContext('2d');
    // ctx.fillStyle = "#666";
    // ctx.fillRect(0,0,this.canvasElement.width, this.canvasElement.height);
  }

  selectColor(color) {
    this.selectedColor = color;
  }

  startDrawing(ev,idx:number) {

    this.isSelected = true;
    var canvasPosition = this.canvasElement[idx].getBoundingClientRect();
    this.saveX = ev.touches[0].pageX - canvasPosition.x;
    this.saveY = ev.touches[0].pageY - canvasPosition.y;
  
    if(this.picCount <=5 ){
      this.canvasElement[idx].style.background = "url('../../assets/card/"+this.ticket.num[this.picCount-1]+".png')";
      this.picCount++;
      this.selectedBlock.push(idx);
        if(this.picCount>5){
          this.isDone = true;
          //this.revealCard()
          this.showResult();
        }
      }
    
      
  }

  moved(ev,idx:number) {

    var canvasPosition = this.canvasElement[idx].getBoundingClientRect();
    let ctx = this.canvasElement[idx].getContext('2d');
    
    let currentX = ev.touches[0].pageX - canvasPosition.x;
    let currentY = ev.touches[0].pageY - canvasPosition.y;
   
    ctx.lineJoin = 'round';
    ctx.strokeStyle = this.selectedColor;
    ctx.lineWidth = 20;

    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath();
    ctx.moveTo(this.saveX, this.saveY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();
   
    ctx.stroke();
   
    this.saveX = currentX;
    this.saveY = currentY;

  }

  revealCard(){
    for(let i=0 ; i<this.selectedBlock.length;i++){
    let ctx = this.canvasElement[this.selectedBlock[i]].getContext('2d');
    ctx.clearRect(0, 0, this.canvasElement[i].width, this.canvasElement[i].height);
    }
  }

  showResult(){
    this.ticket.isplayed = true;
    this.http.post(GlobalVarible.host + "/api/Ticket/Edit", JSON.stringify(this.ticket), GlobalVarible.httpOptions)
    .subscribe(data => {
      // this.navCtrl.pop();
    });
  }
  
}
