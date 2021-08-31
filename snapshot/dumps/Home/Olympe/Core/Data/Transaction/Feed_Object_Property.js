
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Object_ff021000000000000001             = 'ff021000000000000001';
const _Property_ff021000000000000005           = 'ff021000000000000005';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
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
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad = db.assignTag('017b9bbd4e0b670170ad');
const _instance_of_Documentation_017b9bbd888d8f52170d = db.assignTag('017b9bbd888d8f52170d');
const _instance_of_Runnable_Input____object_017b9bbfedb9da410abc = db.assignTag('017b9bbfedb9da410abc');
const _instance_of_Documentation_017b9bbfede96aa39207 = db.assignTag('017b9bbfede96aa39207');
const _instance_of_Runnable_Input____property_017b9bc048306cae842b = db.assignTag('017b9bc048306cae842b');
const _instance_of_Documentation_017b9bc04871dade0f00 = db.assignTag('017b9bc04871dade0f00');
const _instance_of_Runnable_Input____value_017b9bc19197b4d3500e = db.assignTag('017b9bc19197b4d3500e');
const _instance_of_Documentation_017b9bc191c5c836d9b8 = db.assignTag('017b9bc191c5c836d9b8');
const _instance_of_Runnable_Output____object_017b9bc5ac2098a9f91c = db.assignTag('017b9bc5ac2098a9f91c');
const _instance_of_Documentation_017b9bc5ac40eca5b04f = db.assignTag('017b9bc5ac40eca5b04f');
const _instance_of_Runnable_Input____control_flow_017b9c2a230c465001af = db.assignTag('017b9c2a230c465001af');
const _instance_of_Documentation_017b9c2a23375a5626c5 = db.assignTag('017b9c2a23375a5626c5');
const _instance_of_Runnable_Output____control_flow_017b9c2d221a718f2278 = db.assignTag('017b9c2d221a718f2278');
const _instance_of_Documentation_017b9c2d223c2d6ce799 = db.assignTag('017b9c2d223c2d6ce799');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Transaction_0179b26880c1af51a32b        = '0179b26880c1af51a32b';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad
db.newModel(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad, 'Feed Object Property') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Update Property',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad);
// :_instance_of_Documentation_017b9bbd888d8f52170d
db.newInstance(_instance_of_Documentation_017b9bbd888d8f52170d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Update the specified property of the object continuously with the flow of values. \nIt is designed to handle multiple updates by second and generate ordered notifications to ensure smooth animations.\n\n**Only accept primitive value types:** string, number, boolean, color and datetime.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Update a primitive property continuously with provided values.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____object_017b9bbfedb9da410abc
db.newInstance(_instance_of_Runnable_Input____object_017b9bbfedb9da410abc)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'object',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b9bbfede96aa39207
db.newInstance(_instance_of_Documentation_017b9bbfede96aa39207)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Runnable_Input____object_017b9bbfedb9da410abc)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The object to update.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____property_017b9bc048306cae842b
db.newInstance(_instance_of_Runnable_Input____property_017b9bc048306cae842b)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'property',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b9bc04871dade0f00
db.newInstance(_instance_of_Documentation_017b9bc04871dade0f00)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Runnable_Input____property_017b9bc048306cae842b)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The property of the object to update.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____value_017b9bc19197b4d3500e
db.newInstance(_instance_of_Runnable_Input____value_017b9bc19197b4d3500e)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'value',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b9bc191c5c836d9b8
db.newInstance(_instance_of_Documentation_017b9bc191c5c836d9b8)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Runnable_Input____value_017b9bc19197b4d3500e)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The value to set.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____object_017b9bc5ac2098a9f91c
db.newInstance(_instance_of_Runnable_Output____object_017b9bc5ac2098a9f91c)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'object',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b9bc5ac40eca5b04f
db.newInstance(_instance_of_Documentation_017b9bc5ac40eca5b04f)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Runnable_Output____object_017b9bc5ac2098a9f91c)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The updated object.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____control_flow_017b9c2a230c465001af
db.newInstance(_instance_of_Runnable_Input____control_flow_017b9c2a230c465001af)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'control flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b9c2a23375a5626c5
db.newInstance(_instance_of_Documentation_017b9c2a23375a5626c5)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Runnable_Input____control_flow_017b9c2a230c465001af)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Trigger the update.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____control_flow_017b9c2d221a718f2278
db.newInstance(_instance_of_Runnable_Output____control_flow_017b9c2d221a718f2278)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'control flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b9c2d223c2d6ce799
db.newInstance(_instance_of_Documentation_017b9c2d223c2d6ce799)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Runnable_Output____control_flow_017b9c2d221a718f2278)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Triggered after the update has been sent.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____object_017b9bbfedb9da410abc);
db.assign(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____property_017b9bc048306cae842b);
db.assign(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____value_017b9bc19197b4d3500e);
db.assign(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____control_flow_017b9c2a230c465001af);
db.assign(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____object_017b9bc5ac2098a9f91c);
db.assign(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____control_flow_017b9c2d221a718f2278);
db.assign(_instance_of_Runnable_Input____object_017b9bbfedb9da410abc, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Input____property_017b9bc048306cae842b, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Property_ff021000000000000005                    );
db.assign(_instance_of_Runnable_Input____value_017b9bc19197b4d3500e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Output____object_017b9bc5ac2098a9f91c, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Input____control_flow_017b9c2a230c465001af, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Output____control_flow_017b9c2d221a718f2278, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Documentation_017b9bbd888d8f52170d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad);
db.assign(_instance_of_Documentation_017b9bbfede96aa39207   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____object_017b9bbfedb9da410abc);
db.assign(_instance_of_Documentation_017b9bc04871dade0f00   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____property_017b9bc048306cae842b);
db.assign(_instance_of_Documentation_017b9bc191c5c836d9b8   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____value_017b9bc19197b4d3500e);
db.assign(_instance_of_Documentation_017b9bc5ac40eca5b04f   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____object_017b9bc5ac2098a9f91c);
db.assign(_instance_of_Documentation_017b9c2a23375a5626c5   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____control_flow_017b9c2a230c465001af);
db.assign(_instance_of_Documentation_017b9c2d223c2d6ce799   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____control_flow_017b9c2d221a718f2278);
db.assign(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b9bbd888d8f52170d   );
db.assign(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____object_017b9bbfedb9da410abc);
db.assign(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____property_017b9bc048306cae842b);
db.assign(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____value_017b9bc19197b4d3500e);
db.assign(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____object_017b9bc5ac2098a9f91c);
db.assign(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____control_flow_017b9c2a230c465001af);
db.assign(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____control_flow_017b9c2d221a718f2278);
db.assign(_instance_of_Runnable_Input____object_017b9bbfedb9da410abc, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b9bbfede96aa39207   );
db.assign(_instance_of_Runnable_Input____property_017b9bc048306cae842b, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b9bc04871dade0f00   );
db.assign(_instance_of_Runnable_Input____value_017b9bc19197b4d3500e, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b9bc191c5c836d9b8   );
db.assign(_instance_of_Runnable_Output____object_017b9bc5ac2098a9f91c, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b9bc5ac40eca5b04f   );
db.assign(_instance_of_Runnable_Input____control_flow_017b9c2a230c465001af, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b9c2a23375a5626c5   );
db.assign(_instance_of_Runnable_Output____control_flow_017b9c2d221a718f2278, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b9c2d223c2d6ce799   );
db.assignOptional(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad, _Object_gooRel_ff022000000000000003, _Transaction_0179b26880c1af51a32b);
db.assignOptional(_instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad, _GOO_parentGooRel_ff02200000000000000u, _Transaction_0179b26880c1af51a32b);
db.assignOptional(_Transaction_0179b26880c1af51a32b, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad);
db.assignOptional(_Transaction_0179b26880c1af51a32b, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Feed_Object_Property_017b9bbd4e0b670170ad);
