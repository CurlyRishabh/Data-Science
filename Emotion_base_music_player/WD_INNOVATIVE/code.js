
var songrun=false;
var count=1;
var mod=1;
var path=["songs\\ban ja rani.mp3"
,"songs\\Banduk meri laila.mp3"
,"songs\\barish.mp3"
,"songs\\haareya.mp3"
,"songs\\ik vari aa.mp3"
,"songs\\main tera.mp3"
,"songs\\mercy.mp3"
,"songs\\musafir.mp3"
,"songs\\o sathi.mp3"
,"songs\\phir bhi.mp3"
,"songs\\The Lazy Song.mp3"
,"songs\\Natural.mp3"
,"songs\\let her go.mp3"
];

var sname=[["Ban Ja tu meri Rani","angry"],
["Banduk Meri Laila","angry"],
["Barish","angry"],
["Haareya","happy"],
["Ik vari aa","happy"],
["Main tera boyfriend","sad"],
["Mercy","sad"],
["Musafir","sad"],
["O sathi","neutral"],
["Phir Bhi","neutral"],
["The Lazy Song","neutral"],
["Natural","angry"],
["Let Her Go","sad"]
];

var sd=["Artist: Guru Randhawa<br>Movie: Tumhari Sulu<br>Released: 2017",
"Artists: Ash King, Jigar Saraiya<br>Featured artists: Sidharth Malhotra, Raftaar<br>Movie: A Gentleman<br>Released: 2017"
,"Artists: Ash King, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Awards: Zee Cine Award for Song of the Year"
,"Artist: Arijit Singh<br>Movie: Meri Pyaari Bindu<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Producer - Programming & Arranging"
,"Artist: Arijit Singh<br>Movie: Raabta<br>Released: 2017"
,"Artists: Arijit Singh, Neha Kakkar, Meet Bros<br>Movie: Raabta<br>Released: 2017<br>Composer(s): : Sohrabbudin (Original); Sourav Roy (Revamped).<br>Genre: Dance music"
,"Artist: Badshah<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Engineer - Recording and Mixing"
,"Artist: KK<br>Movie: Shab<br>Released: 2017"
,"Artist: Arijit Singh<br>Movie: Shab<br>Released: 2017"
,"Artists: Arijit Singh, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Written: 2001 (lyrics)<br>Lyricist(s): Manoj Muntashir<br>Composer(s): Mithoon"
,"Artist: Bruno Mars<br>Released: 2017<br>Album: Doo-Wops & Hooligans<br>Released: 2010"
,"Artist: Imagine Dragons<br>Album: Origins"
,"Artist: Passenger<br>Album: All the Little Lights<br>Released: 2012"
];

var bool=[];
for(var i=0; i<sd.length; i++)
	bool[i]=false;

var icon=["images\\\\1.jpg",
"images\\\\2.jpg",
"images\\\\3.jpg",
"images\\\\4.jpg",
"images\\\\5.jpg",
"images\\\\6.jpg",
"images\\\\7.jpg",
"images\\\\8.jpg",
"images\\\\9.jpg",
"images\\\\10.jpg",
"images\\\\11.jpg",
"images\\\\12.jpg",
"images\\\\13.jpg",
];




var songs=new Array(13);
// for (var i = 0; i<12; i++) {
// 	songs[i]=new Array(4);
// 	songs[i][0]=path[i];
// 	songs[i][1]=sd[i];
// 	songs[i][2]=icon[i];
// 	songs[i][3]=sname[i][1]+".png";//emoji
// 	console.log(songs[i][0]);
// 	console.log(songs[i][1]);
// 	console.log(songs[i][2]);
// 	var ins=document.createElement("div");
// 	ins.id='b'+i;
// 	// ins.onclick=function(){
// 	// next(this);
//   	// };
// 	ins.setAttribute("class", "song");
// 	document.body.appendChild(ins);
// 	document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
// 	document.getElementById('a'+i).onclick=function(){
// 		play(this);
// 	};
// 	document.getElementById('c'+i).onclick=function(){
// 		addq(this);
// 	};	
// }

//temp

//shuffle song array


function shuffle(array) {
 
  array.sort(() => Math.random() - 0.5);

  return array;
}

for (var i = 0; i<13; i++) {
	songs[i]=new Array(5);
	songs[i][0]=path[i];
	songs[i][1]=sd[i];
	songs[i][2]=icon[i];
	songs[i][3]=sname[i][1]+".png";//emoji
	songs[i][4]=sname[i][0];
	console.log(songs[i][0]);
	console.log(songs[i][1]);
	console.log(songs[i][2]);
	if(i==12){
		songs=shuffle(songs);
		for(i=0;i<12;i++){
			var ins=document.createElement("div");
			ins.id='b'+i;
	// ins.onclick=function(){
	// next(this);
  	// };
			ins.setAttribute("class", "song");
			document.body.appendChild(ins);
			document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
			document.getElementById('a'+i).onclick=function(){
				play(this);
				};
			document.getElementById('c'+i).onclick=function(){
				//console.log(this)
				addq(this);
			};
		}
	}
		
}



function setmod(elem){
	console.log("setmod "+ elem);
	mod=elem.value;
	if(!songrun){
		if(mod==2)
			getTime();
		if(mod==3)
			rand_play();
	}
}

function play(elem){
	console.log(elem.id);
	console.log(elem.id.substring(1,elem.id.length));
	var x=elem.id.substring(1,elem.id.length);
	var z=songs[x][0];
	document.getElementById("sname").innerHTML=songs[x][4];
	document.getElementById("sel").src= z;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
	songrun=true;

}

var eqc=1;
var sqc=1;

function addq(elem){
	console.log(elem);
	var x=elem.id.substring(1,elem.id.length);
	if(!songrun){
		var z=songs[x][0];
		document.getElementById("sname").innerHTML=songs[x][4];
		document.getElementById("sel").src= z;
		document.getElementById("main_slider").load();
		document.getElementById("main_slider").play();
		document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
		songrun=true;		
		return;
	}
	if(bool[x]==true)
		return;
	
	bool[x]=true;
	var l=document.createElement("label");
	l.id="e"+eqc;
	l.name=x;
	l.innerHTML=songs[x][4]+"<br>";
	//var text=document.createTextNode(sname[x][0]+"<br>");
	//l.appendChild(text);
	document.getElementById("queue").appendChild(l);
	eqc=eqc+1;
}
function addQ(elem){
	console.log(elem);
	var x=elem.substring(1,elem.length);
	if(!songrun){
		var z=songs[x][0];
		document.getElementById("sname").innerHTML=songs[x][4];
		document.getElementById("sel").src= z;
		document.getElementById("main_slider").load();
		document.getElementById("main_slider").play();
		document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
		songrun=true;		
		return;
	}
	if(bool[x]==true)
		return;
	
	bool[x]=true;
	var l=document.createElement("label");
	l.id="e"+eqc;
	l.name=x;
	l.innerHTML=songs[x][4]+"<br>";
	//var text=document.createTextNode(sname[x][0]+"<br>");
	//l.appendChild(text);
	document.getElementById("queue").appendChild(l);
	eqc=eqc+1;
}

function nextsong(){
	if(sqc==eqc){
				alert("Queue is empty.");
				return;
		}
		var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			bool[xa]=false;
			document.getElementById("sname").innerHTML=songs[xa][4];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;

}

function next_in_Q(){
			songrun=false;
			if(sqc==eqc){
				alert("Queue is empty.");
				return;
			}
			var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			document.getElementById("sname").innerHTML=songs[xa][4];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;
			}

function rand_play(){
	var index=Math.random()*path.length;
	index=parseInt(index);
	var pa=songs[index][0];
	document.getElementById("sname").innerHTML=songs[index][4];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[index][3]+"')";
	songrun=true;

}

// function moody(val){
// 	var index=Math.random()*mood[val].length;
// 	index=parseInt(index);
// 	var pa=songs[mood[val][index]-1][0];
// 	document.getElementById("sname").innerHTML=sname[mood[val][index]-1][0];
// 	document.getElementById("sel").src= pa;
// 	document.getElementById("main_slider").load();
// 	document.getElementById("main_slider").play();
// 	document.getElementById("emoji").style.backgroundImage="url('"+songs[mood[val][index]-1][3]+"')";
// 	songrun=true;
// }

function moody(val){
	console.log(val+ " " + "moody");
	for(var i=0;i<13;i++){
		
		var song_mode= songs[i][3];
		song_mode=song_mode.substring(0,song_mode.length-4);
		
		if(song_mode === val){
			addQ("c"+i);

		}
	}
	
	
}


async function getTime() {
	
	// let value = await eel.getEmotion()();
	// moody(value);
	moody("happy");
}