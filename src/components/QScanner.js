import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
<script src="https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.4/html5-qrcode.min.js" integrity="sha512-k/KAe4Yff9EUdYI5/IAHlwUswqeipP+Cp5qnrsUjTPCgl51La2/JhyyjNciztD7mWNKLSXci48m7cctATKfLlQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

function QScanner(){

  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5, //frames per second
    });
  
    scanner.render(success, error);
  
    function success(result){
      scanner.clear();
      setScanResult(result);
    }
  
    function error(err){
      console.warn(err);
    }
  }, []);
  

  return (
    <div>
      { scanResult
      ? <div>Success: <a href={scanResult}>{scanResult}</a></div>
      : <div id="reader"></div>
      }
    </div>
  );
}
export default QScanner;
