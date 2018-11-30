import { Component, ViewChild,ViewChildren, Renderer,QueryList } from '@angular/core';
import { NavController, Platform, normalizeURL, Content,ModalController } from 'ionic-angular';
import { User } from '../../models/user';
import { Ticket } from '../../models/ticket';
import { History } from '../../models/history';
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
  @ViewChild('pointer') pointer :any;
  @ViewChild('artBoard') artBoard :any;
  @ViewChild('dust') dust :any;
  canvasElement: any[] = new Array(9);
  oldCanvasElement:any;
  selectedBlock: number[] = new Array();
  isSelected:boolean[] = [false,false,false,false,false,false,false,false,false];
  isDone:boolean = false;
  openRemain:number = 5;
 
  saveX: number;
  saveY: number;

/////
textAward: string;
coinAward: number;
chanceCoin: number = 0;
rand: any;
setnumber: any;
NumScratch: number[];
time: string = new Date().toLocaleTimeString();
date: string = new Date().toLocaleDateString();
user: User;
history: History;
sl: string = "sl";
ansgame: any;
gamedetail: any = "Scratch Poker";
count: number;
countsl: number;
countSerialsl: number;
ticketAmount: number;
noHistory:any;

/////
  selectedColor = '#9e2956';
 
  colors = [ '#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3' ];
 
  // Make Canvas sticky at the top stuff
  @ViewChild(Content) content: Content;

 

  constructor(public navCtrl: NavController, public renderer: Renderer, private plt: Platform,private shared:SharedDataProvider,public http:HttpClient,public modalCtrl: ModalController) {
    this.ticket = this.shared.Ticket;
    this.user = this.shared.User;
    this.history = this.shared.History;
    this.ticket.refid = this.user.id;
    this.history.refid = this.user.id;

  }

  ionViewDidEnter() {
    this.history.game = "sl";
    this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/GetticketGame/sl")
      .subscribe((data) => {
        this.countSerialsl = data.length;

      });

    this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getticket/" + this.user.id + "/sl")
      .subscribe((data) => {
        this.countsl = data.length;
      });


    this.http.get<User>(GlobalVarible.host + "/api/User/Getdoc/" + this.user.id)
      .subscribe((data) => {
        this.user = data;
      });
    // https://github.com/ionic-team/ionic/issues/9071#issuecomment-362920591
    // Get the height of the fixed item
    
    let scroll = this.content.getScrollElement();
 
    // Add preexisting scroll margin to fixed container size

  }

  ionViewDidLoad() {
    this.http.get<User>(GlobalVarible.host + "/api/User/Getdoc/" + this.user.id)
    .subscribe((data) => {
      this.user = data;
    });
    let i = 0;
    let j = 0
    this.canvas.forEach((child) => {
    //child.stuff = 'y' 
    this.canvasElement[i] = child.nativeElement;
    //this.canvasElement.width = this.plt.width() + '';
    this.canvasElement[i].width = 100;
    this.canvasElement[i].height = 100;
    let ctx = this.canvasElement[i].getContext('2d');
    
    ctx.fillStyle = "#666";
    ctx.fillRect(0,0,this.canvasElement[i].width, this.canvasElement[i].height);
//     var img = document.createElement('img');
//     img.onload = function() {
//      ctx.drawImage(img, 0, 0);
// };
// img.src="../../assets/imgs/artBoard.jpg";
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

    this.http.get<History[]>(GlobalVarible.host + "/api/History/GetHistory/" + this.user.id + "/2")
    .subscribe((data) => {
      this.noHistory = data.length;
    });
  }








  award9Scratch() {
    this.rand = (Math.floor((Math.random() * 5 + 8))).toString();
    console.log(this.rand)
    this.setnumber = this.rand;
    switch (this.setnumber) {
      case "8": {
        this.NumScratch = [2, 1, 35, 28, 51];
        this.textAward = "Scratch Award 9";
        this.coinAward = 1;
        console.log(this.NumScratch);
        break;
      } case "9": {
        this.NumScratch = [44, 40, 35, 31, 21];
        this.textAward = "Scratch Award 9";
        this.coinAward = 1;
        console.log(this.NumScratch);
        break;
      } case "10": {
        this.NumScratch = [22, 37, 27, 17, 9];
        this.textAward = "Scratch Award 9";
        this.coinAward = 1;
        console.log(this.NumScratch);
        break;
      } case "11": {
        this.NumScratch = [13, 1, 35, 18, 52];
        this.textAward = "Scratch Award 9";
        this.coinAward = 1;
     
        console.log(this.NumScratch);
        break;
      } case "12": {
        this.NumScratch = [37, 38, 21, 11, 3];
        this.textAward = "Scratch Award 9";
        this.coinAward = 1;
       
        console.log(this.NumScratch);
        break;
      }
      default: {
   
        break;
      }
    }
  }
  award8Scratch() {
    this.rand = (Math.floor((Math.random() * 5 + 13))).toString();
    console.log(this.rand)
    this.setnumber = this.rand;
    switch (this.setnumber) {
      case "13": {
        this.NumScratch = [2, 22, 28, 11, 35];
        this.textAward = "Scratch Award 8";
        this.coinAward = 2;

        console.log(this.NumScratch);
        break;
      } case "14": {
        this.NumScratch = [22, 11, 21, 24, 9];
        this.textAward = "Scratch Award 8";

        console.log(this.NumScratch);
        break;
      } case "15": {
        this.NumScratch = [1, 50, 35, 11, 40];
        this.textAward = "Scratch Award 8";
        this.coinAward = 2;
       
        console.log(this.NumScratch);
        break;
      } case "16": {
        this.NumScratch = [19, 20, 27, 14, 45];
        this.textAward = "Scratch Award 8";
        this.coinAward = 2;
     
        console.log(this.NumScratch);
        break;
      } case "17": {
        this.NumScratch = [52, 24, 25, 38, 13];
        this.textAward = "Scratch Award 8";
        this.coinAward = 2;
     
        console.log(this.NumScratch);
        break;
      }
      default: {

        break;
      }
    }
  }
  award7Scratch() {
    this.rand = (Math.floor((Math.random() * 4 + 18))).toString();
    console.log(this.rand)
    this.setnumber = this.rand;
    switch (this.setnumber) {
      case "18": {
        this.NumScratch = [4, 16, 17, 38, 43];
        this.textAward = "Scratch Award 7";
        this.coinAward = 5;

        console.log(this.NumScratch);
        break;
      } case "19": {
        this.NumScratch = [46, 24, 33, 2, 20];
        this.textAward = "Scratch Award 7";
        this.coinAward = 5;
     
        console.log(this.NumScratch);
        break;
      } case "20": {
        this.NumScratch = [26, 39, 1, 18, 52];
        this.textAward = "Scratch Award 7";
        this.coinAward = 5;
   
        console.log(this.NumScratch);
        break;
      } case "21": {
        this.NumScratch = [36, 23, 10, 38, 7];
        this.textAward = "Scratch Award 7";
        this.coinAward = 5;
     
        console.log(this.NumScratch);
        break;
      } default: {
   
        break;
      }
    }
  }
  award6Scratch() {
    this.rand = (Math.floor((Math.random() * 3 + 22))).toString();
    console.log(this.rand)
    this.setnumber = this.rand;
    switch (this.setnumber) {
      case "22": {
        this.NumScratch = [2, 29, 17, 44, 19];
        this.textAward = "Scratch Award 6";
        this.coinAward = 10;
      
        console.log(this.NumScratch);
        break;
      } case "23": {
        this.NumScratch = [20, 21, 35, 49, 11];
        this.textAward = "Scratch Award 6";
        this.coinAward = 10;

        console.log(this.NumScratch);
        break;
      } case "24": {
        this.NumScratch = [35, 23, 24, 12, 52];
        this.textAward = "Scratch Award 6";
        this.coinAward = 10;
   
        console.log(this.NumScratch);
        break;
      } default: {
  
        break;
      }
    }
  }
  nowardScratch() {
    this.rand = (Math.floor((Math.random() * 7 + 1))).toString();
    console.log(this.rand)
    this.setnumber = this.rand;
    switch (this.setnumber) {
      case "1": {
        this.NumScratch = [1, 32, 42, 13, 5, 22, 25, 39, 40];
        this.textAward = "No Award";

        console.log(this.NumScratch);
        break;
      }
      case "2": {
        this.NumScratch = [26, 19, 8, 28, 36, 22, 25, 39, 40];
        this.textAward = "No Award";

        console.log(this.NumScratch);
        break;
      }
      case "3": {
        this.NumScratch = [6, 2, 39, 40, 22, 22, 25, 39, 40];
        this.textAward = "No Award";
  
        console.log(this.NumScratch);
        break;
      }
      case "4": {
        this.NumScratch = [24, 52, 30, 21, 5, 22, 25, 39, 40];
        this.textAward = "No Award";

        console.log(this.NumScratch);
        break;
      }
      case "5": {
        this.NumScratch = [22, 12, 33, 14, 2, 22, 25, 39, 40];
        this.textAward = "No Award";
 
        console.log(this.NumScratch);
        break;
      } case "6": {
        this.NumScratch = [23, 29, 37, 40, 38, 22, 25, 39, 40];
        this.textAward = "No Award";

        console.log(this.NumScratch);
        break;
      } case "7": {
        this.NumScratch = [41, 31, 35, 23, 51, 22, 25, 39, 40];
        this.textAward = "No Award";

        console.log(this.NumScratch);
        break;
      }
    }
  }
  newCheckTicketScratch() {
    for (let i = 1; i <= 1; i++) {
      this.ticketAmount = (this.countsl + 1);
      if (this.ticketAmount == 5) {
        console.log(this.ticketAmount, " reward 9")
        this.award9Scratch();
        this.postticket();
      } else if (this.ticketAmount == 10) {
        console.log(this.ticketAmount, " reward 8")
        this.award8Scratch();
        this.postticket();
      } else if (this.ticketAmount % 930 == 0) {
        console.log(this.ticketAmount, "reward 6")
        this.award6Scratch();
        this.postticket();
        this.ticketAmount = 0;
      } else if (this.ticketAmount % 155 == 0) {
        console.log(this.ticketAmount, "reward 7")
        this.award7Scratch();
        this.postticket();
      } else if (this.ticketAmount % 30 == 0) {
        console.log(this.ticketAmount, "reward 8")
        this.award8Scratch();
        this.postticket();
      } else if (this.ticketAmount % 5 == 0) {
        console.log(this.ticketAmount, "reward 9")
        this.award9Scratch();
        this.postticket();
      }
      else {
        console.log("no reward ")
        this.nowardScratch();
        this.postticket();
      }
    }
  }

  postticket() {
    this.ticket.setnumber = this.setnumber;
    this.ticket.num = this.NumScratch;
    this.ticket.isplayed = false;
    this.ticket.date = this.date;
    this.ticket.time = this.time;
    this.ticket.textAward = this.textAward;
    this.ticket.coinAward = this.coinAward;

      this.ticket.no = this.countsl + 1;
      this.ticket.serialnumber = this.countSerialsl + 1;

    this.http.post(GlobalVarible.host + "/api/Ticket/Create", JSON.stringify(this.ticket), GlobalVarible.httpOptions)
      .subscribe(data => {

      });
  }




  selectColor(color) {
    this.selectedColor = color;
  }

  startDrawing(ev,idx:number,isFront:boolean) {
   // if(!isFront){
    this.pointer.nativeElement.style.visibility = "visible";
    
    var canvasPosition = this.canvasElement[idx].getBoundingClientRect();
    this.saveX = ev.touches[0].pageX - canvasPosition.x;
    this.saveY = ev.touches[0].pageY - canvasPosition.y;
    
    this.dust.nativeElement.style.position = "absolute";
    this.pointer.nativeElement.style.position = "absolute";
    this.pointer.nativeElement.style.top = ev.touches[0].clientY-50+"px";
    this.pointer.nativeElement.style.left = ev.touches[0].clientX+"px";
    if(this.picCount<=9 && !this.isSelected[idx]){
    this.canvasElement[idx].style.background = "url('../../assets/card/"+this.ticket.num[this.picCount-1]+".png')";
    
    }
  
    if(this.picCount <=5 && !this.isSelected[idx]){
   

      //this.canvasElement[idx].style.boxSizing = "border-box";
      this.canvasElement[idx].style.border = "4px solid rgb(255, 87, 51)";
      this.isSelected[idx] = true;
      this.selectedBlock.push(idx);
      this.openRemain--;
      this.picCount++;
      if(this.picCount>5){
        this.isDone = true;
        //this.revealCard()
        //this.showResult();
      }
      }

     if(this.picCount >5 && !this.isSelected[idx]){
      this.picCount++;
   
    }
      
   // }else{
      
    //}
  }

  moved(ev,idx:number,isFront:boolean) {
  //  if(!isFront){
    var canvasPosition = this.canvasElement[idx].getBoundingClientRect();
    let ctx = this.canvasElement[idx].getContext('2d');
    this.dust.nativeElement.style.visibility = "visible";
    let currentX = ev.touches[0].pageX - canvasPosition.x;
    let currentY = ev.touches[0].pageY - canvasPosition.y;
    this.dust.nativeElement.style.top = ev.touches[0].clientY-50+"px";
    this.dust.nativeElement.style.left = ev.touches[0].clientX-100+"px";
    this.pointer.nativeElement.style.top = ev.touches[0].clientY-50+"px";
    this.pointer.nativeElement.style.left = ev.touches[0].clientX+"px";
    ctx.lineJoin = 'bevel';
    ctx.strokeStyle = this.selectedColor;
    ctx.lineWidth = 11;

    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath();
    ctx.moveTo(this.saveX, this.saveY);
    ctx.lineTo(currentX, currentY);
    //ctx.clearRect(currentX,currentY,7,7);
    ctx.closePath();
   
    ctx.stroke();
   
    this.saveX = currentX;

  }
  end(ev,idx:number){
    this.pointer.nativeElement.style.visibility = "hidden";
    this.dust.nativeElement.style.visibility = "hidden";
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
    });
    this.http.get<Ticket>(GlobalVarible.host + "/api/Ticket/Get/" + this.ticket.id)
    .subscribe((data) => {
      this.shared.Ticket = data;    
    });
  }
  nextModal(){
    var modalPage = this.modalCtrl.create('ModalSuccessPage', { selectedBlock: this.ticket.num }); modalPage.present(); 
    this.navCtrl.pop();
  }
  openModal(){
    this.showResult();
   
    //Free Ticket
    if(this.ticket.coinAward == 1){
    this.history.date = this.date;
    this.history.time = this.time;
    this.history.type = 2;
    this.history.no = this.noHistory + 1;
    this.history.img = "../../assets/imgs/Ticket.png"

      this.history.detailgame = this.gamedetail;
      this.history.amouth = "Free 1";
      this.newCheckTicketScratch();

    this.http.post(GlobalVarible.host + "/api/History/Create", JSON.stringify(this.history), GlobalVarible.httpOptions)
      .subscribe(data => {
        this.nextModal();
      });
    }else if(this.ticket.coinAward < 1){
      this.nextModal();

    }//Free Coin
      else if(this.ticket.coinAward > 1) {
        
        this.history.date = this.date;
        this.history.time = this.time;
        this.history.type = 2;
        this.history.no = this.noHistory + 1;
        this.history.img = "../../assets/imgs/Coin.png"
    
          this.history.detailgame = this.gamedetail;
          this.history.amouth = "Free "+ this.ticket.coinAward;
    
        this.http.post(GlobalVarible.host + "/api/History/Create", JSON.stringify(this.history), GlobalVarible.httpOptions)
          .subscribe(data => {
          });
  
          this.http.get<User>(GlobalVarible.host + "/api/User/Getdoc/" + this.user.id)
          .subscribe((data) => {
            this.user = data;
            this.user.coin = (Number)(this.user.coin) + (Number)(this.ticket.coinAward);
            this.http.post(GlobalVarible.host + "/api/User/Edit", JSON.stringify(this.user), GlobalVarible.httpOptions)
              .subscribe(data => {
                this.nextModal();
              }); //END API EDIT
          }); //END API SEARCH
        
      
    }

  }
 


}
