import {createConnection} from "typeorm";

createConnection().catch((err) => {
    console.error("BD connection fail")
    console.error(err)
  })

