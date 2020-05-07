<template>
    <section id="lab_social_icon_footer">
        <!-- Include Font Awesome Stylesheet in Header -->
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
        <div class="container">
                <div class="text-center center-block">
                        <a target="_blank" href="https://www.facebook.com/VemSerDBC/"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/company/dbc-company/?originalSubdomain=pt"><i id="social-tw" class="fa fa-linkedin-square fa-3x social"></i></a>
                        <a target="_blank" href="https://www.instagram.com/dbc.company/"><i id="social-gp" class="fa fa-instagram fa-3x social"></i></a>
            </div>
        </div>
    </section>
  </template>
<script>
export default {
  name: "Footer"
};
</script>
<style>
#lab_social_icon_footer {
  padding: 40px 0;
  background-color: #dedede;
}

#lab_social_icon_footer a {
  color: #333;
}

#lab_social_icon_footer .social:hover {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
}

#lab_social_icon_footer .social {
  -webkit-transform: scale(0.8);
  /* Browser Variations: */
  
  -moz-transform: scale(0.8);
  -o-transform: scale(0.8);
  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
}
/*
    Multicoloured Hover Variations
*/

#lab_social_icon_footer #social-fb:hover {
  color: #3B5998;
}

#lab_social_icon_footer #social-tw:hover {
  color: #4099FF;
}

#lab_social_icon_footer #social-gp:hover {
  color: #d34836;
}

#lab_social_icon_footer #social-em:hover {
  color: #f39c12;
}
</style>
