
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Date$_47_$Time_ff021000000000000014     = 'ff021000000000000014';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
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
const _instance_of_Coded_Function_model____Is_DateTime_Valid_01783b83f00e0b88dc79 = db.assignTag('01783b83f00e0b88dc79');
const _instance_of_Runnable_Input____date_01783bb137b0d162f35a = db.assignTag('01783bb137b0d162f35a');
const _instance_of_Runnable_Output____is_valid_01783bb14bb1af79f216 = db.assignTag('01783bb14bb1af79f216');
const _instance_of_Documentation_017b35893b3020b4ff18 = db.assignTag('017b35893b3020b4ff18');
const _instance_of_Documentation_017b35893ecdf586b09c = db.assignTag('017b35893ecdf586b09c');
const _instance_of_Documentation_017b3589426b0b7eada0 = db.assignTag('017b3589426b0b7eada0');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Datetime_0179b2690f49a1f52652           = '0179b2690f49a1f52652';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Is_DateTime_Valid_01783b83f00e0b88dc79
db.newModel(_instance_of_Coded_Function_model____Is_DateTime_Valid_01783b83f00e0b88dc79, 'Is DateTime Valid') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Is_DateTime_Valid_01783b83f00e0b88dc79, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Is DateTime Valid',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Is_DateTime_Valid_01783b83f00e0b88dc79);
// :_instance_of_Runnable_Input____date_01783bb137b0d162f35a
db.newInstance(_instance_of_Runnable_Input____date_01783bb137b0d162f35a)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_Valid_01783b83f00e0b88dc79)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'date',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____is_valid_01783bb14bb1af79f216
db.newInstance(_instance_of_Runnable_Output____is_valid_01783bb14bb1af79f216)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_Valid_01783b83f00e0b88dc79)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'is valid',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b3020b4ff18
db.newInstance(_instance_of_Documentation_017b35893b3020b4ff18)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_Valid_01783b83f00e0b88dc79)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Returns true if the datetime object is a valid datetime, false otherwise.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Returns a boolean indicating whether the datetime object is a valid datetime.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ecdf586b09c
db.newInstance(_instance_of_Documentation_017b35893ecdf586b09c)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_Valid_01783b83f00e0b88dc79)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The datetime to verify.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589426b0b7eada0
db.newInstance(_instance_of_Documentation_017b3589426b0b7eada0)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_Valid_01783b83f00e0b88dc79)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'True if the datetime is valid, false otherwise.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Valid_01783b83f00e0b88dc79, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____date_01783bb137b0d162f35a);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Valid_01783b83f00e0b88dc79, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____is_valid_01783bb14bb1af79f216);
db.assign(_instance_of_Runnable_Input____date_01783bb137b0d162f35a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Date$_47_$Time_ff021000000000000014              );
db.assign(_instance_of_Runnable_Output____is_valid_01783bb14bb1af79f216, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Documentation_017b35893b3020b4ff18   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Is_DateTime_Valid_01783b83f00e0b88dc79);
db.assign(_instance_of_Documentation_017b35893ecdf586b09c   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____date_01783bb137b0d162f35a);
db.assign(_instance_of_Documentation_017b3589426b0b7eada0   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____is_valid_01783bb14bb1af79f216);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Valid_01783b83f00e0b88dc79, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____date_01783bb137b0d162f35a);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Valid_01783b83f00e0b88dc79, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____is_valid_01783bb14bb1af79f216);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Valid_01783b83f00e0b88dc79, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b3020b4ff18   );
db.assign(_instance_of_Runnable_Input____date_01783bb137b0d162f35a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ecdf586b09c   );
db.assign(_instance_of_Runnable_Output____is_valid_01783bb14bb1af79f216, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589426b0b7eada0   );
db.assignOptional(_instance_of_Coded_Function_model____Is_DateTime_Valid_01783b83f00e0b88dc79, _Object_gooRel_ff022000000000000003, _Datetime_0179b2690f49a1f52652);
db.assignOptional(_instance_of_Coded_Function_model____Is_DateTime_Valid_01783b83f00e0b88dc79, _GOO_parentGooRel_ff02200000000000000u, _Datetime_0179b2690f49a1f52652);
db.assignOptional(_Datetime_0179b2690f49a1f52652, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Is_DateTime_Valid_01783b83f00e0b88dc79);
db.assignOptional(_Datetime_0179b2690f49a1f52652, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Is_DateTime_Valid_01783b83f00e0b88dc79);
