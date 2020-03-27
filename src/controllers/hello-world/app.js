let layer1 = require('/opt/nodejs/layer1');
var rn = require('random-number');
let response;

exports.lambdaHandler = async (event, context) => { 
    try {
        // const ret = await axios(url);
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: `File Dependency Output: ${layer1.dependencyFunction1(5)} Package dependency Output: ${rn()}`
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
