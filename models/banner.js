"user strict";
module.exports = (sequelize,DataTypes)=>{
	const Banner = sequelize.define("Banner",{
		bannerId:{
			type:DataTypes.INTEGER,
			primaryKey: true,
      		autoIncrement: true
		},
		title:{
			type:DataTypes.STRING(20),
			allowNull:false,
			comment:"Banner的一级标题"
		},
		description:{
			type:DataTypes.STRING(100),
			allowNull:true,
			comment:"Banner的描述信息"
		},
		image:{
			type:DataTypes.STRING(100),
			allowNull:false,
			comment:""
		},
		goodId:DataTypes.INTEGER
	},{
		freezeTabName:true,
		tableName:"banner",
		timestamps:false
	})
	return Banner;
}