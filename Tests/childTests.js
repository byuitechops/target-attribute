/*eslint-env node, es6*/

/* Dependencies */
const tap = require('tap');

function g1Tests(course, callback) {
    var hrefs = course.info['Changed Link Target Attributes'].map(link => link.href);

    tap.equal(course.info['Changed Link Target Attributes'][0].name, 'Target Attribute #1.html');
    tap.equal(course.info['Changed Link Target Attributes'][0].href, 'https://www.lds.org/?lang=eng');

    tap.equal(hrefs.includes('https://www.lds.org/?lang=eng'), true);
    tap.equal(hrefs.includes('https://www.youtube.com/watch?time_continue=1&amp;v=P_VRN7hcL_8'), true);
    tap.equal(hrefs.includes('https://outlook.live.com/owa/'), true);
    tap.equal(hrefs.includes('http://www.node-tap.org/basics/'), true);
    tap.equal(hrefs.includes('byui.brightspace.com'), false);
    tap.equal(hrefs.includes('pathway.brightspace.com'), false);

    callback(null, course);
}

module.exports = [
    {
        gauntlet: 1,
        tests: g1Tests
        },
];
