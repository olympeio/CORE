/**
 * Copyright 2021 Olympe S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import JsonToObject from '../../../src/core/data/json/JsonToObject.js';

describe('JsonToObject brick', () => {
    beforeEach(() => {
        // TODO
        // olympe.df.createNodeExecutingContext(jasmine.createSpyObj(Object.getOwnPropertyNames(olympe.logging.Channel.prototype)));
        // this.mainContext = new olympe.df.SimpleContext('Json To Object Tests', olympe.df.getGlobalContext());
        // this.oldContext = olympe.df.setCurrentContext(this.mainContext);
        //
        // this.helpers = new olympe.sc.TestHelpers()
        //     .initPartialDC()
        //     .initSC()
        //     .initSCLogic()
        //     .initSCAction();
        //
        // // create a businessmodel
        // this.helpers.createModel(olympe.sc.BusinessModel, olympe.dc.CloudObject);
        //
        // this.relatedBusinessModelTag = 'relatedBU';
        // this.helpers.createModel(this.relatedBusinessModelTag, olympe.sc.BusinessModel);
        // this.helpers.defineProperty('nameTag', this.relatedBusinessModelTag, olympe.df.OString, 'name');
        // this.helpers.updateInstanceProperty(this.relatedBusinessModelTag, olympe.dc.CloudObject.nameProp, 'My_Related_Business_Model');
        //
        // this.myBusinessModelTag = 'myBU';
        // this.helpers.createModel(this.myBusinessModelTag, olympe.sc.BusinessModel);
        // this.helpers.defineProperty('namePropTag', this.myBusinessModelTag, olympe.df.OString, 'name');
        // this.helpers.updateInstanceProperty(this.myBusinessModelTag, olympe.dc.CloudObject.nameProp, 'My_Business_Model');
        //
        // this.initActionTest = this.helpers.initActionTest.bind(this.helpers);
        // this.runActionWith = this.helpers.runActionWithSync.bind(this.helpers);
        // this.db = this.helpers.view;
    });

    afterEach(() => {
        // this.mainContext.destroy();
        // olympe.df.setCurrentContext(this.oldContext);
        // this.mainContext = null;
    });

    // JsonToObject
    it('Should return an instance of My_Business_Model even if json is empty', () => {
        // // Given
        // this.initActionTest(olympe.sc.logic.actions.JsonToObject,
        //     ['json', 'businessModel', 'persist', 'identifierField'],
        //     ['object']);
        //
        // // When
        // const json = JSON.stringify({});
        // const outputs = this.runActionWith(olympe.sc.logic.actions.JsonToObject, [json, this.myBusinessModelTag, true, '']);
        //
        // // Then
        // expect(this.db.instanceOf(outputs[0], this.myBusinessModelTag)).toBeTrue();
    });

    it('Should return an instance of My_Business_Model with a name property set to "Bill"', () => {
        // // Given
        // this.initActionTest(olympe.sc.logic.actions.JsonToObject,
        //     ['json', 'businessModel', 'persist', 'identifierField'],
        //     ['object']);
        //
        // const namePropertyValue = 'Bill';
        //
        // // When
        // const json = JSON.stringify({'name': namePropertyValue});
        // const outputs = this.runActionWith(olympe.sc.logic.actions.JsonToObject, [json, this.myBusinessModelTag, true, '']);
        //
        // // Then
        // expect(this.db.getProperty(outputs[0], 'namePropTag')).toEqual(namePropertyValue);
    });

    it('Should return an instance of My_Business_Model with a relation', () => {
        // // Given
        // this.initActionTest(olympe.sc.logic.actions.JsonToObject,
        //     ['json', 'businessModel', 'persist', 'identifierField'],
        //     ['object']);
        //
        // const relatedModel = 'My_Related_Business_Model';
        // this.helpers.defineRelation('relation', this.myBusinessModelTag, this.relatedBusinessModelTag);
        // const relationRel = new olympe.dc.registry.Relation('relation', olympe.dc.Direction.DESTINATION);
        //
        // // When
        // const json = JSON.stringify({'relation': relatedModel});
        // const outputs = this.runActionWith(olympe.sc.logic.actions.JsonToObject, [json, this.myBusinessModelTag, true, '']);
        //
        // // Then
        // expect(this.db.getRelated(outputs[0], relationRel).length).toEqual(1);
    });

    // JsonToObjectList
    it('Should return a list of size 2 when given twice the same object and no identifier', () => {
        // // Given
        // this.initActionTest(olympe.sc.logic.actions.JsonToObjectList,
        //     ['json', 'businessModel', 'persist', 'identifierField'],
        //     ['list']);
        //
        // // When
        // const json = JSON.stringify([{}, {}]);
        // const outputs = this.runActionWith(olympe.sc.logic.actions.JsonToObjectList, [json, this.myBusinessModelTag, true, '']);
        //
        // // Then
        // const instance = outputs[0];
        // expect(instance instanceof olympe.df.List).toBeTrue();
        // expect(instance.getCurrentSize()).toEqual(2);
    });

    it('Should return a list of size 1 when given twice the same object and an identifier', () => {
        // // Given
        // this.initActionTest(olympe.sc.logic.actions.JsonToObjectList,
        //     ['json', 'businessModel', 'persist', 'identifierField'],
        //     ['list']);
        //
        // // When
        // const json = JSON.stringify([{'name': 'ok'}, {'name': 'ok'}]);
        // const outputs = this.runActionWith(olympe.sc.logic.actions.JsonToObjectList, [json, this.myBusinessModelTag, true, 'name']);
        //
        // // Then
        // const instance = outputs[0];
        // expect(instance instanceof olympe.df.List).toBeTrue();
        // expect(instance.getCurrentSize()).toEqual(1);
    });

    // ObjectToJson
    it('Should return an empty json', () => {
        // // Given
        // this.initActionTest(olympe.sc.logic.actions.ObjectToJson,
        //     ['object'],
        //     ['json']);
        //
        // // When
        // this.helpers.createInstance('instance', this.relatedBusinessModelTag);
        //
        // const object = olympe.dc.CloudObject.get('instance');
        // const outputs = this.runActionWith(olympe.sc.logic.actions.ObjectToJson, [object]);
        //
        // // Then
        // const instance = outputs[0];
        // expect(JSON.parse(instance)).toEqual({});
    });

    it('Should return a json containing the field name set to "Bill"', () => {
        // // Given
        // this.initActionTest(olympe.sc.logic.actions.ObjectToJson,
        //     ['object'],
        //     ['json']);
        //
        // // When
        // this.helpers.createInstance('instance', this.myBusinessModelTag);
        // this.helpers.updateInstanceProperty('instance', 'namePropTag', 'Bill');
        //
        // const object = olympe.dc.CloudObject.get('instance');
        // const outputs = this.runActionWith(olympe.sc.logic.actions.ObjectToJson, [object]);
        //
        // // Then
        // expect(outputs.length).toBe(2);
        //
        // const instance = outputs[0];
        // expect(JSON.parse(instance)['name']).toEqual('Bill');
    });

    // ObjectListToJson
    it('Should return an empty array', () => {
        // // Given
        // this.initActionTest(olympe.sc.logic.actions.ObjectListToJson,
        //     ['list'],
        //     ['json']);
        //
        // // When
        // const list = olympe.dc.CloudObject.getInstancesOf(this.myBusinessModelTag);
        // const outputs = this.runActionWith(olympe.sc.logic.actions.ObjectListToJson, [list]);
        //
        // // Then
        // expect(outputs.length).toBe(2);
        //
        // const json = outputs[0];
        // expect(JSON.parse(json).length).toEqual(0);
    });

    it('Should return an array containing two object ', () => {
        // // Given
        // this.initActionTest(olympe.sc.logic.actions.ObjectListToJson,
        //     ['list'],
        //     ['json']);
        //
        // // When
        // this.helpers.createInstance('instance', this.myBusinessModelTag);
        // this.helpers.updateInstanceProperty('instance', 'namePropTag', 'Bill');
        //
        // this.helpers.createInstance('instance2', this.myBusinessModelTag);
        // this.helpers.updateInstanceProperty('instance', 'namePropTag', 'Tim');
        //
        // const list = olympe.dc.CloudObject.getInstancesOf(this.myBusinessModelTag);
        // const outputs = this.runActionWith(olympe.sc.logic.actions.ObjectListToJson, [list]);
        //
        // // Then
        // expect(outputs.length).toBe(2);
        //
        // const json = outputs[0];
        // expect(JSON.parse(json).length).toEqual(2);
    });

    it('Should return an array containing an object with a relation to an object named "Tim"', () => {
        // // Given
        // this.initActionTest(olympe.sc.logic.actions.ObjectListToJson,
        //     ['list'],
        //     ['json']);
        //
        // const relatedObjectNamePropValue = 'Tim';
        //
        // // When
        // this.helpers.createInstance('instance', this.myBusinessModelTag);
        // this.helpers.updateInstanceProperty('instance', 'namePropTag', 'Bill');
        //
        // this.helpers.createInstance('instance2', this.relatedBusinessModelTag);
        // this.helpers.updateInstanceProperty('instance2', 'nameTag', relatedObjectNamePropValue);
        //
        // this.helpers.defineRelation('myRel', this.myBusinessModelTag, this.relatedBusinessModelTag);
        // this.helpers.createRelation('myRel', 'instance', 'instance2');
        //
        // const list = olympe.dc.CloudObject.getInstancesOf(this.myBusinessModelTag);
        // const outputs = this.runActionWith(olympe.sc.logic.actions.ObjectListToJson, [list]);
        //
        // // Then
        // expect(outputs.length).toBe(2);
        //
        // const json = outputs[0];
        // // retrieve the first object from the myRel array
        // const relObject = JSON.parse(json)[0]['myRel'][0];
        // expect(relObject['name']).toEqual(relatedObjectNamePropValue);
    });

});
