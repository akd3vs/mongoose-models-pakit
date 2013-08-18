# mongoose-models-pakit
---
Autoload for models in Mongoose
## Usage
---
``` javascript
require('pakit_models').initialize(__dirname + '/models');
```
And in the root of the project, you should have a directory with name "models" or what ever you especified.
### Model structure
---
``` javascript
var mongoose = require('mongoose')
    ,	Schema = mongoose.Schema
    ,	validate_core = require('mongoose-validator')
    ,	validate = validate_core.validate
    ;
module.exports = function () {
    var Tasks = new Schema({
            name: String,
            log: String,
            user: {
                creator: String
            },
            time: {
                start: { type:Date, default:Date.now() },
                finish: Date
            },
            status: String,
            progress: {
                current: Number,
                of: Number
            }
        });
    mongoose.model("task", Tasks);
};
```
The validations are not required
