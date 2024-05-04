// import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  // styleUrl: './map.component.css'
  styles: [':host { width: 100%; height: 100%; display: block; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit {
  // map: Map | undefined;

  // ngOnInit(): void {
  //   this.map = new Map({
  //     view: new View({
  //       center: [2.4131, 46.2276], // Coordonnées du centre de la France
  //       zoom: 6, // Niveau de zoom pour afficher la France
  //     }),
  //     layers: [
  //       new TileLayer({
  //         source: new OSM(),
  //       }),
  //     ],
  //     target: 'ol-map'
  //   });
  // }

  @Input() map !: Map;
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    this.map.setTarget(this.elementRef.nativeElement);
  }
}