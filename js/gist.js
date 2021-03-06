jQuery(document).ready(function($) {
	
	var repos = $('#gists');
	var username = 'afranken';

	$.getJSON('https://gist.github.com/api/v1/json/gists/' + username + '?callback=?', function(data, status) {
		$.each(data.gists, function() {
			
			var repoDescription = (this.description !== '') ? this.description : '<em>no description</em>',
			    repoComments = (this.comments.length !== 0) ? '<span title="There are comments">!</span>' : '',
			    line = $('<li> \
					<h3><a href="https://gist.github.com/' + this.repo + '">gist: ' + this.repo + '</a></h3> \
					<span title="Created at">' + this.created_at.slice(0, 10) + '</span> \
					<div>' + repoComments + '</div> \
					<p>' + repoDescription + '</p> \
				</li>').hide();

			$(repos).append(line);
			$(line).fadeIn(500);

		});
	});
});
