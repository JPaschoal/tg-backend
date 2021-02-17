import {Sequelize} from 'sequelize';

const sequelize = new Sequelize ('esystem','root','123Mysql', {
  host:'localhost',
  dialect:'mysql'
});




  try {
    await sequelize.authenticate();
     console.log('Successfull Connection');
  }catch(error){
    console.log('connection error');
  }



export default sequelize;