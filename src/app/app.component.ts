
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
    this.qrScanner = new QrScanner(video as HTMLVideoElement, this.desplegarValor, {
      onDecodeError: (error) => { },
      highlightCodeOutline: true,
      highlightScanRegion: true
    });




  }

  desplegarValor = ({ data }) => {
    this.qrScanner.stop();
    alert(data);
  }

  async iniciarScan() {
    await this.qrScanner.start()
  }

  detenerScan() {
    this.qrScanner.stop();
  }

}
