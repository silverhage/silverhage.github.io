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
				if (example3.length === 0) {
					$(".mark", this).addClass("hidden");
				}
				var notes = entry.gsx$notes.$t;
				$('div.row').append('<div class="col-xs-12"><button type="button" class="btn" data-toggle="collapse" data-target="#' + grammar + '">' + grammar + '<span class="explanation">' + explanation + '</span></button><div id="' + grammar + '" class="collapse collapsed"><p><small>Requires</small></p><p><h4>' + requires + '</h4></p><p><small>Sample sentences</small></p><div class="sample"><p><span class="glyphicon glyphicon-chevron-right"></span><mark>' + example1 + '</mark></p></div><div class="sample"><p><span class="glyphicon glyphicon-chevron-right"></span><mark>' + example2 + '</mark></p></div><div class="sample3"><p><span class="glyphicon glyphicon-chevron-right"></span><mark>' + example3 + '</mark></p></div><p><small>Notes</small></p><p><span class="notes">' + notes + '</span></p></div></div>');

			});
			});
		});
	});