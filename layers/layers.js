var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AdamaDistributionLine_1 = new ol.format.GeoJSON();
var features_AdamaDistributionLine_1 = format_AdamaDistributionLine_1.readFeatures(json_AdamaDistributionLine_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdamaDistributionLine_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdamaDistributionLine_1.addFeatures(features_AdamaDistributionLine_1);
var lyr_AdamaDistributionLine_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdamaDistributionLine_1, 
                style: style_AdamaDistributionLine_1,
                popuplayertitle: 'AdamaDistributionLine',
                interactive: true,
                title: '<img src="styles/legend/AdamaDistributionLine_1.png" /> AdamaDistributionLine'
            });
var format_BoreHole_2 = new ol.format.GeoJSON();
var features_BoreHole_2 = format_BoreHole_2.readFeatures(json_BoreHole_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoreHole_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoreHole_2.addFeatures(features_BoreHole_2);
var lyr_BoreHole_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BoreHole_2, 
                style: style_BoreHole_2,
                popuplayertitle: 'BoreHole',
                interactive: true,
                title: '<img src="styles/legend/BoreHole_2.png" /> BoreHole'
            });
var format_strretlight_3 = new ol.format.GeoJSON();
var features_strretlight_3 = format_strretlight_3.readFeatures(json_strretlight_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strretlight_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strretlight_3.addFeatures(features_strretlight_3);
var lyr_strretlight_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strretlight_3, 
                style: style_strretlight_3,
                popuplayertitle: 'strretlight',
                interactive: true,
                title: '<img src="styles/legend/strretlight_3.png" /> strretlight'
            });
var format_walkway_4 = new ol.format.GeoJSON();
var features_walkway_4 = format_walkway_4.readFeatures(json_walkway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_walkway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_walkway_4.addFeatures(features_walkway_4);
var lyr_walkway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_walkway_4, 
                style: style_walkway_4,
                popuplayertitle: 'walkway',
                interactive: true,
                title: '<img src="styles/legend/walkway_4.png" /> walkway'
            });
var format_AdamaRoad_5 = new ol.format.GeoJSON();
var features_AdamaRoad_5 = format_AdamaRoad_5.readFeatures(json_AdamaRoad_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdamaRoad_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdamaRoad_5.addFeatures(features_AdamaRoad_5);
var lyr_AdamaRoad_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdamaRoad_5, 
                style: style_AdamaRoad_5,
                popuplayertitle: 'AdamaRoad',
                interactive: true,
                title: '<img src="styles/legend/AdamaRoad_5.png" /> AdamaRoad'
            });

lyr_OSMStandard_0.setVisible(true);lyr_AdamaDistributionLine_1.setVisible(true);lyr_BoreHole_2.setVisible(true);lyr_strretlight_3.setVisible(true);lyr_walkway_4.setVisible(true);lyr_AdamaRoad_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_AdamaDistributionLine_1,lyr_BoreHole_2,lyr_strretlight_3,lyr_walkway_4,lyr_AdamaRoad_5];
lyr_AdamaDistributionLine_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Pipe_Line_': 'Pipe_Line_', 'Pipe_Line1': 'Pipe_Line1', 'Pipe_Lin_1': 'Pipe_Lin_1', 'Pipe_Lin_2': 'Pipe_Lin_2', 'X_Coord_St': 'X_Coord_St', 'X_Coord_En': 'X_Coord_En', 'Y_Coord_En': 'Y_Coord_En', 'Y_Coord_St': 'Y_Coord_St', 'Locality_N': 'Locality_N', 'Pipe_Lin_3': 'Pipe_Lin_3', 'Condition_': 'Condition_', 'Constructi': 'Constructi', 'Ownership': 'Ownership', 'EUL_Pipe_L': 'EUL_Pipe_L', 'Age_Pipe_L': 'Age_Pipe_L', 'RUL': 'RUL', 'Indicative': 'Indicative', 'Maintenanc': 'Maintenanc', 'Maintena_1': 'Maintena_1', 'URReplacem': 'URReplacem', 'EstimatedR': 'EstimatedR', 'Depreciate': 'Depreciate', 'EstimatedC': 'EstimatedC', 'AssetDefic': 'AssetDefic', 'Estimate_1': 'Estimate_1', 'Deprecia_1': 'Deprecia_1', 'Estimate_2': 'Estimate_2', 'AssetDef_1': 'AssetDef_1', 'Shape_Leng': 'Shape_Leng', });
lyr_BoreHole_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'BoreHole_I': 'BoreHole_I', 'X_Coord': 'X_Coord', 'Y_Coord': 'Y_Coord', 'Alt': 'Alt', 'Locality_N': 'Locality_N', 'Kebele': 'Kebele', 'Depth': 'Depth', 'Casing_Dia': 'Casing_Dia', 'Discharge_': 'Discharge_', 'Borehole_C': 'Borehole_C', 'Condition': 'Condition', 'Borehole_O': 'Borehole_O', 'Constructi': 'Constructi', 'Maintenanc': 'Maintenanc', 'Maintena_1': 'Maintena_1', 'Maintena_2': 'Maintena_2', 'Maintena_3': 'Maintena_3', 'URReplacem': 'URReplacem', 'EstimatedR': 'EstimatedR', 'EUL_Boreho': 'EUL_Boreho', 'Age_Boreho': 'Age_Boreho', 'RUL': 'RUL', 'Indicative': 'Indicative', 'Depreciate': 'Depreciate', 'Maintena_4': 'Maintena_4', 'EstimatedC': 'EstimatedC', 'AssetDefic': 'AssetDefic', });
lyr_strretlight_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Street_lig': 'Street_lig', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'Street_L_1': 'Street_L_1', 'X_Coordina': 'X_Coordina', 'Y_Coordina': 'Y_Coordina', 'Z_Altitude': 'Z_Altitude', 'Street_L_2': 'Street_L_2', 'No_of_Ligh': 'No_of_Ligh', 'Pole_Mater': 'Pole_Mater', 'Installati': 'Installati', 'Pole_Mat_1': 'Pole_Mat_1', 'Street_L_3': 'Street_L_3', 'Maintenanc': 'Maintenanc', 'Maintena_1': 'Maintena_1', 'URReplacem': 'URReplacem', 'EstimatedR': 'EstimatedR', 'EstimatedU': 'EstimatedU', 'Age': 'Age', 'RemainingU': 'RemainingU', 'PercentRUL': 'PercentRUL', 'Depreciate': 'Depreciate', 'Maintena_2': 'Maintena_2', 'EstimatedC': 'EstimatedC', 'AssetDefic': 'AssetDefic', 'Ownership': 'Ownership', });
lyr_walkway_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Road_ID': 'Road_ID', 'Walkway_ID': 'Walkway_ID', 'Shape_Leng': 'Shape_Leng', });
lyr_AdamaRoad_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Road_ID': 'Road_ID', 'Shape_Leng': 'Shape_Leng', });
lyr_AdamaDistributionLine_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Pipe_Line_': 'TextEdit', 'Pipe_Line1': 'TextEdit', 'Pipe_Lin_1': 'TextEdit', 'Pipe_Lin_2': 'TextEdit', 'X_Coord_St': 'TextEdit', 'X_Coord_En': 'TextEdit', 'Y_Coord_En': 'TextEdit', 'Y_Coord_St': 'TextEdit', 'Locality_N': 'TextEdit', 'Pipe_Lin_3': 'TextEdit', 'Condition_': 'TextEdit', 'Constructi': 'TextEdit', 'Ownership': 'TextEdit', 'EUL_Pipe_L': 'TextEdit', 'Age_Pipe_L': 'TextEdit', 'RUL': 'TextEdit', 'Indicative': 'TextEdit', 'Maintenanc': 'TextEdit', 'Maintena_1': 'TextEdit', 'URReplacem': 'TextEdit', 'EstimatedR': 'TextEdit', 'Depreciate': 'TextEdit', 'EstimatedC': 'TextEdit', 'AssetDefic': 'TextEdit', 'Estimate_1': 'TextEdit', 'Deprecia_1': 'TextEdit', 'Estimate_2': 'TextEdit', 'AssetDef_1': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_BoreHole_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'BoreHole_I': 'TextEdit', 'X_Coord': 'TextEdit', 'Y_Coord': 'TextEdit', 'Alt': 'TextEdit', 'Locality_N': 'TextEdit', 'Kebele': 'TextEdit', 'Depth': 'TextEdit', 'Casing_Dia': 'TextEdit', 'Discharge_': 'TextEdit', 'Borehole_C': 'TextEdit', 'Condition': 'TextEdit', 'Borehole_O': 'TextEdit', 'Constructi': 'TextEdit', 'Maintenanc': 'TextEdit', 'Maintena_1': 'TextEdit', 'Maintena_2': 'TextEdit', 'Maintena_3': 'TextEdit', 'URReplacem': 'TextEdit', 'EstimatedR': 'TextEdit', 'EUL_Boreho': 'TextEdit', 'Age_Boreho': 'TextEdit', 'RUL': 'TextEdit', 'Indicative': 'TextEdit', 'Depreciate': 'TextEdit', 'Maintena_4': 'TextEdit', 'EstimatedC': 'TextEdit', 'AssetDefic': 'TextEdit', });
lyr_strretlight_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Street_lig': 'TextEdit', 'EASTING': 'TextEdit', 'NORTHING': 'TextEdit', 'Street_L_1': 'TextEdit', 'X_Coordina': 'TextEdit', 'Y_Coordina': 'TextEdit', 'Z_Altitude': 'TextEdit', 'Street_L_2': 'TextEdit', 'No_of_Ligh': 'TextEdit', 'Pole_Mater': 'TextEdit', 'Installati': 'TextEdit', 'Pole_Mat_1': 'TextEdit', 'Street_L_3': 'TextEdit', 'Maintenanc': 'TextEdit', 'Maintena_1': 'TextEdit', 'URReplacem': 'TextEdit', 'EstimatedR': 'TextEdit', 'EstimatedU': 'TextEdit', 'Age': 'TextEdit', 'RemainingU': 'TextEdit', 'PercentRUL': 'TextEdit', 'Depreciate': 'TextEdit', 'Maintena_2': 'TextEdit', 'EstimatedC': 'TextEdit', 'AssetDefic': 'TextEdit', 'Ownership': 'TextEdit', });
lyr_walkway_4.set('fieldImages', {'OBJECTID': '', 'Road_ID': '', 'Walkway_ID': '', 'Shape_Leng': '', });
lyr_AdamaRoad_5.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'Road_ID': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_AdamaDistributionLine_1.set('fieldLabels', {'OBJECTID': 'no label', 'Pipe_Line_': 'no label', 'Pipe_Line1': 'no label', 'Pipe_Lin_1': 'no label', 'Pipe_Lin_2': 'no label', 'X_Coord_St': 'no label', 'X_Coord_En': 'no label', 'Y_Coord_En': 'no label', 'Y_Coord_St': 'no label', 'Locality_N': 'no label', 'Pipe_Lin_3': 'no label', 'Condition_': 'no label', 'Constructi': 'no label', 'Ownership': 'no label', 'EUL_Pipe_L': 'no label', 'Age_Pipe_L': 'no label', 'RUL': 'no label', 'Indicative': 'no label', 'Maintenanc': 'no label', 'Maintena_1': 'no label', 'URReplacem': 'no label', 'EstimatedR': 'no label', 'Depreciate': 'no label', 'EstimatedC': 'no label', 'AssetDefic': 'no label', 'Estimate_1': 'no label', 'Deprecia_1': 'no label', 'Estimate_2': 'no label', 'AssetDef_1': 'no label', 'Shape_Leng': 'no label', });
lyr_BoreHole_2.set('fieldLabels', {'OBJECTID': 'no label', 'BoreHole_I': 'no label', 'X_Coord': 'no label', 'Y_Coord': 'no label', 'Alt': 'no label', 'Locality_N': 'no label', 'Kebele': 'no label', 'Depth': 'no label', 'Casing_Dia': 'no label', 'Discharge_': 'no label', 'Borehole_C': 'no label', 'Condition': 'inline label - visible with data', 'Borehole_O': 'no label', 'Constructi': 'no label', 'Maintenanc': 'no label', 'Maintena_1': 'no label', 'Maintena_2': 'no label', 'Maintena_3': 'no label', 'URReplacem': 'inline label - visible with data', 'EstimatedR': 'inline label - visible with data', 'EUL_Boreho': 'no label', 'Age_Boreho': 'no label', 'RUL': 'no label', 'Indicative': 'no label', 'Depreciate': 'inline label - visible with data', 'Maintena_4': 'no label', 'EstimatedC': 'no label', 'AssetDefic': 'no label', });
lyr_strretlight_3.set('fieldLabels', {'OBJECTID': 'no label', 'Street_lig': 'hidden field', 'EASTING': 'no label', 'NORTHING': 'no label', 'Street_L_1': 'no label', 'X_Coordina': 'no label', 'Y_Coordina': 'no label', 'Z_Altitude': 'no label', 'Street_L_2': 'no label', 'No_of_Ligh': 'no label', 'Pole_Mater': 'no label', 'Installati': 'no label', 'Pole_Mat_1': 'no label', 'Street_L_3': 'no label', 'Maintenanc': 'inline label - visible with data', 'Maintena_1': 'inline label - visible with data', 'URReplacem': 'inline label - visible with data', 'EstimatedR': 'inline label - visible with data', 'EstimatedU': 'inline label - visible with data', 'Age': 'no label', 'RemainingU': 'no label', 'PercentRUL': 'no label', 'Depreciate': 'no label', 'Maintena_2': 'no label', 'EstimatedC': 'no label', 'AssetDefic': 'no label', 'Ownership': 'no label', });
lyr_walkway_4.set('fieldLabels', {'OBJECTID': 'no label', 'Road_ID': 'no label', 'Walkway_ID': 'inline label - visible with data', 'Shape_Leng': 'no label', });
lyr_AdamaRoad_5.set('fieldLabels', {'OBJECTID_1': 'no label', 'Road_ID': 'inline label - visible with data', 'Shape_Leng': 'no label', });
lyr_AdamaRoad_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});