/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

/* The module chacks all html files for external links <a href="!...buyi.edu..." and makes sure
   the all open in the new widow (target="_blank") */

module.exports = (course, stepCallback) => {
    /* Create the module report so that we can access it later as needed.
    This MUST be done at the beginning of each child module. */
    course.addModuleReport('target-attribute');
    course.newInfo('Changed Link Target Attributes', []);

    // #1 -- get the course content and put it into array
    var contentArray = course.content;
    contentArray.forEach(function (file) {
        // #2 -- using cheerio, get all the links (<a ...>) that are in the course
        var $ = file.dom;
        var links = $('a').get();
        if (links.length != 0) {
            // #3 -- using cheerio, filter out all the external links
            links = links.filter(function (element, index) {
                if ($(element).attr('href')) {
                    return ($(element).attr('href').includes('http') ||
                        $(element).attr('href').includes('www')) &&
                        !$(element).attr('href').includes('byui.brightspace') &&
                        !$(element).attr('href').includes('pathway.brightspace');
                } else {
                    return false;
                }
                
            });
            // #4 -- check out all the target attributes, -->
            links.forEach(function (link) {
                if (link.attribs.target) {
                    if (link.attribs.target !== '_blank') {
                        // --> and assign them to "_blank" if needed
                        link.attribs.target = '_blank';
                        course.info['Changed Link Target Attributes'].push({
                            name: file.name,
                            href: link.attribs.href
                        });
                        course.success(
                            'target-attribute',
                            `${file.name} | "${link.attribs.href}" has been made to open in a new tab`
                        );
                    }
                }
            });
        }
    });

    course.success(
        'target-attribute',
        `All external links have been made to open in a new tab`
    );
    stepCallback(null, course);
};