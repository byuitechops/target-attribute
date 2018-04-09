# Target Attribute
### *Package Name*: target-attribute
### *Child Type*: pre-import
### *Platform*: all
### *Required*: Optional

This child module is built to be used by the Brigham Young University - Idaho D2L to Canvas Conversion Tool. It utilizes the standard `module.exports => (course, stepCallback)` signature and uses the Conversion Tool's standard logging functions. You can view extended documentation [Here](https://github.com/byuitechops/d2l-to-canvas-conversion-tool/tree/master/documentation).

## Purpose

The module makes sure that all the external links of the course open in a new window.

## How to Install

npm install target-attribute

## Run Requirements

n/a

## Options

n/a

## Outputs

The course object with all the external links adjusted to open in a new window

## Process

Describe in steps how the module accomplishes its goals.

1. Get the course content and put it into array
2. Using cheerio, get all the links (<a ...>) that are in the course
3. Using cheerio, filter out all the external links
4. Check out all the target attributes and assign them to "_blank" if needed

## Log Categories

List the categories used in logging data in your module.

course.message('All external links have been made to open in a new tab');

## Requirements

The module checks all html files for external links <a href="!...buyi.edu..." and makes sure they all open in the new widow (target="_blank") 