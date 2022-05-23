
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import QrScanner from 'qr-scanner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('qrvideo') video :HTMLVideoElement;
  //qrScanner:QrScanner;
  
  ngAfterViewInit(): void {    
   

  
  }


  async iniciarScan() {        
    //const valores = [1,2,3,6];
    
    // calculateScanRegion?: (video: HTMLVideoElement) => QrScanner.ScanRegion;
    // preferredCamera?: QrScanner.FacingMode | QrScanner.DeviceId;
    // maxScansPerSecond?: number;
    // highlightScanRegion?: boolean;
    // highlightCodeOutline?: boolean;
    // overlay?: HTMLDivElement;
    
    // returnDetailedScanResult?: true;);

    QrScanner.WORKER_PATH=".";
    try { 
      const scan = new QrScanner(this.video,(result) => {console.log(result)}, 5);    
    }
    catch(e){
      console.log("No hay code");
    }
    const tiene=await QrScanner.hasCamera()
    console.log(tiene);
    
//    console.log(this.qrScanner);
  }
  

  title = 'qrApp';
}
