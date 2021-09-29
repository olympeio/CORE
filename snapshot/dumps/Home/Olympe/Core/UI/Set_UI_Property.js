
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Error_Flow_016eeb5ede9f3094d8f0         = '016eeb5ede9f3094d8f0';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Object_ff021000000000000001             = 'ff021000000000000001';
const _Predefined_input_Control_Flow_of_Action_016ac63229782039429f = '016ac63229782039429f';
const _Predefined_output_Control_Flow_016ac6322acf67eebfe7 = '016ac6322acf67eebfe7';
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
const _instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805 = db.assignTag('0162d2938cadad968805');
const _instance_of_Runnable_Output____Error_Flow_0162d2938cadad968806 = db.assignTag('0162d2938cadad968806');
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162d2938caead968805 = db.assignTag('0162d2938caead968805');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_0162d2938cafad968805 = db.assignTag('0162d2938cafad968805');
const _instance_of_Runnable_Input____UI_Property_0162d293ab6f65c86c52 = db.assignTag('0162d293ab6f65c86c52');
const _instance_of_Runnable_Input____Value_0162d293e8f59ad91a16 = db.assignTag('0162d293e8f59ad91a16');
const _instance_of_Documentation_017b35893b32b4092cb0 = db.assignTag('017b35893b32b4092cb0');
const _instance_of_Documentation_017b35893f0f0ddd92e3 = db.assignTag('017b35893f0f0ddd92e3');
const _instance_of_Documentation_017b35893f10c3891bd6 = db.assignTag('017b35893f10c3891bd6');
const _instance_of_Documentation_017b3589426da8fa94e0 = db.assignTag('017b3589426da8fa94e0');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _UI_0179b269c9b393d21bab                 = '0179b269c9b393d21bab';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805
db.newModel(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, 'Set UI Property') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Set UI Property',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805);
// :_instance_of_Runnable_Output____Error_Flow_0162d2938cadad968806
db.newInstance(_instance_of_Runnable_Output____Error_Flow_0162d2938cadad968806)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162d2938caead968805
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162d2938caead968805)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_0162d2938cafad968805
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_0162d2938cafad968805)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____UI_Property_0162d293ab6f65c86c52
db.newInstance(_instance_of_Runnable_Input____UI_Property_0162d293ab6f65c86c52)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'UI Property',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Value_0162d293e8f59ad91a16
db.newInstance(_instance_of_Runnable_Input____Value_0162d293e8f59ad91a16)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Value',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b32b4092cb0
db.newInstance(_instance_of_Documentation_017b35893b32b4092cb0)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Sets the specified UI Property to the provided value.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Set a UI Property.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f0f0ddd92e3
db.newInstance(_instance_of_Documentation_017b35893f0f0ddd92e3)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The UI property.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f10c3891bd6
db.newInstance(_instance_of_Documentation_017b35893f10c3891bd6)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The value.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589426da8fa94e0
db.newInstance(_instance_of_Documentation_017b3589426da8fa94e0)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'| undefined | undefined | The property doesn\'t exist for that component. || undefined | undefined | The scope (or context) couldn\'t be found. |',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162d2938caead968805);
db.assign(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____UI_Property_0162d293ab6f65c86c52);
db.assign(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Value_0162d293e8f59ad91a16);
db.assign(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Error_Flow_0162d2938cadad968806);
db.assign(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_0162d2938cafad968805);
db.assign(_instance_of_Runnable_Output____Error_Flow_0162d2938cadad968806, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162d2938caead968805, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_0162d2938cafad968805, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____UI_Property_0162d293ab6f65c86c52, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _UI_Property_0162d3ede786c89fb31b                 );
db.assign(_instance_of_Runnable_Input____Value_0162d293e8f59ad91a16, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Documentation_017b35893b32b4092cb0   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805);
db.assign(_instance_of_Documentation_017b35893f0f0ddd92e3   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____UI_Property_0162d293ab6f65c86c52);
db.assign(_instance_of_Documentation_017b35893f10c3891bd6   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Value_0162d293e8f59ad91a16);
db.assign(_instance_of_Documentation_017b3589426da8fa94e0   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Error_Flow_0162d2938cadad968806);
db.assign(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Error_Flow_0162d2938cadad968806);
db.assign(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162d2938caead968805);
db.assign(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_0162d2938cafad968805);
db.assign(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____UI_Property_0162d293ab6f65c86c52);
db.assign(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Value_0162d293e8f59ad91a16);
db.assign(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b32b4092cb0   );
db.assign(_instance_of_Runnable_Output____Error_Flow_0162d2938cadad968806, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589426da8fa94e0   );
db.assign(_instance_of_Runnable_Input____UI_Property_0162d293ab6f65c86c52, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f0f0ddd92e3   );
db.assign(_instance_of_Runnable_Input____Value_0162d293e8f59ad91a16, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f10c3891bd6   );
db.assignOptional(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Object_gooRel_ff022000000000000003, _UI_0179b269c9b393d21bab);
db.assignOptional(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _GOO_parentGooRel_ff02200000000000000u, _UI_0179b269c9b393d21bab);
db.assignOptional(_UI_0179b269c9b393d21bab, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805);
db.assignOptional(_UI_0179b269c9b393d21bab, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805);
