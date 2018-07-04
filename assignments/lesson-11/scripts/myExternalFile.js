$(function () {
			// All jQuery code goes here
            
            // alert("Hello jQuery!!");
            
            $('#alcoveLogo').css('opacity', 0.4);
            
            $('.servicesBtn').css('color', '#FFF');
            
            // $('button').css('border', '1px solid red');
            
            // $('h2').css('border', '1px solid red');
            
            // $('input[name="nameVal"]').css('border', '1px solid red');
            
            // $('input[name!="phoneNum"]').css('border', '1px solid red');
            
            // $('input[name$="Val"]').css('border', '1px solid red');
            
            // $('li:first').css('background-color', 'rgb(248, 95, 95)');
            
            // $('li:last').css('background-color', 'rgb(248, 95, 95)');
            
            // $('li:odd').css('background-color', 'rgb(248, 95, 95)');
            
            // $('li:even').css('background-color', 'rgb(248, 95, 95)');
            
            // $('li:eq(3)').css('background-color', 'rgb(248, 95, 95)');
            
            // $('li:first-of-type').css('background-color', 'rgb(248, 95, 95)');
            
            // $('li:only-of-type').css('background-color', 'rgb(248, 95, 95)');
            
            // $('li:contains("Catalog")').css('background-color', 'rgb(248, 95, 95)');
            
            // $('li:empty').css('background-color', 'rgb(248, 95, 95)');
            
            // $('li:has("a")').css('background-color', 'rgb(248, 95, 95)');
            
            // $('li:nth-child(3)').css('background-color', 'rgb(248, 95, 95)');
            
            // $("#alcoveLogo").next().css('background-color', 'rgba(255, 0, 0, 0.2)');
            
            // $(".box1").nextAll().css('background-color', 'rgba(255, 0, 0, 0.2)');
            
            //$('.header').children().css('background-color', 'rgba(255, 0, 0, 0.2)');
            
            // $(".navigation > li:eq(2)").parent().css('opacity', '0.3');
            
            // $(".navigation > li:eq(2)").parent().parent().parent().css('opacity', '0.3');
            
            // $('.servicesBtn').closest('div').css('background-color', 'rgb(248, 95, 95)');
            
            
            // console.log ($('input[type="text"]').css('background-color'));
            
            
            var toggleStyle = (function() {
                
                var inputFields = $('input[type="text"]');
                    
                if (inputFields.css('background-color') === 'rgb(255, 0, 0)') {
                    // Set background color to white
                    inputFields.css('background-color', 'rgb(255, 255, 255)');         
                } else {
                    // set background color to red
                    inputFields.css('background-color', 'rgb(255, 0, 0)');
                }
            });
            
             $('#ReqAQuoteBtn').click(toggleStyle); 
            
            // $('.coreValues').append("<li><strong>This is brand new !!</strong></li>");
            
            // $("<li><strong>This is also great !!</strong></li>").appendTo('.coreValues');
            
            $('.coreValues').prepend("<li><strong>This is brand new !!</strong></li>");
            
            $("<li><strong>This is also great !!</strong></li>").prependTo('.coreValues');
            
            var nameVal = $('input[name="nameVal"]');
            
            function FillEmpty(){
                if (nameVal.val() === ''){
                    nameVal.val('John Doe');                    
                }
            };
            
            $('#ReqAQuoteBtn').click(FillEmpty); 
     
    //  Code for animatedMenuBegin
            
     $('.navigation > li').hover(function(){
            //This executes on hover
            $(this).addClass('openSesame');
        }, function(){
           //This executes when mouse leaves
            $(this).removeClass('openSesame');
        });
    
    //  Code for DropDownMenuBegin 
    
        
       /* $('.dropdownMenu > li').hover ( function(){
            // Mouseover            
            $(this).children("ul").slideDown(200);
        }, function() {
            // Mouseout
            $(this).children("ul").slideUp(200);
        }); */
        
        $('.dropdownMenu > li').hover ( function(){
            // Mouseover            
            $(this).children("ul").slideToggle(200);
        });
    
    
    //  Code for fruitBasketBegin
    
    var fruitBasket = [	{title:'Apples', quantity:20},
							{title:'Oranges', quantity:25},
							{title:'Kiwis', quantity:50},
							{title:'Strawberries', quantity:45},
							{title:'Bananas', quantity:10},
							{title:'Mangoes', quantity:5},
							{title:'Tomatoes', quantity:30} ];

		// Your jQuery code goes here
        $.each(fruitBasket, function(index, element){
            $('.fruits').append('<li>We have ' + element.quantity + " " + element.title + '</li>');
        })
        
        
        $('.fruits > li').each(function(index, element){
            $(element).css('background-color','rgb(100,200,0)')
        });
    
    //  Code for insertHTMLBegin
    
    $(function(){
            var box1 = $('.box1');
            var box2 = $('.box2');
            
            function LeftToRight(){
             if(box2.html() == ''){
                 // Get content from box1 and put it into box2
                 // Empty out box 1
                 box2.html(box1.html());
                 box1.html('');
             }
            }
            
            $('#LeftToRight').click(LeftToRight);
            
            function RightToLeft(){
                if(box1.html() == ''){
                    //Get content from box2 and put it into box1
                    //Empty out box2
                    box1.html(box2.html());
                    box2.html('');
                }                
            }
            
            $('#RightToLeft').click(RightToLeft);
            
        })
    
    //  Code for toggleButtonBegin
    
        $('.toggleBtn').click( function(){
        $(this).toggleClass("toggleOn"); 
            });
    
            
})       