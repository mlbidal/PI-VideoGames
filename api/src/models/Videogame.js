const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
        type: DataTypes.UUID,                       
        defaultValue: DataTypes.UUIDV4,
        allowNull: false, 
        primaryKey: true,  
      },
    description:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
    image:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
    released:{
        type: DataTypes.STRING,
      },
    rating:{
        type: DataTypes.FLOAT,
      },
    platforms:{
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false,
      },
    createdInDb:{ //Para cuando se haga la distincion entre lo que trae la api y lo que trae la db.
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      }
      // Mi videojuego de la db va a tener la propiedad createInDb y todo el resto no.
  });
  
};
