// import dependencies
const mongoose = require('./connection')

// import user model for populate
const User = require('./user')

// destructure the schema and model constructors from mongoose
const { Schema, model } = mongoose

const superheroSchema = new Schema(
	{
		img: { type: String },
		id: { type: String },
		name: { type: String },
		powerstats: { type: Object },
		owner: {
			type: Schema.Types.ObjectID,
			ref: 'User',
		}
	},
	{ timestamps: true }
)

const Superhero = model('Superhero', superheroSchema)

/////////////////////////////////
// Export our Model
/////////////////////////////////
module.exports = Superhero
