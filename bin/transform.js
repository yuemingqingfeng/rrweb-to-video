
class Transform {

    events = []

    constructor(events) {
        this.trns(events)        
    }
    trns(events) {
        for(let entry of events) {
            let data = []
            try{
               data = JSON.parse(entry.data)
               console.log(data)
            }catch(err){
                console.error("Error parsing")
            }
            if(data&&data.length>0){
                for(let event of data){
                    this.events.push(event)
                }
            }
        }
    }

}

module.exports = Transform