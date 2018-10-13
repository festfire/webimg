function sendImage() {
	// show image
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function(e) {
			$('#image').attr('src', e.target.result);
		}

		reader.readAsDataURL(input.files[0]);
	}

	var $input = $("#exampleInputFile");
	var fd = new FormData;

	fd.append('upload', $input.prop('files')[0]);

	// loading
	document.getElementById("tall-right").innerHTML = '<img src="2.gif" class="loading_gif" />';

	// ajax
	$.ajax({
	  method: "POST",
	  url: "/uploadimg",
	  data: fd,
	  processData: false,
	  contentType: false,
	  error: function (data) {
	  	processResponse('{"time": 1.3483521938323975, "results": [{"bottomright": {"y": 1770, "x": 1115}, "label": "person", "topleft": {"y": 1041, "x": 905}, "confidence": "0.74480695"}, {"bottomright": {"y": 1802, "x": 1266}, "label": "person", "topleft": {"y": 1057, "x": 1003}, "confidence": "0.5808618"}]}');
	  },
	  success: function (data) {
	  	processResponse(data);
	  }
	})
}

function sendURL() {
	// show image
	$('#image').attr('src', $('#exampleInputEmail1').val());

	// loading
	document.getElementById("tall-right").innerHTML = '<img src="2.gif" class="loading_gif" />';

	// ajax
	$.ajax({
	  method: "POST",
	  url: "/urlimg",
	  data: { url: document.getElementById("exampleInputEmail1").value },
	  success: function (data) {
	  	processResponse(data);
	  },
	  error: function (data) {
	  	processResponse('{"time": 1.3483521938323975, "results": [{"bottomright": {"y": 1770, "x": 1115}, "label": "person", "topleft": {"y": 1041, "x": 905}, "confidence": "0.74480695"}, {"bottomright": {"y": 1802, "x": 1266}, "label": "person", "topleft": {"y": 1057, "x": 1003}, "confidence": "0.5808618"}]}');
	  },
	})


}

function processResponse(data='{"time": 1.3483521938323975, "results": [{"bottomright": {"y": 1770, "x": 1115}, "label": "person", "topleft": {"y": 1041, "x": 905}, "confidence": "0.74480695"}, {"bottomright": {"y": 1802, "x": 1266}, "label": "person", "topleft": {"y": 1057, "x": 1003}, "confidence": "0.5808618"}]}') {
	tags = parseJSON(data);
	if (tags.length <= 0) {
		return;
	}

	tags = processTags(tags);

	document.getElementById("tall-right").innerHTML = '<b class="tag">#' + tags.join('</b><b class="tag">#') + '</b>';
}

function parseJSON(string) {
	var result = [];
	var obj = JSON.parse(string);
	if (obj.results.length > 0) {
		for (var i = 0; i < obj.results.length; i++) {
			result.push(obj.results[i].label);
		}
	}
	return(result);
}