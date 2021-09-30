
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Action_Call_0168c6f020f2a96a0000        = '0168c6f020f2a96a0000';
const _Ascender_01621fb84e32000000a0           = '01621fb84e32000000a0';
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Control_Flow_016ac63229782039429f       = '016ac63229782039429f';
const _Control_Flow_016ac6322acf67eebfe7       = '016ac6322acf67eebfe7';
const _Descender_01621fb84e32000000d0          = '01621fb84e32000000d0';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
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
const _Ascender_Input_01621fb84e32000000a1          = '01621fb84e32000000a1';
const _Ascender_Upward_01621fb84e32000000a2         = '01621fb84e32000000a2';
const _Descender_Downward_01621fb84e32000000d1      = '01621fb84e32000000d1';
const _Descender_Output_01621fb84e32000000d2        = '01621fb84e32000000d2';
const _Documentation_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c = '01692a4af82e8984742c';
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Control_Flow____Control_Flow_017a382f3df94a54c4b0 = db.assignTag('017a382f3df94a54c4b0');
const _instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a = db.assignTag('017a382f3df9e2dcb12a');
const _instance_of_Runnable_Output____New_output_017a382f3dfa18c7e757 = db.assignTag('017a382f3dfa18c7e757');
const _instance_of_Runnable_Input____New_input_017a382f3dfa32a856fd = db.assignTag('017a382f3dfa32a856fd');
const _instance_of_Ascender_017a382f3dfa89e96aa9    = db.assignTag('017a382f3dfa89e96aa9');
const _instance_of_Control_Flow____Control_Flow_017a382f3dfac5e70848 = db.assignTag('017a382f3dfac5e70848');
const _instance_of_Descender_017a382f3dfaf933faa3   = db.assignTag('017a382f3dfaf933faa3');
const _instance_of_Runnable_Input____object_017a382f9cbe02a1fb64 = db.assignTag('017a382f9cbe02a1fb64');
const _instance_of_Runnable_Input____property_017a38331ad650b0704b = db.assignTag('017a38331ad650b0704b');
const _instance_of_Runnable_Output____object_017a38348618543799d5 = db.assignTag('017a38348618543799d5');
const _instance_of_Documentation_017b35893b6fe3fcfde8 = db.assignTag('017b35893b6fe3fcfde8');
const _instance_of_Documentation_017b35893f6f51d688d5 = db.assignTag('017b35893f6f51d688d5');
const _instance_of_Documentation_017b35893f6feb4124bd = db.assignTag('017b35893f6feb4124bd');
const _instance_of_Documentation_017b3589427947ee32e5 = db.assignTag('017b3589427947ee32e5');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Transaction_0179b26880c1af51a32b        = '0179b26880c1af51a32b';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a
db.newModel(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a, 'Clear Object Property') // tag and name of the model 
    .extends(_Action_Call_0168c6f020f2a96a0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Clear Object Property',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a);
// :_instance_of_Control_Flow____Control_Flow_017a382f3df94a54c4b0
db.newInstance(_instance_of_Control_Flow____Control_Flow_017a382f3df94a54c4b0)
    .setModelTag(_Control_Flow_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____New_output_017a382f3dfa18c7e757
db.newInstance(_instance_of_Runnable_Output____New_output_017a382f3dfa18c7e757)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'New output',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____New_input_017a382f3dfa32a856fd
db.newInstance(_instance_of_Runnable_Input____New_input_017a382f3dfa32a856fd)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'New input',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Ascender_017a382f3dfa89e96aa9
db.newInstance(_instance_of_Ascender_017a382f3dfa89e96aa9)
    .setModelTag(_Ascender_01621fb84e32000000a0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Control_Flow____Control_Flow_017a382f3dfac5e70848
db.newInstance(_instance_of_Control_Flow____Control_Flow_017a382f3dfac5e70848)
    .setModelTag(_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Descender_017a382f3dfaf933faa3
db.newInstance(_instance_of_Descender_017a382f3dfaf933faa3)
    .setModelTag(_Descender_01621fb84e32000000d0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____object_017a382f9cbe02a1fb64
db.newInstance(_instance_of_Runnable_Input____object_017a382f9cbe02a1fb64)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'object',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____property_017a38331ad650b0704b
db.newInstance(_instance_of_Runnable_Input____property_017a38331ad650b0704b)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'property',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____object_017a38348618543799d5
db.newInstance(_instance_of_Runnable_Output____object_017a38348618543799d5)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'object',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b6fe3fcfde8
db.newInstance(_instance_of_Documentation_017b35893b6fe3fcfde8)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Clear a specific property of an object.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Clear an Object property.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f6f51d688d5
db.newInstance(_instance_of_Documentation_017b35893f6f51d688d5)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The object.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f6feb4124bd
db.newInstance(_instance_of_Documentation_017b35893f6feb4124bd)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The property to clear.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589427947ee32e5
db.newInstance(_instance_of_Documentation_017b3589427947ee32e5)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The result object.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Ascender_017a382f3dfa89e96aa9        , _Ascender_Input_01621fb84e32000000a1              , _instance_of_Runnable_Input____New_input_017a382f3dfa32a856fd);
db.assign(_instance_of_Ascender_017a382f3dfa89e96aa9        , _Ascender_Upward_01621fb84e32000000a2             , _instance_of_Control_Flow____Control_Flow_017a382f3dfac5e70848);
db.assign(_instance_of_Descender_017a382f3dfaf933faa3       , _Descender_Downward_01621fb84e32000000d1          , _instance_of_Control_Flow____Control_Flow_017a382f3df94a54c4b0);
db.assign(_instance_of_Descender_017a382f3dfaf933faa3       , _Descender_Output_01621fb84e32000000d2            , _instance_of_Runnable_Output____New_output_017a382f3dfa18c7e757);
db.assign(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Control_Flow____Control_Flow_017a382f3df94a54c4b0);
db.assign(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____object_017a382f9cbe02a1fb64);
db.assign(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____property_017a38331ad650b0704b);
db.assign(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Control_Flow____Control_Flow_017a382f3dfac5e70848);
db.assign(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____object_017a38348618543799d5);
db.assign(_instance_of_Control_Flow____Control_Flow_017a382f3df94a54c4b0, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Output____New_output_017a382f3dfa18c7e757, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____New_input_017a382f3dfa32a856fd, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Control_Flow____Control_Flow_017a382f3dfac5e70848, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____object_017a382f9cbe02a1fb64, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Input____property_017a38331ad650b0704b, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Property_ff021000000000000005                    );
db.assign(_instance_of_Runnable_Output____object_017a38348618543799d5, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Ascender_017a382f3dfa89e96aa9        );
db.assign(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Descender_017a382f3dfaf933faa3       );
db.assign(_instance_of_Documentation_017b35893b6fe3fcfde8   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a);
db.assign(_instance_of_Documentation_017b35893f6f51d688d5   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____object_017a382f9cbe02a1fb64);
db.assign(_instance_of_Documentation_017b35893f6feb4124bd   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____property_017a38331ad650b0704b);
db.assign(_instance_of_Documentation_017b3589427947ee32e5   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____object_017a38348618543799d5);
db.assign(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017a382f3df94a54c4b0);
db.assign(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017a382f3dfac5e70848);
db.assign(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____object_017a382f9cbe02a1fb64);
db.assign(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____property_017a38331ad650b0704b);
db.assign(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____object_017a38348618543799d5);
db.assign(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b6fe3fcfde8   );
db.assign(_instance_of_Ascender_017a382f3dfa89e96aa9        , _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____New_input_017a382f3dfa32a856fd);
db.assign(_instance_of_Ascender_017a382f3dfa89e96aa9        , _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017a382f3dfac5e70848);
db.assign(_instance_of_Descender_017a382f3dfaf933faa3       , _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017a382f3df94a54c4b0);
db.assign(_instance_of_Descender_017a382f3dfaf933faa3       , _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____New_output_017a382f3dfa18c7e757);
db.assign(_instance_of_Runnable_Input____object_017a382f9cbe02a1fb64, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f6f51d688d5   );
db.assign(_instance_of_Runnable_Input____property_017a38331ad650b0704b, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f6feb4124bd   );
db.assign(_instance_of_Runnable_Output____object_017a38348618543799d5, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589427947ee32e5   );
db.assignOptional(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a, _Object_gooRel_ff022000000000000003, _Transaction_0179b26880c1af51a32b);
db.assignOptional(_instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a, _GOO_parentGooRel_ff02200000000000000u, _Transaction_0179b26880c1af51a32b);
db.assignOptional(_Transaction_0179b26880c1af51a32b, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a);
db.assignOptional(_Transaction_0179b26880c1af51a32b, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Clear_Object_Property_017a382f3df9e2dcb12a);
