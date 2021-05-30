function found(){
    var type0=document.getElementById('s_g_0').value;
    var type1=document.getElementById('s_g_1').value;
    var type2=document.getElementById('s_g_2').value;
    var type3=document.getElementById('s_g_3').value;
    var type4=document.getElementById('s_g_4').value;
    var type5=document.getElementById('s_g_5').value;
    var type6=document.getElementById('s_g_6').value;
    var type7=document.getElementById('s_g_7').value;
    var type8=document.getElementById('s_g_8').value;
    var type9=document.getElementById('s_g_9').value;
    var type10=document.getElementById('s_g_10').value;
    if(type0=="windows"){
    if(type1=="ones"){
        if(type2=="free"){
            if(type3="fentesy"){
                if(type4=="third" || type4=="plot" || type4=="research" || type4=="craft" || type4=="option" || type4=="avantures" || type4=="arms" || type4=="magic" || type4=="mods"){ //якщо узагальнення перше
                    if( type5=="third" || type5=="plot" || type5=="research" || type5=="craft"  || type5=="option" || type5=="avantures"  || type5=="arms" || type5=="magic" || type5=="mods"){ //якщо узагальнення друге
                        if(type5==type4){ alert("Варіанти співпадають");}   
                        else if(type6=="adult"){// НЕ РУХАТИ/ВОНО ПРАЦЮЄ
                            if(type6==type4 || type6==type5){ alert("Варіанти співпадають");}                   
                            else{
                                if( type7=="third" || type7=="plot" || type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms" || type7=="magic" || type7=="mods"){ //якщо узагальнення друге
                                    if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){ //якщо узагальнення друге
                                        if(type8==type7 || type8==type6 || type8==type5 || type8==type4){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{
                                            if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                                if(type9==type8 || type9==type7 || type9==type6 || type9==type5 || type9==type4){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                else{
                                                    if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                                        if(type10==type9 || type10==type8 ||type10==type7 || type10==type6 || type10==type4 || type10==type5 || type10==type4){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                        else{window.open('../games/The_witcher3.html');} //повний пошук
                                                    }
                                                    else{("Більшість співпадінь")
                                                        window.open('../games/The_witcher3.html');
                                                    } //неповний пошук
                                                }
                                            }
                                            else{("Більшість співпадінь")
                                                window.open('../games/The_witcher3.html');
                                            } //неповний пошук
                                        }
                                    }
                                    else{("Більшість співпадінь")
                                        window.open('../games/The_witcher3.html');
                                    } //неповний пошук
                                }
                                else{alert("Більшість співпадінь");
                                window.open('../games/The_witcher3.html')}
                            }
                        }    //якщо паркур ... третій           
                        else if( type6=="third" || type6=="plot" ||  type6=="research" || type6=="craft"  || type6=="option" || type6=="avantures"  || type6=="arms" || type6=="magic" || type6=="mods"){
                            if( type7=="third" || type7=="plot" ||  type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms" || type7=="magic" || type7=="mods"){
                                if(type7==type6){ alert("Варіанти співпадають");}   
                                else if(type8=="adult"){
                                    if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                        if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{
                                            if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                                if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                else{window.open('../games/The_witcher3.html');} //повний пошук
                                            }
                                            else{alert("Більшість співпадінь");
                                                window.open('../games/The_witcher3.html');
                                            } //неповний пошук
                                        }
                                    }                                       
                                    else{alert("Більшість співпадінь");
                                        window.open('../games/The_witcher3.html');
                                    }
                                } //паркур п'ятий
                                else if(type8=="third" || type8=="plot" ||  type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){
                                    if( type9=="adult"){ //якщо узагальнення друге
                                        if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{
                                            if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                                if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                else{window.open('../games/The_witcher3.html');} //повний пошук
                                            }
                                            else{alert("Більшість співпадінь");
                                                window.open('../games/The_witcher3.html');
                                            } //неповний пошук
                                        }
                                    }                                       
                                    else{alert("Більшість співпадінь");
                                        window.open('../games/The_witcher3.html');
                                    }
                                }// паркур шостий
                            }
                            else if(type7=="adult"){ 
                                if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){ //якщо узагальнення друге
                                    if(type8==type7 || type8==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                    else{
                                        if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                            if(type9==type8 || type8==type7|| type9==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                            else{
                                                if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                                    if(type10==type9 || type10==type8 ||type10==type7 || type10==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                    else{window.open('../games/The_witcher3.html');} //повний пошук
                                                }
                                                else{window.open('../games/The_witcher3.html');} //неповний пошук
                                            }
                                        }
                                        else{window.open('../games/The_witcher3.html');} //неповний пошук
                                    }
                                }
                                else{window.open('../games/The_witcher3.html');} //неповний пошук
                            } //якщо паркур четвертий
                            else{alert("Більшість співпадінь");
                            window.open('../games/The_witcher3.html')}
                        }
                        else{ alert("Варіант не найдено");}
                        
                                }
                    else if(type5=="adult"){//якщо паркур полювання або постапокаліпсис друге
                        if(type5==type4){ alert("Варіанти співпадають");}   
                        else if(type6=="adult"){// НЕ РУХАТИ/ВОНО ПРАЦЮЄ
                            if(type6==type4 || type6==type5){ alert("Варіанти співпадають");}                   
                            else{
                                if( type7=="third" || type7=="plot" || type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms" || type7=="magic" || type7=="mods"){ //якщо узагальнення друге
                                    if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){ //якщо узагальнення друге
                                        if(type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{
                                            if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                                if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                else{
                                                    if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                                        if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                        else{window.open('../games/The_witcher3.html');} //повний пошук
                                                    }
                                                    else{("Більшість співпадінь")
                                                        window.open('../games/The_witcher3.html');
                                                    } //неповний пошук
                                                }
                                            }
                                            else{("Більшість співпадінь")
                                                window.open('../games/The_witcher3.html');
                                            } //неповний пошук
                                        }
                                    }
                                    else{("Більшість співпадінь")
                                        window.open('../games/The_witcher3.html');
                                    } //неповний пошук
                                }
                                else{alert("Більшість співпадінь");
                                window.open('../games/The_witcher3.html')}
                            }
                        }    //якщо паркур ... третій
                        //window.open('../games/The_witcher3.html');            
                        else if( type6=="third" || type6=="plot" ||  type6=="research" || type6=="craft"  || type6=="option" || type6=="avantures"  || type6=="arms" || type6=="magic" || type6=="mods"){
                            if( type7=="third" || type7=="plot" ||  type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms" || type7=="magic" || type7=="mods"){
                                if(type7==type6){ alert("Варіанти співпадають");}   
                                else if(type8=="adult"){
                                    if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                        if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{
                                            if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                                if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                else{window.open('../games/The_witcher3.html');} //повний пошук
                                            }
                                            else{alert("Більшість співпадінь");
                                                window.open('../games/The_witcher3.html');
                                            } //неповний пошук
                                        }
                                    }                                       
                                    else{alert("Більшість співпадінь");
                                        window.open('../games/The_witcher3.html');
                                    }
                                } //паркур п'ятий
                                else if(type8=="third" || type8=="plot" ||  type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){
                                    if( type9=="adult"){ //якщо узагальнення друге
                                        if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{
                                            if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                                if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                else{window.open('../games/The_witcher3.html');} //повний пошук
                                            }
                                            else{alert("Більшість співпадінь");
                                                window.open('../games/The_witcher3.html');
                                            } //неповний пошук
                                        }
                                    }                                       
                                    else{alert("Більшість співпадінь");
                                        window.open('../games/The_witcher3.html');
                                    }
                                }// паркур шостий
                            }
                            else if(type7=="adult"){ 
                                if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){ //якщо узагальнення друге
                                    if(type8==type7 || type8==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                    else{
                                        if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                            if(type9==type8 || type8==type7|| type9==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                            else{
                                                if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                                    if(type10==type9 || type10==type8 ||type10==type7 || type10==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                    else{window.open('../games/The_witcher3.html');} //повний пошук
                                                }
                                                else{window.open('../games/The_witcher3.html');} //неповний пошук
                                            }
                                        }
                                        else{window.open('../games/The_witcher3.html');} //неповний пошук
                                    }
                                }
                                else{window.open('../games/The_witcher3.html');} //неповний пошук
                            } //якщо паркур четвертий
                            else{ alert("Більшість співпадінь");
                            window.open('../games/The_witcher3.html')}
                        }
                        else{ alert("Варіант не найдено");}
                                }
                    else if( type5=="third" || type5=="plot" || type5=="research" || type5=="craft"  || type5=="option" || type5=="avantures"  || type5=="arms" || type5=="magic" || type5=="mods"){ //якщо узагальнення друге
                        if(type5==type4){ alert("Варіанти співпадають");}   
                        else if(type6=="first" || type6=="stels" || type6=="dragons"){// НЕ РУХАТИ/ВОНО ПРАЦЮЄ
                            if(type6==type4 || type6==type5){ alert("Варіанти співпадають");}                   
                            else{
                                if( type7=="third" || type7=="plot" || type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms" || type7=="magic" || type7=="mods"){ //якщо узагальнення друге
                                    if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){ //якщо узагальнення друге
                                        if(type8==type7 || type8==type6 || type8==type5 || type8==type4){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{
                                            if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                                if(type9==type8 || type9==type7 || type9==type6 || type9==type5 || type9==type4){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                else{
                                                    if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                                        if(type10==type9 || type10==type8 ||type10==type7 || type10==type6 || type10==type4 || type10==type5 || type10==type4){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                        else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //повний пошук
                                                    }
                                                    else{("Більшість співпадінь")
                                                        window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                                    } //неповний пошук
                                                }
                                            }
                                            else{("Більшість співпадінь")
                                                window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                            } //неповний пошук
                                        }
                                    }
                                    else{("Більшість співпадінь")
                                        window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                    } //неповний пошук
                                }
                                else{alert("Більшість співпадінь");
                                window.open('../games/The_Elder_Scrolls_V_Skyrim.html')}
                            }
                        }    //якщо паркур ... третій           
                        else if( type6=="third" || type6=="plot" ||  type6=="research" || type6=="craft"  || type6=="option" || type6=="avantures"  || type6=="arms" || type6=="magic" || type6=="mods"){
                            if( type7=="third" || type7=="plot" ||  type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms" || type7=="magic" || type7=="mods"){
                                if(type7==type6){ alert("Варіанти співпадають");}   
                                else if(type8=="first" || type8=="stels" || type8=="dragons"){
                                    if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                        if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{
                                            if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                                if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //повний пошук
                                            }
                                            else{alert("Більшість співпадінь");
                                                window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                            } //неповний пошук
                                        }
                                    }                                       
                                    else{alert("Більшість співпадінь");
                                        window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                    }
                                } //паркур п'ятий
                                else if(type8=="third" || type8=="plot" ||  type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){
                                    if( type9=="first" || type9=="stels" || type9=="dragons"){ //якщо узагальнення друге
                                        if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{
                                            if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                                if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //повний пошук
                                            }
                                            else{alert("Більшість співпадінь");
                                                window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                            } //неповний пошук
                                        }
                                    }                                       
                                    else{alert("Більшість співпадінь");
                                        window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                    }
                                }// паркур шостий
                            }
                            else if(type7=="first" || type7=="stels" || type7=="dragons"){ 
                                if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){ //якщо узагальнення друге
                                    if(type8==type7 || type8==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                    else{
                                        if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                            if(type9==type8 || type8==type7|| type9==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                            else{
                                                if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                                    if(type10==type9 || type10==type8 ||type10==type7 || type10==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                    else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //повний пошук
                                                }
                                                else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //неповний пошук
                                            }
                                        }
                                        else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //неповний пошук
                                    }
                                }
                                else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //неповний пошук
                            } //якщо паркур четвертий
                            else{alert("Більшість співпадінь");
                            window.open('../games/The_Elder_Scrolls_V_Skyrim.html')}
                        }
                        else{ alert("Варіант не найдено");}
                        
                    }
                    else if(type5=="first" || type5=="stels" || type5=="dragons"){//якщо паркур полювання або постапокаліпсис друге
                        if(type5==type4){ alert("Варіанти співпадають");}   
                        else if(type6=="first" || type6=="stels" || type6=="dragons"){// НЕ РУХАТИ/ВОНО ПРАЦЮЄ
                            if(type6==type4 || type6==type5){ alert("Варіанти співпадають");}                   
                            else{
                                if( type7=="third" || type7=="plot" || type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms" || type7=="magic" || type7=="mods"){ //якщо узагальнення друге
                                    if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){ //якщо узагальнення друге
                                        if(type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{
                                            if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                                if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                else{
                                                    if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                                        if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                        else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //повний пошук
                                                    }
                                                    else{("Більшість співпадінь")
                                                        window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                                    } //неповний пошук
                                                }
                                            }
                                            else{("Більшість співпадінь")
                                                window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                            } //неповний пошук
                                        }
                                    }
                                    else{("Більшість співпадінь")
                                        window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                    } //неповний пошук
                                }
                                else{alert("Більшість співпадінь");
                                window.open('../games/The_Elder_Scrolls_V_Skyrim.html')}
                            }
                        }    //якщо паркур ... третій
                        //window.open('../games/The_Elder_Scrolls_V_Skyrim.html');            
                        else if( type6=="third" || type6=="plot" ||  type6=="research" || type6=="craft"  || type6=="option" || type6=="avantures"  || type6=="arms" || type6=="magic" || type6=="mods"){
                            if( type7=="third" || type7=="plot" ||  type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms" || type7=="magic" || type7=="mods"){
                                if(type7==type6){ alert("Варіанти співпадають");}   
                                else if(type8=="first" || type8=="stels" || type8=="dragons"){
                                    if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                        if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{
                                            if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                                if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //повний пошук
                                            }
                                            else{alert("Більшість співпадінь");
                                                window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                            } //неповний пошук
                                        }
                                    }                                       
                                    else{alert("Більшість співпадінь");
                                        window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                    }
                                } //паркур п'ятий
                                else if(type8=="third" || type8=="plot" ||  type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){
                                    if( type9=="first" || type9=="stels" || type9=="dragons"){ //якщо узагальнення друге
                                        if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{
                                            if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                                if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //повний пошук
                                            }
                                            else{alert("Більшість співпадінь");
                                                window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                            } //неповний пошук
                                        }
                                    }                                       
                                    else{alert("Більшість співпадінь");
                                        window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                    }
                                }// паркур шостий
                            }
                            else if(type7=="first" || type7=="stels" || type7=="dragons"){ 
                                if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){ //якщо узагальнення друге
                                    if(type8==type7 || type8==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                    else{
                                        if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                            if(type9==type8 || type8==type7|| type9==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                            else{
                                                if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                                    if(type10==type9 || type10==type8 ||type10==type7 || type10==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                    else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //повний пошук
                                                }
                                                else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //неповний пошук
                                            }
                                        }
                                        else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //неповний пошук
                                    }
                                }
                                else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //неповний пошук
                            } //якщо паркур четвертий
                            else{ alert("Більшість співпадінь");
                            window.open('../games/The_Elder_Scrolls_V_Skyrim.html')}
                        }
                        else{ alert("Варіант не найдено");}
                    }
                    else if( type5=="third" || type5=="plot" || type5=="research" || type5=="craft"  || type5=="option" || type5=="avantures"  || type5=="arms"){ //якщо узагальнення друге
                        if(type5==type4){ alert("Варіанти співпадають");}   
                        else if(type6=="apocalipsis" || type6=="hunting" || type6=="parkour"){// НЕ РУХАТИ/ВОНО ПРАЦЮЄ
                            if(type6==type4 || type6==type5){ alert("Варіанти співпадають");}                   
                            else{
                                if( type7=="third" || type7=="plot" || type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms"){ //якщо узагальнення друге
                                    if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms"){ //якщо узагальнення друге
                                        if(type8==type7 || type8==type6 || type8==type4 || type8==type5 || type8==type4){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{
                                            if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms"){ //якщо узагальнення друге
                                                if(type9==type8 || type9==type7 || type9==type6 || type9==type4 || type9==type5 || type9==type4){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                else{
                                                    if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms"){ //якщо узагальнення друге
                                                        if(type10==type9 || type10==type8 ||type10==type7 || type10==type6 || type10==type4 || type10==type5 || type10==type4){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                        else{window.open('../games/Horizon_Zero_Dawn.html');} //повний пошук
                                                    }
                                                    else{("Більшість співпадінь")
                                                        window.open('../games/Horizon_Zero_Dawn.html');
                                                    } //неповний пошук
                                                }
                                            }
                                            else{("Більшість співпадінь")
                                                window.open('../games/Horizon_Zero_Dawn.html');
                                            } //неповний пошук
                                        }
                                    }
                                    else{("Більшість співпадінь")
                                        window.open('../games/Horizon_Zero_Dawn.html');
                                    } //неповний пошук
                                }
                                else{alert("Варіант не найдено");}
                            }
                        }    //якщо паркур ... третій           
                        else if( type6=="third" || type6=="plot" ||  type6=="research" || type6=="craft"  || type6=="option" || type6=="avantures"  || type6=="arms"){
                            if( type7=="third" || type7=="plot" ||  type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms"){
                                if(type7==type6){ alert("Варіанти співпадають");}   
                                else if(type8=="apocalipsis" || type8=="hunting" || type8=="parkour"){
                                    if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms"){ //якщо узагальнення друге
                                        if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{
                                            if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms"){ //якщо узагальнення друге
                                                if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                else{window.open('../games/Horizon_Zero_Dawn.html');} //повний пошук
                                            }
                                            else{alert("Більшість співпадінь");
                                                window.open('../games/Horizon_Zero_Dawn.html');
                                            } //неповний пошук
                                        }
                                    }                                       
                                    else{alert("Більшість співпадінь");
                                        window.open('../games/Horizon_Zero_Dawn.html');
                                    }
                                } //паркур п'ятий
                                else if(type8=="third" || type8=="plot" ||  type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms"){
                                    if( type9=="apocalipsis" || type9=="hunting" || type9=="parkour"){ //якщо узагальнення друге
                                        if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{
                                            if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms"){ //якщо узагальнення друге
                                                if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                else{window.open('../games/Horizon_Zero_Dawn.html');} //повний пошук
                                            }
                                            else{alert("Більшість співпадінь");
                                                window.open('../games/Horizon_Zero_Dawn.html');
                                            } //неповний пошук
                                        }
                                    }                                       
                                    else{alert("Більшість співпадінь");
                                        window.open('../games/Horizon_Zero_Dawn.html');
                                    }
                                }// паркур шостий
                            }
                            else if(type7=="apocalipsis" || type7=="hunting" || type7=="parkour"){ 
                                if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms"){ //якщо узагальнення друге
                                    if(type8==type7 || type8==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                    else{
                                        if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms"){ //якщо узагальнення друге
                                            if(type9==type8 || type8==type7|| type9==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                            else{
                                                if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms"){ //якщо узагальнення друге
                                                    if(type10==type9 || type10==type8 ||type10==type7 || type10==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                    else{window.open('../games/Horizon_Zero_Dawn.html');} //повний пошук
                                                }
                                                else{window.open('../games/Horizon_Zero_Dawn.html');} //неповний пошук
                                            }
                                        }
                                        else{window.open('../games/Horizon_Zero_Dawn.html');} //неповний пошук
                                    }
                                }
                                else{window.open('../games/Horizon_Zero_Dawn.html');} //неповний пошук
                            } //якщо паркур четвертий
                            else{ alert("Варіант не найдено");}
                        }
                        else{ alert("Варіант не найдено");}
                        
                                }
                    else if(type5=="apocalipsis" || type5=="hunting" || type5=="parkour"){//якщо паркур полювання або постапокаліпсис друге
                        if(type5==type4){ alert("Варіанти співпадають");}   
                        else if(type6=="apocalipsis" || type6=="hunting" || type6=="parkour"){// НЕ РУХАТИ/ВОНО ПРАЦЮЄ
                            if(type6==type4 || type6==type5){ alert("Варіанти співпадають");}                   
                            else{
                                if( type7=="third" || type7=="plot" || type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms"){ //якщо узагальнення друге
                                    if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms"){ //якщо узагальнення друге
                                        if(type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{
                                            if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms"){ //якщо узагальнення друге
                                                if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                else{
                                                    if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms"){ //якщо узагальнення друге
                                                        if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                        else{window.open('../games/Horizon_Zero_Dawn.html');} //повний пошук
                                                    }
                                                    else{("Більшість співпадінь")
                                                        window.open('../games/Horizon_Zero_Dawn.html');
                                                    } //неповний пошук
                                                }
                                            }
                                            else{("Більшість співпадінь")
                                                window.open('../games/Horizon_Zero_Dawn.html');
                                            } //неповний пошук
                                        }
                                    }
                                    else{("Більшість співпадінь")
                                        window.open('../games/Horizon_Zero_Dawn.html');
                                    } //неповний пошук
                                }
                                else{alert("Варіант не найдено");}
                            }
                        }    //якщо паркур ... третій
                        //window.open('../games/Horizon_Zero_Dawn.html');            
                        else if( type6=="third" || type6=="plot" ||  type6=="research" || type6=="craft"  || type6=="option" || type6=="avantures"  || type6=="arms"){
                            if( type7=="third" || type7=="plot" ||  type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms"){
                                if(type7==type6){ alert("Варіанти співпадають");}   
                                else if(type8=="apocalipsis" || type8=="hunting" || type8=="parkour"){
                                    if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms"){ //якщо узагальнення друге
                                        if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{
                                            if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms"){ //якщо узагальнення друге
                                                if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                else{window.open('../games/Horizon_Zero_Dawn.html');} //повний пошук
                                            }
                                            else{alert("Більшість співпадінь");
                                                window.open('../games/Horizon_Zero_Dawn.html');
                                            } //неповний пошук
                                        }
                                    }                                       
                                    else{alert("Більшість співпадінь");
                                        window.open('../games/Horizon_Zero_Dawn.html');
                                    }
                                } //паркур п'ятий
                                else if(type8=="third" || type8=="plot" ||  type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms"){
                                    if( type9=="apocalipsis" || type9=="hunting" || type9=="parkour"){ //якщо узагальнення друге
                                        if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{
                                            if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms"){ //якщо узагальнення друге
                                                if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                else{window.open('../games/Horizon_Zero_Dawn.html');} //повний пошук
                                            }
                                            else{alert("Більшість співпадінь");
                                                window.open('../games/Horizon_Zero_Dawn.html');
                                            } //неповний пошук
                                        }
                                    }                                       
                                    else{alert("Більшість співпадінь");
                                        window.open('../games/Horizon_Zero_Dawn.html');
                                    }
                                }// паркур шостий
                            }
                            else if(type7=="apocalipsis" || type7=="hunting" || type7=="parkour"){ 
                                if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms"){ //якщо узагальнення друге
                                    if(type8==type7 || type8==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                    else{
                                        if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms"){ //якщо узагальнення друге
                                            if(type9==type8 || type8==type7|| type9==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                            else{
                                                if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms"){ //якщо узагальнення друге
                                                    if(type10==type9 || type10==type8 ||type10==type7 || type10==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                    else{window.open('../games/Horizon_Zero_Dawn.html');} //повний пошук
                                                }
                                                else{window.open('../games/Horizon_Zero_Dawn.html');} //неповний пошук
                                            }
                                        }
                                        else{window.open('../games/Horizon_Zero_Dawn.html');} //неповний пошук
                                    }
                                }
                                else{window.open('../games/Horizon_Zero_Dawn.html');} //неповний пошук
                            } //якщо паркур четвертий
                            else{ alert("Варіант не найдено");}
                        }
                        else{ alert("Варіант не найдено");}
                                }
                }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////
                else if(type4=="adult"){//готовий відьмак
                    if( type5=="third" || type5=="plot" || type5=="research" || type5=="craft"  || type5=="option" || type5=="avantures"  || type5=="arms" || type5=="magic" || type5=="mods"){ //якщо узагальнення друге
            if(type5==type4){ alert("Варіанти співпадають");}   
            else if(type6=="adult"){// НЕ РУХАТИ/ВОНО ПРАЦЮЄ
                if(type6==type4 || type6==type5){ alert("Варіанти співпадають");}                   
                else{
                    if( type7=="third" || type7=="plot" || type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms" || type7=="magic" || type7=="mods"){ //якщо узагальнення друге
                        if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){ //якщо узагальнення друге
                            if(type8==type7 || type8==type6 || type8==type5 || type8==type4){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                            else{
                                if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                    if(type9==type8 || type9==type7 || type9==type6 || type9==type5 || type9==type4){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                    else{
                                        if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                            if(type10==type9 || type10==type8 ||type10==type7 || type10==type6 || type10==type4 || type10==type5 || type10==type4){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                            else{window.open('../games/The_witcher3.html');} //повний пошук
                                        }
                                        else{("Більшість співпадінь")
                                            window.open('../games/The_witcher3.html');
                                        } //неповний пошук
                                    }
                                }
                                else{("Більшість співпадінь")
                                    window.open('../games/The_witcher3.html');
                                } //неповний пошук
                            }
                        }
                        else{("Більшість співпадінь")
                            window.open('../games/The_witcher3.html');
                        } //неповний пошук
                    }
                    else{alert("Більшість співпадінь");
                    window.open('../games/The_witcher3.html')}
                }
            }    //якщо паркур ... третій           
            else if( type6=="third" || type6=="plot" ||  type6=="research" || type6=="craft"  || type6=="option" || type6=="avantures"  || type6=="arms" || type6=="magic" || type6=="mods"){
                if( type7=="third" || type7=="plot" ||  type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms" || type7=="magic" || type7=="mods"){
                    if(type7==type6){ alert("Варіанти співпадають");}   
                    else if(type8=="adult"){
                        if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                            if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                            else{
                                if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                    if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                    else{window.open('../games/The_witcher3.html');} //повний пошук
                                }
                                else{alert("Більшість співпадінь");
                                    window.open('../games/The_witcher3.html');
                                } //неповний пошук
                            }
                        }                                       
                        else{alert("Більшість співпадінь");
                            window.open('../games/The_witcher3.html');
                        }
                    } //паркур п'ятий
                    else if(type8=="third" || type8=="plot" ||  type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){
                        if( type9=="adult"){ //якщо узагальнення друге
                            if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                            else{
                                if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                    if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                    else{window.open('../games/The_witcher3.html');} //повний пошук
                                }
                                else{alert("Більшість співпадінь");
                                    window.open('../games/The_witcher3.html');
                                } //неповний пошук
                            }
                        }                                       
                        else{alert("Більшість співпадінь");
                            window.open('../games/The_witcher3.html');
                        }
                    }// паркур шостий
                }
                else if(type7=="adult"){ 
                    if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){ //якщо узагальнення друге
                        if(type8==type7 || type8==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                        else{
                            if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                if(type9==type8 || type8==type7|| type9==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                else{
                                    if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                        if(type10==type9 || type10==type8 ||type10==type7 || type10==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{window.open('../games/The_witcher3.html');} //повний пошук
                                    }
                                    else{window.open('../games/The_witcher3.html');} //неповний пошук
                                }
                            }
                            else{window.open('../games/The_witcher3.html');} //неповний пошук
                        }
                    }
                    else{window.open('../games/The_witcher3.html');} //неповний пошук
                } //якщо паркур четвертий
                else{alert("Більшість співпадінь");
                window.open('../games/The_witcher3.html')}
            }
            else{ alert("Варіант не найдено");}
            
                    }
                    else if(type5=="adult"){//якщо паркур полювання або постапокаліпсис друге
            if(type5==type4){ alert("Варіанти співпадають");}   
            else if(type6=="adult"){// НЕ РУХАТИ/ВОНО ПРАЦЮЄ
                if(type6==type4 || type6==type5){ alert("Варіанти співпадають");}                   
                else{
                    if( type7=="third" || type7=="plot" || type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms" || type7=="magic" || type7=="mods"){ //якщо узагальнення друге
                        if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){ //якщо узагальнення друге
                            if(type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                            else{
                                if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                    if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                    else{
                                        if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                            if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                            else{window.open('../games/The_witcher3.html');} //повний пошук
                                        }
                                        else{("Більшість співпадінь")
                                            window.open('../games/The_witcher3.html');
                                        } //неповний пошук
                                    }
                                }
                                else{("Більшість співпадінь")
                                    window.open('../games/The_witcher3.html');
                                } //неповний пошук
                            }
                        }
                        else{("Більшість співпадінь")
                            window.open('../games/The_witcher3.html');
                        } //неповний пошук
                    }
                    else{alert("Більшість співпадінь");
                    window.open('../games/The_witcher3.html')}
                }
            }    //якщо паркур ... третій
            //window.open('../games/The_witcher3.html');            
            else if( type6=="third" || type6=="plot" ||  type6=="research" || type6=="craft"  || type6=="option" || type6=="avantures"  || type6=="arms" || type6=="magic" || type6=="mods"){
                if( type7=="third" || type7=="plot" ||  type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms" || type7=="magic" || type7=="mods"){
                    if(type7==type6){ alert("Варіанти співпадають");}   
                    else if(type8=="adult"){
                        if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                            if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                            else{
                                if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                    if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                    else{window.open('../games/The_witcher3.html');} //повний пошук
                                }
                                else{alert("Більшість співпадінь");
                                    window.open('../games/The_witcher3.html');
                                } //неповний пошук
                            }
                        }                                       
                        else{alert("Більшість співпадінь");
                            window.open('../games/The_witcher3.html');
                        }
                    } //паркур п'ятий
                    else if(type8=="third" || type8=="plot" ||  type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){
                        if( type9=="adult"){ //якщо узагальнення друге
                            if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                            else{
                                if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                    if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                    else{window.open('../games/The_witcher3.html');} //повний пошук
                                }
                                else{alert("Більшість співпадінь");
                                    window.open('../games/The_witcher3.html');
                                } //неповний пошук
                            }
                        }                                       
                        else{alert("Більшість співпадінь");
                            window.open('../games/The_witcher3.html');
                        }
                    }// паркур шостий
                }
                else if(type7=="adult"){ 
                    if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){ //якщо узагальнення друге
                        if(type8==type7 || type8==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                        else{
                            if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                if(type9==type8 || type8==type7|| type9==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                else{
                                    if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                        if(type10==type9 || type10==type8 ||type10==type7 || type10==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{window.open('../games/The_witcher3.html');} //повний пошук
                                    }
                                    else{window.open('../games/The_witcher3.html');} //неповний пошук
                                }
                            }
                            else{window.open('../games/The_witcher3.html');} //неповний пошук
                        }
                    }
                    else{window.open('../games/The_witcher3.html');} //неповний пошук
                } //якщо паркур четвертий
                else{ alert("Більшість співпадінь");
                window.open('../games/The_witcher3.html')}
            }
            else{ alert("Варіант не найдено");}
                    }
                     else{alert("Варіант не найдено");} 
                }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////
                else if(type4=="first" || type4=="stels" || type4=="dragons"){//готовий скайрім
                        if( type5=="third" || type5=="plot" || type5=="research" || type5=="craft"  || type5=="option" || type5=="avantures"  || type5=="arms" || type5=="magic" || type5=="mods"){ //якщо узагальнення друге
                            if(type5==type4){ alert("Варіанти співпадають");}   
                            else if(type6=="first" || type6=="stels" || type6=="dragons"){// НЕ РУХАТИ/ВОНО ПРАЦЮЄ
                                if(type6==type4 || type6==type5){ alert("Варіанти співпадають");}                   
                                else{
                                    if( type7=="third" || type7=="plot" || type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms" || type7=="magic" || type7=="mods"){ //якщо узагальнення друге
                                        if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){ //якщо узагальнення друге
                                            if(type8==type7 || type8==type6 || type8==type5 || type8==type4){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                            else{
                                                if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                                    if(type9==type8 || type9==type7 || type9==type6 || type9==type5 || type9==type4){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                    else{
                                                        if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                                            if(type10==type9 || type10==type8 ||type10==type7 || type10==type6 || type10==type4 || type10==type5 || type10==type4){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                            else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //повний пошук
                                                        }
                                                        else{("Більшість співпадінь")
                                                            window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                                        } //неповний пошук
                                                    }
                                                }
                                                else{("Більшість співпадінь")
                                                    window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                                } //неповний пошук
                                            }
                                        }
                                        else{("Більшість співпадінь")
                                            window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                        } //неповний пошук
                                    }
                                    else{alert("Більшість співпадінь");
                                    window.open('../games/The_Elder_Scrolls_V_Skyrim.html')}
                                }
                            }    //якщо паркур ... третій           
                            else if( type6=="third" || type6=="plot" ||  type6=="research" || type6=="craft"  || type6=="option" || type6=="avantures"  || type6=="arms" || type6=="magic" || type6=="mods"){
                                if( type7=="third" || type7=="plot" ||  type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms" || type7=="magic" || type7=="mods"){
                                    if(type7==type6){ alert("Варіанти співпадають");}   
                                    else if(type8=="first" || type8=="stels" || type8=="dragons"){
                                        if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                            if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                            else{
                                                if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                                    if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                    else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //повний пошук
                                                }
                                                else{alert("Більшість співпадінь");
                                                    window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                                } //неповний пошук
                                            }
                                        }                                       
                                        else{alert("Більшість співпадінь");
                                            window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                        }
                                    } //паркур п'ятий
                                    else if(type8=="third" || type8=="plot" ||  type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){
                                        if( type9=="first" || type9=="stels" || type9=="dragons"){ //якщо узагальнення друге
                                            if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                            else{
                                                if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                                    if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                    else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //повний пошук
                                                }
                                                else{alert("Більшість співпадінь");
                                                    window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                                } //неповний пошук
                                            }
                                        }                                       
                                        else{alert("Більшість співпадінь");
                                            window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                        }
                                    }// паркур шостий
                                }
                                else if(type7=="first" || type7=="stels" || type7=="dragons"){ 
                                    if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){ //якщо узагальнення друге
                                        if(type8==type7 || type8==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{
                                            if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                                if(type9==type8 || type8==type7|| type9==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                else{
                                                    if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                                        if(type10==type9 || type10==type8 ||type10==type7 || type10==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                        else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //повний пошук
                                                    }
                                                    else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //неповний пошук
                                                }
                                            }
                                            else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //неповний пошук
                                        }
                                    }
                                    else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //неповний пошук
                                } //якщо паркур четвертий
                                else{alert("Більшість співпадінь");
                                window.open('../games/The_Elder_Scrolls_V_Skyrim.html')}
                            }
                            else{ alert("Варіант не найдено");}
                            
                        }
                        else if(type5=="first" || type5=="stels" || type5=="dragons"){//якщо паркур полювання або постапокаліпсис друге
                            if(type5==type4){ alert("Варіанти співпадають");}   
                            else if(type6=="first" || type6=="stels" || type6=="dragons"){// НЕ РУХАТИ/ВОНО ПРАЦЮЄ
                                if(type6==type4 || type6==type5){ alert("Варіанти співпадають");}                   
                                else{
                                    if( type7=="third" || type7=="plot" || type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms" || type7=="magic" || type7=="mods"){ //якщо узагальнення друге
                                        if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){ //якщо узагальнення друге
                                            if(type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                            else{
                                                if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                                    if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                    else{
                                                        if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                                            if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                            else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //повний пошук
                                                        }
                                                        else{("Більшість співпадінь")
                                                            window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                                        } //неповний пошук
                                                    }
                                                }
                                                else{("Більшість співпадінь")
                                                    window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                                } //неповний пошук
                                            }
                                        }
                                        else{("Більшість співпадінь")
                                            window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                        } //неповний пошук
                                    }
                                    else{alert("Більшість співпадінь");
                                    window.open('../games/The_Elder_Scrolls_V_Skyrim.html')}
                                }
                            }    //якщо паркур ... третій
                            //window.open('../games/The_Elder_Scrolls_V_Skyrim.html');            
                            else if( type6=="third" || type6=="plot" ||  type6=="research" || type6=="craft"  || type6=="option" || type6=="avantures"  || type6=="arms" || type6=="magic" || type6=="mods"){
                                if( type7=="third" || type7=="plot" ||  type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms" || type7=="magic" || type7=="mods"){
                                    if(type7==type6){ alert("Варіанти співпадають");}   
                                    else if(type8=="first" || type8=="stels" || type8=="dragons"){
                                        if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                            if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                            else{
                                                if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                                    if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                    else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //повний пошук
                                                }
                                                else{alert("Більшість співпадінь");
                                                    window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                                } //неповний пошук
                                            }
                                        }                                       
                                        else{alert("Більшість співпадінь");
                                            window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                        }
                                    } //паркур п'ятий
                                    else if(type8=="third" || type8=="plot" ||  type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){
                                        if( type9=="first" || type9=="stels" || type9=="dragons"){ //якщо узагальнення друге
                                            if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                            else{
                                                if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                                    if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                    else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //повний пошук
                                                }
                                                else{alert("Більшість співпадінь");
                                                    window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                                } //неповний пошук
                                            }
                                        }                                       
                                        else{alert("Більшість співпадінь");
                                            window.open('../games/The_Elder_Scrolls_V_Skyrim.html');
                                        }
                                    }// паркур шостий
                                }
                                else if(type7=="first" || type7=="stels" || type7=="dragons"){ 
                                    if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms" || type8=="magic" || type8=="mods"){ //якщо узагальнення друге
                                        if(type8==type7 || type8==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{
                                            if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms" || type9=="magic" || type9=="mods"){ //якщо узагальнення друге
                                                if(type9==type8 || type8==type7|| type9==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                else{
                                                    if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms" || type10=="magic" || type10=="mods"){ //якщо узагальнення друге
                                                        if(type10==type9 || type10==type8 ||type10==type7 || type10==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                                        else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //повний пошук
                                                    }
                                                    else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //неповний пошук
                                                }
                                            }
                                            else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //неповний пошук
                                        }
                                    }
                                    else{window.open('../games/The_Elder_Scrolls_V_Skyrim.html');} //неповний пошук
                                } //якщо паркур четвертий
                                else{ alert("Більшість співпадінь");
                                window.open('../games/The_Elder_Scrolls_V_Skyrim.html')}
                            }
                            else{ alert("Варіант не найдено");}
                        }
                        else{alert("Варіант не найдено");} 
                }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////
                else if(type4=="apocalipsis" || type4=="hunting" || type4=="parkour"){//готовий хорайзн
                    if( type5=="third" || type5=="plot" || type5=="research" || type5=="craft"  || type5=="option" || type5=="avantures"  || type5=="arms"){ //якщо узагальнення друге
            if(type5==type4){ alert("Варіанти співпадають");}   
            else if(type6=="apocalipsis" || type6=="hunting" || type6=="parkour"){// НЕ РУХАТИ/ВОНО ПРАЦЮЄ
                if(type6==type4 || type6==type5){ alert("Варіанти співпадають");}                   
                else{
                    if( type7=="third" || type7=="plot" || type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms"){ //якщо узагальнення друге
                        if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms"){ //якщо узагальнення друге
                            if(type8==type7 || type8==type6 || type8==type4 || type8==type5 || type8==type4){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                            else{
                                if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms"){ //якщо узагальнення друге
                                    if(type9==type8 || type9==type7 || type9==type6 || type9==type4 || type9==type5 || type9==type4){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                    else{
                                        if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms"){ //якщо узагальнення друге
                                            if(type10==type9 || type10==type8 ||type10==type7 || type10==type6 || type10==type4 || type10==type5 || type10==type4){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                            else{window.open('../games/Horizon_Zero_Dawn.html');} //повний пошук
                                        }
                                        else{("Більшість співпадінь")
                                            window.open('../games/Horizon_Zero_Dawn.html');
                                        } //неповний пошук
                                    }
                                }
                                else{("Більшість співпадінь")
                                    window.open('../games/Horizon_Zero_Dawn.html');
                                } //неповний пошук
                            }
                        }
                        else{("Більшість співпадінь")
                            window.open('../games/Horizon_Zero_Dawn.html');
                        } //неповний пошук
                    }
                    else{alert("Варіант не найдено");}
                }
            }    //якщо паркур ... третій           
            else if( type6=="third" || type6=="plot" ||  type6=="research" || type6=="craft"  || type6=="option" || type6=="avantures"  || type6=="arms"){
                if( type7=="third" || type7=="plot" ||  type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms"){
                    if(type7==type6){ alert("Варіанти співпадають");}   
                    else if(type8=="apocalipsis" || type8=="hunting" || type8=="parkour"){
                        if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms"){ //якщо узагальнення друге
                            if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                            else{
                                if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms"){ //якщо узагальнення друге
                                    if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                    else{window.open('../games/Horizon_Zero_Dawn.html');} //повний пошук
                                }
                                else{alert("Більшість співпадінь");
                                    window.open('../games/Horizon_Zero_Dawn.html');
                                } //неповний пошук
                            }
                        }                                       
                        else{alert("Більшість співпадінь");
                            window.open('../games/Horizon_Zero_Dawn.html');
                        }
                    } //паркур п'ятий
                    else if(type8=="third" || type8=="plot" ||  type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms"){
                        if( type9=="apocalipsis" || type9=="hunting" || type9=="parkour"){ //якщо узагальнення друге
                            if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                            else{
                                if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms"){ //якщо узагальнення друге
                                    if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                    else{window.open('../games/Horizon_Zero_Dawn.html');} //повний пошук
                                }
                                else{alert("Більшість співпадінь");
                                    window.open('../games/Horizon_Zero_Dawn.html');
                                } //неповний пошук
                            }
                        }                                       
                        else{alert("Більшість співпадінь");
                            window.open('../games/Horizon_Zero_Dawn.html');
                        }
                    }// паркур шостий
                }
                else if(type7=="apocalipsis" || type7=="hunting" || type7=="parkour"){ 
                    if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms"){ //якщо узагальнення друге
                        if(type8==type7 || type8==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                        else{
                            if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms"){ //якщо узагальнення друге
                                if(type9==type8 || type8==type7|| type9==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                else{
                                    if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms"){ //якщо узагальнення друге
                                        if(type10==type9 || type10==type8 ||type10==type7 || type10==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{window.open('../games/Horizon_Zero_Dawn.html');} //повний пошук
                                    }
                                    else{window.open('../games/Horizon_Zero_Dawn.html');} //неповний пошук
                                }
                            }
                            else{window.open('../games/Horizon_Zero_Dawn.html');} //неповний пошук
                        }
                    }
                    else{window.open('../games/Horizon_Zero_Dawn.html');} //неповний пошук
                } //якщо паркур четвертий
                else{ alert("Варіант не найдено");}
            }
            else{ alert("Варіант не найдено");}
            
                    }
                    else if(type5=="apocalipsis" || type5=="hunting" || type5=="parkour"){//якщо паркур полювання або постапокаліпсис друге
            if(type5==type4){ alert("Варіанти співпадають");}   
            else if(type6=="apocalipsis" || type6=="hunting" || type6=="parkour"){// НЕ РУХАТИ/ВОНО ПРАЦЮЄ
                if(type6==type4 || type6==type5){ alert("Варіанти співпадають");}                   
                else{
                    if( type7=="third" || type7=="plot" || type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms"){ //якщо узагальнення друге
                        if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms"){ //якщо узагальнення друге
                            if(type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                            else{
                                if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms"){ //якщо узагальнення друге
                                    if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                    else{
                                        if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms"){ //якщо узагальнення друге
                                            if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                            else{window.open('../games/Horizon_Zero_Dawn.html');} //повний пошук
                                        }
                                        else{("Більшість співпадінь")
                                            window.open('../games/Horizon_Zero_Dawn.html');
                                        } //неповний пошук
                                    }
                                }
                                else{("Більшість співпадінь")
                                    window.open('../games/Horizon_Zero_Dawn.html');
                                } //неповний пошук
                            }
                        }
                        else{("Більшість співпадінь")
                            window.open('../games/Horizon_Zero_Dawn.html');
                        } //неповний пошук
                    }
                    else{alert("Варіант не найдено");}
                }
            }    //якщо паркур ... третій
            //window.open('../games/Horizon_Zero_Dawn.html');            
            else if( type6=="third" || type6=="plot" ||  type6=="research" || type6=="craft"  || type6=="option" || type6=="avantures"  || type6=="arms"){
                if( type7=="third" || type7=="plot" ||  type7=="research" || type7=="craft"  || type7=="option" || type7=="avantures"  || type7=="arms"){
                    if(type7==type6){ alert("Варіанти співпадають");}   
                    else if(type8=="apocalipsis" || type8=="hunting" || type8=="parkour"){
                        if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms"){ //якщо узагальнення друге
                            if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                            else{
                                if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms"){ //якщо узагальнення друге
                                    if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                    else{window.open('../games/Horizon_Zero_Dawn.html');} //повний пошук
                                }
                                else{alert("Більшість співпадінь");
                                    window.open('../games/Horizon_Zero_Dawn.html');
                                } //неповний пошук
                            }
                        }                                       
                        else{alert("Більшість співпадінь");
                            window.open('../games/Horizon_Zero_Dawn.html');
                        }
                    } //паркур п'ятий
                    else if(type8=="third" || type8=="plot" ||  type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms"){
                        if( type9=="apocalipsis" || type9=="hunting" || type9=="parkour"){ //якщо узагальнення друге
                            if(type9==type8 || type8==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                            else{
                                if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms"){ //якщо узагальнення друге
                                    if(type10==type9 || type10==type8 ||type10==type7){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                    else{window.open('../games/Horizon_Zero_Dawn.html');} //повний пошук
                                }
                                else{alert("Більшість співпадінь");
                                    window.open('../games/Horizon_Zero_Dawn.html');
                                } //неповний пошук
                            }
                        }                                       
                        else{alert("Більшість співпадінь");
                            window.open('../games/Horizon_Zero_Dawn.html');
                        }
                    }// паркур шостий
                }
                else if(type7=="apocalipsis" || type7=="hunting" || type7=="parkour"){ 
                    if( type8=="third" || type8=="plot" || type8=="research" || type8=="craft"  || type8=="option" || type8=="avantures"  || type8=="arms"){ //якщо узагальнення друге
                        if(type8==type7 || type8==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                        else{
                            if( type9=="third" || type9=="plot" || type9=="research" || type9=="craft"  || type9=="option" || type9=="avantures"  || type9=="arms"){ //якщо узагальнення друге
                                if(type9==type8 || type8==type7|| type9==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                else{
                                    if( type10=="third" || type10=="plot" || type10=="research" || type10=="craft"  || type10=="option" || type10=="avantures"  || type10=="arms"){ //якщо узагальнення друге
                                        if(type10==type9 || type10==type8 ||type10==type7 || type10==type6){ alert("Варіанти співпадають");} //якщо 7 і 8 узагальнене
                                        else{window.open('../games/Horizon_Zero_Dawn.html');} //повний пошук
                                    }
                                    else{window.open('../games/Horizon_Zero_Dawn.html');} //неповний пошук
                                }
                            }
                            else{window.open('../games/Horizon_Zero_Dawn.html');} //неповний пошук
                        }
                    }
                    else{window.open('../games/Horizon_Zero_Dawn.html');} //неповний пошук
                } //якщо паркур четвертий
                else{ alert("Варіант не найдено");}
            }
            else{ alert("Варіант не найдено");}
                    }
                    else{alert("Варіант не найдено");} 
                }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////
                else{ alert("Виберіть більше варіантів");}
                }
            else{alert("Виберіть більше варіантів");}
            } 
            
        else{alert("Виберіть більше варіантів");}            
        }     
    else if(type1=="coop" || type1=="multi"){
                if(type2=="free"){
                     
                   
                 } 
                 else{alert("Варіант не найдено");}
    }       
    else{alert("Виберіть більше варіантів");}
    }  
else{alert("Даних на даний момент немає");}

}