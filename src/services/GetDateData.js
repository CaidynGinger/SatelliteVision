export default function getDateData(satelliteData) {
    const todaysYear = ((new Date().getFullYear()) -2000).toString()
    let yearList= []
    satelliteData.forEach(element => {
        let TLEData = element.line1.split(' ')
        let satelliteYear = TLEData[2].substring(0,2)
        if ( satelliteYear < todaysYear){
            yearList.push("20"+ satelliteYear)
        } else {
            yearList.push("19"+ satelliteYear)
        }
    });
    return yearList
}