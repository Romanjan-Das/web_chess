function main(){
    load_board();
    set_box_properties();
    set_chesspieces_in_initial_position();
}

function load_board(){
    var i=0; var j=0;
    for(i=0;i<8;i++){
        var row= document.getElementsByClassName("row")[i];
        for(j=0;j<8;j++){
            var box=document.createElement("div");
            box.setAttribute("class","box");
            row.appendChild(box);
        }
    }

    var l=0;m=0;n=0;var white="black"; var black="black";
    for(l=0;l<8;l++){
        if(l%2==0){
            white="white"; black="black";
        }
        else{
            white="black"; black="white";
        }
        for(m=0;m<8;m++){
            if(m%2==0){
                document.getElementsByClassName("box")[n].style.backgroundColor=white;
                document.getElementsByClassName("box")[n].style.color=black;
            }
            else{
                document.getElementsByClassName("box")[n].style.backgroundColor=black;
                document.getElementsByClassName("box")[n].style.color=white;
            }

            document.getElementsByClassName("box")[n].innerHTML=n+1;
            document.getElementsByClassName("box")[n].setAttribute("onclick","select_box("+(n+1)+");");
            document.getElementsByClassName("box")[n].setAttribute("id","cell_number_"+(n+1));
            n++;
        }
    }

}

var box;
function set_box_properties(){
    box={
        cell_1:{
            cell_number:1,
            item_exists:true,
            item_colour:"black",
            item_type:"rook"
        },

        cell_2:{
            cell_number:2,
            item_exists:true,
            item_colour:"black",
            item_type:"knight"
        },

        cell_3:{
            cell_number:3,
            item_exists:true,
            item_colour:"black",
            item_type:"bishop"
        },
        cell_4:{
            cell_number:4,
            item_exists:true,
            item_colour:"black",
            item_type:"queen"
        },
        cell_5:{
            cell_number:5,
            item_exists:true,
            item_colour:"black",
            item_type:"king"
        },
        cell_6:{
            cell_number:6,
            item_exists:true,
            item_colour:"black",
            item_type:"bishop"
        },
        cell_7:{
            cell_number:7,
            item_exists:true,
            item_colour:"black",
            item_type:"knight"
        },
        cell_8:{
            cell_number:8,
            item_exists:true,
            item_colour:"black",
            item_type:"rook"
        },
        cell_9:{
            cell_number:9,
            item_exists:true,
            item_colour:"black",
            item_type:"pawn"
        },
        cell_10:{
            cell_number:10,
            item_exists:true,
            item_colour:"black",
            item_type:"pawn"
        },
        cell_11:{
            cell_number:11,
            item_exists:true,
            item_colour:"black",
            item_type:"pawn"
        },
        cell_12:{
            cell_number:12,
            item_exists:true,
            item_colour:"black",
            item_type:"pawn"
        },
        cell_13:{
            cell_number:13,
            item_exists:true,
            item_colour:"black",
            item_type:"pawn"
        },
        cell_14:{
            cell_number:14,
            item_exists:true,
            item_colour:"black",
            item_type:"pawn"
        },
        cell_15:{
            cell_number:15,
            item_exists:true,
            item_colour:"black",
            item_type:"pawn"
        },
        cell_16:{
            cell_number:16,
            item_exists:true,
            item_colour:"black",
            item_type:"pawn"
        },
        cell_17:{
            cell_number:17,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_18:{
            cell_number:18,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_19:{
            cell_number:19,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_20:{
            cell_number:20,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_21:{
            cell_number:21,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_22:{
            cell_number:22,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_23:{
            cell_number:23,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_24:{
            cell_number:24,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_25:{
            cell_number:25,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_26:{
            cell_number:26,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_27:{
            cell_number:27,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_28:{
            cell_number:28,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_29:{
            cell_number:29,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_30:{
            cell_number:30,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_31:{
            cell_number:31,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_32:{
            cell_number:32,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_33:{
            cell_number:33,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_34:{
            cell_number:34,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_35:{
            cell_number:35,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_36:{
            cell_number:36,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_37:{
            cell_number:37,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_38:{
            cell_number:38,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_39:{
            cell_number:39,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_40:{
            cell_number:40,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_41:{
            cell_number:41,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_42:{
            cell_number:42,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_43:{
            cell_number:43,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_44:{
            cell_number:44,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_45:{
            cell_number:45,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_46:{
            cell_number:46,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_47:{
            cell_number:47,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_48:{
            cell_number:48,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_49:{
            cell_number:49,
            item_exists:true,
            item_colour:"white",
            item_type:"pawn"
        },
        cell_50:{
            cell_number:50,
            item_exists:true,
            item_colour:"white",
            item_type:"pawn"
        },
        cell_51:{
            cell_number:51,
            item_exists:true,
            item_colour:"white",
            item_type:"pawn"
        },
        cell_52:{
            cell_number:52,
            item_exists:true,
            item_colour:"white",
            item_type:"pawn"
        },
        cell_53:{
            cell_number:53,
            item_exists:true,
            item_colour:"white",
            item_type:"pawn"
        },
        cell_54:{
            cell_number:54,
            item_exists:true,
            item_colour:"white",
            item_type:"pawn"
        },
        cell_55:{
            cell_number:55,
            item_exists:true,
            item_colour:"white",
            item_type:"pawn"
        },
        cell_56:{
            cell_number:56,
            item_exists:true,
            item_colour:"white",
            item_type:"pawn"
        },
        cell_57:{
            cell_number:57,
            item_exists:true,
            item_colour:"white",
            item_type:"rook"
        },
        cell_58:{
            cell_number:58,
            item_exists:true,
            item_colour:"white",
            item_type:"knight"
        },
        cell_59:{
            cell_number:59,
            item_exists:true,
            item_colour:"white",
            item_type:"bishop"
        },
        cell_60:{
            cell_number:60,
            item_exists:true,
            item_colour:"white",
            item_type:"queen"
        },
        cell_61:{
            cell_number:61,
            item_exists:true,
            item_colour:"white",
            item_type:"king"
        },
        cell_62:{
            cell_number:62,
            item_exists:true,
            item_colour:"white",
            item_type:"bishop"
        },
        cell_63:{
            cell_number:63,
            item_exists:true,
            item_colour:"white",
            item_type:"knight"
        },
        cell_64:{
            cell_number:64,
            item_exists:true,
            item_colour:"white",
            item_type:"rook"
        }
    };
}

function set_chesspieces_in_initial_position(){
    var i=0;
    for(i=0;i<64;i++){
        document.getElementById("cell_number_"+(i+1)).innerHTML=eval("box.cell_"+(i+1)+".item_colour")+"<br>"+eval("box.cell_"+(i+1)+".item_type");
    }
}
var p=0;/* <--previously selected cell number */ var is_an_item_selected=false;
function select_box(i){
    var temp_box_i; var temp_box_p;
    if(is_an_item_selected==true && (document.getElementById("cell_number_"+(i)).style.backgroundColor=="yellow")){
        reset_box_colours();
        is_an_item_selected=false;
        p=0;
    }
    else if(is_an_item_selected==true){
        if((document.getElementById("cell_number_"+(i)).style.backgroundColor=="cyan")||(document.getElementById("cell_number_"+(i)).style.backgroundColor=="magenta")){
            temp_box_i=eval("box.cell_"+i);
            temp_box_p=eval("box.cell_"+p);
            temp_box_i.item_exists=temp_box_p.item_exists;
            temp_box_i.item_type=temp_box_p.item_type;
            temp_box_i.item_colour=temp_box_p.item_colour;
            if(temp_box_i.item_colour=="black" && temp_box_i.item_type=="pawn" && i>56){
                temp_box_i.item_type="queen";
            }
            if(temp_box_i.item_colour=="white" && temp_box_i.item_type=="pawn" && i<9){
                temp_box_i.item_type="queen";
            }
            document.getElementById("cell_number_"+i).innerHTML=eval("box.cell_"+i+".item_colour")+"<br>"+eval("box.cell_"+i+".item_type");
            document.getElementById("cell_number_"+p).innerHTML="";
            temp_box_p.item_exists=false;
            temp_box_p.item_type="";
            temp_box_p.item_colour="";
            reset_box_colours();
            is_an_item_selected=false;
            p=0;
        }
    }
    else if(is_an_item_selected==false){
        if(eval("box.cell_"+(i)+".item_exists")==true){
            document.getElementById("cell_number_"+(i)).style.backgroundColor="yellow";
            document.getElementById("cell_number_"+(i)).style.color="black";
            p=i;
            is_an_item_selected=true;
        }
        pawn_movement(i);
        rook_movement(i);
    }


}

function rook_movement(i){
    var left; var right; var top; var bottom; var left_limit; var right_limit; var top_limit; var bottom_limit;
        /* -- white rook -- */
        if(eval("box.cell_"+i+".item_type")=="rook" && eval("box.cell_"+i+".item_colour")=="white"){

            /* ---- horizontal ---- */

            if(i>0 && i<9){
                left_limit=0; right_limit=9; 
            }
            else if(i>8 && i<17){
                left_limit=8; right_limit=17; 
            }
            else if(i>16 && i<25){
                left_limit=16; right_limit=25; 
            }
            else if(i>24 && i<33){
                left_limit=24; right_limit=33;
            }
            else if(i>32 && i<41){
                left_limit=32; right_limit=41;
            }
            else if(i>40 && i<49){
                left_limit=40; right_limit=49;
            }
            else if(i>48 && i<57){
                left_limit=48; right_limit=57;
            }
            else if(i>56 && i<65){
                left_limit=56; right_limit=65;
            }
            left=i; right=i; 
            console.log("i:"+i+" left_limit:"+left_limit+" right_limit:"+right_limit+" left:"+left+" right:"+right);
            
            while(left>left_limit){
                left=left-1;
                if(left>left_limit){
                    document.getElementById("cell_number_"+left).style.backgroundColor="cyan";
                }
            }
            while(right<right_limit){
                right=right+1;
                if(right<right_limit){
                    document.getElementById("cell_number_"+right).style.backgroundColor="cyan";
                }
            }
            

            /* ---- vertical ---- */

            if(i>0 && i<58){
                top_limit=0; bottom_limit=58; 
            }
            else if(i>1 && i<59){
                top_limit=1; bottom_limit=59; 
            }
            else if(i>2 && i<60){
                top_limit=2; bottom_limit=60; 
            }
            else if(i>3 && i<61){
                top_limit=3; bottom_limit=61;
            }
            else if(i>4 && i<62){
                top_limit=4; bottom_limit=62;
            }
            else if(i>5 && i<63){
                top_limit=5; bottom_limit=63;
            }
            else if(i>6 && i<64){
                top_limit=6; bottom_limit=64;
            }
            else if(i>7 && i<65){
                top_limit=7; bottom_limit=65;
            }
            top=i; bottom=i; 
            console.log("i:"+i+" top_limit:"+top_limit+" bottom_limit:"+bottom_limit+" top:"+top+" bottom:"+bottom);
            
            while(top>top_limit){
                top=top-8;
                if(top>top_limit){
                    document.getElementById("cell_number_"+top).style.backgroundColor="cyan";
                }
            }
            while(bottom<bottom_limit){
                bottom=bottom+8;
                if(bottom<bottom_limit){
                    document.getElementById("cell_number_"+bottom).style.backgroundColor="cyan";
                }
            }
        }
        /* -- black rook -- */
        if(eval("box.cell_"+i+".item_type")=="rook" && eval("box.cell_"+i+".item_colour")=="black"){
            
        }
}

function pawn_movement(i){
        /* -- white pawn -- */
        if(eval("box.cell_"+(i)+".item_type")==="pawn" && eval("box.cell_"+(i)+".item_colour")==="white"){
            if(i>48 && i<57){
                if(eval("box.cell_"+(i-8)+".item_exists")==false){
                    document.getElementById("cell_number_"+(i-8)).style.backgroundColor="cyan";
                }
                if(eval("box.cell_"+(i-8)+".item_exists")==false && eval("box.cell_"+(i-16)+".item_exists")==false){
                    document.getElementById("cell_number_"+(i-16)).style.backgroundColor="cyan";
                }
                if(i-9>0 && i!=1 && i!=9 && i!=17 && i!=25 && i!=33 && i!=41 && i!=49){
                    if(eval("box.cell_"+(i-9)+".item_exists")==true && eval("box.cell_"+(i-9)+".item_colour")=="black"){
                        document.getElementById("cell_number_"+(i-9)).style.backgroundColor="magenta";
                    }
                }
                if(i-7>0 && i!=8 && i!=16 && i!=24 && i!=32 && i!=40 && i!=48 && i!=56){
                    if(eval("box.cell_"+(i-7)+".item_exists")==true && eval("box.cell_"+(i-7)+".item_colour")=="black"){
                        document.getElementById("cell_number_"+(i-7)).style.backgroundColor="magenta";
                    }
                }
            }
            else if(i>8){
                if(eval("box.cell_"+(i-8)+".item_exists")==false){
                    document.getElementById("cell_number_"+(i-8)).style.backgroundColor="cyan";
                }
                if(i-9>0 && i!=1 && i!=9 && i!=17 && i!=25 && i!=33 && i!=41 && i!=49){
                    if(eval("box.cell_"+(i-9)+".item_exists")==true && eval("box.cell_"+(i-9)+".item_colour")=="black"){
                        document.getElementById("cell_number_"+(i-9)).style.backgroundColor="magenta";
                    }
                }
                if(i-7>0 && i!=8 && i!=16 && i!=24 && i!=32 && i!=40 && i!=48 && i!=56){
                    if(eval("box.cell_"+(i-7)+".item_exists")==true && eval("box.cell_"+(i-7)+".item_colour")=="black"){
                        document.getElementById("cell_number_"+(i-7)).style.backgroundColor="magenta";
                    }
                }
            }
        }
        /* -- black pawn -- */
        if(eval("box.cell_"+(i)+".item_type")==="pawn" && eval("box.cell_"+(i)+".item_colour")==="black"){
            if(i>8 && i<17){
                if(eval("box.cell_"+(i+8)+".item_exists")==false){
                    document.getElementById("cell_number_"+(i+8)).style.backgroundColor="cyan";
                }
                if(eval("box.cell_"+(i+8)+".item_exists")==false && eval("box.cell_"+(i+16)+".item_exists")==false){
                    document.getElementById("cell_number_"+(i+16)).style.backgroundColor="cyan";
                }
                if(i+9<65 && i!=8 && i!=16 && i!=24 && i!=32 && i!=40 && i!=48 && i!=56){
                    if(eval("box.cell_"+(i+9)+".item_exists")==true && eval("box.cell_"+(i+9)+".item_colour")=="white"){
                        document.getElementById("cell_number_"+(i+9)).style.backgroundColor="magenta";
                    }
                }
                if(i+7<65 && i!=1 && i!=9 && i!=17 && i!=25 && i!=33 && i!=41 && i!=49){
                    if(eval("box.cell_"+(i+7)+".item_exists")==true && eval("box.cell_"+(i+7)+".item_colour")=="white"){
                        document.getElementById("cell_number_"+(i+7)).style.backgroundColor="magenta";
                    }
                }            
            }
            else if(i<57){
                if(eval("box.cell_"+(i+8)+".item_exists")==false){
                    document.getElementById("cell_number_"+(i+8)).style.backgroundColor="cyan";
                }
                if(i+9<65 && i!=8 && i!=16 && i!=24 && i!=32 && i!=40 && i!=48 && i!=56){
                    if(eval("box.cell_"+(i+9)+".item_exists")==true && eval("box.cell_"+(i+9)+".item_colour")=="white"){
                        document.getElementById("cell_number_"+(i+9)).style.backgroundColor="magenta";
                    }
                }
                if(i+7<65 && i!=1 && i!=9 && i!=17 && i!=25 && i!=33 && i!=41 && i!=49){
                    if(eval("box.cell_"+(i+7)+".item_exists")==true && eval("box.cell_"+(i+7)+".item_colour")=="white"){
                        document.getElementById("cell_number_"+(i+7)).style.backgroundColor="magenta";
                    }
                }
            }
        }
}

function reset_box_colours(){
    var l=0;m=0;n=0;var white="black"; var black="black";
    for(l=0;l<8;l++){
        if(l%2==0){
            white="white"; black="black";
        }
        else{
            white="black"; black="white";
        }
        for(m=0;m<8;m++){
            if(m%2==0){
                document.getElementsByClassName("box")[n].style.backgroundColor=white;
                document.getElementsByClassName("box")[n].style.color=black;
                if(eval("box.cell_"+(n+1)+".item_exists")==false){
                    document.getElementsByClassName("box")[n].innerHTML=n+1;
                }
                else{
                    document.getElementsByClassName("box")[n].innerHTML=eval("box.cell_"+(n+1)+".item_colour")+"<br>"+eval("box.cell_"+(n+1)+".item_type")+" "+(n+1);
                }
            }
            else{
                document.getElementsByClassName("box")[n].style.backgroundColor=black;
                document.getElementsByClassName("box")[n].style.color=white;
                if(eval("box.cell_"+(n+1)+".item_exists")==false){
                    document.getElementsByClassName("box")[n].innerHTML=n+1;
                }
                else{
                    document.getElementsByClassName("box")[n].innerHTML=eval("box.cell_"+(n+1)+".item_colour")+"<br>"+eval("box.cell_"+(n+1)+".item_type")+" "+(n+1);
                }            }
            n++;
        }
    }
}