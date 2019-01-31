const Player = require('../models/players');

module.exports = {

    get: (params) =>{
        return new Promise((resolve, reject)=>{
            Player.find(params)
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
            Player.findById(id)
                .then(data =>{
                    resolve(data);
                })
                .catch(err=>{
                    // reject(err);
                    reject(new Error(`The Player ${id} does not found`));
                })
        })
    },

    
    post: (params) => {
        return new Promise((resolve, reject)=>{
            Player.create(params)
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
            Player.findByIdAndUpdate(id, params, {new: true})
                .then(data=>{
                    resolve(data);
                })
                .catch(err=>{
                    reject(new Error('Player can not be updated.'));
                })
        })
    },

    delete: (id) => {
        return new Promise((resolve, reject)=>{
            Player.findByIdAndDelete(id)
                .then(data=>{
                    resolve(data)
                })
                .catch(err => {
                    reject(new Error('Player can not be deleted.'))
                })
        });
    }
};