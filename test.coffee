assert = require('chai').assert

suite 'Translations.', ->
	test 'There is 29 translations', ->
		translations = require('./translations')()
		assert.equal translations.length, 29