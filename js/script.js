// Nadia Bkayleh - 100902231
// Dead Romance - Postcard
// Thurs.Oct.5.2023

window.onload = function() {

    // reference the objects content - svg file
    const theSVG = document.getElementById('obj').contentDocument;

    // reference all the objects in use from  content svg file
    let theText = theSVG.getElementById('text');
    let theBride = theSVG.getElementById('bride');
    let theCover = theSVG.getElementById('gravecover');
    let thestationStars = theSVG.getElementById('stationstars');
    let theStars = theSVG.getElementById('starspace');
    let theBranches = theSVG.getElementById('movebranch');
    let theGroom = theSVG.getElementById('groom');
    let theVeil = theSVG.getElementById('veil');
    let theRose = theSVG.getElementById('handstyyling');
    let theGhosty = theSVG.getElementById('ghosty');
    let theHearts = theSVG.getElementById('hearts');
    let theSpecs = theSVG.getElementById('dressdeats')
    let thebgSpecs = theSVG.getElementById('bddress2')
    let thebSpecs = theSVG.getElementById('dressbody')

    // reference the paths
    let thePath1 = theSVG.getElementById('path01');
    let thePath3 = theSVG.getElementById('path03');

    // register the plugin for motion path
    gsap.registerPlugin(MotionPathPlugin);

    // set up timelines
    let tlStars = gsap.timeline();
    let tlBranch = gsap.timeline();
    let tlText = gsap.timeline();
    let tlGhost = gsap.timeline();
    let tlgraveCover = gsap.timeline();
    let tlHearts = gsap.timeline();
    let tlgroomRaise = gsap.timeline();
    let tlHandy = gsap.timeline({repeat:100});
    let tlVeil = gsap.timeline();
    let tlnewVeil = gsap.timeline();
    let tldressStyle = gsap.timeline();
    let tldressStyling = gsap.timeline();
    let tldressBody = gsap.timeline();

// animate initial background animations
    // animate the background stars

    tlStars.to(theStars, 
            {
            transformOrigin: 'center',
            scale: (.1, 1),
            duration: 1,
            repeat: -1,
            opacity: (0),
            yoyo: true
            });
            

    tlStars.to(thestationStars, 
            {
            transformOrigin: 'center',
            scale: (.1, 1),
            duration: 1,
            repeat: -1,
            opacity: (0),
            yoyo: true
            });

    // animate the branches 

    tlBranch.fromTo(theBranches,{
            x: 3,
            }, {
            x : 0,
            yoyo:true,
            duration: 2,
            repeatRefresh: true,
            rotate: (.2, .9), 
            duration: 4, 
            repeat: -1,    
            ease: "back.in"
            }); 

// animating elements into place
    // animate the text in

    tlText.fromTo(theText,{
        x: -800,
        }, 
        {
        x : 0,
        duration: 4,
        ease: Circ.easeOut,
        opacity: (0,1)
        },8); 

    // animate shooting star stroke

    // reference the path
        let theShooting = theSVG.querySelectorAll('.strokeStyle');
    
    // form the array using gsap utils
        let starArray = gsap.utils.toArray(theShooting);

    // setup stroke timeline
        let tl = gsap.timeline();

    // animate the strokeDashoffset
        starArray.forEach(letter => {

        // calculate the length
        const tLength = letter.getTotalLength();

        // perform the animation
        tl.fromTo(letter,{
            strokeDasharray: tLength,
            strokeDashoffset: tLength
        },
        {
            strokeDashoffset: 0,
            duration:5,
        },9)
        })
    
// bride entrance
    // set up timeline for bride moving in
        let tlBride = gsap.timeline();

    // setup proper orientation of bride
    // bride - set to the center
        gsap.set([theBride],
            {
            xPercent: -45,
            yPercent: -80,
            })

    tlBride.to(theBride,
            {
                motionPath: {
                    path: thePath3
                },
                duration: 8,
                opacity:(1,0) 
            })   
        
    // reverse bride from right to left
    tlBride.reverse(0);

// click event -- grave heart engraving and moving the cover 
        let theStrokers = theSVG.querySelectorAll('.heartStyle');

        // reference all the strokes
        let heartArray = gsap.utils.toArray(theStrokers);
    
        // reference the button
        let theButton = theSVG.getElementById('heart');
    
        // setup timelines 
        let tlHeart = gsap.timeline({paused:true});
    
        // set up animation 
        heartArray.forEach(s => {
        
        // set up colours for heart 
        let colours = gsap.utils.random(['pink', 'gray', 'pink', 'gray'], true)
        let colourSet = gsap.utils.wrap (['pink', 'gray', 'pink']);
            
        // calculate the total length
        const tLength = Math.ceil(s.getTotalLength());

            // heart stroke animation sequence
        tlHeart.fromTo(s,
                { 
                    stroke: colourSet,
                    scale: 1, 
                    opacity:1,
                    strokeDashoffset: 10,
                    duration: 10,
                    strokeWidth: 'random([7])', 
                },
                {
                    strokeWidth: 'random([1])',
                    scale: 0,
                    opacity: 0,
                    strokeDasharray: tLength,
                    strokeDashoffset: tLength,
                    duration: 14,
                    yoyo: true
                })
        });
    
        // set up for toggle
        tlHeart.reverse(false); 
    
        //  initiate a click event for grave cover
        theButton.addEventListener('click', ()=>{
            
            tlgraveCover.play(); 
            // tl.restart();
    });


// raising the groom from the grave

        //  initiate a click event for groom raising from dead
        theButton.addEventListener('click', ()=>{
            
            tlgroomRaise.play(); 

            // tl.restart();

        // plays animation 
        tlgroomRaise.fromTo(theGroom,
            {
            y: 70
            }, {
            y: -70,
            duration: 3
            }
            ) 
    });

    // reverse groom direction
    //tlgroomRaise.reverse(0);//

// uncovering grave

    // setup proper orientation of grave cover
    // grave - set to the location
        gsap.set([theCover],
            {
            xPercent: -45,
            yPercent: -45,
            })

    tlgraveCover.to(theCover,
            {
                motionPath: {
                    path: thePath1,
                    offsetX:10,
                    ease: Power2.easeOuteaseOut, 
                },
            })   
        
    // reverse grave direction
    tlgraveCover.reverse(0);//

    // pausing grave cover until activated by
    // tlgraveCover.pause();//

// change styling of stroke on the clickable handy

let theStroker = theSVG.querySelectorAll('.handyStyle');

// reference all the strokes
let handyArray = gsap.utils.toArray(theStroker);

// set up animation 
handyArray.forEach(s => {

// set up colours
let colours = gsap.utils.random(['pink', 'gray', 'pink', 'gray'], true)
let colourSet = gsap.utils.wrap (['gold', 'black', 'gold']);
    
// calculate the total length
const tLength = Math.ceil(s.getTotalLength());

    //animation sequence
tlHandy.fromTo(s,
        { 
            stroke: colourSet,
            scale: 1,
            strokeDashoffset: 10,
            strokeWidth: 'random([2])',
            opacity: 1,
            duration: 3
        },
        {
            scale: .99,
            strokeWidth: 'random([1.5])',
            strokeDasharray: tLength,
            strokeDashoffset: tLength,
            opacity: 0,
            ease: Power2.easeOuteaseOut, 
            duration: 3
        })

        tlHandy.fromTo(theRose,
            {
                x: 2,
                opacity: 0
            },
            {
                opacity: 1
            })
});

// set up for toggle
tlHandy.reverse(false); 

// clicking the rose and revealing the ghosty
        // reference the button
        let theButtons = theSVG.getElementById('handstyyling');

        //  initiate a click event for ghost appearing from rose
        theButtons.addEventListener('click', ()=>{
            
        tlGhost.play(); 
        // tl.restart();

        // plays animation 
        tlGhost.fromTo(theGhosty,
            {
                duration: 2,
                opacity: 0,
                scale: 0
            }, {
                duration: 2,
                ease: Circ.easeOut,
                opacity: 1,
                scale: 1,
            }
            ) 

        tlGhost.to(theGhosty,
            {
                opacity: 0
            })
    });
    
    // reverse ghost direction
    tlGhost.reverse(0);//


    // clicking the rose and revealing the kisses
        //  initiate a click event for hearts appearing 
        theButtons.addEventListener('click', ()=>{
            
            tlHearts.play(); 
            // tl.restart();

        // plays animation 
        tlHearts.fromTo(theHearts,
            {
                duration: 2,
                opacity: 0,
                scale: 0,
                ease: Elastic
            }, {
                duration: 5,
                opacity: 1,
                scale: 1,
                scale: 'random(1, 1.1)',
                ease: Elastic
            }
            ) 
        
        tlHearts.to(theHearts,
            {
                opacity: 0
            })
    
        // shaking the veil for removal
            tlnewVeil.fromTo(theVeil,
                {
                    x:"+=5", 
                    y:"+=2",
                    yoyo:true, 
                    repeat:-1,
                    duration: 3
                },
                {
                    x:"-=3", 
                    y:"-=2",
                    yoyo:true, 
                    repeat:3
                })
            
            // reference the button
                let theUnveil = theSVG.getElementById('veil');

            // activate the button to remove the veil
                theUnveil.addEventListener('click', ()=>{
            
                    tlnewVeil.play(); 
                    // tl.restart();

                tlnewVeil.fromTo(theVeil,
                    {
                        duration: 4,
                        opacity: 1,
                        scale: .99,
                        rotation:90, 
                        x:0
                    }, {
                        x: 1000,
                        duration: 4,
                        opacity: 0,
                        scale: 1,
                        rotation: 180,
                        scale: 'random(1, 1.)',
                    })
        
                // plays animation 
                tlHearts.fromTo(theHearts,
                    {
                        duration: 2,
                        opacity: 0,
                        scale: 0,
                        ease: Elastic
                    }, {
                        duration: 5,
                        opacity: 1,
                        scale: 1,
                        scale: 'random(1, 1.1)',
                        ease: Elastic
                    }
                    ) 
    });
    
    // reverse hearts direction
    tlHearts.reverse(0);

// removing the veil from the bride

    tlVeil.fromTo(theVeil,
        {
            x:"+=6", 
            y:"+=3",
            yoyo:true, 
            repeat:-1,
            duration: 5
        },
        {
            x:"-=6", 
            y:"-=3",
            yoyo:true, 
            repeat:20
        })
    })

// extra assets and motion
    // dress detail animations 
        tldressStyle.fromTo(theSpecs,
            {
                x:"+=8", 
                yoyo:true, 
                repeat:-1,
                duration: 3
            },
            {
                x:"-=8", 
                yoyo:true, 
                repeat:16
            })
    //
        tldressStyling.fromTo(thebgSpecs,
            {
                x:"+=6", 
                yoyo:true, 
                repeat:-1,
                duration: 3
            },
            {
                x:"-=6", 
                yoyo:true, 
                repeat:16
            })
    //
        tldressBody.fromTo(thebSpecs,
            {
                x:"-=6", 
                yoyo:true, 
                repeat:-1,
                duration: 3
            },
            {
                x:"+=6", 
                yoyo:true, 
                repeat:16
            })

// the end //

}