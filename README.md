# Olympe CORE

Olympe Core bricks library.

You can start Draw with the following command:
```
npx webpack serve --config-name draw
```

## License

The Olympe Core bricks library is licensed under the Apache License 2.0 - see the [LICENSE](./LICENSE) file for details.

All newly created files should include the following license notice as header:

```javascript
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
```

This can be automated using git pre-commit hooks. The hook will:

- check if all modified files in `src` and `test` have the license header
- add it if missing
- request manual review before committing

To setup the hook, install `pre-commit`:

```bash
brew install pre-commit
```

Then, setup the git hook scripts with:

```bash
pre-commit install
```
