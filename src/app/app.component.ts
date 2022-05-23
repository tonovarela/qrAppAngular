
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import QrScanner from 'qr-scanner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('qrvideo') video :HTMLVideoElement = new HTMLVideoElement();
  qrScanner:QrScanner | undefined;
  
  ngAfterViewInit(): void {
    this.qrScanner = new QrScanner(this.video, (result:string) => alert('decoded qr code:'+ result),);
  }


  async iniciarScan() {        
    const camaras =await QrScanner.listCameras();
    const tiene=await QrScanner.hasCamera()
    await this.qrScanner!.start()    
  }


  title = 'qrApp';
}
