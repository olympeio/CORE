
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Color_ff021000000000000017              = 'ff021000000000000017';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Number_ff021000000000000013             = 'ff021000000000000013';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


// Definition of tags of defined properties
const _Documentation_Function_Metadata_errors_0172c6ae82952a74193f = '0172c6ae82952a74193f';
const _Documentation_Function_Metadata_inputs_0172c6ae82952a74193d = '0172c6ae82952a74193d';
const _Documentation_Function_Metadata_outputs_0172c6ae82952a74193e = '0172c6ae82952a74193e';
const _Documentation_Metadata_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
const _Documentation_Metadata_toolTip_01703376c4a81c0e9d91 = '01703376c4a81c0e9d91';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
const _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances
const _instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1 = db.assignTag('01633eb5bdb4e94f82d1');
const _instance_of_Runnable_Input____red_01633eb5c81dd71a9847 = db.assignTag('01633eb5c81dd71a9847');
const _instance_of_Runnable_Input____blue_01633eb5cb3bd31e8bcb = db.assignTag('01633eb5cb3bd31e8bcb');
const _instance_of_Runnable_Input____green_01633eb5cd14554598b8 = db.assignTag('01633eb5cd14554598b8');
const _instance_of_Runnable_Output____color_01633eb5da2cfac26ee7 = db.assignTag('01633eb5da2cfac26ee7');
const _instance_of_Runnable_Input____alpha_0179c67070f8ed2946fb = db.assignTag('0179c67070f8ed2946fb');
const _instance_of_Documentation_Function_Metadata_d0c33eb5bdb4e94f82d1 = db.assignTag('d0c33eb5bdb4e94f82d1');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Base_0179b26837d01a7c3cdc               = '0179b26837d01a7c3cdc';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1
db.newModel(_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1, 'Create Color') // tag and name of the model
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011)
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Create Color',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1);
// :_instance_of_Runnable_Input____red_01633eb5c81dd71a9847
db.newInstance(_instance_of_Runnable_Input____red_01633eb5c81dd71a9847)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'red',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____blue_01633eb5cb3bd31e8bcb
db.newInstance(_instance_of_Runnable_Input____blue_01633eb5cb3bd31e8bcb)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'blue',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____green_01633eb5cd14554598b8
db.newInstance(_instance_of_Runnable_Input____green_01633eb5cd14554598b8)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'green',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____color_01633eb5da2cfac26ee7
db.newInstance(_instance_of_Runnable_Output____color_01633eb5da2cfac26ee7)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'color',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____alpha_0179c67070f8ed2946fb
db.newInstance(_instance_of_Runnable_Input____alpha_0179c67070f8ed2946fb)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'alpha',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c33eb5bdb4e94f82d1
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c33eb5bdb4e94f82d1)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01633eb5c81dd71a9847-red | Number | Value for the red channel. |\n| 01633eb5cd14554598b8-green | Number | Value for the green channel. |\n| 01633eb5cb3bd31e8bcb-blue | Number | Value for the blue channel. |\n| 0179c67070f8ed2946fb-alpha | Number | Value for the alpha channer. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01633eb5da2cfac26ee7-color | Color | The created color. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nCreates a color based on the 3 RGB values provided.\nEach value has to be in the 0 - 255 range.\n\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Create a color.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____red_01633eb5c81dd71a9847);
db.assign(_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____blue_01633eb5cb3bd31e8bcb);
db.assign(_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____green_01633eb5cd14554598b8);
db.assign(_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____alpha_0179c67070f8ed2946fb);
db.assign(_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____color_01633eb5da2cfac26ee7);
db.assign(_instance_of_Runnable_Input____red_01633eb5c81dd71a9847, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____blue_01633eb5cb3bd31e8bcb, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____green_01633eb5cd14554598b8, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____color_01633eb5da2cfac26ee7, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Color_ff021000000000000017                       );
db.assign(_instance_of_Runnable_Input____alpha_0179c67070f8ed2946fb, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c33eb5bdb4e94f82d1);
db.assign(_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____red_01633eb5c81dd71a9847);
db.assign(_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____blue_01633eb5cb3bd31e8bcb);
db.assign(_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____green_01633eb5cd14554598b8);
db.assign(_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____color_01633eb5da2cfac26ee7);
db.assign(_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____alpha_0179c67070f8ed2946fb);
db.assign(_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c33eb5bdb4e94f82d1);
db.assignOptional(_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1, _Object_gooRel_ff022000000000000003, _Base_0179b26837d01a7c3cdc);
db.assignOptional(_instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1, _GOO_parentGooRel_ff02200000000000000u, _Base_0179b26837d01a7c3cdc);
db.assignOptional(_Base_0179b26837d01a7c3cdc, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1);
db.assignOptional(_Base_0179b26837d01a7c3cdc, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Create_Color_01633eb5bdb4e94f82d1);
