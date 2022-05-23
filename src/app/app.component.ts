
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import QrScanner from 'qr-scanner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('qrvideo') video :HTMLVideoElement | undefined;
  
  
  ngAfterViewInit(): void {
    
  }


  async iniciarScan() {        
    const camaras =await QrScanner.listCameras();
    const tiene=await QrScanner.hasCamera()
    alert(tiene);    
  }


  title = 'qrApp';
}
