
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Model_type_0162f672366be5ca7a86         = '0162f672366be5ca7a86';
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
const _instance_of_Coded_Function_model____Create_Local_Object_016778ac951d2b536b23 = db.assignTag('016778ac951d2b536b23');
const _instance_of_Runnable_Output____object_016778ac9e05c7adc095 = db.assignTag('016778ac9e05c7adc095');
const _instance_of_Runnable_Input____model_016778b236638293bbc2 = db.assignTag('016778b236638293bbc2');
const _instance_of_Documentation_Function_Metadata_d0c778ac951d2b536b23 = db.assignTag('d0c778ac951d2b536b23');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Operation_0179b268740d49b2a89d          = '0179b268740d49b2a89d';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Create_Local_Object_016778ac951d2b536b23
db.newModel(_instance_of_Coded_Function_model____Create_Local_Object_016778ac951d2b536b23, 'Create Local Object') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        ['01621fb84e320000f001']:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Create_Local_Object_016778ac951d2b536b23, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Create Local Object',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Create_Local_Object_016778ac951d2b536b23);
// :_instance_of_Runnable_Output____object_016778ac9e05c7adc095
db.newInstance(_instance_of_Runnable_Output____object_016778ac9e05c7adc095)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Create_Local_Object_016778ac951d2b536b23)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'object',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____model_016778b236638293bbc2
db.newInstance(_instance_of_Runnable_Input____model_016778b236638293bbc2)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Create_Local_Object_016778ac951d2b536b23)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'model',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c778ac951d2b536b23
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c778ac951d2b536b23)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Create_Local_Object_016778ac951d2b536b23)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 016778b236638293bbc2-model | Model | The model of the instance. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 016778ac9e05c7adc095-object | Object | The created instance. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nCreates an instance of the specified model. It is said to be `local` because it is not yet persisted in the main\ndatabase. See `Persist Object` for how to persist in the database a newly created local object.\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Create a Local Object.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Create_Local_Object_016778ac951d2b536b23, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____model_016778b236638293bbc2);
db.assign(_instance_of_Coded_Function_model____Create_Local_Object_016778ac951d2b536b23, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____object_016778ac9e05c7adc095);
db.assign(_instance_of_Runnable_Output____object_016778ac9e05c7adc095, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Input____model_016778b236638293bbc2, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Model_type_0162f672366be5ca7a86                  );
db.assign(_instance_of_Coded_Function_model____Create_Local_Object_016778ac951d2b536b23, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c778ac951d2b536b23);
db.assign(_instance_of_Coded_Function_model____Create_Local_Object_016778ac951d2b536b23, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____object_016778ac9e05c7adc095);
db.assign(_instance_of_Coded_Function_model____Create_Local_Object_016778ac951d2b536b23, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____model_016778b236638293bbc2);
db.assign(_instance_of_Coded_Function_model____Create_Local_Object_016778ac951d2b536b23, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c778ac951d2b536b23);
db.assignOptional(_instance_of_Coded_Function_model____Create_Local_Object_016778ac951d2b536b23, _Object_gooRel_ff022000000000000003, _Operation_0179b268740d49b2a89d);
db.assignOptional(_instance_of_Coded_Function_model____Create_Local_Object_016778ac951d2b536b23, _GOO_parentGooRel_ff02200000000000000u, _Operation_0179b268740d49b2a89d);
db.assignOptional(_Operation_0179b268740d49b2a89d, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Create_Local_Object_016778ac951d2b536b23);
db.assignOptional(_Operation_0179b268740d49b2a89d, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Create_Local_Object_016778ac951d2b536b23);
