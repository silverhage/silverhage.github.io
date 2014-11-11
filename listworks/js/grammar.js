// List of grammar points from Google Docs via API

$(document).ready(function() {	
	$(function listGrammar() {	
	$.getJSON( "https://spreadsheets.google.com/feeds/list/1DXI_J2wn7C3mDRGSWwh5lJZ0rdAArYfX30jPGm-A_Fo/od6/public/values?alt=json-in-script&callback=?",
		function (data) {	
			$.each(data.feed.entry, function(i,entry) {	
				var grammar = entry.gsx$grammar.$t;
				var explanation = entry.gsx$explanation.$t;
				var requires = entry.gsx$requires.$t;
				var example1 = entry.gsx$example1.$t;
				var example2 = entry.gsx$example2.$t;
				var example3 = entry.gsx$example3.$t;
				var notes = entry.gsx$notes.$t;

				$('div.row').append('<div class="col-xs-12"><button type="button" class="btn" data-toggle="collapse" data-parent="#accordion" data-target="#' + grammar + '"><div><span class="grammar">' + grammar + '</span><span class="buttonsample">' + example1 + '</span><span class="explanation">' + explanation + '</span></div></button><div id="' + grammar + '" class="clearfix collapse collapsed">' + (notes.length != 0 ? '<small>Notes</small><div class="notes">' + notes + '</div>' : '') + '<small>Requires</small><h4>' + requires + '</h4><small>Sample sentences</small><div class="sample"><span class="glyphicon glyphicon-chevron-right"></span><mark>' + example1 + '</mark></div><div class="sample"><span class="glyphicon glyphicon-chevron-right"></span><mark>' + example2 + '</mark></div><div class="sample3"><span class="glyphicon glyphicon-chevron-right"></span><mark>' + example3 + '</mark></div></div></div>');
				
				// Hides empty examples
				if (example3.length === 0) {
					$(".mark", ).addClass("hidden");
				}




				// List.js for filtering
				var monkeyList = new List('points', { 
  					valueNames: ['grammar', 'explanation'], 
 					plugins: [ ListFuzzySearch() ] 
				});
				var options = {
					    indexAsync: true
				};
			});
			});
		});

	// toggleclass this btn.focus myel ==this
	$(".btn").click(function() {
	  console.log('click');
	  //$( this ).toggleClass("focus");

	});

	// Scroll thingy
	$(function () {
		$("#accordion").on("shown.bs.collapse", function () {
		    var myEl = $(this).find('.in');

		    $('html, body').animate({
		        scrollTop: $(myEl).offset().top -124
		    }, 300, 'swing');
		});
	});

	});



// Clear Search

$("#search-clear").click(function(){
    $("#search-input").val('');
});