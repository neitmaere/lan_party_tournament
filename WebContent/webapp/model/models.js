sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		
    createGamerModel: function() {
      var oModel = new JSONModel("../../../../php/Gamer.php");
      oModel.setDefaultBindingMode("TwoWay");
      return oModel;
    },
	
    createGamerPointsModel: function() {
      var oModel = new JSONModel("../../../../php/GamerPoints.php");
      oModel.setDefaultBindingMode("TwoWay");
      return oModel;
    },
		
    createShooterModel: function() {
      var oModel = new JSONModel("../../../../php/Shooter.php");
      oModel.setDefaultBindingMode("TwoWay");
      return oModel;
    },
    
    createStrategyModel: function() {
      var oModel = new JSONModel("../../../../php/Strategy.php");
      oModel.setDefaultBindingMode("TwoWay");
      return oModel;
    },
    
    createSportModel: function() {
      var oModel = new JSONModel("../../../../php/Sport.php");
      oModel.setDefaultBindingMode("TwoWay");
      return oModel;
    },
    
    createRacing1Model: function() {
      var oModel = new JSONModel("../../../../php/Racing.php?round=1");
      oModel.setDefaultBindingMode("TwoWay");
      return oModel;
    },
    
    createRacing2Model: function() {
      var oModel = new JSONModel("../../../../php/Racing.php?round=2");
      oModel.setDefaultBindingMode("TwoWay");
      return oModel;
    },
    
    createRacing3Model: function() {
      var oModel = new JSONModel("../../../../php/Racing.php?round=3");
      oModel.setDefaultBindingMode("TwoWay");
      return oModel;
    },
    
    createRacing4Model: function() {
      var oModel = new JSONModel("../../../../php/Racing.php?round=4");
      oModel.setDefaultBindingMode("TwoWay");
      return oModel;
    },
    
    createSurvival1Model: function() {
      var oModel = new JSONModel("../../../../php/Survival.php?round=1");
      oModel.setDefaultBindingMode("TwoWay");
      return oModel;
    },
    
    createSurvival2Model: function() {
      var oModel = new JSONModel("../../../../php/Survival.php?round=2");
      oModel.setDefaultBindingMode("TwoWay");
      return oModel;
    },
    
    createSurvival3Model: function() {
      var oModel = new JSONModel("../../../../php/Survival.php?round=3");
      oModel.setDefaultBindingMode("TwoWay");
      return oModel;
    },
    
	};

});