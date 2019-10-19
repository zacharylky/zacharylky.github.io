console.log("active");

$(() => {

    $('form').submit(function(event){
        event.preventDefault(); //stop default refresh
        //create an object storing all the raw answers in the radio buttons
        const answers = {
            //answers to the questions
            q1:parseInt($("input[name='q1']:checked").val()),
            q2:parseInt($("input[name='q2']:checked").val()),
            q3:parseInt($("input[name='q3']:checked").val()),
            q4:parseInt($("input[name='q4']:checked").val()),
            q5:parseInt(11 - $("input[name='q5']:checked").val()),
            q6:parseInt($("input[name='q6']:checked").val()),
            q7:parseInt($("input[name='q7']:checked").val()),
            q8:parseInt($("input[name='q8']:checked").val()),
            q9:parseInt($("input[name='q9']:checked").val()),
            q10:parseInt($("input[name='q10']:checked").val()),
            q11:parseInt($("input[name='q11']:checked").val()),
            q12:parseInt($("input[name='q12']:checked").val()),
            q13:parseInt($("input[name='q13']:checked").val()),
            q14:parseInt(11 - $("input[name='q14']:checked").val()),
            q15:parseInt($("input[name='q15']:checked").val()),
            q16:parseInt($("input[name='q16']:checked").val()),
            q17:parseInt($("input[name='q17']:checked").val()),
            q18:parseInt(11 - $("input[name='q18']:checked").val()),
            q19:parseInt($("input[name='q19']:checked").val()),
            q20:parseInt($("input[name='q20']:checked").val()),
            q21:parseInt(11 - $("input[name='q21']:checked").val()),
            q22:parseInt($("input[name='q22']:checked").val()),
            q23:parseInt($("input[name='q23']:checked").val()),
            q24:parseInt($("input[name='q24']:checked").val()),
            q25:parseInt($("input[name='q25']:checked").val()),
            q26:parseInt($("input[name='q26']:checked").val()),
            q27:parseInt($("input[name='q27']:checked").val()),
            q28:parseInt(11 - $("input[name='q28']:checked").val()),
            q29:parseInt(11 - $("input[name='q29']:checked").val()),
            q30:parseInt($("input[name='q30']:checked").val()),
            q31:parseInt($("input[name='q31']:checked").val()),
            q32:parseInt($("input[name='q32']:checked").val()),
            q33:parseInt(11 - $("input[name='q33']:checked").val()),
            q34:parseInt($("input[name='q34']:checked").val()),
            q35:parseInt($("input[name='q35']:checked").val()),
            q36:parseInt($("input[name='q36']:checked").val()),
            q37:parseInt(11 - $("input[name='q37']:checked").val()),
            q38:parseInt(11 - $("input[name='q38']:checked").val()),
            q39:parseInt($("input[name='q39']:checked").val()),
            q40:parseInt($("input[name='q40']:checked").val()),
            q41:parseInt($("input[name='q41']:checked").val()),
            q42:parseInt($("input[name='q42']:checked").val()),
            q43:parseInt($("input[name='q43']:checked").val()),
            q44:parseInt($("input[name='q44']:checked").val()),
            q45:parseInt($("input[name='q45']:checked").val()),
            q46:parseInt($("input[name='q46']:checked").val()),
            q47:parseInt($("input[name='q47']:checked").val()),
            q48:parseInt($("input[name='q48']:checked").val()),
            q49:parseInt($("input[name='q49']:checked").val()),
            q50:parseInt(11 - $("input[name='q50']:checked").val()),
            q51:parseInt($("input[name='q51']:checked").val()),
            q52:parseInt($("input[name='q52']:checked").val()),
            q53:parseInt($("input[name='q53']:checked").val()),
            q54:parseInt($("input[name='q54']:checked").val()),
            q55:parseInt($("input[name='q55']:checked").val()),
            q56:parseInt($("input[name='q56']:checked").val()),
            q57:parseInt($("input[name='q57']:checked").val()),
            q58:parseInt($("input[name='q58']:checked").val()),
            q59:parseInt($("input[name='q59']:checked").val()),
            q60:parseInt($("input[name='q60']:checked").val()),
            q61:parseInt($("input[name='q61']:checked").val()),
            q62:parseInt($("input[name='q62']:checked").val()),
            q63:parseInt($("input[name='q63']:checked").val()),
            q64:parseInt($("input[name='q64']:checked").val()),
            q65:parseInt($("input[name='q65']:checked").val()),
            q66:parseInt(11 - $("input[name='q66']:checked").val()),
            q67:parseInt($("input[name='q67']:checked").val()),
            q68:parseInt($("input[name='q68']:checked").val()),
            q69:parseInt($("input[name='q69']:checked").val()),
            q70:parseInt($("input[name='q70']:checked").val()),
            q71:parseInt($("input[name='q71']:checked").val()),
            q72:parseInt($("input[name='q72']:checked").val()),
            q73:parseInt(11 - $("input[name='q73']:checked").val()),
            q74:parseInt(11 - $("input[name='q74']:checked").val()),
            q75:parseInt($("input[name='q75']:checked").val()),

            //User details
            name:$("input[id='usr']").val(),
            email:$("input[id='email']").val()
        }
        console.log(answers);
        //calculate individual trait scores
        let achievement = (answers.q1 + answers.q3 + answers.q7 + answers.q9 + answers.q11 + answers.q20 + answers.q23 + answers.q24 + answers.q26 + answers.q27 + answers.q30 + answers.q31 + answers.q34 + answers.q35 + answers.q40 + answers.q44 + answers.q48 + answers.q57 + answers.q59 + answers.q61 + answers.q65 + answers.q67 + answers.q70)/23;

        let innovation = (answers.q2 + answers.q6 + answers.q13 + answers.q17 + answers.q19 + answers.q32 + answers.q38 + answers.q39 + answers.q41 + answers.q43 + answers.q46 + answers.q49 + answers.q52 + answers.q54 + answers.q56 + answers.q58 + answers.q62 + answers.q63 + answers.q66 + answers.q68 + answers.q69 + answers.q71 + answers.q72 + answers.q73 + answers.q74 + answers.q75)/26;

        let personalControl = (answers.q4 + answers.q8 + answers.q10 + answers.q15 + answers.q36 + answers.q37 + answers.q42 + answers.q45 + answers.q47 + answers.q51 + answers.q60 + answers.q64)/12;

        let selfEsteem = (answers.q5 + answers.q12 + answers.q14 + answers.q16 + answers.q18 + answers.q21 + answers.q22 + answers.q25 + answers.q28 + answers.q29 + answers.q33 + answers.q50 + answers.q53 + answers.q55)/14
        console.log(achievement);
        console.log(innovation);
        console.log(personalControl);
        console.log(selfEsteem);
        //remove everything in row div
        $('.survey').remove()

        //create a new div with col-12 and add a paragraph with some info inside, and append it to the fresh page
        const $div = $('<div>');
        $div.addClass('col-12 text-center');
        const $p = $('<p>');
        $p.text("This is your EAO score, and how it measures up to historical data of other people who are entrepreneurs and non-entrepreneurs.")
        //create a canvas for the chart to be added into the page
        const $canvas = $('<canvas>');
        $canvas.attr({id:'myChart',width:1600,height:900});
        $('.row').append($div);
        $div.append($p);
        $div.append($canvas);

        //create a print button and append it
        const $button = $('<button>');
        $button.text('Print This Page');
        $button.addClass('btn btn-primary');
        $button.attr('onclick','window.print()');
        $div.append($button);

        // Our labels along the x-axis
        var traits = ['Achievement','Innovation','Personal Control','Self Esteem'];
        // For drawing the lines
        var entrepreneur = [7.278,6.639,6.583,7.06];
        var nonEntrepreneur = [6.457,5.293,5.244,6.274];
        var you = [achievement,innovation,personalControl,selfEsteem];

        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: traits,
                datasets: [{ 
                    data: entrepreneur,
                    label: "Entrepreneur",
                    borderColor: "red",
                    fill: false
                    
                },
                { 
                    data: nonEntrepreneur,
                    label: "Non-Entrepreneur",
                    borderColor: "green",
                    fill: false
                },
                { 
                    data: you,
                    label: "You",
                    borderColor: "blue",
                    fill: false
                },]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 10
                        }
                    }]
                }
            }
        });
    })
})