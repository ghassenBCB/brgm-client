// import { Component } from '@angular/core';
import { Component, OnInit, VERSION } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import Feature from 'ol/Feature';
import OSM from 'ol/source/OSM';
import XYZ from 'ol/source/XYZ';
// import Stamen from 'ol/source/Stamen';
import { fromLonLat } from 'ol/proj';
import { Icon, Style } from 'ol/style';
import VectorSource from 'ol/source/Vector';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import Point from 'ol/geom/Point';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  map!: Map;

  ngOnInit(): void {
    this.map = new Map({
      view: new View({
        // center: fromLonLat([10, 53.55]),
        // zoom: 12,
        // center: fromLonLat([2.35, 48.85]), // Centre de Paris (longitude, latitude)
        center: fromLonLat([1.9, 47.9]), // Coordonnées d'Orléans (longitude, latitude)
        zoom: 5.5, // Zoom pour afficher toute la France
      }),
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://tile.jawg.io/jawg-streets/{z}/{x}/{y}.png?access-token=sWmX5SwjXmDHtQNDFmI7CyUgBqUvRzxpT6CM5sSbBLqxd3bpJxNNAZ2O4Rivf1Eo',
          }),
        }),
        // this.createMarkers(),
        /* new TileLayer({
          source: new OSM(),
        }),
        new TileLayer({
          source: new Stamen({
            layer: 'watercolor',
          }),
        }), */
      ],
      target: 'ol-map',
    });
  }
}
