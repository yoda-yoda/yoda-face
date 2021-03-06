"use strict";

angular

.module("yoda.home.services.socialMedia", [])

.service("yoda.home.service.getProfile", [function () {
    var getProfile = function () {
        var twitter = "https://twitter.com/dee_beat";
        var email = "mailto:dee.caranja@gmail.com";
        var github = "https://github.com/yoda-yoda";
        var linkedin = "https://linkedin.com/in/karanja";
        var repo = "https://github.com/yoda-yoda/yoda-face.git";

        var profile = [twitter, email, github, linkedin, repo];

        return profile;
    };

    return {
        "profile": getProfile
    };
}]);
