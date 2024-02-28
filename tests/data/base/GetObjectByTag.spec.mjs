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

import {BrickContext } from 'olympe';
import GetObjectByTag from '../../../src/core/data/base/GetObjectByTag.js';

describe('GetObject brick', () => {
    it('should correctly retrieve an object given a tag', () => {
        // TODO
    });

    it('should throw an error if the object with the given tag does not exist', async () => {
        const getObject = new GetObjectByTag();
        const promise = getObject.update(new BrickContext().createChild(), ['this tag does not exist'], [(_v) => {}]);
        await expectAsync(promise).toBeRejectedWithError(/Get Object by Tag: tag this tag does not exist does not exist in the local database. To fetch the object from the database, use Query Object with Execute or Observe instead./);
    });
});
