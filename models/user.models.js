const bcryptjs = require('bcryptjs')
const db = require('../data/database')

class User {
    constructor(email,password,fullname,street,postal,city){
        this.email = email;
        this.password = password;
        this.fullname = fullname;
        this.address = {
            street,
            postal,
            city,
        }
    }

    async signUp(){
        const hashPassword = await bcryptjs.hash(this.password,12)

        await db.getDB().collection("user").insertOne({
            email: this.email,
            password: hashPassword,
            name: this.fullname,
            address: this.address
        });
    }
}

module.exports = User