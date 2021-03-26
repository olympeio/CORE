
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Object_ff021000000000000001             = 'ff021000000000000001';
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
const _instance_of_Coded_Function_model____Equals_01633f061f44e5e36b06 = db.assignTag('01633f061f44e5e36b06');
const _instance_of_Runnable_Input____a_01633f06232c5a0cb658 = db.assignTag('01633f06232c5a0cb658');
const _instance_of_Runnable_Input____b_01633f06245d7520ebf3 = db.assignTag('01633f06245d7520ebf3');
const _instance_of_Runnable_Output____a_$_61_$$_61_$_b_01633f0625605b83d379 = db.assignTag('01633f0625605b83d379');
const _instance_of_Documentation_Function_Metadata_d0c33f061f44e5e36b06 = db.assignTag('d0c33f061f44e5e36b06');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Logic_0178445f8bd56b198950              = '0178445f8bd56b198950';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Equals_01633f061f44e5e36b06
db.newModel(_instance_of_Coded_Function_model____Equals_01633f061f44e5e36b06, 'Equals') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.setRootInstanceTag(_instance_of_Coded_Function_model____Equals_01633f061f44e5e36b06);
// :_instance_of_Runnable_Input____a_01633f06232c5a0cb658
db.newInstance(_instance_of_Runnable_Input____a_01633f06232c5a0cb658)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Equals_01633f061f44e5e36b06)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____b_01633f06245d7520ebf3
db.newInstance(_instance_of_Runnable_Input____b_01633f06245d7520ebf3)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Equals_01633f061f44e5e36b06)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____a_$_61_$$_61_$_b_01633f0625605b83d379
db.newInstance(_instance_of_Runnable_Output____a_$_61_$$_61_$_b_01633f0625605b83d379)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Equals_01633f061f44e5e36b06)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a == b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c33f061f44e5e36b06
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c33f061f44e5e36b06)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Equals_01633f061f44e5e36b06)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01633f06232c5a0cb658-a | Object | The first object to compare. |\n| 01633f06245d7520ebf3-b | Object | The second object to compare. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01633f0625605b83d379-a == b | Boolean | `true` if a & b are equal. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nCompares two objects (e.g. numbers) and returns `true` if they are equals. returns `false` otherwise.\nNote if the two objects are not comparable (e.g. a number and a color) the result will be `false`.\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Checks if two objects are equal.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Equals_01633f061f44e5e36b06, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____a_01633f06232c5a0cb658);
db.assign(_instance_of_Coded_Function_model____Equals_01633f061f44e5e36b06, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____b_01633f06245d7520ebf3);
db.assign(_instance_of_Coded_Function_model____Equals_01633f061f44e5e36b06, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____a_$_61_$$_61_$_b_01633f0625605b83d379);
db.assign(_instance_of_Runnable_Input____a_01633f06232c5a0cb658, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Input____b_01633f06245d7520ebf3, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Output____a_$_61_$$_61_$_b_01633f0625605b83d379, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Coded_Function_model____Equals_01633f061f44e5e36b06, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c33f061f44e5e36b06);
db.assign(_instance_of_Coded_Function_model____Equals_01633f061f44e5e36b06, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____a_01633f06232c5a0cb658);
db.assign(_instance_of_Coded_Function_model____Equals_01633f061f44e5e36b06, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____b_01633f06245d7520ebf3);
db.assign(_instance_of_Coded_Function_model____Equals_01633f061f44e5e36b06, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____a_$_61_$$_61_$_b_01633f0625605b83d379);
db.assign(_instance_of_Coded_Function_model____Equals_01633f061f44e5e36b06, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c33f061f44e5e36b06);
db.assignOptional(_instance_of_Coded_Function_model____Equals_01633f061f44e5e36b06, _Object_gooRel_ff022000000000000003, _Logic_0178445f8bd56b198950);
db.assignOptional(_instance_of_Coded_Function_model____Equals_01633f061f44e5e36b06, _GOO_parentGooRel_ff02200000000000000u, _Logic_0178445f8bd56b198950);
db.assignOptional(_Logic_0178445f8bd56b198950, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Equals_01633f061f44e5e36b06);
db.assignOptional(_Logic_0178445f8bd56b198950, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Equals_01633f061f44e5e36b06);
