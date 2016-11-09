// Debes importar las librerias FeatureLayer, Query

var tuLayer = new FeatureLayer( ".../FeatureServer/1", {  
  		  					mode: FeatureLayer.MODE_SELECTION,  
  		  					outFields: ["*"]
							});
// Esta funcion la invocas en el evento onClick del boton o combo que dispara la consulta
function zoomToQuery (){
	var query = new Query(); 
	query.where = "tuConsulta ;)";
	query.returnGeometry = true;
	tuLayer.selectFeatures(query, FeatureLayer.SELECTION_NEW, function (features){  
						poly = features[0].geometry;  
						theExtent = poly.getExtent().expand(2); //Zoom out slightly from the polygon's extent  
						this.map.setExtent(theExtent);  
					   	}); 
	return;

}
