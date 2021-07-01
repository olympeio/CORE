
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Error_Flow_016eeb5ede9f3094d8f0         = '016eeb5ede9f3094d8f0';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Number_ff021000000000000013             = 'ff021000000000000013';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';
const _String_ff021000000000000011             = 'ff021000000000000011';


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
const _instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa = db.assignTag('016eeb5ede9f3094d8fa');
const _instance_of_Runnable_Input____Message_016eeb5ede9f3094d8fb = db.assignTag('016eeb5ede9f3094d8fb');
const _instance_of_Runnable_Input____Code_016eeb5ede9f3094d8fc = db.assignTag('016eeb5ede9f3094d8fc');
const _instance_of_Runnable_Input____Control_Flow_016eeb5ede9f3094d8fd = db.assignTag('016eeb5ede9f3094d8fd');
const _instance_of_Runnable_Output____Error_Flow_016eeb5ede9f3094d8fe = db.assignTag('016eeb5ede9f3094d8fe');
const _instance_of_Documentation_Function_Metadata_d0ceeb5ede9f3094d8fa = db.assignTag('d0ceeb5ede9f3094d8fa');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Util_0179b26a12e03686de9c               = '0179b26a12e03686de9c';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa
db.newModel(_instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa, 'Throw Error') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Throw Error',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa);
// :_instance_of_Runnable_Input____Message_016eeb5ede9f3094d8fb
db.newInstance(_instance_of_Runnable_Input____Message_016eeb5ede9f3094d8fb)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Message',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Code_016eeb5ede9f3094d8fc
db.newInstance(_instance_of_Runnable_Input____Code_016eeb5ede9f3094d8fc)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Code',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Control_Flow_016eeb5ede9f3094d8fd
db.newInstance(_instance_of_Runnable_Input____Control_Flow_016eeb5ede9f3094d8fd)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Error_Flow_016eeb5ede9f3094d8fe
db.newInstance(_instance_of_Runnable_Output____Error_Flow_016eeb5ede9f3094d8fe)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0ceeb5ede9f3094d8fa
db.newInstance(_instance_of_Documentation_Function_Metadata_d0ceeb5ede9f3094d8fa)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'## Errors\n| Name | Description |\n| --- | --- |\n| 016eeb5ede9f3094d8fe-Error Flow | The created error flow. |\n',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 016eeb5ede9f3094d8fb-Message | String | The error message. |\n| 016eeb5ede9f3094d8fc-Code | Number | The error code. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nThrowing an error creates an error-flow which can be either caught or passed on to the output error-flow of the\naction.\n\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Throws an error.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Message_016eeb5ede9f3094d8fb);
db.assign(_instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Code_016eeb5ede9f3094d8fc);
db.assign(_instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Control_Flow_016eeb5ede9f3094d8fd);
db.assign(_instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Error_Flow_016eeb5ede9f3094d8fe);
db.assign(_instance_of_Runnable_Input____Message_016eeb5ede9f3094d8fb, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____Code_016eeb5ede9f3094d8fc, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____Control_Flow_016eeb5ede9f3094d8fd, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Output____Error_Flow_016eeb5ede9f3094d8fe, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0ceeb5ede9f3094d8fa);
db.assign(_instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Message_016eeb5ede9f3094d8fb);
db.assign(_instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Code_016eeb5ede9f3094d8fc);
db.assign(_instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Control_Flow_016eeb5ede9f3094d8fd);
db.assign(_instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Error_Flow_016eeb5ede9f3094d8fe);
db.assign(_instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0ceeb5ede9f3094d8fa);
db.assignOptional(_instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa, _Object_gooRel_ff022000000000000003, _Util_0179b26a12e03686de9c);
db.assignOptional(_instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa, _GOO_parentGooRel_ff02200000000000000u, _Util_0179b26a12e03686de9c);
db.assignOptional(_Util_0179b26a12e03686de9c, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa);
db.assignOptional(_Util_0179b26a12e03686de9c, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Throw_Error_016eeb5ede9f3094d8fa);
