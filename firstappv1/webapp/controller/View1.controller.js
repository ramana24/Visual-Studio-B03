sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";
var a =100;// never ever use global variable in UI5
		return Controller.extend("ux.firstappv1.controller.View1", {
			onInit: function () {
  console.log(a); // output as 100
    var b= 50;

    var a = 20;
			
				
            console.log('start');
			},

            onAfterRendering:function(){
			 	console.log('afterrendering');
				 console.log(b); // no output
             },

			onBeforeRendering:function(){
				console.log('beforerendering');
			 },
		 onExit:function(){

			 	console.log('exit');
			},

		 	onPressButton:function(){
            alert("Hello");
			console.log('hello');
		 	},


		// 	onPressButton2:function(){
		// 		alert("Invalid action. Please select right action");
		// 					},
		});
	});
