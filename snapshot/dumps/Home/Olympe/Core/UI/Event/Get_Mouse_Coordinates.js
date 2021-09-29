
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Number_ff021000000000000013             = 'ff021000000000000013';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


// Definition of tags of defined properties
const _Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94 = '01703376c4a81c0e9d94';
const _Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001 = '01621fb84e320000f001';
const _Documentation_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
const _Documentation_summary_01703376c4a81c0e9d91   = '01703376c4a81c0e9d91';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
const _Documentation_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Function_model____Get_Mouse_Coordinates_0169ed4b78d2b7e1faa5 = db.assignTag('0169ed4b78d2b7e1faa5');
const _instance_of_Runnable_Output____x_0169ed4b7b81faa006c2 = db.assignTag('0169ed4b7b81faa006c2');
const _instance_of_Runnable_Output____y_0169ed4b7db1ff3808dd = db.assignTag('0169ed4b7db1ff3808dd');
const _instance_of_Documentation_017b35893b31b6cb2483 = db.assignTag('017b35893b31b6cb2483');
const _instance_of_Documentation_017b35893f0d4e229fd7 = db.assignTag('017b35893f0d4e229fd7');
const _instance_of_Documentation_017b35893f0d6cd89451 = db.assignTag('017b35893f0d6cd89451');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Event_0179b269e44e8b51bce0              = '0179b269e44e8b51bce0';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Get_Mouse_Coordinates_0169ed4b78d2b7e1faa5
db.newModel(_instance_of_Coded_Function_model____Get_Mouse_Coordinates_0169ed4b78d2b7e1faa5, 'Get Mouse Coordinates') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Get_Mouse_Coordinates_0169ed4b78d2b7e1faa5, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Get Mouse Coordinates',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Get_Mouse_Coordinates_0169ed4b78d2b7e1faa5);
// :_instance_of_Runnable_Output____x_0169ed4b7b81faa006c2
db.newInstance(_instance_of_Runnable_Output____x_0169ed4b7b81faa006c2)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Mouse_Coordinates_0169ed4b78d2b7e1faa5)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'x',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____y_0169ed4b7db1ff3808dd
db.newInstance(_instance_of_Runnable_Output____y_0169ed4b7db1ff3808dd)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Mouse_Coordinates_0169ed4b78d2b7e1faa5)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'y',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b31b6cb2483
db.newInstance(_instance_of_Documentation_017b35893b31b6cb2483)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Mouse_Coordinates_0169ed4b78d2b7e1faa5)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Gets the absolute position of the mouse.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Gets the current mouse position.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f0d4e229fd7
db.newInstance(_instance_of_Documentation_017b35893f0d4e229fd7)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Mouse_Coordinates_0169ed4b78d2b7e1faa5)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The x coordinate.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f0d6cd89451
db.newInstance(_instance_of_Documentation_017b35893f0d6cd89451)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Mouse_Coordinates_0169ed4b78d2b7e1faa5)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The y coordinate.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Get_Mouse_Coordinates_0169ed4b78d2b7e1faa5, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____x_0169ed4b7b81faa006c2);
db.assign(_instance_of_Coded_Function_model____Get_Mouse_Coordinates_0169ed4b78d2b7e1faa5, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____y_0169ed4b7db1ff3808dd);
db.assign(_instance_of_Runnable_Output____x_0169ed4b7b81faa006c2, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____y_0169ed4b7db1ff3808dd, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Documentation_017b35893b31b6cb2483   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Get_Mouse_Coordinates_0169ed4b78d2b7e1faa5);
db.assign(_instance_of_Documentation_017b35893f0d4e229fd7   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____x_0169ed4b7b81faa006c2);
db.assign(_instance_of_Documentation_017b35893f0d6cd89451   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____y_0169ed4b7db1ff3808dd);
db.assign(_instance_of_Coded_Function_model____Get_Mouse_Coordinates_0169ed4b78d2b7e1faa5, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____x_0169ed4b7b81faa006c2);
db.assign(_instance_of_Coded_Function_model____Get_Mouse_Coordinates_0169ed4b78d2b7e1faa5, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____y_0169ed4b7db1ff3808dd);
db.assign(_instance_of_Coded_Function_model____Get_Mouse_Coordinates_0169ed4b78d2b7e1faa5, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b31b6cb2483   );
db.assign(_instance_of_Runnable_Output____x_0169ed4b7b81faa006c2, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f0d4e229fd7   );
db.assign(_instance_of_Runnable_Output____y_0169ed4b7db1ff3808dd, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f0d6cd89451   );
db.assignOptional(_instance_of_Coded_Function_model____Get_Mouse_Coordinates_0169ed4b78d2b7e1faa5, _Object_gooRel_ff022000000000000003, _Event_0179b269e44e8b51bce0);
db.assignOptional(_instance_of_Coded_Function_model____Get_Mouse_Coordinates_0169ed4b78d2b7e1faa5, _GOO_parentGooRel_ff02200000000000000u, _Event_0179b269e44e8b51bce0);
db.assignOptional(_Event_0179b269e44e8b51bce0, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Get_Mouse_Coordinates_0169ed4b78d2b7e1faa5);
db.assignOptional(_Event_0179b269e44e8b51bce0, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Get_Mouse_Coordinates_0169ed4b78d2b7e1faa5);
