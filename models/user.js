/*Este modelo permite crear un documento en Mongo DB para el manejo de los usuarios*/
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Schema = mongoose.Schema;
const mongooseSoftDelete = require('mongoose-delete');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'Los nombres son requeridos']
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'Los apellidos son requeridos']
    },
    userName: {
        type: String,
        unique: true,
        required: [true, 'El nombre del Usuario es requerido'],
    },
    password: {
        type: String,
        required: [true, 'La contraseña es requerida']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'El correo del Usuario es requerido']
    },
    dateOfBirth: {
        type: Date,
        trim: true,
        required: [true, 'La fecha de nacimiento es requerida']
    },
    checkTerms: {
        type: String,
        trim: true,
        required: [true, 'Debe aceptar los terminos']
    },
}, {timestamps: true });

userSchema.pre('save', function(next){
    if(this.isNew || this.isModified('password')){
        const document = this;

        bcrypt.hash(document.password, saltRounds, (err, hashedPassword) =>{
            if(err){
                next(err);
            }else{
                document.password = hashedPassword;
                next();
            }
        });
    }else{
        next();
    }
})

userSchema.statics.isCorrectPassword =  function(candidatePassword, userPassword, callback){
     bcrypt.compare(candidatePassword, userPassword, function(err, same){
        console.log('candidatePassword :>> ', candidatePassword);
        console.log('this.password :>> ', userPassword);
        if(err){
            callback(err);
        }else{
            callback(err, same);
        }
    });
}



module.exports =  mongoose.model('User', userSchema);
