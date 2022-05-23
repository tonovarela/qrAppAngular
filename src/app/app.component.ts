
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import QrScanner from 'qr-scanner';
//import QrScanner from 'node_modules/qr-scanner/src/qr-scanner.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('qrvideo') video1 :HTMLVideoElement;
  qrScanner:QrScanner;
  
  ngAfterViewInit(): void {    
   
  
  
  }


  async iniciarScan() {            
      //const scan = new QrScanner(this.video,(result) => {console.log(result)});        
      //const video = document.getElementById('qr-video');
    //  const videoContainer = document.getElementById('video-container');  
    const tiene=await QrScanner.hasCamera()
    console.log(tiene);    
//    console.log(this.qrScanner);
  }
  

  title = 'qrApp';
}
