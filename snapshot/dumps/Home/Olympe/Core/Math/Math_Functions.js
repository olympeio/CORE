
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Number_ff021000000000000013             = 'ff021000000000000013';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
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
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda = db.assignTag('016326a54b2c1837bdda');
const _instance_of_Runnable_Input____function_name_016326a5960b89c73a86 = db.assignTag('016326a5960b89c73a86');
const _instance_of_Runnable_Input____input_016326a611223b77b210 = db.assignTag('016326a611223b77b210');
const _instance_of_Runnable_Output____result_016326a64d625aa6b78c = db.assignTag('016326a64d625aa6b78c');
const _instance_of_Documentation_017b35893b91cac77518 = db.assignTag('017b35893b91cac77518');
const _instance_of_Documentation_017b35893f9849ef5e0a = db.assignTag('017b35893f9849ef5e0a');
const _instance_of_Documentation_017b3589428f7663df23 = db.assignTag('017b3589428f7663df23');
const _instance_of_Documentation_017b359e16c13d921701 = db.assignTag('017b359e16c13d921701');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Math_0178445f8bd56b19894f               = '0178445f8bd56b19894f';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda
db.newModel(_instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda, 'Math Functions') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Math Functions',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda);
// :_instance_of_Runnable_Input____function_name_016326a5960b89c73a86
db.newInstance(_instance_of_Runnable_Input____function_name_016326a5960b89c73a86)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'function name',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____input_016326a611223b77b210
db.newInstance(_instance_of_Runnable_Input____input_016326a611223b77b210)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'input',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____result_016326a64d625aa6b78c
db.newInstance(_instance_of_Runnable_Output____result_016326a64d625aa6b78c)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'result',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b91cac77518
db.newInstance(_instance_of_Documentation_017b35893b91cac77518)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Performs the named mathematical function, such as `cos`, `sqrt`, etc.\n\nSee [https://www.w3schools.com/js/js_math.asp](https://www.w3schools.com/js/js_math.asp) for the list of available functions.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Perform the specified math operation.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f9849ef5e0a
db.newInstance(_instance_of_Documentation_017b35893f9849ef5e0a)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The input value.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589428f7663df23
db.newInstance(_instance_of_Documentation_017b3589428f7663df23)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The result.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b359e16c13d921701
db.newInstance(_instance_of_Documentation_017b359e16c13d921701)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The name of the mathematical function to perform.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____function_name_016326a5960b89c73a86);
db.assign(_instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____input_016326a611223b77b210);
db.assign(_instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____result_016326a64d625aa6b78c);
db.assign(_instance_of_Runnable_Input____function_name_016326a5960b89c73a86, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____input_016326a611223b77b210, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____result_016326a64d625aa6b78c, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Documentation_017b35893b91cac77518   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda);
db.assign(_instance_of_Documentation_017b35893f9849ef5e0a   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____input_016326a611223b77b210);
db.assign(_instance_of_Documentation_017b3589428f7663df23   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____result_016326a64d625aa6b78c);
db.assign(_instance_of_Documentation_017b359e16c13d921701   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____function_name_016326a5960b89c73a86);
db.assign(_instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____function_name_016326a5960b89c73a86);
db.assign(_instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____input_016326a611223b77b210);
db.assign(_instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____result_016326a64d625aa6b78c);
db.assign(_instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b91cac77518   );
db.assign(_instance_of_Runnable_Input____function_name_016326a5960b89c73a86, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b359e16c13d921701   );
db.assign(_instance_of_Runnable_Input____input_016326a611223b77b210, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f9849ef5e0a   );
db.assign(_instance_of_Runnable_Output____result_016326a64d625aa6b78c, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589428f7663df23   );
db.assignOptional(_instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda, _Object_gooRel_ff022000000000000003, _Math_0178445f8bd56b19894f);
db.assignOptional(_instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda, _GOO_parentGooRel_ff02200000000000000u, _Math_0178445f8bd56b19894f);
db.assignOptional(_Math_0178445f8bd56b19894f, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda);
db.assignOptional(_Math_0178445f8bd56b19894f, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Math_Functions_016326a54b2c1837bdda);