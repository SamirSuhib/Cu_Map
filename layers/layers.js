ol.proj.get("EPSG:4326").setExtent([69.148906, 34.504720, 69.212663, 34.545336]);
var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Customers_0 = new ol.format.GeoJSON();
var features_Customers_0 = format_Customers_0.readFeatures(json_Customers_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Customers_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Customers_0.addFeatures(features_Customers_0);var lyr_Customers_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Customers_0, 
                style: style_Customers_0,
                title: '<img src="styles/legend/Customers_0.png" /> Customers'
            });

lyr_Customers_0.setVisible(true);
var layersList = [baseLayer,lyr_Customers_0];
lyr_Customers_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Type1': 'Type1', 'House_No_': 'House_No_', 'Hous_No': 'Hous_No', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'KSBU_Zone': 'KSBU_Zone', 'Customer_I': 'Customer_I', });
lyr_Customers_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'Type1': 'TextEdit', 'House_No_': 'TextEdit', 'Hous_No': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'KSBU_Zone': 'TextEdit', 'Customer_I': 'TextEdit', });
lyr_Customers_0.set('fieldLabels', {'OBJECTID': 'no label', 'Type1': 'no label', 'House_No_': 'no label', 'Hous_No': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'KSBU_Zone': 'no label', 'Customer_I': 'no label', });
lyr_Customers_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});