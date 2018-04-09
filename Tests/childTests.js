/* Dependencies */
const tap = require('tap');

module.exports = (course, callback) => {
    tap.test('target-attribute', (test) => {
        var hrefs = course.info['Changed Link Target Attributes'].map(link => link.href);

        test.equal(course.info['Changed Link Target Attributes'][0].name, 'Target Attribute #1.html');
        test.equal(course.info['Changed Link Target Attributes'][0].href, 'https://www.lds.org/?lang=eng');

        test.equal(hrefs.includes('https://www.lds.org/?lang=eng'), true);
        test.equal(hrefs.includes('https://www.youtube.com/watch?time_continue=1&amp;v=P_VRN7hcL_8'), true);
        test.equal(hrefs.includes('https://outlook.live.com/owa/'), true);
        test.equal(hrefs.includes('http://www.node-tap.org/basics/'), true);
        test.equal(hrefs.includes('byui.brightspace.com'), false);
        test.equal(hrefs.includes('pathway.brightspace.com'), false);

        test.end();
    });

    callback(null, course);
};


