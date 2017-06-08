/* Resume Builder */

var work = {
	jobs: [
		{
			employer: "Google device lab",
			title: "Member of Google developers",
			location: "Bangalore",
			dates: "Dec 2016 – Present",
			description: "Google developers group is a community which brings together the active developers from various institutions in and around Madurai. Attended a week long developer boot camp started at Google Device Lab NASSCOM Bangalore with 9 other selected students from Madurai. Contributed to development of custom Android ROMs."
		},
		{
			employer: "Indian Institute of Technology, Kharagpur",
			title: "Contributor at Kharagpur Winter of Code (Open Source)",
			location: "Online",
			dates: "Dec 2016 – Jan 2017",
			description: "Kharagpur Winter of Code is a 5-week long online program for open source software development. Students from various institutions contributed to the projects listed and topped their names in the leader board of top contributors. It was great that I secured top 4th contributor of the program. I have blogged my full experience."
		}
	]
};


var projects = {
	projects: [
		{
			title: "Sheldonisms",
			dates: "Dec 2016 – Dec 2016",
			description: "Sheldonisms is an AI chat bot featuring the character Dr. Sheldon Cooper from the TV show The Big Bang Theory. The TV show is all about nerd humor filled valuable science facts. Our messenger bot replies with nerd humor and memes made from the show. I thought this to be an elite way a spreading common science while still having fun.",
			images: ["./images/p11.jpg", "./images/p12.jpg"]
		},
		{
			title: "Baymax - AI chat bot for Personal Health Care",
			dates: "Jul 2016 – Jul 2016",
			description: "Baymax is a web app in construction, it's being developed to book doctor appointments through a chat bot. The chat bot predicts the user's input through an AI algorithm we've been developing, and makes proceedings accordingly.",
			images: ["./images/p21.jpeg"]
		}
	]
};


var bio = {
	name: "Amrish Kumar",
	role: "Web developer",
	contacts: {
		mobile: "+91 9688699600",
		email: "p.p.amrishkumar@gmail.com",
		github: "https://github.com/amskee",
		twitter: "https://twitter.com/_AmrishKumar",
		location: "Madurai"

	},
	biopic: "./images/pic.jpeg",
	welcomeMessage: "Amrish's Resume",
	skills: ["JS", "CSS3", "HTML5", "PHP", "MySql", "Android", "Unity 3D", "Python"]

};


var education = {
	schools: [
		{
			name: "TVS Matriculation School",
			location: "Madurai",
			dates: "2007 – 2014",
			url: "tvsmhss.org",
			majors: ["Computer Science"],
			degree: "High School"
		},
		{
			name: "Thiagarajar College of Engineering",
			location: "Madurai",
			dates: "2016 - 2019",
			url: "tce.edu",
			majors: ["Information Technology"],
			degree: "Bachelor of Technology"
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
};

/*Bio Builder*/

bio.display = function () {
	var formattedHeaderName = HTMLheaderName.replace("%data%",bio.name);
	var formattedHeaderRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic); 
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLgithub.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#header").prepend(formattedHeaderRole);
	$("#header").prepend(formattedHeaderName);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);
	$("#header").append(formattedWelcomeMsg);
	$("#header").append(formattedBioPic);

	if(bio.skills.length>0) {
		$("#header").append(HTMLskillsStart);
	}

	bio.skills.forEach( function(skill) {
		var formattedSkills = HTMLskills.replace("%data%", skill);
		$("#skills").append(formattedSkills);
	});	
};

/* Works Builder */

work.display = function() {
	work.jobs.forEach( function(job) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
		
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	});
};

projects.display = function() {
	projects.projects.forEach( function(project) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
		var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		project.images.forEach( function(image) {
			var formattedImage = HTMLprojectImage.replace("%data%", image);
			$(".project-entry:last").append(formattedImage);
		});
	});
};

education.display = function() {
	education.schools.forEach( function(school) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", school.name);
		formattedName = formattedName.replace("#", school.url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
		var formattedNameDegree = formattedName + formattedDegree;
		var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
		$(".education-entry:last").append(formattedNameDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		school.majors.forEach( function(major) {
			var formattedMajor = HTMLschoolMajor.replace("%data%", major);
			$(".education-entry:last").append(formattedMajor);
		});
	});
	$("#education").append(HTMLonlineClasses);
	education.onlineCourses.forEach( function(course) {
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
		formattedTitle = formattedTitle.replace("#", course.url);
		var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		var formattedDate = HTMLonlineDates.replace("%data%", course.dates);
		var formattedURL = HTMLonlineURL.replace("%data%", course.url).replace("#", course.url);
		$(".education-entry:last").append(formattedTitleSchool);
		$(".education-entry:last").append(formattedDate);
		$(".education-entry:last").append(formattedURL);

	});
};

var buildFooter = function() {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLgithub.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedLocation);
};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
buildFooter();

//$("#main").append(internationalizeButton);

var inName = function() {
 	var name = $("#name").text();
 	var arr = name.split(" ");
 	arr[0] = arr[0].slice(0,1).toUpperCase() + arr[0].slice(1).toLowerCase();
 	arr[1] = arr[1].toUpperCase();
 	console.log(arr[0] + " " + arr[1]);
 	return arr[0] + " " + arr[1];
};

