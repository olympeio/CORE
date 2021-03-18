
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
let _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
let _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
let _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
let _Number_ff021000000000000013             = 'ff021000000000000013';
let _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
let _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


// Definition of tags of defined properties
let _Documentation_Function_Metadata_errors_0172c6ae82952a74193f = '0172c6ae82952a74193f';
let _Documentation_Function_Metadata_inputs_0172c6ae82952a74193d = '0172c6ae82952a74193d';
let _Documentation_Function_Metadata_outputs_0172c6ae82952a74193e = '0172c6ae82952a74193e';
let _Documentation_Metadata_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
let _Documentation_Metadata_toolTip_01703376c4a81c0e9d91 = '01703376c4a81c0e9d91';
let _Object_name_ff023000000000000011             = 'ff023000000000000011';
let _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
let _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
let _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
let _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
let _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
let _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
let _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
let _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
let _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
let _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances
let _instance_of_Coded_Function_model____Plus_017844600a3071347e15 = db.assignTag('01621f754a1c01a72d8e');
let _instance_of_Runnable_Input____a_017844632a365c94b2a1 = db.assignTag('01621f754a1cb435494a');
let _instance_of_Runnable_Input____b_017844634d995a4b4dd7 = db.assignTag('01621f754a1c290a6d5b');
let _instance_of_Runnable_Output____a$_43_$b_017844637f6090bbf5b0 = db.assignTag('017844637f6090bbf5b0');
let _instance_of_Documentation_Function_Metadata_017844661b7e545816fa = db.assignTag('01621f754a1c68c62623');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
let _Math_0178445f8bd56b19894f               = '0178445f8bd56b19894f';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Plus_017844600a3071347e15
db.newModel(_instance_of_Coded_Function_model____Plus_017844600a3071347e15, 'Plus') // tag and name of the model
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011)
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Coded_Function_model____Plus_017844600a3071347e15, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Plus',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Plus_017844600a3071347e15);
// :_instance_of_Runnable_Input____a_017844632a365c94b2a1
db.newInstance(_instance_of_Runnable_Input____a_017844632a365c94b2a1)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Plus_017844600a3071347e15)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____b_017844634d995a4b4dd7
db.newInstance(_instance_of_Runnable_Input____b_017844634d995a4b4dd7)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Plus_017844600a3071347e15)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____a$_43_$b_017844637f6090bbf5b0
db.newInstance(_instance_of_Runnable_Output____a$_43_$b_017844637f6090bbf5b0)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Plus_017844600a3071347e15)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a+b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_017844661b7e545816fa
db.newInstance(_instance_of_Documentation_Function_Metadata_017844661b7e545816fa)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 017844632a365c94b2a1-a | Number | First Operand |\n| 017844634d995a4b4dd7-b | Number | Second Operand |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 017844637f6090bbf5b0-a+b | Number | The sum of the 2 operands. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nPerforms a addition operation between the 2 numbers passed as arguments.\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Adds 2 numbers.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Plus_017844600a3071347e15, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____a_017844632a365c94b2a1);
db.assign(_instance_of_Coded_Function_model____Plus_017844600a3071347e15, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____b_017844634d995a4b4dd7);
db.assign(_instance_of_Coded_Function_model____Plus_017844600a3071347e15, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____a$_43_$b_017844637f6090bbf5b0);
db.assign(_instance_of_Runnable_Input____a_017844632a365c94b2a1, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____b_017844634d995a4b4dd7, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____a$_43_$b_017844637f6090bbf5b0, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Coded_Function_model____Plus_017844600a3071347e15, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_017844661b7e545816fa);
db.assign(_instance_of_Coded_Function_model____Plus_017844600a3071347e15, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____a_017844632a365c94b2a1);
db.assign(_instance_of_Coded_Function_model____Plus_017844600a3071347e15, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____b_017844634d995a4b4dd7);
db.assign(_instance_of_Coded_Function_model____Plus_017844600a3071347e15, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____a$_43_$b_017844637f6090bbf5b0);
db.assignOptional(_instance_of_Coded_Function_model____Plus_017844600a3071347e15, _Object_gooRel_ff022000000000000003, _Math_0178445f8bd56b19894f);
db.assignOptional(_Math_0178445f8bd56b19894f, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Plus_017844600a3071347e15);
db.assignOptional(_instance_of_Coded_Function_model____Plus_017844600a3071347e15, _GOO_parentGooRel_ff02200000000000000u, _Math_0178445f8bd56b19894f);
db.assignOptional(_Math_0178445f8bd56b19894f, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Plus_017844600a3071347e15);
