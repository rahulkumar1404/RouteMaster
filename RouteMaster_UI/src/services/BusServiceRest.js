

export default class BusServiceRest{
    constructor(){
        this.uri = "http://localhost:8980/bus";
        this.buses = [];
    }

    // Service method to fetch all buses
    async getBuses() {
        return await fetch(this.uri + "/fetchall").then(response => {
           if(!response.ok) {
               this.handleResponseError(response);
           }
           return response.json();
       }).then(data => {  
           console.log("buses data from service" + data);          
           return data;
       }).catch(error => {
           console.log("Error : "  + error.message)
       })
   }

   // Service method to Add a new bus in the database
   async saveBus(bus) {
        return await fetch(this.uri+"/add", {
            method:"POST",
            mode:"cors",
            headers: {
                "content-type" : "application/json"
            },
            body:JSON.stringify(bus)
        }).then(response => {
        if(!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
        }).catch(error => {
            console.log(error.message);
        });
    }

    // Service method to make changes in an existing bus
    async updateBus(bus){
        return await fetch(this.uri+"/update", {
            method:"PUT",
            mode:"cors",
            headers: {
                "content-type" : "application/json"
            },
            body:JSON.stringify(bus)
        }).then(response => {
        if(!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
        }).catch(error => {
            console.log("Error : " + error.message);
        });
    }

    // Service method to remove bus from database
    async deleteBus(fid){
        return await fetch(this.uri + "/remove/"+ fid, {
            method:"DELETE",
            mode:"cors"
        }).then(response => {
            if(!response.ok) {
                // this.handleResponseError(response);
                console.log(response.status);
            }
            return response.json();
        }).catch(error => {
            console.log("Error : " + error.message);
        })
    }

    // Service method to fetch buses on source, Destination and Date
    async getBusesForUser(source, destination, date) {
        return await fetch(this.uri +
             `/fetch?source=${source}&destination=${destination}&date=${date}`)
        .then(response => {
           if(!response.ok) {
               this.handleResponseError(response);
           }
           return response.json();
       }).then(data => {  
           console.log("buses data from service" + data);          
           return data;
       }).catch(error => {
           console.log("Error : "  + error.message)
       })
   }
}
