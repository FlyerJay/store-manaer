"use strict";

module.exports = (sequelize,DataTypes)=>{
	const Goods = sequelize.define("Goods",{
		goodId:{
			type:DataTypes.INTEGER,
			primaryKey: true,
      		autoIncrement: true
		},
		categoryId:{
			type:DataTypes.INTEGER,
			allowNull:false,
			comment:"类目Id"
		},
		goodName:{
			type:DataTypes.STRING(20),
			allowNull:false
		},
		description:{
			type:DataTypes.STRING(100),
			allowNull:true
		},
		salePrice:{
			type:DataTypes.DOUBLE,
			allowNull:false
		},
		marketPrice:{
			type:DataTypes.DOUBLE,
			allowNull:true,
			comment:"市场价"
		},
		place:{
			type:DataTypes.STRING(20),
			allowNull:true,
			comment:"产地"
		},
		inventory:{
			type:DataTypes.INTEGER,
			allowNull:true,
			comment:"库存"
		}
	},{
		freezeTabName:true,
		tableName:"banner",
		timestamps:false
	})
	return Goods;
}