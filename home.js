console.log ("hello, world")

$(function() {
$("#start-button").on('click', function(event) {
    $("#start").append("Welcome, explore and defeat monsters!");
    $("#star").append("City");
    $("#planet").append("Planet");
});
});

$(function() {
    $('ol li').each(function(index, element) {
        if(index%2==0) {
            $(element).css('color', 'white');
        }
        else{
            $(element).css('color', 'white')
        }
    })
});

$(function() {
    $("#my-button").on('click', function(event) {
        var City= false;
        var End= false
        var string = $("#text-field").val();
        console.log(string);
        if (string=="City") {
            var City= true;
            $("#star").remove();
            $("#planet").remove();
            $("#seven").append("Talk to citizen");
            $("#8").append("Go to ship");
            alert("You arrive at the "+ string);
            alert("Oh no a Monster is attacking!!");
            var Monster1= prompt("what do you do? Attack or Escape") 
            if (Monster1=="Attack") {
                alert("You defeat the monster")

            }
            else {
                alert("You got away")
            }
            if (string=="Talk to citizen") {
                $("#seven").remove();
                var Citizen1= prompt("Hello, can you help me take down Alpha_Monster?")
                 if (Citizen1=="yes") {
                    alert("You helped defeat Alpha_Monster")
                    $("#start").append("<p>Well done! You gained 50XP and saved space from Monster_Invasion</p>")
                    $("#seven").remove();
                    $("#planet").remove();
                }
                else {
                    alert("Alpha_monster started Monster_Invasion")
                    $("#planet").remove();
                }
            };

            if (string=="Go to ship") {
                $("#seven").remove();
                $("#8").remove();
                alert("ship is at 100%")
                alert("returning to ship")
                $("#five").append("Planet");
                if (City= true) {
                    $("#five").append("Planet");
                }
                else {
                    $("#five").append("City")
                }
            }
        };
        if (string=="Planet") {
            var City= false;
            alert("You arrive at the "+ string);
            alert("Oh no a Monster is attacking!!");
            var Monster1= prompt("what do you do? Attack or Escape") 
            if (Monster1=="Attack") {
                alert("You defeat the monster")
                $("#star").remove();
                $("#planet").remove();

            }
            else {
                alert("You got away")
                $("#star").remove();
                $("#planet").remove();
            }
            $("#four").append("Talk to citizen");
            $("#play").append("Go to ship");
        };
            if (string=="Talk to citizen") {
                $("#seven").remove();
            var Citizen1= prompt("Hello, can you help me take down Alpha_Monster_2?")
            if (Citizen1=="yes") {
                alert("You helped defeat Alpha_Monster")
                $("#start").append("<p>Well done! You gained +50XP and saved the world from Monster_Invasion</p>")
                $("#play").remove();
                $("#planet").remove();
                }
                else {
                alert("Alpha_monster started Monster_Invasion")
                $("#play").remove();
                $("#planet").remove();
                }
            };
            if (string=="Go to ship") {
                alert("ship is at 100%")
                alert("returning to ship")
                if (City= true) {
                    $("#five").append("Planet");
                }
                else {
                    $("#five").append("City")
                }
            }
});
});


