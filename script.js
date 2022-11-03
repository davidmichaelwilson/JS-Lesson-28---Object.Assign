const bunsenHoneydewInfo = {
	name: "Bunsen Honeydew",
	job: "Scientist",
	firstAppearance: "Episode 108",
	knownFor: "inventing a machine that turns gold into cottage cheese"
}

// function MuppetProfile(data) {
// 	this.name = data.name
// 	this.job = data.job
// 	this.firstAppearance = data.firstAppearance
// 	this.knownFor = data.knownFor
// 	this.summary = function() {
// 		console.log(`${this.name} is a ${this.job} and first appeared on episode ${this.firstAppearance} of the Muppet Show. ${this.name} is known for ${this.knownFor}.`)
// 	}
// }


// PRACTICE=====

function MuppetProfile(data) {
	Object.assign(this, data)
  
	this.summary = function() {
		console.log(`${this.name} is a ${this.job} and first appeared on episode ${this.firstAppearance} of the Muppet Show. ${this.name} is known for ${this.knownFor}.`)
	}
}

const muppet = new MuppetProfile(bunsenHoneydewInfo)

muppet.summary()