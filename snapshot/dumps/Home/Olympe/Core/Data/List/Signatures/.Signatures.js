
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
const _instance_of_Folder____Signatures_017cbcea3b221d4b44dd = db.assignTag('017cbcea3b221d4b44dd');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Folder____Signatures_017cbcea3b221d4b44dd
db.newInstance(_instance_of_Folder____Signatures_017cbcea3b221d4b44dd, _Folder_01612df1db9749227626)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Signatures',
        'v'                                     :1
    })
.done();
db.setRootInstanceTag(_instance_of_Folder____Signatures_017cbcea3b221d4b44dd);
db.assignOptional(_instance_of_Folder____Signatures_017cbcea3b221d4b44dd, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Folder____Signatures_017cbcea3b221d4b44dd, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Folder____Signatures_017cbcea3b221d4b44dd);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_subFolderRel_016a697ef00ce7554691, _instance_of_Folder____Signatures_017cbcea3b221d4b44dd);
