sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller, MessageBox) {
	"use strict";

	return Controller.extend("lan.party.tournament.controller.App", {
	  
	  onPress: function(){
	    
	    console.log(this.getView().getModel("Gamers").getJSON());
	    var data = this.getView().getModel("Gamers").getJSON();
	    $.ajax({
	      type: "POST",
	      url: "../../nlpt_php/postGamerData.php",
	      data: data,
	      success: function(data, response){
	        MessageBox.success("Gamers updated");
	      },
	      error: function(response){
	        MessageBox.error(response.responseText);
	      },
	      dataType: "json"
	    });
	  }

	});

});