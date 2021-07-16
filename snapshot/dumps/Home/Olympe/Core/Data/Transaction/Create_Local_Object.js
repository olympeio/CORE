
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Model_type_0162f672366be5ca7a86         = '0162f672366be5ca7a86';
const _Object_ff021000000000000001             = 'ff021000000000000001';
const _Predefined_input_Control_Flow_of_Action_016ac63229782039429f = '016ac63229782039429f';
const _Predefined_output_Control_Flow_016ac6322acf67eebfe7 = '016ac6322acf67eebfe7';
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
const _instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7 = db.assignTag('0162f2e963b6c9ed85b7');
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162f2e963b7c9ed85b7 = db.assignTag('0162f2e963b7c9ed85b7');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_0162f2e963b8c9ed85b7 = db.assignTag('0162f2e963b8c9ed85b7');
const _instance_of_Runnable_Input____model_0162f2eab3eadc7dff16 = db.assignTag('0162f2eab3eadc7dff16');
const _instance_of_Runnable_Output____object_0162f2eaea705e367590 = db.assignTag('0162f2eaea705e367590');
const _instance_of_Documentation_Function_Metadata_d0c2f2e963b6c9ed85b7 = db.assignTag('d0c2f2e963b6c9ed85b7');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Transaction_0179b26880c1af51a32b        = '0179b26880c1af51a32b';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7
db.newModel(_instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7, 'Create Local Object') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        ['01621fb84e320000f001']:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Create Local Object',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7);
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162f2e963b7c9ed85b7
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162f2e963b7c9ed85b7)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_0162f2e963b8c9ed85b7
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_0162f2e963b8c9ed85b7)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____model_0162f2eab3eadc7dff16
db.newInstance(_instance_of_Runnable_Input____model_0162f2eab3eadc7dff16)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'model',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____object_0162f2eaea705e367590
db.newInstance(_instance_of_Runnable_Output____object_0162f2eaea705e367590)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'object',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c2f2e963b6c9ed85b7
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c2f2e963b6c9ed85b7)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 0162f2eab3eadc7dff16-model | Model | The model. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 0162f2eaea705e367590-object | Object | The created object or its tag if used inside a Begin/End. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nCreates a local instance (not yet persisted in the database) of a model.\n\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Creates an instance of a model.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162f2e963b7c9ed85b7);
db.assign(_instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____model_0162f2eab3eadc7dff16);
db.assign(_instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_0162f2e963b8c9ed85b7);
db.assign(_instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____object_0162f2eaea705e367590);
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162f2e963b7c9ed85b7, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_0162f2e963b8c9ed85b7, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____model_0162f2eab3eadc7dff16, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Model_type_0162f672366be5ca7a86                  );
db.assign(_instance_of_Runnable_Output____object_0162f2eaea705e367590, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c2f2e963b6c9ed85b7);
db.assign(_instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162f2e963b7c9ed85b7);
db.assign(_instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_0162f2e963b8c9ed85b7);
db.assign(_instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____model_0162f2eab3eadc7dff16);
db.assign(_instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____object_0162f2eaea705e367590);
db.assign(_instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c2f2e963b6c9ed85b7);
db.assignOptional(_instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7, _Object_gooRel_ff022000000000000003, _Transaction_0179b26880c1af51a32b);
db.assignOptional(_instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7, _GOO_parentGooRel_ff02200000000000000u, _Transaction_0179b26880c1af51a32b);
db.assignOptional(_Transaction_0179b26880c1af51a32b, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7);
db.assignOptional(_Transaction_0179b26880c1af51a32b, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Create_Local_Object_0162f2e963b6c9ed85b7);
