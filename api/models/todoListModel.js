'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
	name: {
		type: String,
		Required: 'Enter the task title'
	},
	Created_date: {
		type: Date,
		default: Date.now
	},
	status: {
		type: [{
			type: String,
			enum: ['pending', 'ongoing', 'completed']
		}],
		default: ['pending']
	}
});

var MessageSchema = new Schema({
	to: {
		type: String,
		Required: 'Enter the sender name'
	},
	from: {
		type: String,
		Required: 'Enter the recepient name'
	},
	msg_subject: {
		type: String,
		Required: 'Enter the subject'
	},
	msg_body: {
		type: String,
		Required: 'Enter the message'
	},
	created_date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Tasks', TaskSchema);
module.exports = mongoose.model('Messages', MessageSchema);