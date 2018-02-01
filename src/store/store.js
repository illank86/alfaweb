import { extendObservable } from 'mobx';


class ObservableListStore {
    constructor() {
        extendObservable (this, {listStore : []});
        extendObservable (this, {schedules : []});
    }
    fetchAll(clb) {        
        fetch('https://glacial-cliffs-13214.herokuapp.com/api/data/stores')
        .then(res => res.json())
        .then((stores) => {
            if(stores.error) {
                clb(stores.error)
            } else {
                this.listStore = stores;
                clb(false)
            }                      

        })
    }

    addStore(name, address, topic, clb) {
        let data = {name, address, topic};    

        fetch('https://glacial-cliffs-13214.herokuapp.com/api/data/add-store', { 
            method: "POST",                     
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },    
                    
            body: JSON.stringify(data)
        }) 
        .then((res) => res.json())
        .then((data) => {
            if(data.error) {
                console.log(data.error);
            } else {
                clb(data.message);                
                this.fetchAll((msg) => {
                    return null
                });                  
            };
         })      
    }

    getOneSchedule(id, clb) {
        fetch(`https://glacial-cliffs-13214.herokuapp.com/api/data/get-schedule/${id}`)
        .then(res => res.json())
        .then((schedule) => {  
            this.schedules = schedule;
            clb(false)
        })
    }

    saveSchedule(clb, {...myData}) {
        let datas = myData;
        
        fetch('https://glacial-cliffs-13214.herokuapp.com/api/data/add-schedule', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datas)
        })
        .then(res => res.json())
        .then(data => { 
           if(data.error) {
               clb(data.error);
           } else {
              clb(data.message);
              this.getOneSchedule(datas.id_store, (msg) => {
                  return null
              })             
           }
        })       
    }

    updateSchedule(clb, id, {...myData}) {
        let datas = myData;

        fetch(`https://glacial-cliffs-13214.herokuapp.com/api/data/update-schedule/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datas)
        })
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                clb(data.error)
            } else {
                clb(data.message);
                this.getOneSchedule(datas.id_store, (msg) => {
                    return null
                })  
            }
        })
    }


    deleteOneStore(item, clb) {
        fetch(`https://glacial-cliffs-13214.herokuapp.com/api/data/delete-store/${item}`, {
            method: 'delete'
        })
        .then(res => res.json())  
        .then((data) => {
            if(data.error) {
                clb(data.error);
            } else {
                clb(data.message);
                this.fetchAll((msg) => {
                    return null
                });  
            }                          
        });
    }
}

const store = new ObservableListStore();

export default store;