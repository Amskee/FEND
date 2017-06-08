/*
This is empty on purpose! Your code to build the resume will go here.
 */

// var awesomeThought = "lol";
// var myvar2 = awesomeThought.replace("lol","rofl");

// console.log(awesomeThought);
// console.log(myvar2);
/*console.log("Started");
var bio = {
	name: "Amrish Kumar",
	role: "Web developer",
	contact: {
		mobile: "+91 9688699600",
		email: "p.p.amrishkumar@gmail.com",
		github: "username: amskee",
		twitter: "user: @_AmrishKumar",
		location: "MDU"

	},
	picurl: "./images/pic.jpeg",
	welcome: "Amrish's Resume",
	skills: ["JS", "CSS3", "HTML5"]

};
console.log(bio);

var formattedName = HTMLheaderName.replace("%data%","Amrish Kumar");
var formattedRole = HTMLheaderRole.replace("%data%","Web developer");


var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';

var forBio = HTMLbioPic.replace("%data%", bio.picurl); 
var forWelc = HTMLwelcomeMsg.replace("%data%", bio.welcome);
HTMLcontactGeneric = HTMLcontactGeneric.replace("%contact%", "Contact");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(forBio);
$("#header").append(forWelc);
$("#topContacts").append(HTMLcontactGeneric.replace("%data%", bio.contact.email));
$("#header").append(HTMLskillsStart);
for(var i=0; i<bio.skills.length; i++) {
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
}

//HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';
*/

var work = {
	jobs: [
		{
			employer: "Google device lab",
			title: "Member of Google developers",
			location: "Bangalore",
			dates: "Dec 2016 – Present",
			description: "Google developers group is a community which brings together the active developers from various institutions in and around Madurai."
		},
		{
			employer: "Indian Institute of Technology, Kharagpur",
			title: "Contributor at Kharagpur Winter of Code (Open Source)",
			location: "Online",
			dates: "Dec 2016 – Jan 2017",
			description: "Kharagpur Winter of Code is a 5-week long online program for open source software development. Students from various institutions contributed to the projects listed and topped their names in the leader board of top contributors."
		}

	]
}

var projects {
	projects: [
		{
			tile: "Sheldonisms",
			dates: "Dec 2016 – Dec 2016",
			description: "Sheldonisms is an AI chat bot featuring the character Dr. Sheldon Cooper from the TV show The Big Bang Theory. The TV show is all about nerd humor filled valuable science facts. Our messenger bot replies with nerd humor and memes made from the show. I thought this to be an elite way a spreading common science while still having fun.",
			images: ["./images/p11.png", "./images/p12.jpg"]
		},
		{
			tile: "Baymax - AI chat bot for Personal Health Care",
			dates: "Jul 2016 – Jul 2016",
			description: "Baymax is a web app in construction, it's being developed to book doctor appointments through a chat bot. The chat bot predicts the user's input through an AI algorithm we've been developing, and makes proceedings accordingly.",
			images: ["./images/p21.jpeg"]
		}
	]
}

var bio = {
	name: "Amrish Kumar",
	role: "Web developer",
	contact: {
		mobile: "+91 9688699600",
		email: "p.p.amrishkumar@gmail.com",
		github: "https://github.com/amskee",
		twitter: "https://twitter.com/_AmrishKumar",
		location: "Madurai"

	},
	picurl: "./images/pic.jpeg",
	welcome: "Amrish's Resume",
	skills: ["JS", "CSS3", "HTML5", "PHP", "MySql", "Android", "Unity 3D", "Python", "R", "Java", "C", "C++", "C#", "Game development", "Shell scripting"]

};

var education = {
	schools: [
		{
			name: "TVS Matriculation School",
			location: "Madurai",
			degree_dates: "2007 – 2014",
			url: "tvsmhss.org",
			major: ["Computer Science"]
		},
		{
			name: "Thiagarajar College of Engineering",
			location: "Madurai",
			degree_dates: "2016 - 2019",
			url: "tce.edu",
			major: ["Information Technology"]
		}
	],
	onlineCourses: [
		{
			title: "Front end Nano degree",
			school: "Udacity",
			dates: "2016 - 2017",
			url: "udacity.com"
		},
		{
			title: "DAT204x: Introduction to R for Data Science",
			school: "edX",
			dates: "June 2016 - July 2016",
			url: "edx.org"
		}
	],

}
