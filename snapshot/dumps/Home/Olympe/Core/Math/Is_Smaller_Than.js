
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
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
const _Runnable_Input_Default_Value_01740c5d4ae4b520dd02 = '01740c5d4ae4b520dd02';
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
const _instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147 = db.assignTag('01633efc7f259c4d2147');
const _instance_of_Runnable_Input____a_01633efc819acf9704d2 = db.assignTag('01633efc819acf9704d2');
const _instance_of_Runnable_Input____b_01633efc82d610c927d1 = db.assignTag('01633efc82d610c927d1');
const _instance_of_Runnable_Input____Strictly_01633efc83cce8177169 = db.assignTag('01633efc83cce8177169');
const _instance_of_Runnable_Output____a_$_60_$_b_01633efc8497d2934604 = db.assignTag('01633efc8497d2934604');
const _instance_of_Documentation_017b35893b8c99f96c12 = db.assignTag('017b35893b8c99f96c12');
const _instance_of_Documentation_017b35893f8d299e0516 = db.assignTag('017b35893f8d299e0516');
const _instance_of_Documentation_017b35893f8d3e47ff20 = db.assignTag('017b35893f8d3e47ff20');
const _instance_of_Documentation_017b35893f8dd9904f81 = db.assignTag('017b35893f8dd9904f81');
const _instance_of_Documentation_017b3589427f10b184e9 = db.assignTag('017b3589427f10b184e9');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Math_0178445f8bd56b19894f               = '0178445f8bd56b19894f';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147
db.newModel(_instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147, 'Is Smaller Than') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.setRootInstanceTag(_instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147);
// :_instance_of_Runnable_Input____a_01633efc819acf9704d2
db.newInstance(_instance_of_Runnable_Input____a_01633efc819acf9704d2)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____b_01633efc82d610c927d1
db.newInstance(_instance_of_Runnable_Input____b_01633efc82d610c927d1)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Strictly_01633efc83cce8177169
db.newInstance(_instance_of_Runnable_Input____Strictly_01633efc83cce8177169)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Strictly',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:true,
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____a_$_60_$_b_01633efc8497d2934604
db.newInstance(_instance_of_Runnable_Output____a_$_60_$_b_01633efc8497d2934604)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a < b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b8c99f96c12
db.newInstance(_instance_of_Documentation_017b35893b8c99f96c12)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Returns `true` if `a` is smaller than `b`. If `strictly` is set to `false`, then it returns `true` if `a` is smaller or equal to `b`.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Checks if a number is smaller than another one.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f8d299e0516
db.newInstance(_instance_of_Documentation_017b35893f8d299e0516)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Second operand.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f8d3e47ff20
db.newInstance(_instance_of_Documentation_017b35893f8d3e47ff20)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'First operand.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f8dd9904f81
db.newInstance(_instance_of_Documentation_017b35893f8dd9904f81)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'`true` to make a strict comparison.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589427f10b184e9
db.newInstance(_instance_of_Documentation_017b3589427f10b184e9)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'`true` is `a` is smaller than `b`.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____a_01633efc819acf9704d2);
db.assign(_instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____b_01633efc82d610c927d1);
db.assign(_instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Strictly_01633efc83cce8177169);
db.assign(_instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____a_$_60_$_b_01633efc8497d2934604);
db.assign(_instance_of_Runnable_Input____a_01633efc819acf9704d2, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____b_01633efc82d610c927d1, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____Strictly_01633efc83cce8177169, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Runnable_Output____a_$_60_$_b_01633efc8497d2934604, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Documentation_017b35893b8c99f96c12   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147);
db.assign(_instance_of_Documentation_017b35893f8d299e0516   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____b_01633efc82d610c927d1);
db.assign(_instance_of_Documentation_017b35893f8d3e47ff20   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____a_01633efc819acf9704d2);
db.assign(_instance_of_Documentation_017b35893f8dd9904f81   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Strictly_01633efc83cce8177169);
db.assign(_instance_of_Documentation_017b3589427f10b184e9   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____a_$_60_$_b_01633efc8497d2934604);
db.assign(_instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____a_01633efc819acf9704d2);
db.assign(_instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____b_01633efc82d610c927d1);
db.assign(_instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Strictly_01633efc83cce8177169);
db.assign(_instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____a_$_60_$_b_01633efc8497d2934604);
db.assign(_instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b8c99f96c12   );
db.assign(_instance_of_Runnable_Input____a_01633efc819acf9704d2, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f8d3e47ff20   );
db.assign(_instance_of_Runnable_Input____b_01633efc82d610c927d1, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f8d299e0516   );
db.assign(_instance_of_Runnable_Input____Strictly_01633efc83cce8177169, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f8dd9904f81   );
db.assign(_instance_of_Runnable_Output____a_$_60_$_b_01633efc8497d2934604, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589427f10b184e9   );
db.assignOptional(_instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147, _Object_gooRel_ff022000000000000003, _Math_0178445f8bd56b19894f);
db.assignOptional(_instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147, _GOO_parentGooRel_ff02200000000000000u, _Math_0178445f8bd56b19894f);
db.assignOptional(_Math_0178445f8bd56b19894f, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147);
db.assignOptional(_Math_0178445f8bd56b19894f, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Is_Smaller_Than_01633efc7f259c4d2147);
