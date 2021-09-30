
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
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
const _Documentation_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d = db.assignTag('016778ac9fcc6032ce1d');
const _instance_of_Runnable_Input____object_016778aca26c6df893e7 = db.assignTag('016778aca26c6df893e7');
const _instance_of_Runnable_Input____property_016778acaa8ea38f75d3 = db.assignTag('016778acaa8ea38f75d3');
const _instance_of_Runnable_Input____value_016778acb516521d243d = db.assignTag('016778acb516521d243d');
const _instance_of_Runnable_Output____object_016778acb6bd00078064 = db.assignTag('016778acb6bd00078064');
const _instance_of_Documentation_017b35893b3a5ed4f5e0 = db.assignTag('017b35893b3a5ed4f5e0');
const _instance_of_Documentation_017b35893f18f3ba3b8c = db.assignTag('017b35893f18f3ba3b8c');
const _instance_of_Documentation_017b35893f1935bc76cb = db.assignTag('017b35893f1935bc76cb');
const _instance_of_Documentation_017b35893f19cb8a3b4e = db.assignTag('017b35893f19cb8a3b4e');
const _instance_of_Documentation_017b3589427008a8f113 = db.assignTag('017b3589427008a8f113');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Operation_0179b268740d49b2a89d          = '0179b268740d49b2a89d';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d
db.newModel(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, 'Set Object Property') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Set Object Property',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d);
// :_instance_of_Runnable_Input____object_016778aca26c6df893e7
db.newInstance(_instance_of_Runnable_Input____object_016778aca26c6df893e7)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'object',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____property_016778acaa8ea38f75d3
db.newInstance(_instance_of_Runnable_Input____property_016778acaa8ea38f75d3)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'property',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____value_016778acb516521d243d
db.newInstance(_instance_of_Runnable_Input____value_016778acb516521d243d)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'value',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____object_016778acb6bd00078064
db.newInstance(_instance_of_Runnable_Output____object_016778acb6bd00078064)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'object',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b3a5ed4f5e0
db.newInstance(_instance_of_Documentation_017b35893b3a5ed4f5e0)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Sets the value of a specific property for the provided object.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Set an Object property.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f18f3ba3b8c
db.newInstance(_instance_of_Documentation_017b35893f18f3ba3b8c)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The object to update.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f1935bc76cb
db.newInstance(_instance_of_Documentation_017b35893f1935bc76cb)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The property to update.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f19cb8a3b4e
db.newInstance(_instance_of_Documentation_017b35893f19cb8a3b4e)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The value to set the property with.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589427008a8f113
db.newInstance(_instance_of_Documentation_017b3589427008a8f113)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The object.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____object_016778aca26c6df893e7);
db.assign(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____property_016778acaa8ea38f75d3);
db.assign(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____value_016778acb516521d243d);
db.assign(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____object_016778acb6bd00078064);
db.assign(_instance_of_Runnable_Input____object_016778aca26c6df893e7, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Input____property_016778acaa8ea38f75d3, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Property_ff021000000000000005                    );
db.assign(_instance_of_Runnable_Input____value_016778acb516521d243d, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Output____object_016778acb6bd00078064, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Documentation_017b35893b3a5ed4f5e0   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d);
db.assign(_instance_of_Documentation_017b35893f18f3ba3b8c   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____object_016778aca26c6df893e7);
db.assign(_instance_of_Documentation_017b35893f1935bc76cb   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____property_016778acaa8ea38f75d3);
db.assign(_instance_of_Documentation_017b35893f19cb8a3b4e   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____value_016778acb516521d243d);
db.assign(_instance_of_Documentation_017b3589427008a8f113   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____object_016778acb6bd00078064);
db.assign(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____object_016778aca26c6df893e7);
db.assign(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____property_016778acaa8ea38f75d3);
db.assign(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____value_016778acb516521d243d);
db.assign(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____object_016778acb6bd00078064);
db.assign(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b3a5ed4f5e0   );
db.assign(_instance_of_Runnable_Input____object_016778aca26c6df893e7, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f18f3ba3b8c   );
db.assign(_instance_of_Runnable_Input____property_016778acaa8ea38f75d3, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f1935bc76cb   );
db.assign(_instance_of_Runnable_Input____value_016778acb516521d243d, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f19cb8a3b4e   );
db.assign(_instance_of_Runnable_Output____object_016778acb6bd00078064, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589427008a8f113   );
db.assignOptional(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, _Object_gooRel_ff022000000000000003, _Operation_0179b268740d49b2a89d);
db.assignOptional(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, _GOO_parentGooRel_ff02200000000000000u, _Operation_0179b268740d49b2a89d);
db.assignOptional(_Operation_0179b268740d49b2a89d, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d);
db.assignOptional(_Operation_0179b268740d49b2a89d, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d);
