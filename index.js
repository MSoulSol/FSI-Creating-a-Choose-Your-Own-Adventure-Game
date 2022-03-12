window.prompt('Do you head left or right?')
       
       let firstAnswer  = window.prompt ('Do you head left or right?')
       if(firstAnswer === 'left'){
           let secondAnswer = window.prompt (`You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. 
       Do you follow it, or continue on your path?`)}

       else if(firstAnswer === 'right') {
           let sixthAnswer = window.prompt (`You come across a snoring dragon. 
       On the other side of him, you see a shiny chest of treasure. Another path would 
       lead you away from the dragon altogether. Which path do you take?`)}
        
       // here, there should a temporary break after the introductory, to allow us to advance into the cat narrative plotline. I am stuck here. 

       if (secondAnswer === 'follow') {
        let thirdAnswer = window.prompt (`You follow the cat to a colony of cats, nestled in a fort of warm blankets 
        and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should 
        alert the world to this magical safe haven. Do you remain silent, or spread
        the word about this place?`) }

        if (thirdAnswer === 'remain silent'){
            let fourthAnswer = window.prompt (`You live happily amongst the cats for the rest of your days.`)}

        else if(thirdAnswer === 'spread the word'){ 
            let fourthAnswer = window.prompt (`After leaving the cat colony, you are never able to find it again; without 
            proof, no one believes your story, which passes into legend nonetheless. You continue on your journey. You come across 
            a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but 
            rickety-looking ladder that leads up toward the light. Which do you take?`) 
            }

        if (fourthAnswer === 'ladder'){
            let fifthAnswer = window.prompt (`After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall 
            through each of the rungs below. Sheepish, you return home.`)
            }

        else if(fourthAnswer === `staircase`){
            let fifthAnswer = window.prompt (`After ascending the staircase, you discover a shiny blue stone, 
            which you take home and cherish forever.`)}

            //here, there should a break in the narrative plotline to allow for the dragon plotline to start. I am stuck here. 

        if (sixthAnswer === `past the dragon`) {
            let seventhAnswer = window.prompt (`The dragon wakes up and sits upright. You only have a moment to respond, to stay 
            or run:`)} 


        else if(sixthAnswer === 'away') {
            let seventhAnswer = window.prompt (`After walking a while longer, you come across a shiny blue flower. It is so beautiful
             that you decide you must either draw it or pick it. Which do you do?`)
            }        
            
            /* there is a set of 3 splits in the main branch of the dragon narrative plotline. The first split 
                occurs as "if (past the dragon)" and "else if (away)"; this is followed by two simultaneous splits:
                one underneath the "if(past the dragon)" -----> "if (stay)" and "else if (run)"; and one underneath 
                "else if (away)" -----> "if (draw flowers)" and "else if ("pick"). I am stuck also here. 

                                                               MY DECISION-CHART DIAGRAM TO VISUALIZE PATHS
                
                                                                main common plot narrative (turn "right") 
                                                               I                                         I
                                                               I                                         I   
                                                        if (past)                                       else if (away)
                                                           I                                                  I  
                                                 --------------------                           ----------------------------------
                                                I                    I                          I                                I   
                                                if (stay)         else if (run)               if (draw)                    else if (pick)  
                                                                                                                                                */ 
                
          
         /* I am stuck in the zones as described by these statements. The code doesn't execute, beyond answering the first question 
            prompt with a "left" ("right" does nothing but cause the dialog box to disappear). Also, I have to enter "left" twice
            to get that first prompt to trigger the second question/scenerio prompt. */           

        
      
            
        
            
        