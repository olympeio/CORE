
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Error_Flow_016eeb5ede9f3094d8f0         = '016eeb5ede9f3094d8f0';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


// Definition of tags of defined properties
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
const _instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910 = db.assignTag('016eeb5ede9f3094d910');
const _instance_of_Runnable_Input____Error_Flow_1_016eeb5ede9f3094d911 = db.assignTag('016eeb5ede9f3094d911');
const _instance_of_Runnable_Input____Error_Flow_2_016eeb5ede9f3094d912 = db.assignTag('016eeb5ede9f3094d912');
const _instance_of_Runnable_Input____Error_Flow_3_016eeb5ede9f3094d913 = db.assignTag('016eeb5ede9f3094d913');
const _instance_of_Runnable_Input____Error_Flow_4_016eeb5ede9f3094d914 = db.assignTag('016eeb5ede9f3094d914');
const _instance_of_Runnable_Output____Error_Flow_016eeb5ede9f3094d915 = db.assignTag('016eeb5ede9f3094d915');
const _instance_of_Documentation_017b35893b9d65414118 = db.assignTag('017b35893b9d65414118');
const _instance_of_Documentation_017b35893fad924d6104 = db.assignTag('017b35893fad924d6104');
const _instance_of_Documentation_017b35893faedd25593d = db.assignTag('017b35893faedd25593d');
const _instance_of_Documentation_017b35893faef175c430 = db.assignTag('017b35893faef175c430');
const _instance_of_Documentation_017b35893fafb5e7a4d8 = db.assignTag('017b35893fafb5e7a4d8');
const _instance_of_Documentation_017b3589429613faad14 = db.assignTag('017b3589429613faad14');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Util_0179b26a12e03686de9c               = '0179b26a12e03686de9c';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910
db.newModel(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910, 'Error Flow Multiplexer') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Error Flow Multiplexer',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910);
// :_instance_of_Runnable_Input____Error_Flow_1_016eeb5ede9f3094d911
db.newInstance(_instance_of_Runnable_Input____Error_Flow_1_016eeb5ede9f3094d911)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow 1',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Error_Flow_2_016eeb5ede9f3094d912
db.newInstance(_instance_of_Runnable_Input____Error_Flow_2_016eeb5ede9f3094d912)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow 2',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Error_Flow_3_016eeb5ede9f3094d913
db.newInstance(_instance_of_Runnable_Input____Error_Flow_3_016eeb5ede9f3094d913)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow 3',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Error_Flow_4_016eeb5ede9f3094d914
db.newInstance(_instance_of_Runnable_Input____Error_Flow_4_016eeb5ede9f3094d914)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow 4',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Error_Flow_016eeb5ede9f3094d915
db.newInstance(_instance_of_Runnable_Output____Error_Flow_016eeb5ede9f3094d915)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b9d65414118
db.newInstance(_instance_of_Documentation_017b35893b9d65414118)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Creates a new error flow by joining up to 4 error flows. The resulting flow is triggered whenever',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Joins up to 4 error flows into one.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fad924d6104
db.newInstance(_instance_of_Documentation_017b35893fad924d6104)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The first error flow to join.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893faedd25593d
db.newInstance(_instance_of_Documentation_017b35893faedd25593d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The second error flow to join.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893faef175c430
db.newInstance(_instance_of_Documentation_017b35893faef175c430)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The third error flow to join.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fafb5e7a4d8
db.newInstance(_instance_of_Documentation_017b35893fafb5e7a4d8)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The fourth error flow to join.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589429613faad14
db.newInstance(_instance_of_Documentation_017b3589429613faad14)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The resulting error flow.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Error_Flow_1_016eeb5ede9f3094d911);
db.assign(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Error_Flow_2_016eeb5ede9f3094d912);
db.assign(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Error_Flow_3_016eeb5ede9f3094d913);
db.assign(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Error_Flow_4_016eeb5ede9f3094d914);
db.assign(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Error_Flow_016eeb5ede9f3094d915);
db.assign(_instance_of_Runnable_Input____Error_Flow_1_016eeb5ede9f3094d911, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Runnable_Input____Error_Flow_2_016eeb5ede9f3094d912, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Runnable_Input____Error_Flow_3_016eeb5ede9f3094d913, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Runnable_Input____Error_Flow_4_016eeb5ede9f3094d914, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Runnable_Output____Error_Flow_016eeb5ede9f3094d915, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Documentation_017b35893b9d65414118   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910);
db.assign(_instance_of_Documentation_017b35893fad924d6104   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Error_Flow_1_016eeb5ede9f3094d911);
db.assign(_instance_of_Documentation_017b35893faedd25593d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Error_Flow_2_016eeb5ede9f3094d912);
db.assign(_instance_of_Documentation_017b35893faef175c430   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Error_Flow_3_016eeb5ede9f3094d913);
db.assign(_instance_of_Documentation_017b35893fafb5e7a4d8   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Error_Flow_4_016eeb5ede9f3094d914);
db.assign(_instance_of_Documentation_017b3589429613faad14   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Error_Flow_016eeb5ede9f3094d915);
db.assign(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Error_Flow_1_016eeb5ede9f3094d911);
db.assign(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Error_Flow_2_016eeb5ede9f3094d912);
db.assign(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Error_Flow_3_016eeb5ede9f3094d913);
db.assign(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Error_Flow_4_016eeb5ede9f3094d914);
db.assign(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Error_Flow_016eeb5ede9f3094d915);
db.assign(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b9d65414118   );
db.assign(_instance_of_Runnable_Input____Error_Flow_1_016eeb5ede9f3094d911, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fad924d6104   );
db.assign(_instance_of_Runnable_Input____Error_Flow_2_016eeb5ede9f3094d912, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893faedd25593d   );
db.assign(_instance_of_Runnable_Input____Error_Flow_3_016eeb5ede9f3094d913, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893faef175c430   );
db.assign(_instance_of_Runnable_Input____Error_Flow_4_016eeb5ede9f3094d914, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fafb5e7a4d8   );
db.assign(_instance_of_Runnable_Output____Error_Flow_016eeb5ede9f3094d915, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589429613faad14   );
db.assignOptional(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910, _Object_gooRel_ff022000000000000003, _Util_0179b26a12e03686de9c);
db.assignOptional(_instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910, _GOO_parentGooRel_ff02200000000000000u, _Util_0179b26a12e03686de9c);
db.assignOptional(_Util_0179b26a12e03686de9c, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910);
db.assignOptional(_Util_0179b26a12e03686de9c, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Error_Flow_Multiplexer_016eeb5ede9f3094d910);
