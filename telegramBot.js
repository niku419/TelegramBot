const axios = require('axios')
function hours12(date) { return (date.getHours() + 24) % 12 || 12}

setInterval(() => {
    var emoji = ['\xF0\x9F\x98\x8A','\xF0\x9F\x98\x83','\xF0\x9F\x98\x89','\xF0\x9F\x98\x8B','\xF0\x9F\x98\x8C','\xF0\x9F\x98\x8D','\xF0\x9F\x98\x98','\xF0\x9F\x98\x9A','\xE2\x9D\xA4']
    var randomNumber = Math.floor(Math.random() * (emoji.length + 1))
    var today = new Date()
    var time = today.getMinutes()
    var wishTime = hours12(today)-1
    console.log(time)
    if(time == 43 && (wishTime+1)!=0){
        axios.get(`https://api.telegram.org/bot1478457868:AAFwOhJTt5ypL2y6FmbEDQJR0FoDHS-Za4U/sendMessage?chat_id=931515068&text=happy%20${wishTime}%2B143%20hour${emoji[randomNumber]}`)
        return true
    }else if(time == 43 && (wishTime+1)==0){
        axios.get(`https://api.telegram.org/bot1478457868:AAFwOhJTt5ypL2y6FmbEDQJR0FoDHS-Za4U/sendMessage?chat_id=931515068&text=happy%20143%20hour${emoji[randomNumber]}`)
        return true
    }
},1000)