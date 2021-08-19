
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
const _instance_of_Coded_Function_model____Power_01626cb10bc0db70e256 = db.assignTag('01626cb10bc0db70e256');
const _instance_of_Runnable_Input____a_01626cb12ddec0c2e3ab = db.assignTag('01626cb12ddec0c2e3ab');
const _instance_of_Runnable_Input____b_01626cb15d6a62fddcfe = db.assignTag('01626cb15d6a62fddcfe');
const _instance_of_Runnable_Output____a_$_42_$$_42_$_b_01626cb17e7aaf7fd45a = db.assignTag('01626cb17e7aaf7fd45a');
const _instance_of_Documentation_017b35893b8ac37985d2 = db.assignTag('017b35893b8ac37985d2');
const _instance_of_Documentation_017b35893f8b320a95a7 = db.assignTag('017b35893f8b320a95a7');
const _instance_of_Documentation_017b35893f8b322b1b38 = db.assignTag('017b35893f8b322b1b38');
const _instance_of_Documentation_017b3589427e41e2cbf2 = db.assignTag('017b3589427e41e2cbf2');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Math_0178445f8bd56b19894f               = '0178445f8bd56b19894f';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Power_01626cb10bc0db70e256
db.newModel(_instance_of_Coded_Function_model____Power_01626cb10bc0db70e256, 'Power') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.setRootInstanceTag(_instance_of_Coded_Function_model____Power_01626cb10bc0db70e256);
// :_instance_of_Runnable_Input____a_01626cb12ddec0c2e3ab
db.newInstance(_instance_of_Runnable_Input____a_01626cb12ddec0c2e3ab)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Power_01626cb10bc0db70e256)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____b_01626cb15d6a62fddcfe
db.newInstance(_instance_of_Runnable_Input____b_01626cb15d6a62fddcfe)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Power_01626cb10bc0db70e256)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____a_$_42_$$_42_$_b_01626cb17e7aaf7fd45a
db.newInstance(_instance_of_Runnable_Output____a_$_42_$$_42_$_b_01626cb17e7aaf7fd45a)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Power_01626cb10bc0db70e256)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a ** b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b8ac37985d2
db.newInstance(_instance_of_Documentation_017b35893b8ac37985d2)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Power_01626cb10bc0db70e256)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Returns the base to the exponent.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Computes a to the power of b.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f8b320a95a7
db.newInstance(_instance_of_Documentation_017b35893f8b320a95a7)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Power_01626cb10bc0db70e256)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The exponent used to raise the base.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f8b322b1b38
db.newInstance(_instance_of_Documentation_017b35893f8b322b1b38)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Power_01626cb10bc0db70e256)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The base number.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589427e41e2cbf2
db.newInstance(_instance_of_Documentation_017b3589427e41e2cbf2)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Power_01626cb10bc0db70e256)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The result of the operation.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Power_01626cb10bc0db70e256, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____a_01626cb12ddec0c2e3ab);
db.assign(_instance_of_Coded_Function_model____Power_01626cb10bc0db70e256, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____b_01626cb15d6a62fddcfe);
db.assign(_instance_of_Coded_Function_model____Power_01626cb10bc0db70e256, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____a_$_42_$$_42_$_b_01626cb17e7aaf7fd45a);
db.assign(_instance_of_Runnable_Input____a_01626cb12ddec0c2e3ab, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____b_01626cb15d6a62fddcfe, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____a_$_42_$$_42_$_b_01626cb17e7aaf7fd45a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Documentation_017b35893b8ac37985d2   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Power_01626cb10bc0db70e256);
db.assign(_instance_of_Documentation_017b35893f8b320a95a7   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____b_01626cb15d6a62fddcfe);
db.assign(_instance_of_Documentation_017b35893f8b322b1b38   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____a_01626cb12ddec0c2e3ab);
db.assign(_instance_of_Documentation_017b3589427e41e2cbf2   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____a_$_42_$$_42_$_b_01626cb17e7aaf7fd45a);
db.assign(_instance_of_Coded_Function_model____Power_01626cb10bc0db70e256, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____a_01626cb12ddec0c2e3ab);
db.assign(_instance_of_Coded_Function_model____Power_01626cb10bc0db70e256, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____b_01626cb15d6a62fddcfe);
db.assign(_instance_of_Coded_Function_model____Power_01626cb10bc0db70e256, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____a_$_42_$$_42_$_b_01626cb17e7aaf7fd45a);
db.assign(_instance_of_Coded_Function_model____Power_01626cb10bc0db70e256, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b8ac37985d2   );
db.assign(_instance_of_Runnable_Input____a_01626cb12ddec0c2e3ab, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f8b322b1b38   );
db.assign(_instance_of_Runnable_Input____b_01626cb15d6a62fddcfe, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f8b320a95a7   );
db.assign(_instance_of_Runnable_Output____a_$_42_$$_42_$_b_01626cb17e7aaf7fd45a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589427e41e2cbf2   );
db.assignOptional(_instance_of_Coded_Function_model____Power_01626cb10bc0db70e256, _Object_gooRel_ff022000000000000003, _Math_0178445f8bd56b19894f);
db.assignOptional(_instance_of_Coded_Function_model____Power_01626cb10bc0db70e256, _GOO_parentGooRel_ff02200000000000000u, _Math_0178445f8bd56b19894f);
db.assignOptional(_Math_0178445f8bd56b19894f, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Power_01626cb10bc0db70e256);
db.assignOptional(_Math_0178445f8bd56b19894f, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Power_01626cb10bc0db70e256);
