import { React, useEffect } from 'react'

export default function Map() {

      // 지도 표시하기
      useEffect(() => {
        const map = new window.naver.maps.Map('map', {
          center: new window.naver.maps.LatLng(37.3595704, 127.105399),
          zoom: 10
        });
      }, []);

    return (
        <div className='map--box'>
            <div id="map" style={{ width: '100vw', height: '100vh' }}></div>
        </div>
    );
}