import React, { useState, useRef, useEffect } from 'react';
import { Style, Fill, Stroke, Circle as sCircle } from 'ol/style';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
// import FromLonLat from 'ol/olProj'
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import XYZ from 'ol/source/XYZ';
import OSM from 'ol/source/OSM';
import TileWMS from 'ol/source/TileWMS';
import Tile from 'ol/layer/Tile';
import { fromLonLat, transform } from 'ol/proj';
import MultiPoint from 'ol/geom/MultiPoint';

import './map.less';

function MapWrapper(props) {
  let centerPos = transform([120.4, 27.9], 'EPSG:4326', 'EPSG:3857');
  const mapRef = useRef();
  let map = null; //地图全局变量
  useEffect(() => {
    map = new Map({
      view: new View({
        center: centerPos, //地图中心位置
        zoom: 10, //地图初始层级
        maxZoom: 40,
        minZoom: 1,
      }),
      layers: [],
      target: mapRef.current,
    });
    // let tileLayer = new TileLayer({
    //   source: new OSM(),
    // });

    const baseSource = new TileWMS({
      url: 'http://localhost:9000/geoserver/wenzhou/wms?service=WMS&version=1.1.0&request=GetMap&layers=wenzhou%3A%E6%B8%A9%E5%B7%9E%E5%B8%82_%E7%94%B5%E5%AD%90%E5%9C%B0%E5%9B%BE_Level_13&bbox=1.3316113806817628E7%2C3129045.299139047%2C1.3499581783959122E7%2C3326730.563541584&width=712&height=768&srs=EPSG%3A3857&styles=&format=application/openlayers',
      params: {
        LAYERS: '温州市_电子地图_Level_13',
        TILED: true,
      },
      serverType: 'geoserver',
    });

    const baseLayer = new Tile({
      source: baseSource,
    });

    map.addLayer(baseLayer);

    const _style = new Style({
      image: new sCircle({
        radius: 10,
        stroke: new Stroke({
          color: '#fff',
        }),
        fill: new Fill({
          color: '#3399CC',
        }),
      }),
    });
    const _feature = new Feature({
      geometry:
        // new Point(fromLonLat([120, 28])),
        new MultiPoint([
          fromLonLat([120, 28]),
          fromLonLat([120.5, 28.5]),
          fromLonLat([121, 28.5]),
        ]),
    });
    _feature.setStyle(_style);
    const _marker = new VectorLayer({
      source: new VectorSource({
        features: [_feature],
      }),
    });

    map.addLayer(_marker);
  }, []);

  // openlayers渲染容器
  return <div ref={mapRef} className="map-container"></div>;
}

export default MapWrapper;
