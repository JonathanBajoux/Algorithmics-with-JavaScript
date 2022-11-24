var nombre = 2;
var tab= Array();
var i=0;
      while(tab.length<10){

	  if(nombre % 2 == 0){
    		  tab[i] = nombre;
    		  i++;
	  }
	     nombre++;
	  }
	    for(i=0; i<tab.length; i++)
	  {
	    console.log("les nombres paires sont:"+tab);

	  }