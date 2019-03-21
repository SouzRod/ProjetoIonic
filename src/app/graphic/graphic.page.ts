import { Http } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.page.html',
  styleUrls: ['./graphic.page.scss'],
})
export class GraphicPage implements OnInit {

  private url = 'https://charts-pesadao.herokuapp.com/chart';

  ChartLegend = true;

  DatasRandom: any;
  DatasBar: any;
  DatasDoughnut: any;

  ChartType: string;
  ChartLabels = [];

  constructor(public navCtrl: NavController, private http: Http) { }

  getGrafico(_id: string) {
    if (_id === '') {
      this.getGraficos(_id)
        .subscribe(data => {
          this.DatasRandom = data.json();
        });
    } else if (_id <= '1') {
      this.getGraficos(_id)
        .subscribe(data => {
          this.DatasBar = data.json();
        });
    } else if (_id >= '2') {
      this.getGraficos(_id)
        .subscribe(data => {
          this.DatasDoughnut = data.json();
        });
    }
  }

  getGraficos(_id: string) {
    if (_id === '') {
      return this.http.get(`${this.url}`);
    } else {
      return this.http.get(`${this.url}/${_id}`);
    }
  }

  calc(tipo: string) {
    if (tipo === 'bar') {
      this.getGrafico('1');
    } else if (tipo === 'doughnut') {
      this.getGrafico('2');
    } else if (tipo === 'random') {
      this.getGrafico('');
    }
  }

  getGraficoRandom(_id: string) {
    if (_id === '5') {
      this.getGraficos(_id)
        .subscribe(data => {
          this.DatasRandom = data.json();
        });
    } else if (_id <= '4') {
      this.getGraficos(_id)
        .subscribe(data => {
          this.DatasRandom = data.json();
        });
    } else if (_id >= '0') {
      this.getGraficos(_id)
        .subscribe(data => {
          this.DatasRandom = data.json();
        });
    }
  }

  trocaGrafico(tipo: string) {
    this.getGraficoRandom(tipo);
  }

  ngOnInit() {
  }

}
