# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# [2.1.0](https://github.com/Weffe/axios-api-versioning/compare/v2.0.0...v2.1.0) (2019-03-02)


### Features

* **types:** expose custom axios types and bundle in a "types" folder ([086aa8c](https://github.com/Weffe/axios-api-versioning/commit/086aa8c))
* **types:** break types into separate folders ([635e79d](https://github.com/Weffe/axios-api-versioning/commit/635e79d))


# [2.0.0](https://github.com/Weffe/axios-api-versioning/compare/v1.1.1...v2.0.0) (2019-03-01)


### Bug Fixes

* properly scope versioning types to axios clients with versioning ([648b9fb](https://github.com/Weffe/axios-api-versioning/commit/648b9fb)), closes [#5](https://github.com/Weffe/axios-api-versioning/issues/5)


### Features

* remove flexibilty of configuring versioning in axios.defaults ([3788dfb](https://github.com/Weffe/axios-api-versioning/commit/3788dfb))


### BREAKING CHANGES

* withVersioning config is now required


## [1.1.1](https://github.com/Weffe/axios-api-versioning/compare/v1.1.0...v1.1.1) (2019-03-01)

### Bug Fixes

* properly let users override the Accept header in the req config ([f12e7b8](https://github.com/Weffe/axios-api-versioning/commit/f12e7b8))


# [1.1.0](https://github.com/Weffe/axios-api-versioning/compare/v1.0.0...v1.1.0) (2019-02-27)

### Features

* add mediaTypeFormatter for manual formatting of Accept Header ([7827b58](https://github.com/Weffe/axios-api-versioning/commit/7827b58))


# 1.0.0 (2019-02-26)

### Features

* add versioning interceptor ([0c7e187](https://github.com/Weffe/axios-api-versioning/commit/0c7e187))
* add withVersioning hook ([9063bbb](https://github.com/Weffe/axios-api-versioning/commit/9063bbb))
* **sandbox:** add browser sandbox ([5ec8003](https://github.com/Weffe/axios-api-versioning/commit/5ec8003))
* **sandbox:** add output box ([1676d81](https://github.com/Weffe/axios-api-versioning/commit/1676d81))
* allow for setting custom key names on QueryString and MediaType ([dc3892f](https://github.com/Weffe/axios-api-versioning/commit/dc3892f))
