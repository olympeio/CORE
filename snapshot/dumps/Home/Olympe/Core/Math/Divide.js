
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
let _instance_of_Coded_Function_model____Divide_01626cab8ad21701ca50 = db.assignTag('01626cab8ad21701ca50');
let _instance_of_Runnable_Input____a_01626cabab81e8317859 = db.assignTag('01626cabab81e8317859');
let _instance_of_Runnable_Input____b_01626cabc79f37f03b54 = db.assignTag('01626cabc79f37f03b54');
let _instance_of_Runnable_Output____a$_47_$b_01626cabe85ff7ea6d9b = db.assignTag('01626cabe85ff7ea6d9b');
let _instance_of_Documentation_Function_Metadata_0178446f3819bc0c6500 = db.assignTag('0178446f3819bc0c6500');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
let _Math_0178445f8bd56b19894f               = '0178445f8bd56b19894f';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Divide_01626cab8ad21701ca50
db.newModel(_instance_of_Coded_Function_model____Divide_01626cab8ad21701ca50, 'Divide') // tag and name of the model
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011)
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Coded_Function_model____Divide_01626cab8ad21701ca50, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Divide',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Divide_01626cab8ad21701ca50);
// :_instance_of_Runnable_Input____a_01626cabab81e8317859
db.newInstance(_instance_of_Runnable_Input____a_01626cabab81e8317859)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Divide_01626cab8ad21701ca50)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____b_01626cabc79f37f03b54
db.newInstance(_instance_of_Runnable_Input____b_01626cabc79f37f03b54)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Divide_01626cab8ad21701ca50)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____a$_47_$b_01626cabe85ff7ea6d9b
db.newInstance(_instance_of_Runnable_Output____a$_47_$b_01626cabe85ff7ea6d9b)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Divide_01626cab8ad21701ca50)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a/b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_0178446f3819bc0c6500
db.newInstance(_instance_of_Documentation_Function_Metadata_0178446f3819bc0c6500)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01626cabab81e8317859-a | Number | The dividend. |\n| 01626cabc79f37f03b54-b | Number | The divisor. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01626cabe85ff7ea6d9b-a/b | Number | The result of the division. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nPerforms the division between two numbers.\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Divides 1 number by another.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Divide_01626cab8ad21701ca50, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____a_01626cabab81e8317859);
db.assign(_instance_of_Coded_Function_model____Divide_01626cab8ad21701ca50, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____b_01626cabc79f37f03b54);
db.assign(_instance_of_Coded_Function_model____Divide_01626cab8ad21701ca50, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____a$_47_$b_01626cabe85ff7ea6d9b);
db.assign(_instance_of_Runnable_Input____a_01626cabab81e8317859, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____b_01626cabc79f37f03b54, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____a$_47_$b_01626cabe85ff7ea6d9b, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Coded_Function_model____Divide_01626cab8ad21701ca50, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_0178446f3819bc0c6500);
db.assign(_instance_of_Coded_Function_model____Divide_01626cab8ad21701ca50, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____a_01626cabab81e8317859);
db.assign(_instance_of_Coded_Function_model____Divide_01626cab8ad21701ca50, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____b_01626cabc79f37f03b54);
db.assign(_instance_of_Coded_Function_model____Divide_01626cab8ad21701ca50, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____a$_47_$b_01626cabe85ff7ea6d9b);
db.assign(_instance_of_Coded_Function_model____Divide_01626cab8ad21701ca50, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_0178446f3819bc0c6500);
db.assign(_instance_of_Documentation_Function_Metadata_0178446f3819bc0c6500, _Object_gooRel_ff022000000000000003, _instance_of_Coded_Function_model____Divide_01626cab8ad21701ca50);
db.assignOptional(_instance_of_Coded_Function_model____Divide_01626cab8ad21701ca50, _Object_gooRel_ff022000000000000003, _Math_0178445f8bd56b19894f);
db.assignOptional(_Math_0178445f8bd56b19894f, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Divide_01626cab8ad21701ca50);
db.assignOptional(_instance_of_Coded_Function_model____Divide_01626cab8ad21701ca50, _GOO_parentGooRel_ff02200000000000000u, _Math_0178445f8bd56b19894f);
db.assignOptional(_Math_0178445f8bd56b19894f, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Divide_01626cab8ad21701ca50);
