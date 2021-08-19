
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';
const _String_ff021000000000000011             = 'ff021000000000000011';


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
const _instance_of_Coded_Function_model____Get_Navigation_State_017aeda30452a1965bc7 = db.assignTag('017aeda30452a1965bc7');
const _instance_of_Runnable_Output____State_017aeda457d6751844f6 = db.assignTag('017aeda457d6751844f6');
const _instance_of_Documentation_017b4e1ff3ac643b1bb9 = db.assignTag('017b4e1ff3ac643b1bb9');
const _instance_of_Documentation_017b4e1ff3dfd14bf98b = db.assignTag('017b4e1ff3dfd14bf98b');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Navigation_0179b269f70efbab6b8d         = '0179b269f70efbab6b8d';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Get_Navigation_State_017aeda30452a1965bc7
db.newModel(_instance_of_Coded_Function_model____Get_Navigation_State_017aeda30452a1965bc7, 'Get Navigation State') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Get_Navigation_State_017aeda30452a1965bc7, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Get Navigation State',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Get_Navigation_State_017aeda30452a1965bc7);
// :_instance_of_Runnable_Output____State_017aeda457d6751844f6
db.newInstance(_instance_of_Runnable_Output____State_017aeda457d6751844f6)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Navigation_State_017aeda30452a1965bc7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'State',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b4e1ff3ac643b1bb9
db.newInstance(_instance_of_Documentation_017b4e1ff3ac643b1bb9)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Navigation_State_017aeda30452a1965bc7)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Gets the navigation state, the data after the hashtag (#) in the browser URL for the current page.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Get string after # in the URL.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b4e1ff3dfd14bf98b
db.newInstance(_instance_of_Documentation_017b4e1ff3dfd14bf98b)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Navigation_State_017aeda30452a1965bc7)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The navigation state from the URL.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Get_Navigation_State_017aeda30452a1965bc7, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____State_017aeda457d6751844f6);
db.assign(_instance_of_Runnable_Output____State_017aeda457d6751844f6, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Documentation_017b4e1ff3ac643b1bb9   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Get_Navigation_State_017aeda30452a1965bc7);
db.assign(_instance_of_Documentation_017b4e1ff3dfd14bf98b   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____State_017aeda457d6751844f6);
db.assign(_instance_of_Coded_Function_model____Get_Navigation_State_017aeda30452a1965bc7, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____State_017aeda457d6751844f6);
db.assign(_instance_of_Coded_Function_model____Get_Navigation_State_017aeda30452a1965bc7, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b4e1ff3ac643b1bb9   );
db.assign(_instance_of_Runnable_Output____State_017aeda457d6751844f6, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b4e1ff3dfd14bf98b   );
db.assignOptional(_instance_of_Coded_Function_model____Get_Navigation_State_017aeda30452a1965bc7, _Object_gooRel_ff022000000000000003, _Navigation_0179b269f70efbab6b8d);
db.assignOptional(_instance_of_Coded_Function_model____Get_Navigation_State_017aeda30452a1965bc7, _GOO_parentGooRel_ff02200000000000000u, _Navigation_0179b269f70efbab6b8d);
db.assignOptional(_Navigation_0179b269f70efbab6b8d, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Get_Navigation_State_017aeda30452a1965bc7);
db.assignOptional(_Navigation_0179b269f70efbab6b8d, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Get_Navigation_State_017aeda30452a1965bc7);
