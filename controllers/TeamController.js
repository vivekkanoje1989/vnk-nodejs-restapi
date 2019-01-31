const Team = require('../models/team');

module.exports = {

    get: (params) =>{
        return new Promise((resolve, reject)=>{
            Team.find(params)
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err.message);
            })
        })
    },
    
    getById: (id) =>{
        return new Promise((resolve, reject)=>{
            Team.findById(id)
                .then(data =>{
                    resolve(data);
                })
                .catch(err=>{
                    // reject(err);
                    reject(new Error(`The team ${id} does not found`));
                })
        })
    },

    
    post: (params) => {
        return new Promise((resolve, reject)=>{
            Team.create(params)
                .then(data =>{
                    resolve(data);
                })
                .catch(err =>{
                    // reject(err);
                    reject(new Error('Team can not be created.'))
                })
        })
    },
    
    put: (params, id) => {
        return new Promise((resolve, reject)=>{
            Team.findByIdAndUpdate(id, params, {new: true})
                .then(data=>{
                    resolve(data);
                })
                .catch(err=>{
                    reject(new Error('Team can not be updated.'));
                })
        })
    },

    delete: (id) =>{
        return new Promise((resolve, reject)=>{
            Team.findByIdAndDelete(id)
                .then(data=>{
                    resolve(data);
                })
                .catch(err =>{
                    reject(new Error('Team can not be deleted.'));
                })
        })
    }

  }