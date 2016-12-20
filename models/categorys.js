"use strict";

module.exports = (sequelize,DataTypes)=>{
	const Categorys = sequelize.define("Categorys",{
		categoryId:{
			type:DataTypes.INTEGER,
			primaryKey: true,
      		autoIncrement: true
		},
		categoryName:{
			type:DataTypes.STRING,
			allowNull:false
		}
	})
	return Categorys;
}