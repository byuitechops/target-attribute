# Target Attribute
### *Package Name*: target-attribute
### *Child Type*: pre-import
### *Platform*: all
### *Required*: Optional

This child module is built to be used by the Brigham Young University - Idaho D2L to Canvas Conversion Tool. It utilizes the standard `module.exports => (course, stepCallback)` signature and uses the Conversion Tool's standard logging functions. You can view extended documentation [Here](https://github.com/byuitechops/d2l-to-canvas-conversion-tool/tree/master/documentation).

## Purpose

The module makes sure that all the external links of the course open in a new window.

## How to Install

```
Set CANVAS_API_TOKEN=10706~vXrrAZ24w3zWLqviu25tTkKjozI32IgqolFW4pVpcPiI81pFIkpkEHaynrc646km
```
```
npm install set-syllabus
```
```
npm start update
```

## Run Requirements

course.info

course.log

course.message

## Options

???

## Outputs

The course object with all the external links adjusted to open in a new window:
link.attribs.target = '_blank';
course.info['Changed Link Target Attributes'].push({
                            name: file.name,
                            href: link.attribs.href});

## Process

Describe in steps how the module accomplishes its goals.

1. Get the course content and put it into array
2. Using cheerio, get all the links (<a ...>) that are in the course
3. Using cheerio, filter out all the external links
4. Check out all the target attributes and assign them to "_blank" if needed

## Log Categories

course.log('External links set to open in a new Tab', 
                           { 'File Name': file.name,
                            'Href': link.attribs.href });
                            
## Requirements

The module checks all html files for external links <a href="!...buyi.edu..." and makes sure they all open in the new widow (target="_blank") 