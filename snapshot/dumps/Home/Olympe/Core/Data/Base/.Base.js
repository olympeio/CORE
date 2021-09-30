
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Folder_01612df1db9749227626             = '01612df1db9749227626';


// Definition of tags of defined properties
const _Object_name_ff023000000000000011             = 'ff023000000000000011';


// Definition of tags of defined relations
const _Folder_subFolderRel_016a697ef00ce7554691     = '016a697ef00ce7554691';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';


// Definition of tags used for newly created instances 
const _instance_of_Folder____Base_0179b26837d01a7c3cdc = db.assignTag('0179b26837d01a7c3cdc');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Data_0179b2681e7d4704e92a               = '0179b2681e7d4704e92a';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Folder____Base_0179b26837d01a7c3cdc
db.newInstance(_instance_of_Folder____Base_0179b26837d01a7c3cdc, _Folder_01612df1db9749227626)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Base',
        'v'                                     :1
    })
.done();
db.setRootInstanceTag(_instance_of_Folder____Base_0179b26837d01a7c3cdc);
db.assignOptional(_instance_of_Folder____Base_0179b26837d01a7c3cdc, _Object_gooRel_ff022000000000000003, _Data_0179b2681e7d4704e92a);
db.assignOptional(_instance_of_Folder____Base_0179b26837d01a7c3cdc, _GOO_parentGooRel_ff02200000000000000u, _Data_0179b2681e7d4704e92a);
db.assignOptional(_Data_0179b2681e7d4704e92a, _Object_containsRel_ff02200000000000000f, _instance_of_Folder____Base_0179b26837d01a7c3cdc);
db.assignOptional(_Data_0179b2681e7d4704e92a, _Folder_subFolderRel_016a697ef00ce7554691, _instance_of_Folder____Base_0179b26837d01a7c3cdc);
