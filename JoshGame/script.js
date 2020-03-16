var app = new Vue({
  el: '#app',
  data: {
      message: 'Hello Vue!',
      currentInstruction:'',
      unknown: {
	      'background-color': 'grey',
	      width: '50px',
	      height: '50px'
      },
      water: {
	      'background-color': 'blue',
	      width: '50px',
	      height: '50px'
      },
      occupied: {
	      'background-color': 'red',
	      width: '50px',
	      height: '50px'
      },
      resource: {
	      'background-color': 'yellow',
	      width: '50px',
	      height: '50px'
      },
      land: {
	      'background-color': 'green',
	      width: '50px',
	      height: '50px'
      },
      playerOne:{
	  'background-color': 'white',
	  width:'50px',
	  height: '50px'
      },
      playerTwo:{
	  'background-color': 'black',
	  width:'50px',
	  height: '50px'
      },
      tileInfo :{
         position: 'absolute',
         'z-index': '1',
         'background-color': 'whitesmoke',
         border: '1px solid black',
         height: '20em',
         width: '15em',
        'text-align': 'left',
      },
      items : [],
      boxes: {},
      playerOneSelected:0,
      playerTwoSelected:0,
      hover: false,
      currentTile: {
          tileType: "Default",
          soldiers: 0,
          scouts: 0,
          workers: 0,
          events: "None",
      },
      x: 0,
      y: 0,
      
  },
    methods: {
	callName : function(event){
	    
	    if (this.boxes[event]==this.unknown) {
		if (this.playerOneSelected==0){
		    this.boxes[event]=this.playerOne
		    this.playerOneSelected=1
		}
		else if (this.playerTwoSelected==0){
		    this.boxes[event]=this.playerTwo
		    this.playerTwoSelected=1
		}
		else{
		    var n = Math.floor(Math.random() * 4)
		    var options = [this.water, this.land, this.occupied, this.resource]
		    this.boxes[event] = options[n]
		    
		}
		this.items.push('')
		this.items.pop()
	    }
	    
	    if (this.boxes[event] == this.water){
		this.currentInstruction = "Water"
	    }
	    else if (this.boxes[event]==this.land){
		this.currentInstruction= "Land"
	    }
	    else if (this.boxes[event]==this.occupied){
		this.currentInstruction= "Occupied"
	    }
	    else if (this.boxes[event] == this.resource){
		this.currentInstruction = "Resource"
	    }
	    else if (this.boxes[event] == this.playerOne){
		this.currentInstruction = "Player One"
	    }
	    else if (this.boxes[event] == this.playerTwo){
		this.currentInstruction = "Player Two"
	    }
		
	    
	},
	
	rndStr : function(len) {
	    let text = " "
    	    let chars = "abcdefghijklmnopqrstuvwxyz"
	    for( let i=0; i < len; i++ ) {
		text += chars.charAt(Math.floor(Math.random() * chars.length))
	    }
	    return text
	},
	fillItems: function(){
	    this.items=[]
	    this.currentInstruction=''
	    this.playerOneSelected=0
	    this.playerTwoSelected=0
	    this.boxes={}
	    for (var i =0; i<100;i++){
		var st = ''
		st = this.rndStr(7)
		this.items.push(st)
		this.boxes[st] = this.unknown
		console.log(this.boxes[st])
	    }
    },
    
    hoverTile: function(event) {
        if (this.boxes[event] == this.water){
            this.currentTile.tileType = "Water"
            }
            else if (this.boxes[event]==this.land){
                this.currentTile.tileType= "Land"
            }
            else if (this.boxes[event]==this.occupied){
                this.currentTile.tileType= "Occupied"
            }
            else if (this.boxes[event] == this.resource){
                this.currentTile.tileType = "Resource"
            }
            else if (this.boxes[event] == this.playerOne){
                this.currentTile.tileType = "Player One"
            }
            else if (this.boxes[event] == this.playerTwo){
                this.currentTile.tileType = "Player Two"
            }
            else {
                this.currentTile.tileType = "Undiscovered"
            }
           
    },

    logCoordinates: function(e) {
        this.x = e.clientX;
        this.y = e.clientY;
    },

    },
    computed: {
        hoverPoint: function() {
            return {
                top: this.y +'px',
                left: this.x +'px'

            };
        }
    }
})