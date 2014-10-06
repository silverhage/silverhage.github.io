	$(document).ready(function() {	
	$(function listGrammar() {	
	$.getJSON( "https://spreadsheets.google.com/feeds/list/1DXI_J2wn7C3mDRGSWwh5lJZ0rdAArYfX30jPGm-A_Fo/od6/public/values?alt=json-in-script&callback=?",
		function (data) {	
			$.each(data.feed.entry, function(i,entry) {	
				var grammar = entry.gsx$grammar.$t;
				var explanation1 = entry.gsx$explanation1.$t;
				var requires1 = entry.gsx$requires1.$t;
				var sample1a = entry.gsx$sample1a.$t;
				var sample1b = entry.gsx$sample1b.$t;
				var notes1 = entry.gsx$notes1.$t;
				var explanation2 = entry.gsx$explanation2.$t;
				var requires2 = entry.gsx$requires2.$t;
				var sample2a = entry.gsx$sample2a.$t;
				var sample2b = entry.gsx$sample2b.$t;
				var notes2 = entry.gsx$notes2.$t;
				$('div.row').append('<div class="col-xs-12"><button type="button" class="btn" data-toggle="collapse" data-target="#' + grammar + '">' + grammar + '<span class="explanation">' + explanation1 + '</span></button><div id="' + grammar + '" class="collapse collapsed"><p><small>Requires</small></p><p><h4>' + requires1 + '</h4></p><p><small>Sample sentences</small></p><p><mark>' + sample1a + '</mark></p><p><mark>' + sample1b + '</mark></p><p><small>' + notes1 + '</small></p></div></div>');

				});
			});
		});
	});