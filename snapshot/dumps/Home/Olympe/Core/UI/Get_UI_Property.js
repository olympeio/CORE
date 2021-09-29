
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Object_ff021000000000000001             = 'ff021000000000000001';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';
const _UI_Property_0162d3ede786c89fb31b        = '0162d3ede786c89fb31b';


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
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f = db.assignTag('0162de7dd5abdc9dec7f');
const _instance_of_Runnable_Input____UI_Property_0162de7e041b00292ccd = db.assignTag('0162de7e041b00292ccd');
const _instance_of_Runnable_Output____Value_0162de8176947619c15f = db.assignTag('0162de8176947619c15f');
const _instance_of_Documentation_017b35893b3255ccf1bd = db.assignTag('017b35893b3255ccf1bd');
const _instance_of_Documentation_017b35893f0ea1913ae6 = db.assignTag('017b35893f0ea1913ae6');
const _instance_of_Documentation_017b3589426da0a548dd = db.assignTag('017b3589426da0a548dd');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _UI_0179b269c9b393d21bab                 = '0179b269c9b393d21bab';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f
db.newModel(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f, 'Get UI Property') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Get UI Property',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f);
// :_instance_of_Runnable_Input____UI_Property_0162de7e041b00292ccd
db.newInstance(_instance_of_Runnable_Input____UI_Property_0162de7e041b00292ccd)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'UI Property',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Value_0162de8176947619c15f
db.newInstance(_instance_of_Runnable_Output____Value_0162de8176947619c15f)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Value',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b3255ccf1bd
db.newInstance(_instance_of_Documentation_017b35893b3255ccf1bd)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Retrieves the value of the specified property from the selected UI element. For example the text of a label, the width of the screen, or the state of a checkbox.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Get a property value from a UI element.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f0ea1913ae6
db.newInstance(_instance_of_Documentation_017b35893f0ea1913ae6)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The selected property.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589426da0a548dd
db.newInstance(_instance_of_Documentation_017b3589426da0a548dd)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The value of the property.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____UI_Property_0162de7e041b00292ccd);
db.assign(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Value_0162de8176947619c15f);
db.assign(_instance_of_Runnable_Input____UI_Property_0162de7e041b00292ccd, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _UI_Property_0162d3ede786c89fb31b                 );
db.assign(_instance_of_Runnable_Output____Value_0162de8176947619c15f, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Documentation_017b35893b3255ccf1bd   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f);
db.assign(_instance_of_Documentation_017b35893f0ea1913ae6   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____UI_Property_0162de7e041b00292ccd);
db.assign(_instance_of_Documentation_017b3589426da0a548dd   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Value_0162de8176947619c15f);
db.assign(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____UI_Property_0162de7e041b00292ccd);
db.assign(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Value_0162de8176947619c15f);
db.assign(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b3255ccf1bd   );
db.assign(_instance_of_Runnable_Input____UI_Property_0162de7e041b00292ccd, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f0ea1913ae6   );
db.assign(_instance_of_Runnable_Output____Value_0162de8176947619c15f, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589426da0a548dd   );
db.assignOptional(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f, _Object_gooRel_ff022000000000000003, _UI_0179b269c9b393d21bab);
db.assignOptional(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f, _GOO_parentGooRel_ff02200000000000000u, _UI_0179b269c9b393d21bab);
db.assignOptional(_UI_0179b269c9b393d21bab, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f);
db.assignOptional(_UI_0179b269c9b393d21bab, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f);
