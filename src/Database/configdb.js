const connection = {
  dialect: 'mysql',
  host: 'localhost',
  username:'root',
  passowrd:'123Mysql',
  database: 'esystem',
  define:{
    timestamps:true,
    underscored:true,
  }
}

export default connection;