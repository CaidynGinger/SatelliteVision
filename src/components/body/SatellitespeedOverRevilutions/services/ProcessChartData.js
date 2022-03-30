export default function getScatterData(satelliteData) {
  let chartData = [];
  satelliteData.forEach((element) => {
    let satelliteName = element.name;
    let TLEData = JSON.stringify(element.line2);
    let satelliteRevolutionNumber = parseFloat(TLEData.substring(64, 68).replace(/\s/g, ''));
    let satelliteMeanMotion = parseFloat(TLEData.substring(53, 63).replace(/\s/g, ''));
    let satellite = {
        name: satelliteName,
        meanMotion: satelliteMeanMotion,
        revolutionNumber: satelliteRevolutionNumber,
    }
    chartData.push(satellite)
  });
  return chartData
}