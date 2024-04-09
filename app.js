const mongoose = require ("mongoose");
const url_bd = 'mongodb://localhost:27017/utma'

mongoose.connect(url_bd)
.then(()=>{
    console.log("Conexion exitosa")
})
.catch((err)=>{
    console.log("No sirvio")
})

const userSchemas = new mongoose.Schema(
    {
        name: {
            type: String
        },
        ape_pat:{
            type: String
        },
        ape_mat: {
            type: String
        },
        fec_nac: {
            type: Date
        },
        sexo: {
            type: String
        },
        lastcharcter: {
            type: String
        },

    }
)

const users = new mongoose.model('users',userSchemas);