
import QrScanner from 'qr-scanner';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  qrScanner: QrScanner;
  tieneCamara: boolean = false;

  ngAfterViewInit(): void {
    this.inicializaCamara();
  }

  async inicializaCamara() {
    this.tieneCamara = await QrScanner.hasCamera();
    if (!this.tieneCamara) {
      return;
    }
    const video = document.getElementById('qrvideo');
    try {
      this.qrScanner = new QrScanner(video as HTMLVideoElement, this.desplegarValor, {
        onDecodeError: (error) => { alert(error) },
        highlightCodeOutline: true,
        highlightScanRegion: true
      });
    }
    catch (error) {
      alert(error)
    }
      
    
    
  }

   desplegarValor=(result)=> {
    this.qrScanner.stop();
    alert(result);
  }

   iniciarScan() {
    this.qrScanner.start().then((e) => { alert('Scanning') }).catch((e) =>alert(e))
  }

}
