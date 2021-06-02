
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Error_Flow_016eeb5ede9f3094d8f0         = '016eeb5ede9f3094d8f0';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';
const _String_ff021000000000000011             = 'ff021000000000000011';
const _User_ff021000000000000003               = 'ff021000000000000003';


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
const _instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5 = db.assignTag('0175892cf0b8df7ebce5');
const _instance_of_Runnable_Input____Control_Flow_0175892cf0b9df7ebce5 = db.assignTag('0175892cf0b9df7ebce5');
const _instance_of_Runnable_Output____Control_Flow_0175892cf0badf7ebce5 = db.assignTag('0175892cf0badf7ebce5');
const _instance_of_Runnable_Input____user_0175892d2b6d15085220 = db.assignTag('0175892d2b6d15085220');
const _instance_of_Runnable_Input____new_password_0175892d78fc71a2f7fe = db.assignTag('0175892d78fc71a2f7fe');
const _instance_of_Runnable_Output____Error_Flow_017589308be1b8afa68e = db.assignTag('017589308be1b8afa68e');
const _instance_of_Documentation_Function_Metadata_d0c5892cf0b8df7ebce5 = db.assignTag('d0c5892cf0b8df7ebce5');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Logic_0178445f8bd56b198950              = '0178445f8bd56b198950';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5
db.newModel(_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5, 'Set user password') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Set user password',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5);
// :_instance_of_Runnable_Input____Control_Flow_0175892cf0b9df7ebce5
db.newInstance(_instance_of_Runnable_Input____Control_Flow_0175892cf0b9df7ebce5)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Control_Flow_0175892cf0badf7ebce5
db.newInstance(_instance_of_Runnable_Output____Control_Flow_0175892cf0badf7ebce5)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____user_0175892d2b6d15085220
db.newInstance(_instance_of_Runnable_Input____user_0175892d2b6d15085220)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'user',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____new_password_0175892d78fc71a2f7fe
db.newInstance(_instance_of_Runnable_Input____new_password_0175892d78fc71a2f7fe)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'new password',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Error_Flow_017589308be1b8afa68e
db.newInstance(_instance_of_Runnable_Output____Error_Flow_017589308be1b8afa68e)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c5892cf0b8df7ebce5
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c5892cf0b8df7ebce5)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'## Errors\n| Code | Description |\n| --- | --- |\n| 401 | Connected user is not allowed to change password. |\n',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 0175892d2b6d15085220-user | User | The user. |\n| 0175892d78fc71a2f7fe-new password | String | The password to set. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nSet the password of a user.\n\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Set the password of a user.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Control_Flow_0175892cf0b9df7ebce5);
db.assign(_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____user_0175892d2b6d15085220);
db.assign(_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____new_password_0175892d78fc71a2f7fe);
db.assign(_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Control_Flow_0175892cf0badf7ebce5);
db.assign(_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Error_Flow_017589308be1b8afa68e);
db.assign(_instance_of_Runnable_Input____Control_Flow_0175892cf0b9df7ebce5, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Output____Control_Flow_0175892cf0badf7ebce5, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____user_0175892d2b6d15085220, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _User_ff021000000000000003                        );
db.assign(_instance_of_Runnable_Input____new_password_0175892d78fc71a2f7fe, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____Error_Flow_017589308be1b8afa68e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c5892cf0b8df7ebce5);
db.assign(_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Control_Flow_0175892cf0b9df7ebce5);
db.assign(_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Control_Flow_0175892cf0badf7ebce5);
db.assign(_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____user_0175892d2b6d15085220);
db.assign(_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____new_password_0175892d78fc71a2f7fe);
db.assign(_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Error_Flow_017589308be1b8afa68e);
db.assign(_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c5892cf0b8df7ebce5);
db.assignOptional(_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5, _Object_gooRel_ff022000000000000003, _Logic_0178445f8bd56b198950);
db.assignOptional(_instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5, _GOO_parentGooRel_ff02200000000000000u, _Logic_0178445f8bd56b198950);
db.assignOptional(_Logic_0178445f8bd56b198950, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5);
db.assignOptional(_Logic_0178445f8bd56b198950, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Set_user_password_0175892cf0b8df7ebce5);
